import { useEffect, useRef, useState } from "react";
import { hero } from "../../assets/images";

const DESKTOP_VIDEO_URL =
  "https://kyc-public-resources.s3.us-east-1.amazonaws.com/Desktop+KYC+Superstar.mp4";

// TODO: replace with the mobile-optimized video URL when available.
const MOBILE_VIDEO_URL =
  "https://kyc-public-resources.s3.us-east-1.amazonaws.com/KYC+Superstar+(1).mp4";

const MOBILE_BREAKPOINT = 640; // Tailwind `sm`


export default function VideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  const videoSrc = isMobile ? MOBILE_VIDEO_URL : DESKTOP_VIDEO_URL;

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

    // If the source URL changed (e.g., breakpoint flip), reload so the new <source> is fetched.
    v.load();

    return () => v.removeEventListener("canplay", onCanPlay);
  }, [shouldLoadVideo, videoSrc]);

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
                    isReady && !hasError ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />

                <video
                  ref={videoRef}
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-opacity duration-300 motion-reduce:transition-none",
                    isReady && !hasError ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-label="Superstar yacht ambient video"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload={shouldLoadVideo ? "auto" : "none"}
                  poster={hero}
                  onLoadedData={() => setIsReady(true)}
                  onPlaying={() => setIsReady(true)}
                  onError={() => {
                    setHasError(true);
                    setIsReady(false);
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