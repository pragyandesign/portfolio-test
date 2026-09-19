import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Credentials from './pages/Credentials';
import NotFound from './pages/NotFound';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Navbar onOpenContact={() => setIsContactOpen(true)} />
          <main>
            <Routes>
              <Route path="/" element={<Home onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="/about" element={<About onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:id" element={<CaseStudyDetail onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="/credentials" element={<Credentials onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        <Footer onOpenContact={() => setIsContactOpen(true)} />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </Router>
  );
}
