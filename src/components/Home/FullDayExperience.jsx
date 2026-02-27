import { fullday1, fullday2, fullday3 } from "../../assets/images";

export default function FullDayExperience() {
  const arrowStyles = `
    @keyframes luxArrowSlide {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(8px); }
    }
    .lux-arrow {
      animation: luxArrowSlide 1.25s ease-in-out infinite;
      will-change: transform;
    }
    @media (prefers-reduced-motion: reduce) {
      .lux-arrow { animation: none; }
    }
  `;

  return (
    <section className="w-full bg-white pt-0 sm:pt-10">
      {/* Banner (UNCHANGED) */}
      <div className="w-full bg-[#0A2540]">
        <div className="mx-auto max-w-full px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-full py-14 sm:py-14">
            <p className="font-heading text-center text-3xl font-semibold italic text-[#FFC93F] sm:text-4xl md:text-5xl lg:text-6xl">
              ALL-IN ULTIMATE FULL-DAY LUXURY PACKAGE
            </p>
            <p className="mt-5 font-body text-center text-md font-normal text-white/90 sm:text-2xl lg:text-2xl">
              Bringing The Caribbean to the Sarasota Bay
            </p>
          </div>
        </div>
      </div>

      {/* Content (UNCHANGED design; only mobile order + visibility adjusted) */}
      <div className="mx-auto max-w-7xl px-6 pt-12 sm:px-10 sm:pt-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-2">
            {/* IMAGES (now first on mobile) */}
            <div className="order-1">
              {/* Mobile: ONLY image 1 */}
              <div className="lg:hidden">
                <div className="group overflow-hidden rounded-lg">
                  <div className="h-[420px] sm:h-[520px] md:h-[560px]">
                    <img
                      src={fullday1}
                      alt="Guests enjoying drinks on deck"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:transform-none"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: original collage (UNCHANGED) */}
              <div className="hidden lg:grid lg:grid-cols-12 lg:gap-3">
                {/* 40% column (stacked 60/40 height) */}
                <div className="col-span-5 flex h-[560px] flex-col gap-3">
                  <div className="group flex-[3] overflow-hidden rounded-lg">
                    <img
                      src={fullday1}
                      alt="Guests enjoying drinks on deck"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:transform-none"
                    />
                  </div>

                  <div className="group flex-[2] overflow-hidden rounded-lg">
                    <img
                      src={fullday2}
                      alt="Group celebrating onboard at sunset"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:transform-none"
                    />
                  </div>
                </div>

                {/* 60% column (hero image) */}
                <div className="group col-span-7 h-[560px] overflow-hidden rounded-lg">
                  <img
                    src={fullday3}
                    alt="Superyacht cruising in open water"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:transform-none"
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM CONTENT (now after images on mobile; desktop unchanged visually) */}
            <div className="order-2 grid grid-cols-12 gap-2">
              {/* 60% text (UNCHANGED) */}
              <div className="col-span-12 rounded-lg bg-[#0A2540] px-6 py-7 sm:px-10 sm:py-12 lg:col-span-7 lg:px-14">
                <p className="font-body text-center text-lg leading-[1.65] text-white/90 sm:text-xl lg:text-xl">
                  Step aboard Superstar for a day of pure indulgence on the Gulf Coast&apos;s shimmering
                  waters. Experience the Gulf Coast&apos;s shimmering waters in Caribbean style with an
                  all-inclusive package tailored for luxury and ease.
                </p>
              </div>

              {/* 40% blocks (UNCHANGED) */}
              <div className="col-span-12 flex h-full flex-col gap-2 lg:col-span-5">
                <div className="flex flex-[3] items-center justify-center rounded-lg border border-white/15 bg-[#0A2540] px-6 py-7 text-center sm:px-8 sm:py-8">
                  <p className="font-heading text-lg font-semibold italic tracking-[0.14em] text-white sm:text-xl lg:text-2xl">
                    YOUR PRIVATE OASIS AWAITS
                  </p>
                </div>

                <div className="flex flex-[2] items-center justify-center rounded-lg border border-white/15 bg-[#0A2540] px-6 py-6 text-center sm:px-8 sm:py-7">
                  <a
                    href="/full-day-experience"
                    className="group inline-flex items-center font-body text-lg italic font-medium uppercase tracking-[0.14em] text-[#FFC93F] transition-colors hover:text-[#FFC93F]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC93F]/60"
                    aria-label="Explore more"
                  >
                    Explore more
                    <span className="ml-2 inline-block lux-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-6 sm:h-8 lg:h-10" />
        </div>

        <div className="h-10 sm:h-14" />
      </div>

      <style>{arrowStyles}</style>
    </section>
  );
}