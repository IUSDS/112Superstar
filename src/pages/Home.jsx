import React from 'react'
import HeroSection from '../components/Home/Hero'
import SpecsSection from '../components/Home/SpecsSection'
import OwnTheMoment from '../components/Home/OwnTheMoment'
import SevenDayExperience from '../components/Home/SevenDayExperience'
import VideoSection from '../components/Home/VideoSection'
import GallerySection from '../components/Home/GallerySection'
import FullDayExperience from '../components/Home/FullDayExperience'
import { SEO } from "../seo/SEO"; // ⬅️ add
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from 'react-router-dom'

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.superstar-yacht.com/#product",
  "url": "https://www.superstar-yacht.com/",
  "name": "112’ Superstar Yacht | Luxury Multi-Day & Private Yacht Charters Florida",
  "description": "The 112’ Superstar Yacht is a fully crewed luxury superyacht delivering elite multi-day yacht charter Florida experiences, overnight yacht charter Florida escapes, and luxury yacht rental Miami departures. Designed for private boat charters Florida Keys, week-long boat rental Florida itineraries, and crewed yacht charter voyages, Superstar offers a liveaboard yacht rental experience with private chef yacht charter service, all-inclusive yacht vacation packages, and custom routing from Miami to Bimini yacht charter crossings to Dry Tortugas boat trip expeditions, Fort Lauderdale yacht rental departures, and Florida Keys sailing charter adventures.",
  "keywords": [ 
  "multi-day yacht charter Florida",
    "multi-day yacht charter Florida Gulf Coast",
    "multi-day yacht charter Sarasota",
    "multi-day yacht charter St.Petersburg",
    "multi-day yacht charter St.Pete",
    "multi-day yacht charter Tampa Bay",
    "multi-day yacht charter Tampa",
    "multi-day yacht charter Anna Maria",
    "multi-day yacht charter Anna Maria Island",
    "multi-day yacht charter Gulf Coast",
    "multi-day yacht charter Boca Grande",
    "multi-day yacht charter Key West",
    "multi-day yacht charter Captiva Island",
    "multi-day yacht charter Dry Tortugas",
    "multi-day yacht charter Fort Myers",
    "multi-day yacht charter Egmont Key",
    "multi-day yacht charter Longboat Key",
    "multi-day yacht charter Florida Keys",
    "multi-day yacht charter Miami",
    "overnight yacht charter Florida",
    "overnight yacht charter Florida Gulf Coast",
    "overnight yacht charter Sarasota",
    "overnight yacht charter St.Petersburg",
    "overnight yacht charter St.Pete",
    "overnight yacht charter Tampa Bay",
    "overnight yacht charter Tampa",
    "overnight yacht charter Anna Maria",
    "overnight yacht charter Anna Maria Island",
    "overnight yacht charter Gulf Coast",
    "overnight yacht charter Boca Grande",
    "overnight yacht charter Key West",
    "overnight yacht charter Captiva Island",
    "overnight yacht charter Dry Tortugas",
    "overnight yacht charter Fort Myers",
    "overnight yacht charter Egmont Key",
    "overnight yacht charter Longboat Key",
    "overnight yacht charter Florida Keys",
    "overnight yacht charter Miami",
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
    "week-long boat rental Florida",
    "crewed yacht charters Florida",
    "crewed yacht charters Florida Gulf Coast",
    "crewed yacht charters Sarasota",
    "crewed yacht charters St.Petersburg",
    "crewed yacht charters St.Pete",
    "crewed yacht charters Tampa Bay",
    "crewed yacht charters Tampa",
    "crewed yacht charters Anna Maria",
    "crewed yacht charters Anna Maria Island",
    "crewed yacht charters Gulf Coast",
    "crewed yacht charters Boca Grande",
    "crewed yacht charters Key West",
    "crewed yacht charters Captiva Island",
    "crewed yacht charters Dry Tortugas",
    "crewed yacht charters Fort Myers",
    "crewed yacht charters Egmont Key",
    "crewed yacht charters Longboat Key",
    "crewed yacht charters Florida Keys",
    "crewed yacht charters Miami",
    "crewed superyacht charters Florida",
    "crewed superyacht charters Florida Gulf Coast",
    "crewed superyacht charters Sarasota",
    "crewed superyacht charters St.Petersburg",
    "crewed superyacht charters St.Pete",
    "crewed superyacht charters Tampa Bay",
    "crewed superyacht charters Tampa",
    "crewed superyacht charters Anna Maria",
    "crewed superyacht charters Anna Maria Island",
    "crewed superyacht charters Gulf Coast",
    "crewed superyacht charters Boca Grande",
    "crewed superyacht charters Key West",
    "crewed superyacht charters Captiva Island",
    "crewed superyacht charters Dry Tortugas",
    "crewed superyacht charters Fort Myers",
    "crewed superyacht charters Egmont Key",
    "crewed superyacht charters Longboat Key",
    "crewed superyacht charters Florida Keys",
    "crewed superyacht charters Miami",
    "superyacht charters Florida",
    "superyacht charters Florida Gulf Coast",
    "superyacht charters Sarasota",
    "superyacht charters St.Petersburg",
    "superyacht charters St.Pete",
    "superyacht charters Tampa Bay",
    "superyacht charters Tampa",
    "superyacht charters Anna Maria",
    "superyacht charters Anna Maria Island",
    "superyacht charters Gulf Coast",
    "superyacht charters Boca Grande",
    "superyacht charters Key West",
    "superyacht charters Captiva Island",
    "superyacht charters Dry Tortugas",
    "superyacht charters Fort Myers",
    "superyacht charters Egmont Key",
    "superyacht charters Longboat Key",
    "superyacht charters Florida Keys",
    "superyacht charters Miami",
    "superyacht excursion Florida",
    "superyacht excursion Florida Gulf Coast",
    "superyacht excursion Sarasota",
    "superyacht excursion St.Petersburg",
    "superyacht excursion St.Pete",
    "superyacht excursion Tampa Bay",
    "superyacht excursion Tampa",
    "superyacht excursion Anna Maria",
    "superyacht excursion Anna Maria Island",
    "superyacht excursion Gulf Coast",
    "superyacht excursion Boca Grande",
    "superyacht excursion Key West",
    "superyacht excursion Captiva Island",
    "superyacht excursion Dry Tortugas",
    "superyacht excursion Fort Myers",
    "superyacht excursion Egmont Key",
    "superyacht excursion Longboat Key",
    "superyacht excursion Florida Keys",
    "superyacht excursion Miami",
    "private chef yacht charter",
    "all-inclusive yacht vacation",
    "Dry Tortugas boat trip",
    "Florida Keys sailing charter",
    "private chef yacht charter",
    "all-inclusive yacht vacation",
    "112 foot yacht charter Florida",
    "112’ superyacht rental Miami",
    "fully crewed superyacht Florida",
    "luxury crewed yacht charter",
    "private superyacht charter Florida Keys",
    "corporate yacht charter Florida",
    "birthday yacht charter Miami",
    "bachelor party yacht charter Florida",
    "luxury family yacht vacation Florida",
    "extended yacht charter Florida Gulf Coast",
    "4 hour yacht charter Florida",
    "6 hour yacht charter Florida",
    "8 hour yacht charter Florida",
    "1 day yacht charter Florida",
    "2 day yacht charter Florida",
    "3 day yacht charter Florida",
    "4 day yacht charter Florida",
    "5 day yacht charter Florida",
    "6 day yacht charter Florida",
    "7 day yacht charter Florida",
    "4 hour yacht charter Florida",
    "6 hour yacht charter Florida",
    "8 hour yacht charter Florida",
    "1 day superyacht charter Florida",
    "2 day superyacht charter Florida",
    "3 day superyacht charter Florida",
    "4 day superyacht charter Florida",
    "5 day superyacht charter Florida",
    "6 day superyacht charter Florida",
    "7 day superyacht charter Florida"
  ],
  "Offers": {
    "@type": "OfferCatalog",
    "@id": "https://www.kokomocharters.com/112-superstar-yacht#offer-catalog",
    "name": "112’ Superstar Yacht Charter Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "@id": "https://www.kokomocharters.com/112-superstar-yacht#multi-day-offer",
        "name": "Multi-Day Yacht Charter",
        "url": "https://www.kokomocharters.com/112-superstar-yacht/multi-day",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "12995",
          "maxPrice": "67995",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "@id": "https://www.kokomocharters.com/112-superstar-yacht#8-hour-offer",
        "name": "8-Hour Yacht Charter",
        "url": "https://www.kokomocharters.com/112-superstar-yacht/8-hour",
        "price": "12995",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "@id": "https://www.kokomocharters.com/112-superstar-yacht#6-hour-offer",
        "name": "6-Hour Yacht Charter",
        "url": "https://www.kokomocharters.com/112-superstar-yacht/6-hour",
        "price": "7995",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "@id": "https://www.kokomocharters.com/112-superstar-yacht#4-hour-offer",
        "name": "4-Hour Yacht Charter",
        "url": "https://www.kokomocharters.com/112-superstar-yacht/4-hour",
        "price": "5995",
        "priceCurrency": "USD"
      }
    ]
  }
}

const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
   <SEO
        title="112’Superstar | The Premier Superyacht On Florida’s Gulf Coast"
        description=" Experience 112’ Superstar, the largest superyacht on Florida’s Gulf Coast, fully crewed with a private chef, water toys & custom itineraries. Multi-day & day charters across Florida with luxury amenities from Sarasota, Tampa Bay, St.Petersburg and Anna Maria Island."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={homeJsonLd}
      /> 
    <div className='w-full'>
      <HeroSection />
      <SpecsSection />
      <OwnTheMoment />
      <SevenDayExperience />
      <VideoSection />
      <GallerySection />
      <FullDayExperience />
      
      </div>
    </>
  )
}

export default Home