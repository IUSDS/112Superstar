// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";

const DEFAULT_LINKS = [
  { label: "Home", href: "/" },
  { label: "Seven Day Experience", href: "/seven-day-experience" },
  { label: "Full Day Experience", href: "/full-day-experience" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar({
  brand = "KOKOMO YACHTS",
  links = DEFAULT_LINKS,
  cta = { label: "BOOK NOW", href: "https://fareharbor.com/embeds/book/kokomocharters/items/?flow=1520892&full-items=yes&back=https://www.kokomocharters.com/&g4=yes" },
}) {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const tickingRef = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const next = window.scrollY > 10;
        if (next !== scrolledRef.current) {
          scrolledRef.current = next;
          setScrolled(next);
        }
        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Shell styling
  const shellClasses = scrolled
    ? "border-[#0A2540]/10 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/85"
    : "border-transparent bg-transparent";

  // Colors per state
  const brandClass = scrolled ? "text-[#0A2540]" : "text-white";
  const linkTextClass = scrolled
    ? "text-[#0A2540] hover:opacity-80"
    : "text-white hover:opacity-85";

  const ctaClass = scrolled
    ? "bg-[#0A2540] text-white ring-[#0A2540]/15"
    : "bg-[#0A2540] text-white ring-white/20";

  const mobileRing = scrolled ? "ring-[#0A2540]/15" : "ring-white/20";
  const mobileFocusRing = scrolled
    ? "focus-visible:ring-[#0A2540]/25"
    : "focus-visible:ring-white/40";
  const mobileIconStroke = scrolled ? "#0A2540" : "white";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b",
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        shellClasses,
      ].join(" ")}
    >
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-16">
        <div className="flex h-[90px] items-center">
          {/* Logo (Left) */}
          <a
            href="/"
            className={[
              "shrink-0 font-heading text-[18px] font-semibold  sm:text-3xl",
              brandClass,
            ].join(" ")}
            aria-label={`${brand} Home`}
          >
            {brand}
          </a>

          {/* Desktop Right Cluster (Links + CTA) */}
          <div className="ml-auto hidden items-center justify-end gap-12 lg:flex">
            <nav className="flex items-center gap-8" aria-label="Primary">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={[
                    "font-body text-[16px] font-normal tracking-[0.10em] transition-opacity duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/25",
                    linkTextClass,
                  ].join(" ")}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href={cta.href}
              target="_blank"
              className={[
                "inline-flex items-center justify-center h-[50px] px-12", // Layout & Sizing
                "font-body text-[12px] font-medium uppercase", // Typography
                "rounded-[2px] ring-1", // Borders & Shape
                "transition-opacity duration-150 hover:opacity-90", // Transitions & Hover
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]", // Focus States
                ctaClass, // Dynamic Classes
              ].join(" ")}
            >
              {cta.label}
            </a>
          </div>

          {/* Mobile Menu Button (ONLY mobile) */}
          <button
            type="button"
            className={[
              "ml-auto inline-flex h-[42px] w-[42px] items-center justify-center rounded-[10px] ring-1",
              "transition-opacity duration-150 hover:opacity-90",
              "focus-visible:outline-none focus-visible:ring-2",
              mobileRing,
              mobileFocusRing,
              "lg:hidden",
            ].join(" ")}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke={mobileIconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke={mobileIconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Panel (ONLY mobile) */}
        <div
          id="mobile-nav"
          className={[
            "lg:hidden",
            "overflow-hidden transition-[max-height,opacity] duration-300",
            menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div
            className={[
              "rounded-[14px] pb-6",
              scrolled
                ? "bg-white/92 backdrop-blur-xl ring-1 ring-[#0A2540]/10"
                : "bg-white/10 backdrop-blur-xl ring-1 ring-white/15",
            ].join(" ")}
          >
            <nav className="flex flex-col gap-2 px-1 pt-2" aria-label="Mobile">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "rounded-[12px] px-4 py-3 font-body text-[14px] font-medium tracking-[0.08em]",
                    "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2",
                    scrolled
                      ? "text-[#0A2540]/90 hover:bg-[#0A2540]/5 focus-visible:ring-[#0A2540]/25"
                      : "text-white/92 hover:bg-white/10 focus-visible:ring-white/40",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              ))}

              <a
                href={cta.href}
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className={[
                  "mt-2 inline-flex h-[40px] items-center justify-center rounded-[12px] px-6",
                  "font-body text-[12px] font-semibold uppercase tracking-[0.22em]",
                  "ring-1 transition-opacity duration-150 hover:opacity-90",
                  "focus-visible:outline-none focus-visible:ring-2",
                  scrolled
                    ? "bg-[#0A2540] text-white ring-[#0A2540]/15 focus-visible:ring-[#0A2540]/25"
                    : "bg-[#0A2540]/90 text-white ring-white/20 focus-visible:ring-white/40",
                ].join(" ")}
              >
                {cta.label}
              </a>
            </nav>
          </div>

          <div className="h-5" />
        </div>
      </div>
    </header>
  );
}
