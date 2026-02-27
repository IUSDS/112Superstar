import React from "react";
import SevenDayHero from "../components/SevenDayExp/SevenDayHero";
import GalleryToggle from "../components/SevenDayExp/GalleryToggle";
import Highlights from "../components/SevenDayExp/Highlights";
import SevenDayPricing from "../components/SevenDayExp/SevenDayPricing";
import SevenDayHeading from "../components/SevenDayExp/SevenDayHeading";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const sevenDayJsonLd = {}
const SevenDayExp = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="112' Superstar | Seven Day Experience"
        description="Experience authentic Awadhi cuisine and Mughlai delicacies inspired by Lucknow, the UNESCO-recognized City of Gastronomy. Firdaus Awadhi Kitchen brings award-worthy heritage food, catering, and workshops rooted in Nawabi tradition."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={sevenDayJsonLd}
      />
      <div className="w-full">
        <SevenDayHero />
        <SevenDayHeading />
        <GalleryToggle />
        <Highlights />
        <SevenDayPricing />
      </div>
    </>
  );
};

export default SevenDayExp;
