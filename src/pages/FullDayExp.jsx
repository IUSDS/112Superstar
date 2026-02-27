import React from "react";
import FullDayExperienceHero from "../components/FullDayExp/FullDayExperienceHero";
import WhatAwaitsYou from "../components/FullDayExp/WhatAwaitsYou";
import WaterActivitiesHeading from "../components/FullDayExp/WaterActivitiesHeading";
import EightHourHeading from "../components/FullDayExp/EightHourHeading";
import WaterToysSection from "../components/FullDayExp/WaterToys";
import WaterToyPackages from "../components/FullDayExp/WaterToyPackages";
import SportingClaysExperience from "../components/FullDayExp/SportingClaysExperience";
import DiningAndCulinaryOptions from "../components/FullDayExp/DiningAndCulinaryOptions";
import { SITE_URL } from "../seo/siteMeta";
import { SEO } from "../seo/SEO";
import { useLocation } from "react-router-dom";

const fulldayJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.superstar-yacht.com/full-day-experience#webpage",
      "url": "https://www.superstar-yacht.com/full-day-experience",
      "name": "Full Day Yacht Charter Experience | 112’ Superstar Luxury Superyacht Florida",
      "description": "An 8-hour fully crewed luxury yacht charter aboard the 112’ Superstar featuring private chef dining, premium water toys, beach club upgrades, and curated offshore experiences throughout Miami and South Florida waters.",
      "keywords":[
      "all inclusive yacht charter",
      "all inclusive superyacht charter",
      "luxury yacht rental Florida",
    "luxury yacht rental Gulf Coast",
    "luxury yacht rental Sarasota",
    "luxury yacht rental Tampa Bay",
    "luxury yacht rental St. Petersburg",
    "luxury yacht rental St. Pete",
    "luxury yacht rental Boca Grande",
    "luxury yacht rental Key West",
    "luxury yacht rental Captiva Island",
    "luxury yacht rental Dry Tortugas",
    "luxury yacht rental Fort Myers",
    "luxury yacht rental Egmont Key",
    "luxury yacht rental Longboat Key",
    "luxury yacht rental Florida Keys",
    "luxury yacht rental Miami",
    "private boat charters Florida",
    "private boat charters Gulf Coast",
    "private boat charters Sarasota",
    "private boat charters Tampa Bay",
    "private boat charters St. Petersburg",
    "private boat charters St. Pete",
    "private boat charters Boca Grande",
    "private boat charters Key West",
    "private boat charters Captiva Island",
    "private boat charters Dry Tortugas",
    "private boat charters Fort Myers",
    "private boat charters Egmont Key",
    "private boat charters Longboat Key",
    "private boat charters Florida Keys",
    "private boat charters Miami",
    "beach club setup",
    "aquabana beach club setup",
    "sporting clays experience Florida",
    "sporting clays experience gulf coast",
    "sporting clays experience Sarasota",
    "sporting clays experience St.Pete",
    "sporting clays experience St.Petersburg",
    "sporting clays experience Tampa Bay",
    "sporting clays experience Anna Maria",
    "Bahamas yacht experience"
      ],
      "mainEntity": {
        "@id": "https://www.superstar-yacht.com/full-day-experience#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.superstar-yacht.com/full-day-experience#service",
      "name": "Full Day Charter – 112’ Superstar Yacht",
      "description": "An 8-hour luxury superyacht charter including captain, mate, stewardess, gourmet private chef options, jet skis, Seabobs, paddleboards, snorkel gear, and curated offshore experiences.",
      "provider": {
        "@type": "Organization",
        "name": "Kokomo Yachts",
        "url": "https://www.superstar-yacht.com/"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Florida, United States"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.superstar-yacht.com/full-day-experience",
        "price": "12995",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Full Day Experience Enhancements & Upgrades",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Included Offerings",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Full Professional Crew",
                "itemOffered": {
                  "@type": "Service",
                  "description": "Captain, dedicated mate, and stewardess delivering full-service hospitality."
                }
              },
              {
                "@type": "Offer",
                "name": "Full Beach Club Setup",
                "itemOffered": {
                  "@type": "Service",
                  "description": "Jet skis, Seabobs, and Aquabana beach platform creating a private aquatic playground."
                }
              },
              {
                "@type": "Offer",
                "name": "Water Toy Collection",
                "itemOffered": {
                  "@type": "Service",
                  "description": "Paddleboards, snorkel gear, and premium water equipment."
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "name": "Superyacht Beach Club & Water Toy Upgrade",
            "price": "1495",
            "priceCurrency": "USD",
            "description": "8-hour exclusive floating lounge expansion including netted sea pool, shaded cabana, and extended swim platform."
          },
          {
            "@type": "OfferCatalog",
            "name": "Water Toy Packages (Additional)",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "2 Jet Skis",
                "price": "750",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "2 SeaBobs",
                "price": "650",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Jet Ski + SeaBob Combo",
                "price": "1299",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Ultimate Beach Party Package",
                "price": "2495",
                "priceCurrency": "USD",
                "description": "Includes full Aquabana Beach Club setup, 2 Jet Skis, and 2 SeaBobs."
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Sporting Clays Offshore Experience",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Sporting Clays Participation",
                "price": "300",
                "priceCurrency": "USD",
                "description": "Per participant pricing including 100 targets, side-by-side shotguns, safety gear, and expert instruction."
              },
              {
                "@type": "Offer",
                "name": "Sporting Clays Daily Experience Fee (Up to 6 Participants)",
                "price": "500",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Sporting Clays Daily Experience Fee (More Than 6 Participants)",
                "price": "1000",
                "priceCurrency": "USD"
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Dining & Culinary Options",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Private Chef Experience",
                "description": "A professional chef prepares a fully customized high-end menu onboard. Available on 8-hour and 6-hour charters."
              },
              {
                "@type": "Offer",
                "name": "Signature Gourmet Package",
                "description": "Continental breakfast, premium boxed lunches, afternoon snacks, Coca-Cola products, and bottled water."
              }
            ]
          }
        ]
      }
    }
  ]
}

const FullDayExp = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="8-Hour All Inclusive Luxury Superyacht Charter Florida"
        description="Step aboard 112’Superstar, a fully crewed 8-hour superyacht charter with chef dining, Aquabana beach club, water toys & curated offshore adventures on Florida’s Gulf Coast."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={fulldayJsonLd}
      />
      <div className="w-full">
        <FullDayExperienceHero />
        <EightHourHeading />
        <WhatAwaitsYou />
        <WaterActivitiesHeading />
        <WaterToysSection />
        <WaterToyPackages />
        <SportingClaysExperience />
        <DiningAndCulinaryOptions />
      </div>
    </>
  );
};

export default FullDayExp;
