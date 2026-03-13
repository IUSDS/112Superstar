import { useState } from "react";
import { hero, mobilehero } from "../../assets/images";

export default function HeroSection() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <section className="relative min-h-[110svh] w-full overflow-hidden bg-[#0A2540] text-white">
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
          src={hero}
          alt="Superstar yacht cruising on open water"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="100vw"
          width={1920}
          height={1080}
          onLoad={() => setHeroLoaded(true)}
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-black/15" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-8xl pb-24 sm:px-10 sm:pb-12 lg:px-16">
            <div
              className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="900"
            >
              <p className="font-body text-2xl uppercase italic drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-[45px]">
                THE ULTIMATE
              </p>

              <h1 className="font-heading text-6xl font-semibold uppercase italic leading-[0.6] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-9xl">
                SUPERSTAR
              </h1>

              <p className="mt-2 font-body text-2xl uppercase italic drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:mt-3 sm:text-[45px]">
                ON FLORIDA&apos;S GULF COAST
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="mx-auto flex w-full flex-col gap-3 pt-10 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="https://fareharbor.com/embeds/book/kokomocharters/items/?flow=1520892&language=en-us&full-items=yes&back=https://www.kokomocharters.com/&g4=yes"
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-lg bg-white px-8 py-4 text-center font-body text-sm font-medium uppercase tracking-[0.22em] text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto sm:min-w-[210px]"
              >
                BOOK NOW
              </a>

              <a
                href="#tour"
                className="w-full rounded-lg border border-white/55 bg-white/10 px-8 py-4 text-center font-body text-sm font-medium uppercase tracking-[0.22em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto sm:min-w-[210px]"
              >
                VIRTUAL TOUR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}