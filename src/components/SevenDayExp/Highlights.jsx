import React from "react";
import { highlight1, highlight2, highlight3, highlight4 } from "../../assets/images";

const DEFAULT_ITEMS = [
  {
    title: "EXPERIENCED CREW",
    description:
      "A Captain, Mate, And Stewardess Who Handle Every Detail Behind The Scenes, So You Never Have To Think About The Logistics.",
    image: highlight1,
    alt: "Experienced crew highlight",
  },
  {
    title: "PRIVATE CHEF",
    description:
      "Forget Fixed Menus. Let A Private Chef Craft Gourmet Selections Using The Morning's Local Catch And Your Personal Palate To Create Five-Star Memories On The Deck.",
    image: highlight2,
    alt: "Private chef highlight",
  },
  {
    title: "WATER TOYS GALORE",
    description:
      "Inflatables, Paddle Boards, Plus Two Jet Skis And Two Seabobs For High-Energy Fun On The Water, All Included For Your Week-Long Escape.",
    image: highlight3,
    alt: "Water toys highlight",
  },
  {
    title: "BESPOKE DESTINATIONS",
    description:
      "Secluded White-Sand Beaches, Emerald Coves, Dolphin Escorts At Dawn, And Magnificent Sunsets.",
    image: highlight4,
    alt: "Bespoke destinations highlight",
  },
];

export default function Highlights({
  items = DEFAULT_ITEMS,
  heading = "INCLUDED HIGHLIGHTS",
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden bg-[#0A2540] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Corner cutouts (reference: SevenDayExperience) */}
          <div
            className="pointer-events-none absolute -left-px -top-px z-20 h-[74px] w-[74px] bg-white sm:h-[92px] sm:w-[92px] lg:h-[110px] lg:w-[110px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-px -right-px z-20 h-[74px] w-[74px] bg-white sm:h-[92px] sm:w-[92px] lg:h-[110px] lg:w-[110px]"
            style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
          />

          {/* Heading */}
          <div className="relative">
            <div className="flex items-center justify-center md:justify-start pt-8">
              <p className="font-body text-3xl font-medium uppercase italic text-[#FFC93F] ml-0 md:ml-8 sm:text-5xl lg:text-5xl">
                {heading}
              </p>

              {/* Dashed line continues right on desktop */}
            </div>
            <div className="flex mt-3 flex w-full max-w-[420px] sm:max-w-[450px] ml-0 sm:ml-10 lg:max-w-[700px] items-center gap-4">
              <div className="h-px flex-1 bg-white/55" />
              <div className="h-px w-[300px] border-t border-dashed border-white" />
            </div>
          </div>

          {/* Items */}
          <div className="relative mb-10 sm:mt-0 mt-6 sm:mt-12 lg:mt-14">
            <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
              {items.slice(0, 4).map((item, idx) => {
                const isReverse = idx % 2 === 1;
                // Mobile: alternate the vertical divider per card
                // 1st: border-r, 2nd: border-l, 3rd: border-r, 4th: border-l ...
                const mobileEdgeBorder = isReverse ? "border-l pl-6" : "border-r pr-6";

                // Desktop: border line should “point” toward the image side using border-l / border-r
                const desktopEdgeBorder = isReverse
                  ? "md:border-r md:pr-10 md:text-right"
                  : "md:border-l md:pl-10 md:text-left";

                return (
                  <div
                    key={item.title}
                    className={[
                      "flex flex-col pt-3",
                      "md:flex-row md:items-stretch",
                      isReverse ? "md:flex-row-reverse" : "",
                    ].join(" ")}
                  >
                    {/* Image (40%) */}
                    <div className="md:flex-[4]">
                      <div className="group">
                        {/* Mobile: show full image (no crop). Desktop: use aspect + cover. */}
                        <div className="relative  md:aspect-[16/7] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
                            className={[
                              "w-full h-auto object-contain",
                              "md:h-full md:object-cover",
                              "transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]",
                            ].join(" ")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text (60%) */}
                    <div className="mt-6 md:mt-0 md:flex-[6] md:flex">
                      {/* Line handling:
                          - Desktop: border-b on the text block + border-l/r based on side
                          - Mobile: vertical line (flipped) via border-r */}
                      <div
                        className={[
                          "w-full",
                           mobileEdgeBorder,
                          "border-white/40 text-center",
                          "md:border-l-0 md:border-r-0 md:pl-0 md:pr-0 md:text-inherit",
                          "md:border-b md:border-white/40 md:pb-8",
                          "md:h-full md:flex md:flex-col md:justify-center",
                          desktopEdgeBorder,
                        ].join(" ")}
                      >
                        {/* Keep text width elegant, while borders span full column */}
                        <div className="md:max-w-[46rem]">
                          <h3 className="font-heading text-2xl font-medium uppercase italic text-white sm:text-4xl lg:text-5xl">
                            {item.title}
                          </h3>

                          <p className="mt-3 font-body text-md text-white/85 sm:text-xl lg:text-xl">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-2 sm:h-4" />
        </div>
      </div>
    </section>
  );
}