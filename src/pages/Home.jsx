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

const homeJsonLd = {}

const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
   <SEO
        title="112' Superstar | Home"
        description="Experience authentic Awadhi cuisine and Mughlai delicacies inspired by Lucknow, the UNESCO-recognized City of Gastronomy. Firdaus Awadhi Kitchen brings award-worthy heritage food, catering, and workshops rooted in Nawabi tradition."
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