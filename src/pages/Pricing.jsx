import React from "react";
import PricingCards from "../components/Pricing/PricingCards";
import PricingHero from "../components/Pricing/PricingHero";
import DetailCharterPricing from "../components/Pricing/DetailedCharterPricing";
import ElevateYourExperience from "../components/Pricing/ElevateYourExperience";
import PricingNotes from "../components/Pricing/PricingNotes";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const pricingJsonLd = {};

const Pricing = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="112' Superstar | Pricing"
        description="Experience authentic Awadhi cuisine and Mughlai delicacies inspired by Lucknow, the UNESCO-recognized City of Gastronomy. Firdaus Awadhi Kitchen brings award-worthy heritage food, catering, and workshops rooted in Nawabi tradition."
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
