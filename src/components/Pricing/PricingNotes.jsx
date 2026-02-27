// src/components/Pricing/PricingNotes.jsx
import React from "react";

const DEFAULT_NOTES = [
  "Rates may vary based on season and availability",
  "Custom itineraries available upon request",
  "15–20% gratuity is not included in listed rates",
  "Additional upgrades and experiences are optional",
];

function NoteCard({ text }) {
  return (
    <div className="flex items-center gap-4 bg-[#0A2540] px-6 py-4 text-white">
      <span className="font-body text-[18px] sm:text-[20px] leading-none text-white/90">
        *
      </span>
      <p className="font-body text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.3] text-white/90">
        {text}
      </p>
    </div>
  );
}

export default function PricingNotes({ notes = DEFAULT_NOTES }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14">
        {/* Heading (same sizing as previous section) */}
        <div className="text-center">
          <h2 className="font-heading text-[#0A2540] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02]">
            Pricing Notes
          </h2>
        </div>

        {/* Notes grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {notes.map((t, i) => (
            <NoteCard key={`${t}-${i}`} text={t} />
          ))}
        </div>
      </div>
    </section>
  );
}