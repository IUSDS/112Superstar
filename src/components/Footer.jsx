// src/components/Footer.jsx

const DEFAULT_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "#sevenDayExperience" },
  { label: "Pricing", href: "#pricing" },
];

const DEFAULT_SERVICES = [
  { label: "Seven Day Experience", href: "/seven-day-experience" },
  { label: "Full Day Experience", href: "/full-day-experience" },
  { label: "Pricing", href: "/pricing" },
];

const DEFAULT_CONTACT = [
  { label: "(941) 304-5789", href: "tel:+19413045789" },
  { label: "charter@superstar.com", href: "mailto:info@kokomocharters.com" },
  { label: "Sarasota, Florida", href: "#location" },
];

// Replace these href values with your actual profile URLs
const DEFAULT_SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/KokomoChartersFL/" },
  { label: "Twitter", href: "https://x.com/kokomocharters" },
  { label: "Instagram", href: "https://www.instagram.com/kokomocharters/" },
  { label: "YouTube", href: "https://www.youtube.com/@KokomoCharters" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kokomo-charters/" },
];

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="font-body text-[16px] font-medium text-white sm:text-xl">
        {title}
      </p>

      <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-body text-[16px] leading-[1.6] text-white/85 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-lg"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name, className = "" }) {
  const base = `h-5 w-5 ${className}`;

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-1.75 19.85v-7.02H7.9V12h2.35V9.8c0-2.32 1.38-3.6 3.5-3.6.7 0 1.44.12 2.12.23v2.28h-1.2c-1.18 0-1.55.73-1.55 1.48V12h2.64l-.42 2.83h-2.22v7.02A10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  if (name === "Twitter") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden="true">
        <path d="M22 5.8c-.8.4-1.6.7-2.5.8.9-.5 1.6-1.3 1.9-2.3-.9.5-1.8.9-2.8 1.1A4.1 4.1 0 0 0 12 8.4a11.6 11.6 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.4-.2-2-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 2.9A8.3 8.3 0 0 1 2 18.1a11.7 11.7 0 0 0 6.3 1.8c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.6 1.5-1.3 2.1-2.1z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden="true">
        <path d="M7 2h10c2.76 0 5 2.24 5 5v10c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5zm10 2H7C5.34 4 4 5.34 4 7v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3z" />
        <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        <path d="M17.2 6.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden="true">
        <path d="M21.8 8a2.75 2.75 0 0 0-1.94-1.94C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.86.46A2.75 2.75 0 0 0 2.2 8c-.46 1.66-.46 4-.46 4s0 2.34.46 4a2.75 2.75 0 0 0 1.94 1.94c1.66.46 7.86.46 7.86.46s6.2 0 7.86-.46A2.75 2.75 0 0 0 21.8 16c.46-1.66.46-4 .46-4s0-2.34-.46-4z" />
        <path d="M10 15.5v-7l6 3.5-6 3.5z" fill="#061A2E" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21H18v-5.3c0-1.26-.02-2.89-1.76-2.89-1.76 0-2.03 1.38-2.03 2.8V21H10V9z" />
      </svg>
    );
  }

  return null;
}

export default function Footer({
  brand = "KOKOMO YACHTS",
  description = "Experience unparalleled luxury aboard Florida’s premier 112-foot superyacht. Where exceptional service meets breathtaking destinations.",
  quickLinks = DEFAULT_QUICK_LINKS,
  services = DEFAULT_SERVICES,
  contact = DEFAULT_CONTACT,
  socialLinks = DEFAULT_SOCIAL_LINKS,
}) {
  return (
    <footer className="w-full bg-[#061A2E]">
      <div className="mx-auto max-w-[96rem] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-18">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Brand */}
          <div className="text-center sm:text-left lg:col-span-5">
            <h2 className="font-heading text-[24px] font-medium tracking-[0.04em] text-white sm:text-[30px] sm:tracking-normal">
              {brand}
            </h2>

            <p className="mx-auto mt-4 max-w-[28rem] font-body text-[14px] font-medium leading-[1.75] text-white/78 sm:mx-0 sm:mt-5 sm:max-w-[520px] sm:text-[17px]">
              {description}
            </p>

            {/* Social icons (right after brand + description block) */}
            <div className="mt-7 flex items-center justify-center gap-3 sm:justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  title={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-[#FFC93F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <SocialIcon name={item.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-12">
              <FooterColumn title="QUICK LINKS" items={quickLinks} />
              <FooterColumn title="SERVICES" items={services} />

              <div className="col-span-2 sm:col-span-1">
                <p className="font-body text-[16px] font-medium  text-white sm:text-xl">
                  CONTACT
                </p>

                <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                  {contact.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-body text-[14px] leading-[1.6] text-white/85 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-lg"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom note */}
        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-center font-body text-[11px]tracking-[0.04em] text-white/70 sm:text-lg">
            Website & Marketing managed by{" "}
            <a
              href="https://iusdigitalsolutions.com"
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              IUS Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}