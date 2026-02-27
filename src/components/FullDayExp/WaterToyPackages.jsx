import React from "react";
import {waterToyPackage1, waterToyPackage2 } from "../../assets/images";

const DEFAULT_PACKAGES = [
  {
    image: waterToyPackage1,
    alt: "Water toy package on the water",
    title: "WATER TOY PACKAGES (ADDITIONAL)",
    lines: ["2 JET SKIS | $750", "2 SEABOBS | $650", "JET SKI + SEABOB COMBO | $1,299"],
  },
  {
    image: waterToyPackage2,
    alt: "Ultimate beach party package",
    title: "ULTIMATE BEACH PARTY PACKAGE",
    lines: ["$2,495 (ADDITIONAL)", "Includes The Full Aquabana Beach Club", "2 JET SKIS | 2 SEABOBS"],
  },
];

export default function WaterToyPackages({
  heading = "THE YACHT IS JUST THE BEGINNING, THIS IS HOW YOU OWN THE DAY.",
  packages = DEFAULT_PACKAGES,
}) {
  const items = (packages || []).slice(0, 2);

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-12">
      <div className="mx-auto max-w-[96rem] px-0 md:px-10 lg:px-16">
        <div className="px-4 md:px-0">
          {/* Heading pill (clipped TL + BR) */}
          <div
            className={[
              "mx-auto w-full max-w-[78rem] lg:max-w-full",
              "bg-[#0A2540] text-white",
              "py-8 px-2 sm:py-5",
              "mt-2",
              "text-center",
              "rounded-[14px] sm:rounded-[16px]",
              "[clip-path:polygon(26px_0,100%_0,100%_calc(100%_-_26px),calc(100%_-_26px)_100%,0_100%,0_26px)]",
              "sm:[clip-path:polygon(34px_0,100%_0,100%_calc(100%_-_34px),calc(100%_-_34px)_100%,0_100%,0_34px)]",
            ].join(" ")}
          >
            <p className="font-heading text-xl px-2 sm:px-4 md:px-2 lg:px-6 sm:text-3xl md:py-3 lg:py-4 lg:text-4xl uppercase italic">
              {heading}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-18 sm:mt-12 lg:mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {items.map((pkg, idx) => (
              <div
                key={`${pkg.title}-${idx}`}
                className={[
                  "relative overflow-hidden bg-[#0A2540] py-4",
                  "rounded-[18px] shadow-sm",
                  // clip TL only
                  "[clip-path:polygon(42px_0,100%_0,100%_100%,0_100%,0_42px)]",
                  "sm:[clip-path:polygon(54px_0,100%_0,100%_100%,0_100%,0_54px)]",
                ].join(" ")}
              >
                <div className="p-6 sm:p-7 lg:p-8">
                  {/* Image (large + always visible) */}
                  <div className="group overflow-hidden rounded-[12px]">
                    <div className="relative w-full aspect-[16/8] sm:aspect-[16/7]">
                      <img
                        src={pkg.image}
                        alt={pkg.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="mt-7 text-center text-white">
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-medium uppercase italic">
                      {pkg.title}
                    </h3>

                    <div className="mt-4 md:mt-8 space-y-2">
                      {pkg.lines.map((line, i) => (
                        <p
                          key={i}
                          className="font-body text-[20px] sm:text-xl md:text-lg lg:text-[22px] font-normal uppercase italic text-white/90"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* subtle inner stroke (helps luxury polish) */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}