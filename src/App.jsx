import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import SevenDayExp from './pages/SevenDayExp';
import FullDayExp from './pages/FullDayExp';
import Pricing from './pages/Pricing';
import { SITE_URL } from './seo/siteMeta';
import { SEO } from './seo/SEO';

function App() {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 60,
      delay: 0,
      disable: prefersReducedMotion,
    });

    const handleLoad = () => AOS.refreshHard();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <SEO
        canonical={canonical}
        includeTitle={false}
        includeDescription={false}
      />

      <Navbar />

      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seven-day-experience" element={<SevenDayExp />} />
          <Route path="/full-day-experience" element={<FullDayExp />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;