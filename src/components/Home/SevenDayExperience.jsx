import { imgOne, imgThree, imgTwo } from "../../assets/images";

export default function SevenDayExperience() {
  return (
    <section id="sevenDayExperience" className="w-full bg-white pb-12 pt-12">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden bg-[#0A2540] py-6  lg:py-18">
          {/* Corner cutouts (clip-path to avoid hairline borders on mobile) */}
          <div
            className="pointer-events-none absolute -left-px -top-px z-20 h-[74px] w-[74px] bg-white sm:h-[92px] sm:w-[92px] lg:h-[110px] lg:w-[110px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-px -right-px z-20 h-[74px] w-[74px] bg-white sm:h-[92px] sm:w-[92px] lg:h-[110px] lg:w-[110px]"
            style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
          />

          {/* Heading */}
          <div className="px-6 sm:px-10 lg:px-16">
            <p className="pt-12 font-body text-center text-md font-normal text-white/90 sm:text-xl lg:text-3xl">
              The 7-Day Superstar Experience
            </p>

            <h2 className="mt-5 text-center font-heading text-4xl font-semibold italic text-[#FFC93F] sm:text-5xl lg:text-7xl">
              A WEEK OF UNPARALLELED LUXURY
            </h2>
          </div>

          {/* Content grid */}
          <div className="mt-6 px-6 sm:mt-16 sm:px-10 lg:mt-22 lg:px-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6 lg:h-[760px] xl:h-[840px] lg:gap-7">
                {/* Big left image (mobile: show this first) */}
                <div className="order-1 overflow-hidden rounded-md lg:order-1 lg:flex-[3]">
                  <div className="h-[320px] sm:h-[520px] md:h-[560px] lg:h-full">
                    <img
                      src={imgOne}
                      alt="Guests enjoying the Superstar experience"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Description + CTA (mobile: after image) */}
                <div className="order-2 flex flex-col justify-between rounded-md bg-[#0A2540] lg:order-2 lg:flex-[2]">
                  <p className="px-5 pt-6 font-body text-center text-lg leading-[1.5] text-white/90 sm:px-6 sm:pt-7 sm:text-2xl">
                    Step aboard Florida&apos;s premier superyacht and let seven days dissolve into pure,
                    effortless bliss, where turquoise horizons unfold at your command, and every detail
                    feels crafted just for you.
                  </p>

                  <div className="px-5 pb-6 pt-10 sm:px-6 sm:pb-7">
                    <a
                      href="/seven-day-experience"
                      className="inline-flex w-full items-center justify-center rounded-md bg-white px-7 py-3 font-body text-md font-medium uppercase tracking-[0.02em] text-[#0A2540] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (mobile: hide; desktop: show as-is) */}
              <div className="hidden flex-col gap-6 lg:flex lg:h-[760px] xl:h-[840px] lg:gap-7">
                {/* Top right image (taller) */}
                <div className="overflow-hidden rounded-md lg:flex-[2]">
                  <div className="h-[320px] sm:h-[380px] md:h-[420px] lg:h-full">
                    <img
                      src={imgTwo}
                      alt="On-deck gathering during sunset"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Bottom right image (taller) */}
                <div className="overflow-hidden rounded-md lg:flex-[3]">
                  <div className="h-[380px] sm:h-[460px] md:h-[520px] lg:h-full">
                    <img
                      src={imgThree}
                      alt="Group photo aboard the yacht"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* inner bottom breathing room */}
          <div className="h-6 sm:h-8 lg:h-10" />
        </div>

        {/* outer bottom spacing like screenshot */}
        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}