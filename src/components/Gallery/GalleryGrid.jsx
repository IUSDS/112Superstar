import { useMemo, useState } from "react";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "./galleryItems";

// Roughly four rows on desktop before the first "Load more".
const INITIAL_COUNT = 12;
const STEP = 8;
// Sizes hint: tiles render up to ~half-width on tablet, ~third on desktop.
const SIZES = "(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 32vw";

/**
 * Justified gallery: each row keeps a fixed height while image widths flex to
 * their intrinsic aspect ratio (Flickr-style). Ratios are baked into the data
 * so tiles are correctly sized on first paint — no onLoad reflow / layout shift.
 */
function JustifiedGallery({ items }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {items.map((it, i) => (
        <figure
          key={`${it.src}-${i}`}
          className="group relative m-0 h-[200px] overflow-hidden rounded-[6px] bg-[#0A2540]/5 sm:h-[240px] lg:h-[280px]"
          style={{ flexGrow: it.ratio, flexBasis: `${it.ratio * 240}px` }}
        >
          <img
            src={it.src}
            srcSet={`${it.srcSm} 640w, ${it.src} 1200w`}
            sizes={SIZES}
            alt={it.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[#0A2540]/0 transition-colors duration-300 group-hover:bg-[#0A2540]/10"
            aria-hidden="true"
          />
        </figure>
      ))}
      {/* Spacer keeps a trailing partial row from stretching to full width */}
      <span className="grow-[10] basis-[600px]" aria-hidden="true" />
    </div>
  );
}

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((it) => it.category === activeFilter),
    [activeFilter]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const selectFilter = (id) => {
    setActiveFilter(id);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-6 sm:px-10 lg:px-16">
        {/* Filter pills */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="flex w-full max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#0A2540]/15 bg-white p-1.5 shadow-[0_10px_30px_rgba(10,37,64,0.08)] sm:w-auto sm:flex-nowrap sm:gap-1">
            {GALLERY_FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => selectFilter(f.id)}
                  aria-pressed={isActive}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-5 py-2.5 font-body text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/30 sm:px-7 sm:text-[13px]",
                    isActive
                      ? "bg-[#0A2540] text-white shadow-[0_8px_20px_rgba(10,37,64,0.25)]"
                      : "bg-transparent text-[#0A2540]/80 hover:bg-[#0A2540]/5",
                  ].join(" ")}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Justified grid */}
        <div className="mt-10 sm:mt-12" data-aos="fade-up" data-aos-delay="100">
          <JustifiedGallery items={visible} />
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-12 flex justify-center sm:mt-14">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + STEP)}
              className="inline-flex min-w-[200px] items-center justify-center rounded-[2px] bg-[#0A2540] px-12 py-4 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_14px_34px_rgba(10,37,64,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/40"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
