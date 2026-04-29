import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; // added useLocation
import { HelmetProvider } from 'react-helmet-async'; // ✅ HelmetProvider add kiya
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfoilio/portfolio";
import CaseStudyView from "./pages/Casestudy-view/casestudy-view";
import Contact from "./pages/Contact/Contact";
import Industries from "./pages/Industries/industries";
import CustomCursor from "./components/CustomCursor";
import About from "./pages/About/about";
import Insight from "./pages/Insight/insight";
import Services from "./pages/Services/services";
import SplashScreen from './components/SplashScreen';

import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Scroll To Top Logic ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        delay: 100,
        easing: 'ease-out-cubic',
      });
      AOS.refresh();
    }
  }, [loading]);

  return (
    // ✅ Pura content HelmetProvider ke andar wrap kar diya
    <HelmetProvider>
      {/* ScrollToTop component ko Routes se pehle lazmi rakhein */}
      <ScrollToTop />

      <SplashScreen loading={loading} onFinish={() => setLoading(false)} />

      <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: loading ? 'none' : 'auto'
      }}>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* ✅ DYNAMIC ROUTE */}
          <Route path="/casestudy-view/:id" element={<CaseStudyView />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
