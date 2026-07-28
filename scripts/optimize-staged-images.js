// Invoked from .husky/commit-msg, only when the commit message contains "image"
// (case-insensitive). For every staged image,
//   - .png/.jpg/.jpeg → also generates/refreshes its sibling .webp under the
//     size budget (source file is left untouched, matching the manual workflow)
//   - .webp → recompressed in place if it's over budget
// Any file this touches is re-staged with `git add` so the commit includes
// the optimized result. Uses the same width/quality ladder as
// scripts/convert-images-to-webp.js.

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MAX_BYTES = 200 * 1024;
const QUALITY_STEPS = [82, 75, 68, 60, 52, 45, 38];
const WIDTH_STEPS = [2000, 1600, 1200, 900, 700];
const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

function stagedFiles() {
  const out = execSync("git diff --cached --name-only --diff-filter=ACM", {
    encoding: "utf8",
  });
  return out.split("\n").filter(Boolean);
}

async function encodeUnderBudget(input) {
  const meta = await sharp(input).metadata();
  let best = null;

  for (const width of WIDTH_STEPS) {
    const resizeWidth = meta.width && meta.width < width ? meta.width : width;
    for (const quality of QUALITY_STEPS) {
      const buffer = await sharp(input)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toBuffer();

      if (!best || buffer.length < best.buffer.length) best = { buffer, width: resizeWidth, quality };
      if (buffer.length <= MAX_BYTES) return { buffer, width: resizeWidth, quality, fitBudget: true };
    }
  }
  return { ...best, fitBudget: false };
}

async function main() {
  const files = stagedFiles();
  const touched = [];

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const ext = path.extname(file).toLowerCase();

    if (RASTER_EXTENSIONS.has(ext)) {
      const webpPath = file.slice(0, -ext.length) + ".webp";
      if (fs.existsSync(webpPath) && fs.statSync(webpPath).size <= MAX_BYTES) continue;
      const { buffer, width, quality, fitBudget } = await encodeUnderBudget(file);
      fs.writeFileSync(webpPath, buffer);
      touched.push(webpPath);
      console.log(
        `[optimize-staged-images] ${file} → ${webpPath} (${(buffer.length / 1024).toFixed(0)} KB, ${width}px @ q${quality})` +
          (fitBudget ? "" : "  ⚠ still over 200 KB at smallest tried size")
      );
    } else if (ext === ".webp") {
      const size = fs.statSync(file).size;
      if (size <= MAX_BYTES) continue;
      const { buffer, width, quality, fitBudget } = await encodeUnderBudget(file);
      fs.writeFileSync(file, buffer);
      touched.push(file);
      console.log(
        `[optimize-staged-images] ${file} recompressed: ${(size / 1024).toFixed(0)} KB → ${(buffer.length / 1024).toFixed(0)} KB (${width}px @ q${quality})` +
          (fitBudget ? "" : "  ⚠ still over 200 KB at smallest tried size")
      );
    }
  }

  if (touched.length > 0) {
    execSync(`git add ${touched.map((f) => `"${f}"`).join(" ")}`);
  }
}

main().catch((err) => {
  console.error("[optimize-staged-images] failed:", err);
  process.exit(1);
});
