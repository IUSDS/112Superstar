import { useEffect, useRef, useState } from "react";
import videoSrc from "../../assets/videos/videoSrc.MP4";
import { hero } from "../../assets/images";

export default function VideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

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
      { root: null, rootMargin: "250px 0px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // If autoplay is blocked, keep poster visible (luxury ambient should never show controls)
  useEffect(() => {
    if (!shouldLoadVideo) return;
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Autoplay blocked; keep poster overlay and do not show controls
      }
    };

    const onCanPlay = () => tryPlay();
    v.addEventListener("canplay", onCanPlay);

    return () => v.removeEventListener("canplay", onCanPlay);
  }, [shouldLoadVideo]);

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
          <div className="mx-auto w-full max-w-6xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#7b8794] shadow-[0_18px_52px_rgba(10,37,64,0.10)]">
              {/* Bigger on mobile: tall viewport-driven height; desktop keeps wide cinematic aspect */}
              <div className="relative h-[70svh] min-h-[420px] max-h-[640px] sm:h-auto sm:aspect-video md:aspect-[2.35/1]">
                {/* Poster overlay */}
                <img
                  src={hero}
                  alt="Superstar yacht video preview"
                  loading="lazy"
                  decoding="async"
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-opacity duration-500 motion-reduce:transition-none",
                    isPlaying && !hasError ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />

                <video
                  ref={videoRef}
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-opacity duration-500 motion-reduce:transition-none",
                    isPlaying && !hasError ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-label="Superstar yacht ambient video"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload={shouldLoadVideo ? "metadata" : "none"}
                  poster={hero}
                  onPlaying={() => setIsPlaying(true)}
                  onError={() => {
                    setHasError(true);
                    setIsPlaying(false);
                  }}
                >
                  {shouldLoadVideo ? <source src={videoSrc} type="video/mp4" /> : null}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}