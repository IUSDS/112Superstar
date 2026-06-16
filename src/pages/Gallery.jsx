import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}/gallery#webpage`,
  url: `${SITE_URL}/gallery`,
  name: "112' Superstar Yacht Gallery",
  description:
    "Photo gallery of the 112' Superstar superyacht — exteriors, interiors, dining, and water toys across Florida's Gulf Coast.",
};

const Gallery = () => {
  const { pathname } = useLocation();

  return (
    <>
      <SEO
        title="112' Superstar Yacht Gallery"
        description="Browse the 112' Superstar superyacht gallery — explore exteriors, interiors, dining, and water toys from this luxury Florida Gulf Coast charter."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={galleryJsonLd}
      />

      <div className="w-full">
        <GalleryHero />
        <GalleryGrid />
      </div>
    </>
  );
};

export default Gallery;
