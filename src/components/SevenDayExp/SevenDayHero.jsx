import { hero2 } from "../../assets/images";

export default function SevenDayHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Hero frame height */}
      <div className="relative h-[640px] sm:h-[640px] lg:h-[750px]">
        {/* Background image (same settings as Home hero) */}
        <img
          src={hero2}
          alt="Guests enjoying a week of unparalleled luxury"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[55%_40%]"
        />

        {/* Bottom content row */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="px-6 pb-6 sm:px-10 sm:pb-10 lg:px-16 lg:pb-12">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              {/* Heading */}
              <h1 className="font-heading italic uppercase drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
                <span className="block font-semibold text-3xl sm:text-5xl lg:text-7xl">
                  A WEEK OF
                </span>
                <span className="block font-semibold text-3xl sm:text-5xl lg:text-7xl">
                  UNPARALLELED
                </span>
                <span className="block font-semibold text-3xl sm:text-5xl lg:text-7xl">
                  LUXURY
                </span>
              </h1>

              {/* CTA: centered under heading on mobile, bottom-right on sm+ */}
              <a
                href="tel:+19413045789"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-body text-lg font-medium uppercase text-[#0A2540] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:mt-0"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}