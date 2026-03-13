import { useState } from "react";
import { pricingHero } from "../../assets/images";

export default function PricingHero() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#0A2540] text-white">
      <div className="relative h-[680px] sm:h-[660px] lg:h-[740px]">
        {/* Premium first-paint fallback */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            heroLoaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,201,63,0.14),transparent_34%),linear-gradient(180deg,#10253f_0%,#0A2540_48%,#071a2c_100%)]" />
        </div>

        {/* Hero image */}
        <img
          src={pricingHero}
          alt="Choose Your Superstar Experience"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          sizes="100vw"
          width={1920}
          height={1080}
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Legibility tint */}
        <div className="absolute inset-0 bg-black/12" aria-hidden="true" />

        {/* Top centered heading */}
        <div className="absolute inset-x-0 top-0 z-10">
          <div className="px-6 pt-12 text-center sm:px-10 sm:pt-12 lg:px-16 lg:pt-14">
            <h1 className="font-heading pt-10 italic text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
              <span className="block text-4xl font-medium leading-[0.95] sm:text-5xl lg:text-6xl">
                Choose Your
              </span>
              <span className="block text-5xl font-semibold leading-[0.85] sm:text-6xl lg:text-7xl">
                Superstar Experience
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}