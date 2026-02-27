import { useEffect, useState } from "react";
import {
  hero3,
  fulldayMobileHero,
  EighthourHero,
} from "../../assets/images";

export default function FullDayExperienceHero() {
  // Render-correct on first paint (prevents mobile collage from ever mounting/loading)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e) => setIsMobile(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white py-0 sm:py-12"
      style={{ "--fd-mob-bg-y": "0" }}
    >
      {/* Background image (same approach as Home Hero) */}
      <picture className="absolute inset-0 h-full w-full">
        {/* Mobile background */}
        <source media="(max-width: 640px)" srcSet={fulldayMobileHero} />
        {/* Desktop background (unchanged) */}
        <img
          src={hero3}
          alt="Full day experience background"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="fd-hero-bg h-full w-full object-cover"
        />
      </picture>

      <div className="relative z-10 mx-auto flex min-h-[110svh] w-full flex-col px-6 sm:min-h-[100svh] sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="pt-14 sm:pt-16 lg:pt-20">
          {/* Mobile heading (matches Home Hero typography style) */}
          <div className="mx-auto max-w-2xl text-center sm:hidden">
            <p className="lux-reveal font-body text-2xl uppercase mt-8 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              ALL-IN ULTIMATE
            </p>

            <h1 className="lux-reveal-delay italic font-heading text-7xl font-semibold uppercase  drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
              FULL-DAY
            </h1>

            <p className="lux-reveal-delay2 mt-3 font-body text-2xl uppercase drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              LUXURY PACKAGE
            </p>
          </div>

          {/* Desktop heading (UNCHANGED) */}
          <h1 className="hidden text-center font-heading text-[22px] font-semibold italic uppercase text-white/95 sm:block sm:text-[28px] lg:text-6xl">
            ALL-IN ULTIMATE FULL-DAY LUXURY PACKAGE
          </h1>
        </div>

        {/* Gallery (desktop only; mobile hides + does not mount) */}
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full">
            {!isMobile ? (
              <div className="fd-hero-wide mx-auto w-full">
                {/* Swap EightHourHero3 with your single long-width hero image export */}
                <img
                  src={EighthourHero}
                  alt="Full day experience highlight"
                  decoding="async"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div aria-hidden="true" className="h-[1px] w-full" />
            )}
          </div>
        </div>

        {/* CTA (unchanged) */}
        <div className="pb-22 sm:pb-14 lg:pb-16">
          <div className="flex justify-center">
            <a
              href="https://fareharbor.com/embeds/book/kokomocharters/items/683982/calendar/2026/02/?full-items=yes&back=https://www.kokomocharters.com/&flow=1520892&g4=yes"
              target="_blank"
              className="inline-flex min-w-[220px] items-center justify-center bg-white px-10 py-4 text-center font-body text-sm font-semibold uppercase tracking-[0.22em] text-[#0A2540] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      {/* Your existing collage CSS (UNCHANGED) */}
      <style>{`

      .fd-hero-bg { object-position: center; }

  @media (max-width: 640px){
    .fd-hero-bg{
      object-position: center var(--fd-mob-bg-y, 62%);
    }
  }

       .fd-hero-wide{
          height: clamp(260px, 36vw, 430px);
          max-width: 1600px;
          overflow: hidden;
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
}
