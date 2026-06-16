import { useEffect, useRef, useState } from "react";
import { hero } from "../../assets/images";

const YOUTUBE_VIDEO_ID = "0YNkVyedU5k";

// Autoplay requires the video to be muted. `loop` needs `playlist` set to the
// same id. `controls=0` + `modestbranding` keep the ambient, chrome-free look.
const YOUTUBE_EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}` +
  `&controls=0&playsinline=1&rel=0&modestbranding=1&disablekb=1`;

export default function VideoSection() {
  const sectionRef = useRef(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: "1200px 0px", threshold: 0 }
    );

    io.observe(el);

    const idleStart = () => setShouldLoadVideo(true);
    const idleId =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? window.requestIdleCallback(idleStart, { timeout: 1500 })
        : window.setTimeout(idleStart, 1200);

    return () => {
      io.disconnect();
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="tour" className="w-full bg-white">
      <div className="mx-auto max-w-8xl px-6 py-0 sm:px-10 lg:px-16 lg:py-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-semibold italic text-[#0A2540] sm:text-5xl md:text-6xl lg:text-7xl">
            A NEW STANDARD OF LUXURY
          </h2>
          <p className="mt-3 font-body text-lg font-medium text-[#0A2540]/70 sm:text-xl lg:text-3xl">
            Every detail designed for your comfort
          </p>
        </div>

        {/* Video (ambient, autoplay, no controls) */}
        <div className="mt-10 sm:mt-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#7b8794] shadow-[0_18px_52px_rgba(10,37,64,0.10)]">
              {/* Bigger on mobile: tall viewport-driven height; desktop keeps wide cinematic aspect */}
              <div className="relative h-[78svh] min-h-[460px] max-h-[720px] sm:h-auto sm:aspect-video md:aspect-[2.2/1]">
                {/* Poster overlay */}
                <img
                  src={hero}
                  alt="Superstar yacht video preview"
                  decoding="async"
                  fetchpriority="high"
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-opacity duration-300 motion-reduce:transition-none",
                    isReady ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />

                {shouldLoadVideo ? (
                  <iframe
                    src={YOUTUBE_EMBED_URL}
                    title="Superstar yacht ambient video"
                    className={[
                      "absolute inset-0 h-full w-full",
                      "transition-opacity duration-300 motion-reduce:transition-none",
                      isReady ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={() => setIsReady(true)}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
