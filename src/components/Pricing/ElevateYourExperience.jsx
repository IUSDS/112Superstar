import React from "react";

function CardShell({ children, className = "" }) {
  return (
    <div className={["h-full bg-[#0A2540] text-white", className].join(" ")}>
      {children}
    </div>
  );
}

function WaterToyPackagesCard() {
  const rows = [
    { label: "2 Jet Skis", price: "$750" },
    { label: "2 SeaBobs", price: "$650" },
    { label: "Jet Ski + SeaBob Combo", price: "$1299" },
  ];

  return (
    <CardShell className="p-6 sm:p-8 lg:p-12">
      <h3 className="font-heading text-[26px] lg:text-[30px] font-semibold text-[#FFC93F]">
        Water Toy Packages
      </h3>

      <p className="mt-5 font-body text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.28em] text-white/90">
        HIGH-PERFORMANCE EXPERIENCES
      </p>

      <p className="mt-5 max-w-[52ch] font-body text-[16px] lg:text-[17px] leading-[1.5] text-white/80">
        Elevate your day on the water with premium water toys built for thrill and exploration.
      </p>

      {/* Mobile-safe table: responsive price column so labels don't collapse */}
      <div className="mt-10 border-t border-white/10">
        {rows.map((r, i) => (
          <div
            key={`${r.label}-${i}`}
            className="grid min-w-0 border-b border-white/10
                       grid-cols-[minmax(0,1fr)_96px]
                       sm:grid-cols-[minmax(0,1fr)_140px]
                       lg:grid-cols-[minmax(0,1fr)_220px]"
          >
            <div className="min-w-0 py-5 pr-5 sm:pr-10 lg:pr-12 font-body text-[15px] sm:text-[16px] leading-[1.35] text-white/85">
              {r.label}
            </div>

            <div className="py-5 pl-5 sm:pl-10 lg:pl-12 border-l border-white/10 text-right font-body text-[15px] sm:text-[16px] leading-[1.35] text-white/85 whitespace-nowrap">
              {r.price}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

function UltimateBeachClubCard() {
  return (
    <CardShell className="p-6 sm:p-8 lg:p-12">
      <h3 className="font-heading text-[26px] lg:text-[30px] font-semibold text-[#FFC93F]">
        Ultimate Beach Club
      </h3>

      <p className="mt-5 font-body text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.28em] text-white/90">
        $2,495 · FULL AQUABANA SETUP
      </p>

      <p className="mt-6 max-w-[58ch] font-body text-[16px] lg:text-[17px] leading-[1.5] text-white/80">
        Transform your yacht into a private floating resort with a full Aquabana beach setup,
        expanded deck space, and seamless water access.
      </p>
    </CardShell>
  );
}

function PrivateChefExperienceCard() {
  return (
    <CardShell className="p-6 sm:p-8 lg:p-12">
      <h3 className="font-heading text-[26px] lg:text-[30px] font-semibold text-[#FFC93F]">
        Private Chef Experience
      </h3>

      <p className="mt-5 font-body text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.28em] text-white/90">
        AVAILABLE ON 6 &amp; 8-HOUR CHARTERS
      </p>

      <p className="mt-6 max-w-[58ch] font-body text-[16px] lg:text-[17px] leading-[1.5] text-white/80">
        Enjoy a fully customized gourmet menu prepared fresh onboard, tailored precisely to your
        preferences and dietary wishes.
      </p>
    </CardShell>
  );
}

function OffshoreAdventureCard() {
  return (
    <CardShell className="p-6 sm:p-8 lg:p-12">
      <h3 className="font-heading text-[26px] lg:text-[30px] font-semibold text-[#FFC93F]">
        Ultimate Beach Club
      </h3>

      <p className="mt-5 font-body text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.28em] text-white/90">
        FROM $300 PER PERSON
      </p>

      <p className="mt-6 max-w-[58ch] font-body text-[16px] lg:text-[17px] leading-[1.5] text-white/80">
        A unique offshore activity featuring professional equipment, expert instruction, and
        eco-friendly materials for a one-of-a-kind adventure.
      </p>
    </CardShell>
  );
}

export default function ElevateYourExperience() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-[#0A2540] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02]">
            Elevate Your Experience
          </h2>
          <p className="mt-4 font-body text-[#0A2540]/80 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.45]">
            Customize your charter with curated add-ons designed to make every moment exceptional.
          </p>
        </div>

        {/* Stretch on desktop so each row has equal height across its two cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <WaterToyPackagesCard />
          <UltimateBeachClubCard />
          <PrivateChefExperienceCard />
          <OffshoreAdventureCard />
        </div>
      </div>
    </section>
  );
}