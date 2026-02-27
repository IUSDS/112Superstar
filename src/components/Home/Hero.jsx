import { hero, mobilehero } from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="relative min-h-[110svh] w-full overflow-hidden bg-black text-white">
      {/* Background image (true <img> for LCP + fetchpriority support) */}
      <picture className="absolute inset-0 h-full w-full">
        {/* Mobile image */}
        <source media="(max-width: 640px)" srcSet={mobilehero} />
        {/* Desktop/default image */}
        <img
          src={hero}
          alt="Superstar yacht cruising on open water"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        {/* Text */}
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-8xl sm:px-10 lg:px-16 pb-24 sm:pb-12">
            {/* Center on mobile, left on desktop */}
            <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
              <p className="lux-reveal italic font-body text-2xl uppercase drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-[45px]">
                THE ULTIMATE
              </p>

              <h1 className="lux-reveal-delay italic font-heading text-6xl font-semibold uppercase leading-[0.6] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-9xl">
                SUPERSTAR
              </h1>

              <p className="lux-reveal-delay2 mt-2 italic font-body text-2xl uppercase drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-[45px]">
                ON FLORIDA&apos;S GULF COAST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA column (full-width on mobile) */}
        <div className="">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="mx-auto pt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="https://fareharbor.com/embeds/book/kokomocharters/items/?flow=1520892&language=en-us&full-items=yes&back=https://www.kokomocharters.com/&g4=yes"
                target="_blank"
                className="w-full rounded-lg bg-white px-8 py-4 text-center font-body text-sm font-medium uppercase tracking-[0.22em] text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto sm:min-w-[210px]"
              >
                BOOK NOW
              </a>

              <a
                href="#tour"
               className="w-full rounded-lg border border-white/55 bg-white/10 backdrop-blur-md px-8 py-4 text-center font-body text-sm font-medium uppercase tracking-[0.22em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto sm:min-w-[210px]"

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