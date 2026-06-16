// src/components/Gallery/galleryItems.js
//
// Gallery data + filter config.
//
// Images are optimised WebP variants produced by scripts/optimize-gallery.mjs:
//   galleryN.webp     → 1200px wide  (main)
//   galleryN-sm.webp  →  640px wide  (srcset small)
// Categories were assigned by visually analysing each photo (step 2).
//
// `ratio` is the intrinsic width/height, baked in so the justified grid can
// size each tile correctly on first paint (no onLoad reflow / layout shift).

// Eagerly resolve every gallery asset to its built URL.
const FILES = import.meta.glob("../../assets/images/gallery*.webp", {
  eager: true,
  import: "default",
});

const url = (name) => FILES[`../../assets/images/${name}.webp`];

// Filter pills shown above the grid. `id` is matched against item.category.
export const GALLERY_FILTERS = [
  { id: "all", label: "ALL" },
  { id: "exterior", label: "EXTERIOR" },
  { id: "interiors", label: "INTERIORS" },
  { id: "dining", label: "DINING" },
  { id: "watertoys", label: "WATER TOYS" },
];

// name, category, alt, ratio — ordered to keep every load-more batch varied.
const DEFS = [
  { name: "gallery1", category: "exterior", ratio: 1.3333, alt: "112' Superstar at anchor with jet skis alongside a floating dock" },
  { name: "gallery2", category: "dining", ratio: 1.4963, alt: "Formal dining salon set for a meal onboard Superstar" },
  { name: "gallery4", category: "interiors", ratio: 1.4963, alt: "Main salon lounge with entertainment and dining areas" },
  { name: "gallery5", category: "watertoys", ratio: 1.4963, alt: "Guests relaxing on the floating Aquabana lounge beside jet skis" },
  { name: "gallery3", category: "exterior", ratio: 1.4963, alt: "Guests lounging on the foredeck sunpads" },
  { name: "gallery11", category: "dining", ratio: 1.4981, alt: "Guests enjoying cocktails on deck" },
  { name: "gallery19", category: "interiors", ratio: 0.7027, alt: "Master stateroom with a king bed and adjoining lounge" },
  { name: "gallery10", category: "watertoys", ratio: 1.4981, alt: "Friends gathered on the floating lounge with jet skis behind" },
  { name: "gallery6", category: "exterior", ratio: 1.4981, alt: "Aft deck lounge seating with open-water views" },
  { name: "gallery9", category: "dining", ratio: 1.4963, alt: "Dining area dressed with orchids overlooking the marina" },
  { name: "gallery7", category: "interiors", ratio: 1.4963, alt: "Bright main salon with sofas and ocean-view windows" },
  { name: "gallery26", category: "watertoys", ratio: 1.1881, alt: "Couple riding a jet ski across the bay" },

  { name: "gallery21", category: "exterior", ratio: 1.6484, alt: "Guests socializing on the aft deck at sunset" },
  { name: "gallery12", category: "dining", ratio: 1.4963, alt: "Couple toasting piña coladas in the afternoon sun" },
  { name: "gallery20", category: "interiors", ratio: 0.7027, alt: "Yacht galley with a stone-topped island and warm wood cabinetry" },
  { name: "gallery15", category: "watertoys", ratio: 1.4981, alt: "Group relaxing on the Aquabana floating island" },
  { name: "gallery8", category: "exterior", ratio: 1.4963, alt: "Crew serving champagne on the Superstar swim platform" },
  { name: "gallery24", category: "dining", ratio: 1.2959, alt: "Two guests toasting drinks on deck at golden hour" },
  { name: "gallery27", category: "watertoys", ratio: 1.1327, alt: "Exploring underwater with a Seabob sea scooter" },
  { name: "gallery16", category: "exterior", ratio: 1.4963, alt: "Guests lounging together on the aft deck" },
  { name: "gallery13", category: "dining", ratio: 1.4963, alt: "Guests with tropical drinks out on the water" },
  { name: "gallery28", category: "watertoys", ratio: 0.9547, alt: "Jet ski ride alongside dolphins in clear water" },
  { name: "gallery22", category: "exterior", ratio: 1.2072, alt: "Group gathered on the aft deck at golden hour" },
  { name: "gallery25", category: "dining", ratio: 1.3029, alt: "Friends sharing a charcuterie spread on deck" },
  { name: "gallery17", category: "watertoys", ratio: 1.4963, alt: "Celebrating on the floating lounge beside the jet skis" },
  { name: "gallery18", category: "exterior", ratio: 1.4963, alt: "Friends in conversation in the aft deck lounge" },
  { name: "gallery23", category: "exterior", ratio: 1.5000, alt: "Sporting clays shooting from the upper deck" },
  { name: "gallery14", category: "dining", ratio: 1.4963, alt: "Friends laughing over cocktails onboard" },
];

export const GALLERY_ITEMS = DEFS.map((d) => ({
  src: url(d.name),
  srcSm: url(`${d.name}-sm`),
  alt: d.alt,
  category: d.category,
  ratio: d.ratio,
}));
