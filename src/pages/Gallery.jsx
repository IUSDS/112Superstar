import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";
import gallery29 from "../assets/images/gallery29.webp";
import gallery31 from "../assets/images/gallery31.webp";
import gallery35 from "../assets/images/gallery35.webp";

// A few representative exterior shots surfaced in the gallery's structured data.
const featuredImages = [gallery29, gallery31, gallery35];

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}/gallery#webpage`,
  url: `${SITE_URL}/gallery`,
  name: "112' Superstar Yacht Gallery",
  description:
    "Photo gallery of the 112' Superstar superyacht — exteriors, interiors, dining, and water toys across Florida's Gulf Coast.",
  image: featuredImages.map((src) => `${SITE_URL}${src}`),
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
