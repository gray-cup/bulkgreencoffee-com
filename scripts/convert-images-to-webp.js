// Recursively converts .png/.jpg/.jpeg images under a directory to .webp,
// resizing and stepping down quality as needed so every output stays under
// a target file size (without shrinking further than necessary).
//
// Usage:
//   bun scripts/convert-images-to-webp.js [dir]                     (defaults to public/products)
//   bun scripts/convert-images-to-webp.js [dir] --delete-originals
//   bun scripts/convert-images-to-webp.js [dir] --max-kb=150 --max-width=1600
//   bun scripts/convert-images-to-webp.js [dir] --force              (re-encode even if already under budget)

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

// Quality is tried at each width, largest width first; if nothing at a given
// width fits the budget, the image is shrunk and the quality ladder retried.
const QUALITY_STEPS = [82, 75, 68, 60, 52, 45, 38];
const WIDTH_STEPS = [2000, 1600, 1200, 900, 700];

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const match = args.find((a) => a.startsWith(`--${name}=`));
  return match ? Number(match.split("=")[1]) : fallback;
};

const deleteOriginals = args.includes("--delete-originals");
const force = args.includes("--force");
const maxBytes = flag("max-kb", 200) * 1024;
const maxWidthCap = flag("max-width", WIDTH_STEPS[0]);
const widthSteps = WIDTH_STEPS.filter((w) => w <= maxWidthCap);
if (widthSteps.length === 0 || widthSteps[0] !== maxWidthCap) widthSteps.unshift(maxWidthCap);

const targetDir = path.resolve(
  process.cwd(),
  args.find((a) => !a.startsWith("--")) || "public/products"
);

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

// Encodes at decreasing width/quality until the result fits maxBytes.
// Keeps the smallest-loss (highest quality, largest width) buffer that fits,
// and falls back to the overall smallest buffer produced if nothing fits.
async function encodeUnderBudget(file) {
  const original = sharp(file);
  const metadata = await original.metadata();
  let best = null;

  for (const width of widthSteps) {
    const resizeWidth = metadata.width && metadata.width < width ? metadata.width : width;
    for (const quality of QUALITY_STEPS) {
      const buffer = await sharp(file)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toBuffer();

      if (!best || buffer.length < best.buffer.length) {
        best = { buffer, width: resizeWidth, quality };
      }
      if (buffer.length <= maxBytes) {
        return { buffer, width: resizeWidth, quality, fitBudget: true };
      }
    }
  }
  // Nothing hit the budget — return the smallest variant we produced.
  return { ...best, fitBudget: false };
}

async function convert(file) {
  const webpPath = file.slice(0, -path.extname(file).length) + ".webp";

  if (!force && fs.existsSync(webpPath)) {
    const [srcStat, webpStat] = [fs.statSync(file), fs.statSync(webpPath)];
    if (webpStat.mtimeMs >= srcStat.mtimeMs && webpStat.size <= maxBytes) {
      return { file, skipped: true };
    }
  }

  const before = fs.statSync(file).size;
  const { buffer, width, quality, fitBudget } = await encodeUnderBudget(file);
  fs.writeFileSync(webpPath, buffer);

  if (deleteOriginals) fs.unlinkSync(file);

  return { file, webpPath, before, after: buffer.length, width, quality, fitBudget };
}

async function main() {
  if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }

  const files = walk(targetDir);
  if (files.length === 0) {
    console.log(`No .png/.jpg/.jpeg files found under ${targetDir}`);
    return;
  }

  let converted = 0;
  let skipped = 0;
  let overBudget = 0;
  let beforeTotal = 0;
  let afterTotal = 0;

  for (const file of files) {
    const result = await convert(file);
    if (result.skipped) {
      skipped++;
      continue;
    }
    converted++;
    beforeTotal += result.before;
    afterTotal += result.after;
    if (!result.fitBudget) overBudget++;
    const pct = (100 - (result.after / result.before) * 100).toFixed(0);
    const warn = result.fitBudget ? "" : "  ⚠ still over budget at smallest tried size";
    console.log(
      `${path.relative(process.cwd(), file)} → ${path.relative(process.cwd(), result.webpPath)} ` +
        `(${(result.before / 1024).toFixed(0)} KB → ${(result.after / 1024).toFixed(0)} KB, -${pct}%, ` +
        `${result.width}px @ q${result.quality})${warn}`
    );
  }

  console.log(
    `\n${converted} converted, ${skipped} already under ${(maxBytes / 1024).toFixed(0)} KB skipped` +
      (overBudget > 0 ? `, ${overBudget} could not be brought under budget` : "") +
      (converted > 0
        ? `. Total: ${(beforeTotal / 1024 / 1024).toFixed(2)} MB → ${(afterTotal / 1024 / 1024).toFixed(2)} MB.`
        : ".")
  );
  if (!deleteOriginals && converted > 0) {
    console.log("Originals kept. Re-run with --delete-originals to remove them once references are updated.");
  }
}

main();
