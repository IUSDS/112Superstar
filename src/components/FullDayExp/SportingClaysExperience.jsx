import React from "react";
import { imgOne, sportingClays } from "../../assets/images";

export default function SportingClaysExperience({
  leftTitle = "SPORTING CLAYS\nEXPERIENCE",
  rightTitle = "FOR 8 HOUR AND\n6 HOUR CHARTERS",
  image = sportingClays,
  imageAlt = "Sporting clays experience onboard",
  body = "Take Aim From The Rear Deck For A Truly Unique Offshore Challenge. This Pro-Grade Experience Includes Side-By-Side Shotguns, All Safety Gear, And 100 Targets Per Person. We Use Biodegradable Clays And Eco-Friendly Ammunition To Ensure The Gulf Remains As Pristine As We Found It.",
  cards = [
    {
      title: "GROUP PRICING",
      text: "$300 Per Participant, Plus A Daily Fee Of $500 For Up To 6 Clays Participants. For More Than 6 Participants, The Daily Fee Is $1,000. This Covers All Equipment, Targets, And Expert Instruction For The Day.",
    },
    {
      title: "SAFETY & SPECS",
      text: "We Follow Strict Safety Protocols At All Times. To Keep The Experience Sharp And Secure, Alcohol Consumption Is Only Permitted Once The Shooting Round Is Fully Complete.",
    },
  ],
}) {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[96rem] px-0 md:px-10 lg:px-16">
        <div className="px-6 md:px-0">
          {/* 1) Heading */}
          <div className="w-full">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-[auto,1fr] md:items-end md:gap-x-6 md:gap-y-0">
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

              {/* Right heading */}
              <div className="w-full md:w-auto md:text-right md:col-start-2 md:row-start-1 md:justify-self-end">
                <p className="whitespace-pre-line font-heading text-2xl sm:text-3xl lg:text-4xl ml-3 md:ml-0 font-semibold uppercase italic leading-[1.05] tracking-[0.14em] text-[#0A2540]">
                  {rightTitle}
                </p>
              </div>

              {/* Thick border line (starts after the left canvas) */}
              <div className="h-[3px] w-full bg-[#0A2540] -mt-px md:col-start-2 md:row-start-2" />
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
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-right transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
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