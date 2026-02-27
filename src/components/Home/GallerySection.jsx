import { useEffect, useMemo, useRef, useState } from "react";
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,gallery7, gallery8, gallery9 } from "../../assets/images";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function shortestDiff(i, active, len) {
  let d = i - active;
  const half = Math.floor(len / 2);
  if (d > half) d -= len;
  if (d < -half) d += len;
  return d;
}

function ChevronLeftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryCoverflow({ items, autoMs = 3600 }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(Math.min(2, Math.max(0, items.length - 1)));

  const wrapRef = useRef(null);
  const sizeRef = useRef({ w: 0 });

  // Prevent “double-step” right after a manual click
  const lastUserActionRef = useRef(0);

  useEffect(() => {
    if (!wrapRef.current) return;

    const el = wrapRef.current;
    const ro = new ResizeObserver((entries) => {
      const rect = entries?.[0]?.contentRect;
      if (!rect) return;
      sizeRef.current.w = rect.width || 0;
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (items.length <= 1) return;

    const t = window.setInterval(() => {
      const now = Date.now();
      // If user interacted recently, give a small grace window
      if (now - lastUserActionRef.current < 1800) return;
      setActive((a) => mod(a + 1, items.length));
    }, autoMs);

    return () => window.clearInterval(t);
  }, [autoMs, items.length, prefersReducedMotion]);

  const goPrev = () => {
    lastUserActionRef.current = Date.now();
    setActive((a) => mod(a - 1, items.length));
  };

  const goNext = () => {
    lastUserActionRef.current = Date.now();
    setActive((a) => mod(a + 1, items.length));
  };

  const layout = useMemo(() => {
    const w = sizeRef.current.w || 1200;

    // More spacing between subsequent inactive images
    const x1 = Math.min(360, Math.max(220, w * 0.30));
    const x2 = Math.min(610, Math.max(340, w * 0.52));

    return items.map((_, i) => {
      const d = shortestDiff(i, active, items.length);
      const ad = Math.abs(d);

      if (ad > 2) {
        return {
          i,
          hidden: true,
          z: 0,
          opacity: 0,
          x: 0,
          rot: 0,
          scale: 0.85,
          blur: 0,
          d,
          ad,
        };
      }

      const side = d < 0 ? -1 : d > 0 ? 1 : 0;

      // Inward flip: left rotates toward center, right rotates toward center
      const rot =
        ad === 0 ? 0 : ad === 1 ? (side < 0 ? 40 : -40) : side < 0 ? 56 : -56;

      const x = ad === 0 ? 0 : ad === 1 ? side * x1 : side * x2;

      // Bigger center image + more dramatic size falloff
      const scale = ad === 0 ? 1.11 : ad === 1 ? 0.90 : 0.79;

      const opacity = ad === 0 ? 1 : ad === 1 ? 0.72 : 0.58;
      const z = ad === 0 ? 90 : ad === 1 ? 26 : 8;
      const blur = ad === 0 ? 0 : ad === 1 ? 0.6 : 1.35;

      return { i, hidden: false, z, opacity, x, rot, scale, blur, d, ad };
    });
  }, [active, items]);

  const activeIndex = active;
  const total = items.length;

  // Subtle progress bar (premium cue, almost no noise)
  const trackW = 220;
  const pillW = Math.max(36, Math.floor(trackW / Math.min(total, 7)));
  const maxX = trackW - pillW;
  const pillX = total <= 1 ? 0 : Math.round((activeIndex / (total - 1)) * maxX);

  return (
    <div className="w-full">
      <div
        ref={wrapRef}
        className="relative mx-auto h-[320px] w-full max-w-[96rem] select-none sm:h-[420px] lg:h-[520px]"
        style={{ perspective: "1300px" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Superstar gallery"
      >
        {/* Chevrons: full width edges, blue icons */}
        <button
          type="button"
          data-no-drag="true"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute cursor-pointer left-0 top-1/2 z-[120] -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-[0_12px_30px_rgba(10,37,64,0.18)] ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/30 sm:left-2"
        >
          <ChevronLeftIcon className="h-7 w-7 text-[#0A2540]" />
        </button>

        <button
          type="button"
          data-no-drag="true"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={goNext}
          aria-label="Next image"
          className="absolute cursor-pointer right-0 top-1/2 z-[120] -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-[0_12px_30px_rgba(10,37,64,0.18)] ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/30 sm:right-2"
        >
          <ChevronRightIcon className="h-7 w-7 text-[#0A2540]" />
        </button>

        {layout.map((s) => {
          const item = items[s.i];
          const isActive = s.i === active;
          const origin =
            s.hidden || s.d === 0 ? "center" : s.d < 0 ? "right center" : "left center";

          return (
            <button
              key={`${item.src}-${s.i}`}
              type="button"
              data-no-drag="true"
              aria-label={item.alt}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => {
                lastUserActionRef.current = Date.now();
                setActive(s.i);
              }}
              className={[
                "absolute left-1/2 top-1/2",
                "rounded-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/30",
                "transition-[transform,opacity,filter] duration-700",
                "ease-[cubic-bezier(.2,.85,.2,1)] will-change-transform",
                s.hidden ? "pointer-events-none" : "",
              ].join(" ")}
              style={{
                transform: `translate(-50%, -50%) translateX(${s.x}px) translateZ(${s.z}px) rotateY(${s.rot}deg) scale(${s.scale})`,
                transformOrigin: origin,
                opacity: s.opacity,
                filter: `blur(${s.blur}px)`,
                zIndex: isActive ? 80 : 70 - (s.ad || 0),
              }}
            >
              <div
                className={[
                  "overflow-hidden bg-white",
                  "shadow-[0_22px_48px_rgba(10,37,64,0.22)]",
                  "ring-1 ring-black/5",
                ].join(" ")}
              >
                {/* Bigger images on mobile + large screens */}
                <div className="aspect-[16/10] w-[360px] sm:w-[520px] lg:w-[680px]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Progress bar (kept) */}
      <div className="mx-auto mt-8 w-full max-w-[82rem]">
        <div
          className="mx-auto h-[2px] rounded-full bg-[#0A2540]/15"
          style={{ width: `${trackW}px` }}
          aria-hidden="true"
        >
          <div
            className="h-[2px] rounded-full bg-[#0A2540]"
            style={{
              width: `${pillW}px`,
              transform: `translateX(${pillX}px)`,
              transition: prefersReducedMotion
                ? "none"
                : "transform 700ms cubic-bezier(.2,.85,.2,1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const items = [
    { src: gallery1, alt: "Superstar interior lounge detail" },
    { src: gallery2, alt: "Dining and entertaining space onboard" },
    { src: gallery3, alt: "Superstar superyacht exterior in the Gulf" },
    { src: gallery4, alt: "Onboard ambience and luxury finishes" },
    { src: gallery5, alt: "Deck experience with ocean views" },
    { src: gallery6, alt: "Superstar stateroom" },
    { src: gallery7, alt: "Superstar stateroom with ocean views" },
    { src: gallery8, alt: "Superstar stateroom with ocean views" },
    { src: gallery9, alt: "Superstar stateroom with ocean views" },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16">
        {/* SectionTop */}
        <div className="w-full bg-[#0A2540] px-6 py-[56px] sm:px-10 sm:py-[64px] lg:px-16 lg:py-[74px]">
          <h2 className="text-center font-heading text-3xl font-semibold italic  text-[#FFC93F] sm:text-4xl md:text-5xl lg:text-6xl ">
            WHERE GRANDEUR MEETS THE GULF
          </h2>

          <p className="mx-auto mt-6 max-w-[62rem] text-center font-body text-[15px] text-white/90 sm:text-[17px] lg:text-2xl">
            Superstar offers the scale and presence of a true superyacht, paired with a calm,
            composed onboard atmosphere. Perfect for hosting a celebration or just setting a slower
            rhythm to the day, every experience aboard is defined by space, balance, and an
            effortless sense of ease.
          </p>
        </div>

        {/* SectionBottom */}
        <div className="mt-12 sm:mt-14">
          <GalleryCoverflow items={items} />
        </div>
      </div>
    </section>
  );
}