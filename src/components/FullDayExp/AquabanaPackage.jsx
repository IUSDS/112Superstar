import React from "react";
import { aquabanaPackage, aquabanaPackageMobile } from "../../assets/images";

export default function AquabanaPackage({
  topBannerText = "2026 Spring And Summer Special: Reserve A",
  highlightedOriginalPrice = "$2,995",
  highlightedOfferText = "Bahamas-Style Experience For Just",
  highlightedCurrentPrice = "$995!",
  description = "This Is More Than An Upgrade; It’s An All-Inclusive Experience Crafted For Adventure, Relaxation, And Ever-Lasting Memories.",
  image = aquabanaPackage,
  mobileImage = aquabanaPackageMobile,
  imageAlt = "Aquabana beach party package floating on clear blue water",
  packageTitle = "AQUABANA BEACH\nPARTY PACKAGE",
  price = "$495",
  leftText = "Turn The Back Of The Yacht Into A Massive Floating Lounge. This Setup Expands Your Deck Space Right Onto The Water With A Shaded Partybana Cabana Lounger, And A Stable Platform For Diving, Splashing, And Endless Water Fun.",
  rightTextHighlight = "AMP UP THE ADVENTURE!",
  rightTextBody = "For An Additional Price, Add Jet Skis, SeaBobs, Or E-Foils To Your Experience And Take Your Day On The Water To The Next Level!",
  bottomBannerText = "The Yacht Is Just The Beginning, This Is How You Own The Day.",
}) {
  return (
    <section className="w-full bg-white pb-12 sm:pb-14 lg:pb-16 sm:pt-10 lg:pt-12">
      <div className="w-full bg-[#0A2540] px-4 py-4 sm:px-6 sm:py-5 lg:py-6">
        <p className="mx-auto max-w-[84rem] text-center font-heading text-[22px] leading-[1.25] italic text-[#FFC93F] sm:text-[24px] md:text-[26px] lg:text-[32px]">
          <span>{topBannerText} </span>
          <span className="text-[24px] font-semibold sm:text-[25px] md:text-[28px] lg:text-[34px]">
            {highlightedOriginalPrice}
          </span>
          <span> {highlightedOfferText} </span>
          <span className="text-[24px] font-semibold sm:text-[25px] md:text-[28px] lg:text-[34px]">
            {highlightedCurrentPrice}
          </span>
        </p>
      </div>

      {/* Mobile-only layout */}
      <div className="mx-auto w-full max-w-[96rem] px-5 pt-6 md:hidden">
        <div
          role="img"
          aria-label={imageAlt}
          className={[
            "relative isolate overflow-hidden",
            "min-h-[700px] w-full",
            "[clip-path:polygon(22px_0,100%_0,100%_calc(100%_-_22px),calc(100%_-_22px)_100%,0_100%,0_22px)]",
          ].join(" ")}
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/34" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/12 to-[#0A2540]/82" />

          <div className="relative z-10 flex min-h-[700px] flex-col px-5 pb-7 pt-4">
            <div>
              <h2 className="whitespace-pre-line font-heading text-[23px] leading-[0.88] font-medium uppercase italic tracking-[0.02em] text-white">
                {packageTitle}
              </h2>
            </div>

            <div className="ml-auto mt-[9.5rem] w-[63%] max-w-[220px] text-right text-white">
              <p className="font-body text-[18px] leading-[0.92] font-medium">
                Available on{" "}
                <span className="font-heading text-[24px] font-semibold italic">
                  8 Hour
                </span>
                <br />
                and{" "}
                <span className="font-heading text-[24px] font-semibold italic">
                  6 Hour
                </span>{" "}
                Charters
              </p>

              <div className="ml-auto mt-3 h-[2px] w-full bg-white/95" />

              <p className="mt-3 font-heading text-[34px] leading-none font-medium italic">
                {price}
              </p>
            </div>

            <div className="mt-auto pt-10">
              <p className="font-heading text-center text-[20px] leading-[1.02] font-medium italic text-white">
                {leftText}
              </p>

              <div className="mx-auto mt-7 h-px w-[74%] bg-white/70" />

              <div className="mt-7">
                <div className="w-full bg-[#0A2540] px-3 py-2.5">
                  <p className="font-heading text-center text-[20px] leading-[1.02] font-medium uppercase italic text-[#FFC93F]">
                    {rightTextHighlight}
                  </p>
                </div>

                <p className="mt-5 font-heading text-center text-[20px] leading-[1.02] font-medium italic text-white">
                  {rightTextBody}
                </p>
              </div>

              <div className="mx-auto mt-7 h-px w-[74%] bg-white/70" />

              <p className="mt-7 font-heading text-center text-[20px] leading-[0.98] font-medium italic text-white">
                {bottomBannerText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / tablet layout */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[96rem] px-5 pt-8 sm:px-6 sm:pt-10 md:px-10 lg:px-16 lg:pt-12">
          <p className="mx-auto max-w-[68rem] text-center font-heading text-[22px] leading-[1.14] font-semibold italic text-[#0A2540] sm:text-[24px] md:text-[26px] lg:text-[32px]">
            {description}
          </p>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <div
              className={[
                "relative isolate w-full overflow-hidden bg-[#dfeaf3]",
                "h-[470px] lg:h-[620px]",
                "[clip-path:polygon(30px_0,100%_0,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0_100%,0_30px)]",
                "lg:[clip-path:polygon(38px_0,100%_0,100%_calc(100%_-_38px),calc(100%_-_38px)_100%,0_100%,0_38px)]",
              ].join(" ")}
            >
              <div className="group h-full w-full overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 pointer-events-none bg-black/30" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/10" />

              <div className="absolute left-6 top-6 z-10 lg:left-8 lg:top-8">
                <h2 className="whitespace-pre-line font-heading text-[36px] leading-[0.74] font-medium uppercase italic tracking-[0.02em] text-white lg:text-[50px]">
                  {packageTitle}
                </h2>
              </div>

              <div className="absolute bottom-6 right-6 z-10 w-[36%] max-w-[380px] text-right text-white lg:bottom-8 lg:right-8 lg:w-[34%] lg:max-w-[460px]">
                <p className="font-heading italic text-[34px] leading-[0.48] font-medium lg:text-[48px]">
                EXCLUSIVE PRICING
                </p>

                <div className="ml-auto mt-3 h-[2px] w-[50%] bg-white/95 lg:mt-5" />

                <p className="font-heading text-[64px] leading-none font-medium italic lg:text-[78px]">
                  {price}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-y border-[#0A2540]/20 sm:mt-10 lg:mt-12">
  <div className="grid grid-cols-[3fr_auto_2fr] items-stretch">
    <div className="flex h-full items-center px-1 py-6 md:px-0 md:pr-8 lg:pr-10 lg:py-8">
      <p className="w-full font-heading text-center text-[20px] leading-[1.12] font-medium italic text-[#0A2540] lg:text-[28px] md:text-left">
        {leftText}
      </p>
    </div>

    <div className="w-px self-stretch bg-[#0A2540]/25" />

    <div className="h-full px-1 py-6 md:pl-8 lg:pl-0 lg:py-0">
      <div className="flex h-full flex-col">
        <div className="w-full bg-[#0A2540] px-4 py-2.5">
          <p className="font-heading text-center text-[20px] leading-[1.12] font-medium uppercase italic text-[#FFC93F] lg:text-[28px]">
            {rightTextHighlight}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center px-3 py-4">
          <p className="w-full font-heading text-center text-[20px] leading-[1.12] font-medium italic text-[#0A2540] lg:text-[26px]">
            {rightTextBody}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        <div className="mt-8 w-full border-y border-[#0A2540]/20 px-4 py-4 sm:mt-10 sm:px-6 sm:py-5 lg:py-6">
          <p className="mx-auto max-w-[84rem] text-center uppercase font-heading text-[22px] leading-[1.2] font-medium italic text-[#0A2540] sm:text-[24px] md:text-[26px] lg:text-[32px]">
            {bottomBannerText}
          </p>
        </div>
      </div>
    </section>
  );
}
