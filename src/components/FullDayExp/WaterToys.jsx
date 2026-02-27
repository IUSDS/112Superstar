import React from "react";
import {waterToy1, waterToy2, waterToy3 } from "../../assets/images";

const DEFAULT_IMAGES = [
  { src: waterToy1, alt: "Floating cabana on the water" },
  { src: waterToy2, alt: "Jet ski action" },
  { src: waterToy3, alt: "Underwater sea toy" },
];

export default function WaterToysSection({
  images = DEFAULT_IMAGES,
}) {
  const safeImages = images.filter(Boolean).slice(0, 3);
  const desktopImages = safeImages.length ? safeImages : DEFAULT_IMAGES;

  // Mobile shows the 3rd image (matches your screenshot).
  const mobileImage = desktopImages[2] || desktopImages[0];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[96rem] px-4 md:px-10 lg:px-16">
        {/* Image canvas (clipped top-left + bottom-right) */}
        <div
          className={[
            "relative w-full overflow-hidden bg-white",
            "h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]",
            // clip-path: cut TL + BR (mobile smaller cut, desktop larger cut)
            "[clip-path:polygon(28px_0,100%_0,100%_calc(100%_-_28px),calc(100%_-_28px)_100%,0_100%,0_28px)]",
            "md:[clip-path:polygon(56px_0,100%_0,100%_calc(100%_-_56px),calc(100%_-_56px)_100%,0_100%,0_56px)]",
          ].join(" ")}
        >
          {/* Desktop: 3 images, no gaps */}
          <div className="hidden h-full w-full md:grid md:grid-cols-3">
            {desktopImages.slice(0, 3).map((img, i) => (
              <div key={i} className="group h-full w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
                />
              </div>
            ))}
          </div>

          {/* Mobile: single cover image (still clipped) */}
          <div className="h-full w-full md:hidden">
            <div className="group h-full w-full overflow-hidden">
              <img
                src={mobileImage.src}
                alt={mobileImage.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="px-6 md:px-0">
          <p className="mx-auto mt-8 max-w-full sm:max-w-5xl lg:max-w-6xl whitespace-pre-line text-center font-body text-lg italic text-[#0A2540] lg:leading-[1.5em] sm:mt-10 md:text-xl lg:text-2xl">
            Turn The Back Of The Yacht Into A Massive Floating Lounge. This Setup Expands Your Deck Space Right
            Onto The Water With A Netted Sea Pool, A Shaded Cabana, And A Stable Platform For Easy Swimming. 
            It’s The Best Way To Spend An Entire Day On The Water.

          </p>
        </div>
      </div>
    </section>
  );
}