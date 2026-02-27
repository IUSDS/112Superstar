// src/components/Pricing/PricingHero.jsx
import { hero2, pricingHero } from "../../assets/images";

export default function PricingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Hero frame height */}
      <div className="relative h-[680px] sm:h-[660px] lg:h-[740px]">
        {/* Background image (same settings as Home hero) */}
        <img
          src={pricingHero}
          alt="Choose Your Superstar Experience"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Top centered heading */}
        <div className="absolute inset-x-0 top-0 z-10">
          <div className="px-6 pt-12 text-center sm:px-10 sm:pt-12 lg:px-16 lg:pt-14">
            <h1 className="font-heading pt-10 italic text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
              <span className="block text-4xl font-medium leading-[0.95] sm:text-5xl lg:text-6xl">
                Choose Your
              </span>
              <span className="block text-5xl font-semibold leading-[0.6] sm:text-6xl lg:text-7xl">
                Superstar Experience
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}