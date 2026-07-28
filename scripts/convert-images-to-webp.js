// Recursively converts .png/.jpg/.jpeg images under a directory to .webp.
// Usage:
//   bun scripts/convert-images-to-webp.js [dir]        (defaults to public/products)
//   bun scripts/convert-images-to-webp.js [dir] --delete-originals

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const QUALITY = 82;

const args = process.argv.slice(2);
const deleteOriginals = args.includes("--delete-originals");
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

async function convert(file) {
  const webpPath = file.slice(0, -path.extname(file).length) + ".webp";

  if (fs.existsSync(webpPath)) {
    const [srcStat, webpStat] = [fs.statSync(file), fs.statSync(webpPath)];
    if (webpStat.mtimeMs >= srcStat.mtimeMs) {
      return { file, skipped: true };
    }
  }

  const before = fs.statSync(file).size;
  await sharp(file).webp({ quality: QUALITY }).toFile(webpPath);
  const after = fs.statSync(webpPath).size;

  if (deleteOriginals) fs.unlinkSync(file);

  return { file, webpPath, before, after };
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
    const pct = (100 - (result.after / result.before) * 100).toFixed(0);
    console.log(
      `${path.relative(process.cwd(), file)} → ${path.relative(process.cwd(), result.webpPath)} ` +
        `(${(result.before / 1024).toFixed(0)} KB → ${(result.after / 1024).toFixed(0)} KB, -${pct}%)`
    );
  }

  console.log(
    `\n${converted} converted, ${skipped} up-to-date skipped. ` +
      (converted > 0
        ? `Total: ${(beforeTotal / 1024 / 1024).toFixed(2)} MB → ${(afterTotal / 1024 / 1024).toFixed(2)} MB.`
        : "")
  );
  if (!deleteOriginals && converted > 0) {
    console.log("Originals kept. Re-run with --delete-originals to remove them once references are updated.");
  }
}

main();
