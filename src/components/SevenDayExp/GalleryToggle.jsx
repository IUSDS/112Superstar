import { useEffect, useMemo, useRef, useState } from "react";
import { hover1, hover2, hover3, hover4 } from "../../assets/images";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function GalleryToggle({
  items,
}) {
  const reducedMotion = usePrefersReducedMotion();

  // Mobile = screen-width rule (ensures scroll-trigger works even in devtools)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsMobile(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const data = useMemo(
    () =>
      items?.length
        ? items
        : [
            { src: hover1, alt: "Luxury stateroom", label: "MASTER SUITE" },
            {
              src: hover2,
              alt: "Onboard gathering",
              label: "SIGNATURE MOMENTS",
            },
            { src: hover3, alt: "Galley", label: "GALLEY" },
            { src: hover4, alt: "Sun deck lounge", label: "SUN DECK LOUNGE" },
          ],
    [items],
  );

  const sectionRef = useRef(null);
  const measureRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile scroll-trigger: reveal the tile closest to viewport center
  useEffect(() => {
    if (!isMobile) return;

    const els = measureRefs.current.filter(Boolean);
    if (!els.length) return;

    let raf = 0;

    const computeActive = () => {
      raf = 0;

      const s = sectionRef.current?.getBoundingClientRect();
      if (s && (s.bottom < 0 || s.top > window.innerHeight)) return;

      const targetY = window.innerHeight * 0.56;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < els.length; i += 1) {
        const r = els[i].getBoundingClientRect();
        const cy = r.top + r.height / 2;
        const dist = Math.abs(cy - targetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }

      setActiveIndex((prev) => (prev === bestIdx ? prev : bestIdx));
    };

    const schedule = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(computeActive);
    };

    // Initial + after layout settles
    window.requestAnimationFrame(computeActive);
    const t = window.setTimeout(computeActive, 220);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.clearTimeout(t);
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [isMobile, data.length]);

  const imgMotion = reducedMotion
    ? "transition-none"
    : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const labelMotion = reducedMotion
    ? "transition-none"
    : "transition-[opacity,transform] duration-500 ease-out";

  // Desktop hover reveal (disabled on mobile)
  const desktopReveal = !isMobile
    ? "group-hover:scale-[0.90] group-hover:-translate-y-[22px] sm:group-hover:-translate-y-[26px] lg:group-hover:scale-[0.88] lg:group-hover:-translate-y-[60px]"
    : "";

  return (
    <section
      ref={sectionRef}
      className="hidden md:block w-full bg-white pb-20 sm:pb-24 lg:pb-26"
    >
      <div className="mx-auto w-full max-w-full px-6 sm:px-10 lg:px-16">
        {/* Gallery */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.slice(0, 4).map((it, idx) => {
              const isActive = isMobile && activeIndex === idx;

              // Mobile active reveal (uniform scale + translate — no squish)
              const mobileReveal = isActive
                ? "scale-[0.90] -translate-y-[22px]"
                : "";

              return (
                <button
                  key={`${it.label}-${idx}`}
                  type="button"
                  onClick={() => isMobile && setActiveIndex(idx)}
                  className="group w-full text-left focus:outline-none"
                  aria-label={it.label}
                >
                  {/* Fixed-height tile (no layout shifts) */}
                  <div
                    ref={(el) => (measureRefs.current[idx] = el)}
                    className="relative h-[380px] sm:h-[400px] lg:h-[480px]  p-[10px]"
                  >
                    {/* Inner canvas (white like Figma) */}
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Label: behind image so it NEVER sits on top of the photo */}
                      <div
                        className={[
                          "pointer-events-none absolute inset-x-0 bottom-0 z-10",
                          "px-6 pb-6 sm:px-7 sm:pb-7 lg:px-7 lg:pb-7",
                          "opacity-0 translate-y-2",
                          !isMobile
                            ? "group-hover:opacity-100 group-hover:translate-y-0"
                            : "",
                          labelMotion,
                          isActive ? "opacity-100 translate-y-0" : "",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "font-heading uppercase italic text-[#0A2540]",
                            "",
                            "text-2xl sm:text-3xl lg:text-4xl",
                            "",
                            // Center on mobile, left on desktop (cleaner like your screenshots)
                            "text-center sm:text-left",
                          ].join(" ")}
                        >
                          {it.label}
                        </div>
                      </div>

                      {/* Image layer */}
                      <div
                        className={[
                          "absolute inset-0 z-20 origin-top transform-gpu will-change-transform",
                          imgMotion,
                          desktopReveal,
                          mobileReveal,
                        ].join(" ")}
                      >
                        <img
                          src={it.src}
                          alt={it.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
