import { useState } from "react";
import {
  hero3,
  fulldayMobileHero,
  EighthourHero,
} from "../../assets/images";

const DESKTOP_ONLY_SPACER =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

export default function FullDayExperienceHero() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A2540] py-0 text-white sm:py-12"
      style={{ "--fd-mob-bg-y": "0" }}
    >
      {/* Premium first-paint fallback */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          heroLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,201,63,0.14),transparent_34%),linear-gradient(180deg,#10253f_0%,#0A2540_48%,#071a2c_100%)]" />
      </div>

      {/* Actual hero background */}
      <picture className="absolute inset-0 h-full w-full">
        <source media="(max-width: 640px)" srcSet={fulldayMobileHero} />
        <img
          src={hero3}
          alt="Full day experience background"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="100vw"
          width={1920}
          height={1080}
          onLoad={() => setHeroLoaded(true)}
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

            <h1 className="font-heading text-7xl font-semibold uppercase italic drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
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

        {/* Highlight image - visible on desktop, not competing for highest priority */}
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full">
            <div className="fd-hero-wide mx-auto hidden w-full overflow-hidden rounded-2xl sm:block">
              <picture className="block h-full w-full">
                <source media="(min-width: 641px)" srcSet={EighthourHero} />
                <img
                  src={DESKTOP_ONLY_SPACER}
                  alt="Full day experience highlight"
                  loading="eager"
                  decoding="async"
                  width={1800}
                  height={560}
                  sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 80px), 1600px"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
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
        }
      `}</style>
    </section>
  );
}