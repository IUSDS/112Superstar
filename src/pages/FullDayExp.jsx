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

const fulldayJsonLd = {}

const FullDayExp = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="112' Superstar | Full Day Experience"
        description="Experience authentic Awadhi cuisine and Mughlai delicacies inspired by Lucknow, the UNESCO-recognized City of Gastronomy. Firdaus Awadhi Kitchen brings award-worthy heritage food, catering, and workshops rooted in Nawabi tradition."
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
