import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgressBar />
      <div className="flex flex-col min-h-screen bg-white text-slate-800">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <ConsultationModal />
      </div>
    </Router>
  );
}
