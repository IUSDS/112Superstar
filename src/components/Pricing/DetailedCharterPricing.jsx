// src/components/Pricing/DetailCharterPricing.jsx
import React from "react";
import { detailedPricing1, detailedPricing2, detailedPricing3, detailedPricing4 } from "../../assets/images";

const DEFAULT_ITEMS = [
  {
    title: "Half Day Charter",
    durationPrice: "4 HOURS · FROM $5,995",
    description:
      "Step aboard for a short yet indulgent escape. Cruise along pristine waters, anchor at a scenic location, and enjoy a relaxed, elevated yachting experience.",
    bullets: [
      "Professional captain and crew",
      "Scenic Gulf cruise",
      "Swim and lounge time",
      "Premium onboard amenities",
    ],
    cta: "BOOK NOW",
    href: "https://fareharbor.com/embeds/book/kokomocharters/items/685237/calendar/2026/02/?full-items=yes&back=https://www.kokomocharters.com/&flow=1520892&g4=yes",
    imageSrc: detailedPricing1,
    imageAlt: "Half Day Charter",
  },
  {
    title: "Day Charter",
    durationPrice: "6 HOURS · FROM $7,995",
    description:
      "Designed for those who want more time to truly unwind. Enjoy extended cruising, longer anchorage, and the flexibility to explore, dine, and relax at your own pace.",
    bullets: [
      "Extended cruise and anchoring",
      "Ideal setup for onboard dining",
      "Water access and relaxation zones",
      "Full-service crew experience",
    ],
    cta: "BOOK NOW",
    href: "https://fareharbor.com/embeds/book/kokomocharters/items/684564/calendar/2026/02/?full-items=yes&back=https://www.kokomocharters.com/&flow=1520892&g4=yes",
    imageSrc: detailedPricing2,
    imageAlt: "Day Charter",
  },
  {
    title: "Full Day Charter",
    durationPrice: "8 HOURS · FROM $12,995",
    description:
      "This is the complete Superstar experience. From morning cruising to sunset on the horizon, a full day is made to feel like a reset for the day.",
    bullets: [
      "Relaxing time aboard",
      "Full beach club setup",
      "Water toy and sun zone",
      "Dedicated captain, mate and stewardess",
      "Premium food and beverage service",
    ],
    cta: "BOOK NOW",
    href: "https://fareharbor.com/embeds/book/kokomocharters/items/683982/calendar/2026/02/?flow=1520892&full-items=yes&back=https://www.kokomocharters.com/&g4=yes",
    imageSrc: detailedPricing3,
    imageAlt: "Full Day Charter",
  },
  {
    title: "Multi-Day Experience",
    durationPrice: "2–7 DAYS · EXCLUSIVE PRICE · $67,999",
    description:
      "Step into a world where time slows down and every detail is tailored to you. Explore hidden islands, waterfront destinations, and private beaches — all aboard a floating five-star retreat.",
    bullets: [
      "Overnight accommodations",
      "Fully customized itinerary",
      "Private chef and gourmet dining",
      "Island hopping and coastal exploration",
      "Jet skis, Seabobs and sea toys",
      "Full professional crew",
    ],
    cta: "BOOK NOW",
    href: "tel:+19413045789",
    imageSrc: detailedPricing4,
    imageAlt: "Multi-Day Experience",
  },
];

function PlaceholderImage() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
    </div>
  );
}

