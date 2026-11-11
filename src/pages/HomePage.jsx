import React from 'react';
import Hero from '../components/Hero';
import CeoMessage from '../components/CeoMessage';
import ServicesGrid from '../components/ServicesGrid';
import OurTeamSection from '../components/OurTeamSection';
import WhyChooseAndIndustries from '../components/WhyChooseAndIndustries';
import QuotationSection from '../components/QuotationSection';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 1. Hero Section (Immediate animated entrance) */}
      <Hero />

      {/* 2. CEO's Message & Core Values */}
      <ScrollReveal animation="fade-up" duration={800}>
        <CeoMessage />
      </ScrollReveal>

      {/* 3. Our Services (Comprehensive Cleaning Services) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <ServicesGrid showAllLink={true} />
      </ScrollReveal>

      {/* 4. Our Specialized Team */}
      <ScrollReveal animation="fade-up" duration={800}>
        <OurTeamSection />
      </ScrollReveal>

      {/* 5. Split Section: Why Choose Sudki? + Industries We Serve */}
      <ScrollReveal animation="fade-up" duration={800}>
        <WhyChooseAndIndustries />
      </ScrollReveal>

      {/* 6. Request a Free Cleaning Quotation */}
      <ScrollReveal animation="fade-up" duration={800}>
        <QuotationSection />
      </ScrollReveal>
    </div>
  );
}
