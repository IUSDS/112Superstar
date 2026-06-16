// One-off image pipeline for the gallery.
//
// Takes the high-resolution source photos in /superstar (4000–7800px wide,
// up to 6.4 MB each) and emits web-optimised WebP variants into
// src/assets/images:
//   <name>.webp     → 1200px wide, q78  (main / desktop + retina grid)
//   <name>-sm.webp  → 640px wide,  q70  (mobile + srcset small)
//
// Run with: node scripts/optimize-gallery.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "..", "superstar");
const OUT = path.join(__dirname, "..", "src", "assets", "images");

// source file  ->  target base name  (category is tracked in galleryItems.js)
const MAP = [
  ["gallery1.webp", "gallery1"],
  ["gallery2.webp", "gallery2"],
  ["gallery3.webp", "gallery3"],
  ["gallery4.webp", "gallery4"],
  ["gallery5.webp", "gallery5"],
  ["gallery6.webp", "gallery6"],
  ["gallery7.webp", "gallery7"],
  ["gallery8.webp", "gallery8"],
  ["gallery9.webp", "gallery9"],
  ["Copy of official superstar video photos 3926-9.webp", "gallery10"],
  ["Copy of official superstar video photos 3926-14.webp", "gallery11"],
  ["Copy of official superstar video photos 3926-15.webp", "gallery12"],
  ["Copy of official superstar video photos 3926-16.webp", "gallery13"],
  ["Copy of official superstar video photos 3926-17.webp", "gallery14"],
  ["Copy of official superstar video photos 3926-21.webp", "gallery15"],
  ["goxsqgoiydyorlcnbqqv.webp", "gallery16"],
  ["jswkvkrrdplcoathasp9.webp", "gallery17"],
  ["lap7tfrwc2yrxkcwhri3.webp", "gallery18"],
];

const variants = [
  { suffix: "", width: 1200, quality: 78 },
  { suffix: "-sm", width: 640, quality: 70 },
];

const results = [];

for (const [srcFile, name] of MAP) {
  const input = path.join(SRC, srcFile);
  let dims = null;
  for (const v of variants) {
    const outPath = path.join(OUT, `${name}${v.suffix}.webp`);
    const info = await sharp(input)
      .resize({ width: v.width, withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 6 })
      .toFile(outPath);
    if (v.suffix === "") dims = { w: info.width, h: info.height, size: info.size };
  }
  results.push({ name, ...dims });
  console.log(
    `${name.padEnd(10)} ${String(dims.w).padStart(4)}x${dims.h}  ${(dims.size / 1024).toFixed(1)} KB`
  );
}

// Print aspectRatio data to paste into galleryItems.js
console.log("\n--- aspect ratios ---");
console.log(
  results
    .map((r) => `  ${r.name}: ${(r.w / r.h).toFixed(4)},`)
    .join("\n")
);
