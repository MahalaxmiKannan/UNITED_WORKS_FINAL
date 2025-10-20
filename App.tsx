
import React, { useState, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Career from './pages/Career';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-uw-grey-2 font-sans min-h-screen">
        <div className="max-w-screen-xl mx-auto p-1 sm:p-2 md:p-4">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl overflow-hidden text-uw-dark">
                <Header onContactClick={handleOpenContact} />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/career" element={<Career />} />
                  </Routes>
                </main>
                <Footer onContactClick={handleOpenContact} />
            </div>
        </div>
      </div>
      <Contact isOpen={isContactOpen} onClose={handleCloseContact} />
    </HashRouter>
  );
}

export default App;
