import React from "react";
import {
  inclusiveEscapeJetSki,
  inclusiveEscapeSeabob,
  inclusiveEscapeBeachClub,
} from "../../assets/images";

const DEFAULT_CARDS = [
  {
    image: inclusiveEscapeJetSki,
    alt: "Jet ski experience on clear blue water",
    title: "2 JET SKIS",
    description:
      "Feel The Thrill As You Chase The Waves And Make Every Moment Memorable.",
  },
  {
    image: inclusiveEscapeSeabob,
    alt: "SeaBob underwater riding experience",
    title: "2 SEABOBS",
    description:
      "Glide Beneath The Surface And Explore The Underwater World Like Never Before.",
  },
  {
    image: inclusiveEscapeBeachClub,
    alt: "Floating beach club setup with shaded cabana",
    title: "FULL BEACH CLUB SETUP",
    description:
      "A Floating Lounge With A Shaded Cabana And A Seamless Deck That Spills Onto The Water.",
  },
];

export default function AllInclusiveEscape({
  bannerText = "Immerse Yourself In An All-In-One Inclusive Escape, With Water Toys And A Full Beach Club Setup Ready For Your Enjoyment- No Ad Ons Required.",
  cards = DEFAULT_CARDS,
}) {
  // For mobile, reverse the order so 'FULL BEACH CLUB SETUP' is first
  // For desktop, keep the original order
  const items = (cards || []).slice(0, 3);

  // Helper to determine if we're on mobile (client-side only)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayItems = isMobile ? [...items].reverse() : items;

  return (
    <section className="w-full bg-white pb-12 sm:pb-14 lg:pb-16">
      <div className="w-full bg-[#0A2540] px-4 py-4 sm:px-6 sm:py-5 lg:py-6">
        <p className="mx-auto max-w-[84rem] font-medium italic text-center font-heading text-[22px] leading-[1.25] text-[#FFC93F] sm:text-[24px] md:text-[26px] lg:text-[32px]">
          {bannerText}
        </p>
      </div>

      <div className="mx-auto mt-5 grid w-[92%] max-w-[88rem] grid-cols-1 gap-6 sm:w-[90%] sm:gap-7 md:mt-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {displayItems.map((card, index) => (
          <article
            key={`${card.title}-${index}`}
            className="group h-[30rem] overflow-hidden rounded-[18px] bg-white p-[14px] shadow-[0_12px_30px_rgba(10,37,64,0.10)] ring-1 ring-black/5 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1 sm:h-[31rem] md:h-[29rem] lg:h-[31.5rem]"
          >
            <div className="flex h-full flex-col">
              <div className="relative h-[17.5rem] overflow-hidden rounded-[12px] sm:h-[18rem] md:h-[15rem] lg:h-[18.25rem]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-1 flex-col items-center px-3 pb-2 pt-5 text-center">
                <h3 className="min-h-[3.1rem] font-heading text-[26px] leading-[1.05] font-semibold uppercase italic text-[#0A2540] sm:min-h-[3.4rem] sm:text-[28px] lg:text-[32px]">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-[19rem] font-body text-[18px] leading-[1.15] italic text-[#0A2540]/90 sm:text-[19px] lg:text-[20px]">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}