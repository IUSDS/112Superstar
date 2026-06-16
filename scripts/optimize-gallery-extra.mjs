// Second gallery image pass: pull additional photos that already live in
// src/assets/images into the gallery as optimised gallery19+ variants.
//
// Many of these were authored as rounded "cards" with transparent corners.
// For those we center-crop a few percent (removing the corner radius) and
// flatten onto white, so they render as clean full-bleed gallery tiles.
// Images with large decorative triangle corners (await*, culinary,
// ownthemoment, highlight*) are intentionally excluded.
//
// Run with: node scripts/optimize-gallery-extra.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "..", "src", "assets", "images");

// [source, target, cropFraction]  crop=0 → already opaque/full-bleed.
const MAP = [
  ["hovergallery1", "gallery19", 0.06], // interiors – master suite
  ["hovergallery3", "gallery20", 0.06], // interiors – galley
  ["imgTwo", "gallery21", 0.05], // exterior – guests at sunset
  ["imgThree", "gallery22", 0.05], // exterior – group on aft deck
  ["sportingClays", "gallery23", 0], // exterior – sporting clays
  ["fullday1", "gallery24", 0.05], // dining – toasting on deck
  ["imgOne", "gallery25", 0.05], // dining – charcuterie spread
  ["waterToy2", "gallery26", 0], // watertoys – jet ski ride
  ["waterToy3", "gallery27", 0], // watertoys – Seabob dive
  ["inclusiveEscapeJetSki", "gallery28", 0.06], // watertoys – jet ski + dolphins
];

const variants = [
  { suffix: "", width: 1200, quality: 78 },
  { suffix: "-sm", width: 640, quality: 70 },
];

const results = [];

for (const [srcName, name, crop] of MAP) {
  const input = path.join(DIR, `${srcName}.webp`);
  const meta = await sharp(input).metadata();

  let pipelineBase = sharp(input);
  if (crop > 0) {
    const left = Math.round(meta.width * crop);
    const top = Math.round(meta.height * crop);
    pipelineBase = pipelineBase.extract({
      left,
      top,
      width: meta.width - left * 2,
      height: meta.height - top * 2,
    });
  }
  // Materialise the (optionally cropped) flattened image once.
  const flat = await pipelineBase.flatten({ background: "#ffffff" }).toBuffer();

  let dims = null;
  for (const v of variants) {
    const info = await sharp(flat)
      .resize({ width: v.width, withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 6 })
      .toFile(path.join(DIR, `${name}${v.suffix}.webp`));
    if (v.suffix === "") dims = { w: info.width, h: info.height, size: info.size };
  }
  results.push({ name, ...dims });
  console.log(
    `${name.padEnd(10)} ${String(dims.w).padStart(4)}x${dims.h}  ${(dims.size / 1024).toFixed(1)} KB`
  );
}

console.log("\n--- aspect ratios ---");
console.log(results.map((r) => `  ${r.name}: ${(r.w / r.h).toFixed(4)},`).join("\n"));
