import { useEffect, useState } from "react";
import {
  hero3,
  fulldayMobileHero,
  EighthourHero,
} from "../../assets/images";

export default function FullDayExperienceHero() {
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
      className="relative w-full overflow-hidden bg-[#0A2540] text-white py-0 sm:py-12"
      style={{ "--fd-mob-bg-y": "0" }}
    >
      {/* Premium first-paint fallback, prevents harsh black flash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,201,63,0.14),transparent_34%),linear-gradient(180deg,#10253f_0%,#0A2540_48%,#071a2c_100%)]"
      />

      {/* Background image */}
      <picture className="absolute inset-0 h-full w-full">
        <img
          src={isMobile ? fulldayMobileHero : hero3}
          alt="Full day experience background"
          fetchPriority={isMobile ? "high" : "auto"}
          decoding="async"
          loading="eager"
          width={1920}
          height={1080}
          sizes="100vw"
          className="fd-hero-bg h-full w-full object-cover"
        />
      </picture>

      {/* Legibility tint */}
      <div className="absolute inset-0 bg-black/12" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[110svh] w-full flex-col px-6 sm:min-h-[100svh] sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="pt-14 sm:pt-16 lg:pt-20">
          {/* Mobile heading */}
          <div className="mx-auto mt-8 max-w-2xl text-center sm:hidden">
            <p className="font-body text-2xl uppercase drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              BRINGING THE CARIBBEAN
            </p>

            <h1 className="italic font-heading text-7xl font-semibold uppercase drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
              TO THE
            </h1>

            <p className="mt-3 font-body text-2xl uppercase drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              SARASOTA BAY
            </p>
          </div>

          {/* Desktop heading */}
          <h1 className="hidden text-center font-heading text-[22px] font-semibold italic uppercase text-white/95 drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)] sm:block sm:text-[28px] lg:text-6xl">
            BRINGING THE CARIBBEAN TO THE SARASOTA BAY
          </h1>
        </div>

        {/* Highlight image: desktop only */}
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full">
            {!isMobile ? (
              <div className="fd-hero-wide mx-auto w-full">
                <img
                  src={EighthourHero}
                  alt="Full day experience highlight"
                  fetchPriority="high"
                  decoding="async"
                  loading="eager"
                  width={1800}
                  height={560}
                  sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 80px), 1600px"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div aria-hidden="true" className="h-[1px] w-full" />
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="pb-22 sm:pb-14 lg:pb-16">
          <div className="flex justify-center">
            <a
              href="https://fareharbor.com/embeds/book/kokomocharters/items/683982/calendar/2026/02/?full-items=yes&back=https://www.kokomocharters.com/&flow=1520892&g4=yes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center bg-white px-10 py-4 text-center font-body text-sm font-semibold uppercase tracking-[0.22em] text-[#0A2540] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .fd-hero-bg {
          object-position: center;
        }

        @media (max-width: 640px) {
          .fd-hero-bg {
            object-position: center var(--fd-mob-bg-y, 62%);
          }
        }

        .fd-hero-wide {
          height: clamp(260px, 36vw, 430px);
          max-width: 1600px;
          overflow: hidden;
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
}