export default function DetailCharterPricing({
  eyebrow = "EVERY CHARTER, EXPLORED",
  items = DEFAULT_ITEMS,
}) {
  return (
    <section className="hidden lg:block bg-white">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        {/* Blue canvas (clipped top-left + bottom-right) */}
        <div
          className="bg-[#0A2540] text-white"
          style={{
            clipPath:
              "polygon(72px 0, 100% 0, 100% calc(100% - 72px), calc(100% - 72px) 100%, 0 100%, 0 72px)",
          }}
        >
          <div className="px-10 xl:px-14 py-14 xl:py-16">
            {/* Eyebrow */}
            <div className="text-center">
              <p className="font-body text-5xl italic font-medium uppercase text-[#FFC93F]">
                {eyebrow}
              </p>
            </div>

            {/* Offers */}
            <div className="mt-14 space-y-20 xl:space-y-24">
              {items.map((item, idx) => {
                const isReversed = idx % 2 === 1;

                return (
                  <article
                    key={`${item.title}-${idx}`}
                    className="grid grid-cols-2 items-stretch gap-14 xl:gap-16"
                  >
                    {/* Left column */}
                    <div className={isReversed ? "order-1" : "order-1"}>
                      {isReversed ? (
                        <div className="h-full min-h-[420px] xl:min-h-[520px] overflow-hidden">
                          {item.imageSrc ? (
                            <img
                              src={item.imageSrc}
                              alt={item.imageAlt || item.title}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover object-center"
                              sizes="(min-width: 1280px) 44vw, 46vw"
                            />
                          ) : (
                            <PlaceholderImage />
                          )}
                        </div>
                      ) : (
                        <div className="flex h-full min-h-[420px] xl:min-h-[520px] flex-col justify-center">
                          <h3 className="font-heading text-[40px] xl:text-[48px] font-semibold leading-[1.05]">
                            {item.title}
                          </h3>

                          <p className="mt-4 font-body text-lg font-medium uppercase tracking-[0.22em] text-white/90">
                            {item.durationPrice}
                          </p>

                          <p className="mt-6 max-w-[36rem] font-body text-[16px] xl:text-[18px] leading-[1.45] text-white/80">
                            {item.description}
                          </p>

                          <ul className="mt-8 max-w-[38rem]">
                            {item.bullets.map((b, i) => (
                              <li
                                key={`${b}-${i}`}
                                className="flex items-start gap-3 border-b border-white/10 py-3"
                              >
                                <span className="mt-[11px] h-px w-4 bg-white/45" />
                                <span className="font-body text-xl leading-[1.35] text-white/75">
                                  {b}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-9 max-w-[38rem] border-b border-white/10 pb-6">
                            <a
                              href={item.href}
                              className="group inline-flex items-center gap-3 font-body text-xl font-medium uppercase  bg-[white] px-8 py-4 rounded-xl text-[#0A2540]"
                            >
                              {item.cta}
                              <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right column */}
                    <div className={isReversed ? "order-2" : "order-2"}>
                      {isReversed ? (
                        <div className="flex h-full min-h-[420px] xl:min-h-[520px] flex-col justify-center">
                          <h3 className="font-heading text-[40px] xl:text-[48px] font-semibold leading-[1.05]">
                            {item.title}
                          </h3>

                          <p className="mt-4 font-body text-lg font-medium uppercase tracking-[0.22em] text-white/90">
                            {item.durationPrice}
                          </p>

                          <p className="mt-6 max-w-[36rem] font-body text-[16px] xl:text-[18px] leading-[1.45] text-white/80">
                            {item.description}
                          </p>

                          <ul className="mt-8 max-w-[38rem]">
                            {item.bullets.map((b, i) => (
                              <li
                                key={`${b}-${i}`}
                                className="flex items-start gap-3 border-b border-white/10 py-3"
                              >
                                <span className="mt-[11px] h-px w-4 bg-white/45" />
                                <span className="font-body text-xl leading-[1.35] text-white/75">
                                  {b}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-9 max-w-[38rem] border-b border-white/10 pb-6">
                            <a
                              href={item.href}
                              className="group inline-flex items-center gap-3 font-body text-xl font-medium uppercase bg-[white] px-8 py-4 rounded-xl text-[#0A2540]"
                            >
                              {item.cta}
                              <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full min-h-[420px] xl:min-h-[520px] overflow-hidden">
                          {item.imageSrc ? (
                            <img
                              src={item.imageSrc}
                              alt={item.imageAlt || item.title}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover object-center"
                              sizes="(min-width: 1280px) 44vw, 46vw"
                            />
                          ) : (
                            <PlaceholderImage />
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}