import { ownthemoment } from "../../assets/images";

export default function OwnTheMoment() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-full px-6 py-14 sm:px-10 sm:py-24 lg:px-16 lg:py-30">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Headings (mobile: 1st, desktop: left/top) */}
          <div className="order-1 text-center lg:col-start-1 lg:order-1 lg:text-left">
            <h2 className="text-[#0A2540]">
              <span className="font-body block text-[25px] sm:text-4xl lg:text-[42px]">
                Own the Moment Aboard the
              </span>

              <span className="block leading-[3rem] sm:mt-12 sm:leading-0 font-heading text-[50px] font-semibold sm:text-6xl lg:text-[4.9rem]">
                112&rsquo; <span>SUPERSTAR</span>
              </span>
            </h2>
          </div>

          {/* Image (mobile: 2nd, desktop: right, spanning both text rows) */}
          <div className="order-2 flex justify-center lg:col-start-2 lg:row-span-2 lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-full">
              {/* Outline behind (offset bottom-right) */}
              <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-[#0A2540] sm:-bottom-5 sm:-right-5" />

              {/* Main image */}
              <div className="relative z-10 overflow-hidden bg-white">
                <img
                  src={ownthemoment}
                  alt="Superstar yacht cruising"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Description + CTA (mobile: 3rd, desktop: left/bottom) */}
          <div className="order-3 text-center lg:col-start-1 lg:order-3 lg:text-left">
            <p className="mt-8 flex max-w-4xl items-center justify-center font-body text-xl leading-relaxed text-[#0A2540] opacity-70 sm:text-2xl lg:mt-0 lg:max-w-xl lg:justify-start lg:text-2xl">
              Indulge in unmatched exclusivity aboard Superstar, Florida&rsquo;s premier 112-ft
              superyacht where crystal waters, pristine beaches, and refined luxury create memories
              defined by space, balance, and ease.
            </p>

            <div className="mt-10 sm:mt-20">
              <a
                href="https://fareharbor.com/embeds/book/kokomocharters/items/?flow=1520892&language=en-us&full-items=yes&back=https://www.kokomocharters.com/&g4=yes"
                className="inline-flex items-center justify-center rounded-md bg-[#0A2540] px-10 py-4 font-body text-sm font-medium uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0A2540]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/35"
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