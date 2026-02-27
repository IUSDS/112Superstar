import React from "react";
import { culinary } from "../../assets/images";

export default function DiningAndCulinaryOptions({
  leftTitle = "DINING AND\nCULINARY OPTIONS",
  imageAlt = "Dining and culinary options onboard",
  body = "Food Is The Heart Of The Experience. We Offer Two Distinct Tiers Of Service Designed To Keep You Refreshed And Satisfied From The First Morning Breeze To The Final Sunset. Choose The Level Of Service That Fits Your Day And Let Our Team Handle The Rest.",
  cards = [
    {
      title: "THE PRIVATE CHEF EXPERIENCE",
      text: "Available On 8 & 6-Hour Charters. A Professional Chef Joins You Onboard To Cook A Custom, High-End Menu Designed Specifically For Your Palate.",
    },
    {
      title: "SIGNATURE GOURMET PACKAGE",
      text: "Enjoy A Fresh Continental Breakfast, Premium Boxed Lunches, And Afternoon Snacks. This Includes A Full Selection Of Coca-Cola Products And Bottled Water.",
    },
  ],
}) {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[96rem] px-0 md:px-10 lg:px-16">
        <div className="px-6 md:px-0">
          {/* 1) Heading */}
          <div className="w-full">
           <div className="flex flex-col md:grid md:grid-cols-[auto,1fr] md:items-end md:gap-x-6 md:gap-y-0">
              {/* Left canvas (clipped TL + BR). Mobile: full width canvas. */}
              <div
                className={[
                  "w-full md:w-[360px] lg:w-[420px]",
                  "bg-[#0A2540] text-white",
                  "px-6 py-4 lg:py-6",
                  "rounded-[14px]",
                  "[clip-path:polygon(26px_0,100%_0,100%_calc(100%_-_26px),calc(100%_-_26px)_100%,0_100%,0_26px)]",
                  "sm:[clip-path:polygon(34px_0,100%_0,100%_calc(100%_-_34px),calc(100%_-_34px)_100%,0_100%,0_34px)]",
                  "md:col-start-1 md:row-start-1",
                ].join(" ")}
              >
                <p className="whitespace-pre-line font-heading text-3xl sm:text-3xl lg:text-4xl font-medium uppercase italic lg:ml-3">
                  {leftTitle}
                </p>
              </div>

            {/* Thick border line (starts after the left canvas) */}
              <div className="h-[3px] w-full bg-[#0A2540] md:col-start-2 md:row-start-2" />
            </div>
           </div>
          {/* 2) Image + text (match WaterToys sizing + clip TL/BR) */}
          <div className="mt-10 sm:mt-12">
            <div
              className={[
                "relative w-full overflow-hidden bg-white",
                "h-[220px] sm:h-[260px] md:h-[280px] lg:h-[380px]",
                "[clip-path:polygon(28px_0,100%_0,100%_calc(100%_-_28px),calc(100%_-_28px)_100%,0_100%,0_28px)]",
                "md:[clip-path:polygon(56px_0,100%_0,100%_calc(100%_-_56px),calc(100%_-_56px)_100%,0_100%,0_56px)]",
              ].join(" ")}
            >
              <div className="group h-full w-full overflow-hidden">
                <img
                  src={culinary}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
                />
              </div>
            </div>

            <p className="mx-auto mt-8 lg:mt-16 max-w-full text-center font-body text-lg font-normal italic text-[#0A2540] sm:mt-10 sm:text-xl  lg:text-2xl">
              {body}
            </p>
          </div>

          {/* 3) Cards (clipped TL + BR) */}
          <div className="mt-10 sm:mt-12 lg:mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {cards.slice(0, 2).map((c, idx) => (
              <div
                key={`${c.title}-${idx}`}
                className={[
                  "relative overflow-hidden bg-[#0A2540] text-white",
                  "px-6 py-6 sm:px-7 sm:py-7 lg:py-10",
                  "rounded-[14px]",
                  "[clip-path:polygon(26px_0,100%_0,100%_calc(100%_-_26px),calc(100%_-_26px)_100%,0_100%,0_26px)]",
                  "sm:[clip-path:polygon(34px_0,100%_0,100%_calc(100%_-_34px),calc(100%_-_34px)_100%,0_100%,0_34px)]",
                ].join(" ")}
              >
                <p className="font-body text-xl sm:text-2xl lg:text-3xl font-medium uppercase italic  text-[#FFC93F] text-center">
                  {c.title}
                </p>

                <p className="mt-4 font-body text-md sm:text-lg lg:text-xl font-normal italic leading-[1.65]  text-white/90 text-center">
                  {c.text}
                </p>

                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}