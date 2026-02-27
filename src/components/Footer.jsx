// src/components/Footer.jsx

const DEFAULT_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const DEFAULT_SERVICES = [
  { label: "Seven Day Experience", href: "/seven-day-experience" },
  { label: "Full Day Experience", href: "/full-day-experience" },
  { label: "Pricing", href: "/pricing" },
];

const DEFAULT_CONTACT = [
  { label: "(941) 304-5789", href: "tel:+19413045789" },
  { label: "charter@superstar.com", href: "mailto:charter@superstar.com" },
  { label: "Sarasota, Florida", href: "#location" },
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

export default function Footer({
  brand = "KOKOMO YACHTS",
  description = "Experience unparalleled luxury aboard Florida’s premier 112-foot superyacht. Where exceptional service meets breathtaking destinations.",
  quickLinks = DEFAULT_QUICK_LINKS,
  services = DEFAULT_SERVICES,
  contact = DEFAULT_CONTACT,
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
            Website & Marketing managed by <a href="https://iusdigitalsolutions.com" className="underline" target="_blank">IUS Digital Solutions</a> 
          </p>
        </div>
      </div>
    </footer>
  );
}