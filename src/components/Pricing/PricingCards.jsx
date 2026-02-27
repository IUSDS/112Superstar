// src/components/Home/PricingCards.jsx

const PRICING_PACKAGES = [
  {
    eyebrow: "PERFECT INTRODUCTION",
    title: "Half Day Charter",
    duration: "4–5 HRS",
    price: "$5,995",
    priceNote: "Starting from",
    perks: [
      "Perfect for relaxed luxury escapes",
      "Scenic Gulf cruise",
      "Prime anchorage",
      "Swim, lounge, unwind",
      "Private floating resort experience",
    ],
    cta: { label: "BOOK HALF DAY", href: "https://fareharbor.com/embeds/book/kokomocharters/items/685237/calendar/2026/02/?full-items=yes&back=https://www.kokomocharters.com/&flow=1520892&g4=yes"},
  },
  {
    eyebrow: "BEST VALUE",
    title: "Day Charter",
    duration: "6–8 HRS",
    price: "$7,995",
    priceNote: "Starting from",
    perks: [
      "Extended cruise & anchoring time",
      "Ideal for dining",
      "Perfect for exploration",
      "Settle into the day’s rhythm",
      "Polished five-star service",
    ],
    cta: { label: "BOOK DAY CHARTER", href: "https://fareharbor.com/embeds/book/kokomocharters/items/684564/calendar/2026/02/?full-items=yes&back=https://www.kokomocharters.com/&flow=1520892&g4=yes" },
  },
  {
    eyebrow: "ALL INCLUSIVE EXPERIENCE",
    title: "Full Day Charter",
    duration: "8 HRS",
    price: "$12,995",
    priceNote: "Starting from",
    perks: [
      "Full-day immersive escape",
      "Private Chef",
      "Private floating beach club access",
      "Water toys and activities",
      "Golden-hour luxury moments",
    ],
    cta: { label: "BOOK FULL DAY", href: "https://fareharbor.com/embeds/book/kokomocharters/items/683982/calendar/2026/02/?flow=1520892&full-items=yes&back=https://www.kokomocharters.com/&g4=yes" },
  },
  {
    eyebrow: "EXTENDED JOURNEY",
    title: "Multi-Day Charter",
    duration: "2–7 DAYS",
    price: "Custom",
    priceNote: "Tailor-made",
    perks: [
      "2 to 7-day luxury charters",
      "Overnight accommodations",
      "Naples to Key West routes",
      "Fully customized itinerary",
      "Gourmet dining included",
      "Expert crew & service",
    ],
    cta: { label: "REQUEST QUOTE", href: "tel:+19413045789" },
  },
];

function PricingCard({ data }) {
  const notch = 46;

  // Top-left cutout
  const clipPath = `polygon(${notch}px 0, 100% 0, 100% 100%, 0 100%, 0 ${notch}px)`;

  return (
    <article
      className="group relative flex h-full flex-col bg-white px-[30px] pb-[26px] pt-[26px] text-center transition-transform duration-300 hover:-translate-y-[5px] sm:h-[660px] lg:h-[720px]"
      style={{
        clipPath,
        filter: "drop-shadow(0px 18px 50px rgba(0,0,0,0.22))",
      }}
    >
      {/* Content grows, CTA stays pinned to bottom */}
      <div className="flex-1 lg:pt-12">
        <p className="font-body text-[14px]  text-[#95A2B0]">
          {data.eyebrow}
        </p>

        <h3 className="mt-5 font-body text-3xl font-medium tracking-[0.01em] text-[#667789] sm:text-[22px]">
          {data.title}
        </h3>

        <p className="mt-3 font-body text-lg font-semibold tracking-[0.24em] text-[#667789]">
          {data.duration}
        </p>

        <div className="mt-12">
          <p className="font-body text-[38px] font-medium tracking-[-0.02em] text-[#0A2540] sm:text-[40px]">
            {data.price}
          </p>

          {data.priceNote ? (
            <p className="mt-3 font-body text-lg font-medium text-[#B2BBC6]">
              {data.priceNote}
            </p>
          ) : null}
        </div>

        <ul className="mt-8 space-y-[12px] font-body text-[18px] font-medium leading-[1.6] text-[#7B8897]">
          {data.perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </div>

      {/* Bottom-aligned CTA (always same baseline) */}
      <div className="pt-9">
        <a
          href={data.cta.href}
          target="_blank"
          className="inline-flex h-[48px] min-w-full items-center justify-center bg-[#0A2540] px-6 font-body text-[11px] font-normal uppercase tracking-[0.22em] text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          {data.cta.label}
        </a>
      </div>
    </article>
  );
}

export default function PricingCards() {
  return (
    <section className="w-full overflow-hidden bg-[#0A2540] py-16 sm:py-20 block lg:hidden lg:py-24">
      <div className="mx-auto max-w-full px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <p className="font-body text-lg text-white/80 sm:text-2xl">
            CHARTER OPTIONS
          </p>

          <h2 className="mt-2 font-heading text-4xl font-medium  text-[#FFC93F] sm:text-6xl lg:text-[62px]">
            FLEXIBLE BOOKING PACKAGES
          </h2>

          <p className="mx-auto mt-8 max-w-5xl font-body text-xl font-normal text-white/80 sm:text-2xl">
            Choose the perfect charter duration for your celebration.
            <br  className="hidden sm:visible" />
            All packages include professional captain, crew, fuel, and premium amenities.
          </p>
        </div>

        {/* Cards (stretch to same row height + equal fixed card height on sm+) */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {PRICING_PACKAGES.map((pkg) => (
            <div key={pkg.title} className="h-full">
              <PricingCard data={pkg} />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-12 text-center font-body text-lg  text-white/55 sm:text-2xl">
          *Customary gratuity of 15–20% is not included in rates. Prices subject to seasonal variation.
        </p>
      </div>
    </section>
  );
}