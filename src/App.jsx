
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import SevenDayExp from './pages/SevenDayExp'
import FullDayExp from './pages/FullDayExp'
import Pricing from './pages/Pricing'
import { SITE_URL } from './seo/siteMeta'
import { SEO } from './seo/SEO'

function App() {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;

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
  )
}

export default App
