import { useLayoutEffect, useRef, useState } from "react";
import { exterior3, mobilehero } from "../../assets/images";

export default function GalleryHero() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Measure the "GALLERY" heading so the divider + description can be locked
  // to exactly its width (never wider than the heading) across breakpoints.
  const headingRef = useRef(null);
  const [headingWidth, setHeadingWidth] = useState(null);

  useLayoutEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const measure = () => setHeadingWidth(el.offsetWidth);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A2540] text-white">
      {/* First-paint fallback layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          heroLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,201,63,0.18),transparent_35%),linear-gradient(180deg,#10253f_0%,#0A2540_45%,#071a2c_100%)]" />
      </div>

      {/* Actual hero image */}
      <picture className="absolute inset-0 h-full w-full">
        <source media="(max-width: 640px)" srcSet={mobilehero} />
        <img
          src={exterior3}
          alt="Aerial view of the 112' Superstar superyacht on the water"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="100vw"
          width={1920}
          height={1080}
          onLoad={() => setHeroLoaded(true)}
          className="h-full w-full object-cover scale-x-[-1]"
        />
      </picture>

      {/* Legibility tint */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      {/* Heading block — bottom-left on mobile, centered on desktop */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end sm:justify-center">
        <div className="mx-auto w-full max-w-[96rem] px-6 pb-10 sm:px-10 sm:pb-0 lg:px-16">
          <div
            className="w-fit"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <h1
              ref={headingRef}
              className="font-heading w-fit text-6xl font-bold uppercase italic leading-[0.9] drop-shadow-[0_10px_24px_rgba(0,0,0,0.4)] sm:text-8xl lg:text-9xl"
            >
              GALLERY
            </h1>

            {/* Divider + description, locked to the heading width */}
            <div style={headingWidth ? { width: `${headingWidth}px` } : undefined}>
              <div
                className="mt-4 mb-4 h-px w-full bg-white/50 sm:mt-5 sm:mb-5"
                aria-hidden="true"
              />

              <p className="font-body text-[15px] leading-relaxed text-white/85 drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)] sm:text-lg lg:text-xl">
                Step aboard 112&apos; Superstar and explore the spaces, details,
                and on-water moments that define Florida&apos;s Gulf Coast
                superyacht living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
