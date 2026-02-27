import React from "react";
import PricingCards from "../components/Pricing/PricingCards";
import PricingHero from "../components/Pricing/PricingHero";
import DetailCharterPricing from "../components/Pricing/DetailedCharterPricing";
import ElevateYourExperience from "../components/Pricing/ElevateYourExperience";
import PricingNotes from "../components/Pricing/PricingNotes";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.superstar-yacht.com/pricing#webpage",
      "url": "https://www.superstar-yacht.com/pricing",
      "name": "Superstar Yacht Charter Pricing | 112’ Luxury Superyacht Florida",
      "description": "Official pricing for the 112’ Superstar luxury superyacht charter. View cumulative multi-day yacht charter rates for 1 through 7 day fully crewed experiences throughout Florida including Miami, the Florida Keys, and the Dry Tortugas.",
      "keywords": [
        "yacht charter pricing Florida",
        "112'Superstar pricing",
        "112 foot yacht charter cost",
        "multi day yacht charter rates Florida",
        "weekly yacht rental Florida price",
        "7 day yacht charter Florida cost",
        "luxury yacht charter Miami pricing",
        "Miami superyacht rental rates",
        "Florida Keys yacht charter rates",
        "Dry Tortugas yacht charter cost",
        "Gulf Coast yacht charter pricing",
        "crewed yacht charter pricing Florida",
        "private yacht charter cost Miami",
        "private yacht charter cost Florida",
        "private yacht charter cost Florida Keys",
        "private yacht charter cost Gulf Coast",
        "all inclusive yacht charter price Florida",
        "overnight yacht charter Florida rates",
        "superyacht rental Florida rates",
        "private yacht vacation cost Florida",
        "luxury boat charter pricing Miami",
        "multi day yacht rental Miami cost",
        "high end yacht charter Florida",
        "exclusive yacht charter rates",
        "Westport 112 yacht charter price",
        "corporate yacht charter pricing Florida",
        "luxury yacht vacation package cost",
        "Florida yacht charter weekly rates",
        "premium yacht rental Florida pricing",
        "private superyacht charter Florida cost",
        "Florida Keys luxury yacht rental price",
        "Miami luxury yacht experience cost",
        "week long yacht charter Florida price",
        "yacht charter pricing Florida",
  "luxury yacht charter cost Florida",
  "multi-day yacht charter rates Florida",
  "weekly yacht rental price Florida",
  "7 day yacht charter cost Florida",
  "6 day yacht charter cost Florida",
  "5 day yacht charter cost Florida",
  "4 day yacht charter cost Florida",
  "3 day yacht charter cost Florida",
  "2 day yacht charter cost Florida",
  "1 day yacht charter cost Florida",
  "superyacht charter pricing Florida",
  "crewed yacht charter rates Florida",
  "overnight yacht charter cost Florida",
  "Florida Gulf Coast yacht charter pricing",
  "Sarasota yacht charter pricing",
  "St. Petersburg yacht charter rates",
  "Tampa Bay yacht charter cost",
  "Anna Maria Island yacht rental price",
  "Boca Grande yacht charter pricing",
  "Key West yacht charter cost",
  "Captiva Island yacht rental rates",
  "Dry Tortugas yacht charter pricing",
  "Fort Myers yacht charter rates",
  "Longboat Key yacht rental cost",
  "Florida Keys yacht charter pricing",
  "Miami yacht charter pricing",
  "112 foot yacht charter cost",
  "112’ superyacht rental price",
  "fully crewed superyacht cost Florida",
  "private superyacht charter pricing",
  "all inclusive yacht charter cost",
  "luxury yacht vacation package price",
  "corporate yacht charter pricing Florida",
  "week long yacht charter Florida price",
  "extended yacht charter Florida cost",
  "high end yacht rental Florida rates"
        ],
      "mainEntity": {
        "@id": "https://www.superstar-yacht.com/pricing#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.superstar-yacht.com/pricing#service",
      "name": "112’ Superstar Yacht Charter Pricing",
      "description": "Cumulative multi-day pricing for the fully crewed 112’ Superstar yacht charter experience. Includes captain and professional crew for luxury cruising throughout Florida waters.",
      "provider": {
        "@type": "Organization",
        "name": "Kokomo Yachts",
        "url": "https://www.superstar-yacht.com/"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Florida, United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Multi-Day Cumulative Charter Rates",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "1 Day Charter – Cumulative Rate",
            "price": "12995",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "2 Day Charter – Cumulative Rate",
            "price": "22995",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "3 Day Charter – Cumulative Rate",
            "price": "32745",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "4 Day Charter – Cumulative Rate",
            "price": "42245",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "5 Day Charter – Cumulative Rate",
            "price": "51495",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "6 Day Charter – Cumulative Rate",
            "price": "59995",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "7 Day Charter – Cumulative Rate",
            "price": "67995",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    }
  ]
};

const Pricing = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Luxury Superyacht Charter Pricing"
        description="Explore cumulative 1–7 day pricing for the 112’ Superstar superyacht. A fully crewed luxury charter experience available across Miami, Tampa Bay, Sarasota, the Florida Keys, and more."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={pricingJsonLd}
      />
      <div className="w-full">
        <PricingHero />
        <PricingCards />
        <DetailCharterPricing />
        <ElevateYourExperience />
        <PricingNotes />
      </div>
    </>
  );
};

export default Pricing;
