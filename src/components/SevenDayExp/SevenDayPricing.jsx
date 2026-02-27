import { useEffect, useRef, useState } from "react";
import {pricingFour, pricingOne, pricingThree, pricingTwo } from "../../assets/images";

const TILE_IDS = ["topMiddle", "topRight", "bottomMiddle", "bottomRight"];

export default function SevenDayPricing() {
  const tileRefs = useRef({});

  // Hover-capable devices (desktop) use pure CSS hover.
  // Touch devices (mobile/tablet) use IntersectionObserver + tap-to-toggle.
  const [hoverCapable, setHoverCapable] = useState(true);
  const [inView, setInView] = useState({
    topMiddle: false,
    topRight: false,
    bottomMiddle: false,
    bottomRight: false,
  });
  const [forceText, setForceText] = useState({
    topMiddle: false,
    topRight: false,
    bottomMiddle: false,
    bottomRight: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHoverCapable(mq.matches);
    sync();

    // Safari < 14 fallback
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };
  }, []);

  useEffect(() => {
    if (hoverCapable) return;
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target?.dataset?.tileId;
          if (!id) return;

          if (entry.isIntersecting) {
            // When scrolled into view: show image automatically.
            setInView((prev) => ({ ...prev, [id]: true }));
            setForceText((prev) => ({ ...prev, [id]: false }));
          } else {
            setInView((prev) => ({ ...prev, [id]: false }));
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    TILE_IDS.forEach((id) => {
      const el = tileRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hoverCapable]);

  const registerTileRef = (id) => (el) => {
    tileRefs.current[id] = el;
  };

  const handleTileClick = (id) => {
    if (hoverCapable) return;
    setForceText((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isImageActive = (id) => !hoverCapable && inView[id] && !forceText[id];

  const textOpacity = (id) =>
    isImageActive(id)
      ? "opacity-0"
      : "opacity-100 group-hover:opacity-0";

  const imageOpacity = (id) =>
    isImageActive(id)
      ? "opacity-100"
      : "opacity-0 group-hover:opacity-100";

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-full">
        <div className="border-2 border-[#D8DEE7]">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
            {/* LEFT: Pricing (spans 2 rows on desktop) */}
            <div className="flex flex-col items-center justify-center gap-7 border-[#D8DEE7] px-8 py-14 text-center sm:px-12 sm:py-16 lg:row-span-2 lg:border-r-2 lg:px-14 lg:py-20">
              <div className="space-y-4">
                <p className="font-heading text-5xl font-semibold tracking-[-0.02em] text-[#0A2540] sm:text-6xl lg:text-[64px]">
                  $67,999
                </p>

                <p className="font-body text-xl font-semibold uppercase tracking-[0.14em] text-[#0A2540] sm:text-2xl lg:text-[26px]">
                  Exclusive Pricing
                </p>
              </div>

              <a
                href="tel:+19413045789"
                className="inline-flex items-center justify-center rounded-md bg-[#0A2540] px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0A2540]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/30"
              >
                Book Now
              </a>
            </div>

            {/* TOP-MIDDLE */}
            <div
              ref={registerTileRef("topMiddle")}
              data-tile-id="topMiddle"
              onClick={() => handleTileClick("topMiddle")}
              className="group relative flex items-center justify-center overflow-hidden border-t border-[#D8DEE7] border-[#D8DEE7] bg-white px-8 py-12 text-center sm:px-12 sm:py-14 lg:border-t-0 lg:border-b-2 lg:border-r-2 lg:px-14 lg:py-16"
            >
              {/* Text */}
              <div
                className={`relative z-10 transition-opacity duration-500 ease-out motion-reduce:transition-none ${textOpacity(
                  "topMiddle"
                )}`}
              >
                <p className="max-w-[32ch] font-body text-xl leading-[1.55] text-[#0A2540] sm:text-2xl lg:text-[24px]">
                  Go island hopping and discover sun-drenched, quiet coves that feel like your own private world.
                </p>
              </div>

              {/* Image (fade in) */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${imageOpacity(
                  "topMiddle"
                )}`}
                aria-hidden="true"
              >
                <img
                  src={pricingOne}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* TOP-RIGHT */}
            <div
              ref={registerTileRef("topRight")}
              data-tile-id="topRight"
              onClick={() => handleTileClick("topRight")}
              className="group relative flex items-center justify-center overflow-hidden border-t border-[#D8DEE7] border-[#D8DEE7] bg-white px-8 py-12 text-center sm:px-12 sm:py-14 lg:border-t-0 lg:border-b-2 lg:px-14 lg:py-16"
            >
              {/* Text */}
              <div
                className={`relative z-10 transition-opacity duration-500 ease-out motion-reduce:transition-none ${textOpacity(
                  "topRight"
                )}`}
              >
                <p className="max-w-[32ch] font-body text-xl leading-[1.55] text-[#0A2540] sm:text-2xl lg:text-[24px]">
                  Arrive in style via private tender to explore elite coastal resorts and world-class island boutiques.
                </p>
              </div>

              {/* Image (fade in) */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${imageOpacity(
                  "topRight"
                )}`}
                aria-hidden="true"
              >
                <img
                  src={pricingTwo}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* BOTTOM-MIDDLE */}
            <div
              ref={registerTileRef("bottomMiddle")}
              data-tile-id="bottomMiddle"
              onClick={() => handleTileClick("bottomMiddle")}
              className="group relative flex items-center justify-center overflow-hidden border-t border-[#D8DEE7] border-[#D8DEE7] bg-white px-8 py-12 text-center sm:px-12 sm:py-14 lg:border-t-0 lg:border-r-2 lg:px-14 lg:py-16"
            >
              {/* Text */}
              <div
                className={`relative z-10 transition-opacity duration-500 ease-out motion-reduce:transition-none ${textOpacity(
                  "bottomMiddle"
                )}`}
              >
                <p className="max-w-[32ch] font-body text-xl leading-[1.55] text-[#0A2540] sm:text-2xl lg:text-[24px]">
                  Enjoy a fresh meal at a waterfront restaurant where the salt air seasons every bite and the view is as good as the food.
                </p>
              </div>

              {/* Image (fade in) */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${imageOpacity(
                  "bottomMiddle"
                )}`}
                aria-hidden="true"
              >
                <img
                  src={pricingThree}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* BOTTOM-RIGHT */}
            <div
              ref={registerTileRef("bottomRight")}
              data-tile-id="bottomRight"
              onClick={() => handleTileClick("bottomRight")}
              className="group relative flex items-center justify-center overflow-hidden border-t border-[#D8DEE7] border-[#D8DEE7] bg-white px-8 py-12 text-center sm:px-12 sm:py-14 lg:border-t-0 lg:px-14 lg:py-16"
            >
              {/* Text */}
              <div
                className={`relative z-10 transition-opacity duration-500 ease-out motion-reduce:transition-none ${textOpacity(
                  "bottomRight"
                )}`}
              >
                <p className="max-w-[32ch] font-body text-xl leading-[1.55] text-[#0A2540] sm:text-2xl lg:text-[24px]">
                  Spend your day on the water with jet ski explorations and snorkeling trips through vibrant reefs and clear coastal lagoons.
                </p>
              </div>

              {/* Image (fade in) */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${imageOpacity(
                  "bottomRight"
                )}`}
                aria-hidden="true"
              >
                <img
                  src={pricingFour}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}