import { hover1, hover2, hover3, hover4 } from "../../assets/images";

export default function GalleryToggle({ items }) {
  const data =
    items?.length
      ? items
      : [
          { src: hover1, alt: "Luxury stateroom", label: "MASTER SUITE" },
          { src: hover2, alt: "Onboard gathering", label: "SIGNATURE MOMENTS" },
          { src: hover3, alt: "Galley", label: "GALLEY" },
          { src: hover4, alt: "Sun deck lounge", label: "SUN DECK LOUNGE" },
        ];

  return (
    <section className="hidden md:block w-full bg-white pb-20 sm:pb-24 lg:pb-26">
      <div className="mx-auto w-full max-w-full px-6 sm:px-10 lg:px-16">
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.slice(0, 4).map((it, idx) => (
              <article
                key={`${it.label}-${idx}`}
                className="h-full rounded-[22px] bg-[#0A2540] pb-[12px] sm:pb-[14px]"
              >
                {/* Image (all 4 corners rounded) */}
                <div className="overflow-hidden rounded-[18px] aspect-[5/6] w-full">
                  <img
                    src={it.src}
                    alt={it.alt || it.label}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text (inside same blue box) */}
                <div className="px-1 pb-4 pt-5">
                  <h3 className="font-heading text-center text-2xl sm:text-3xl lg:text-3xl uppercase italic text-white leading-[1.05]">
                    {it.label}
                  </h3>

                  {/* Optional supporting text if you pass it in items */}
                  {it.text ? (
                    <p className="mt-3 font-body text-base sm:text-lg text-white/85 leading-relaxed">
                      {it.text}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}