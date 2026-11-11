import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, HeartHandshake, Sparkles, CheckCircle2, ArrowRight } from '../components/Icons';
import CeoMessage from '../components/CeoMessage';
import PageHeroBanner from '../components/PageHeroBanner';
import ScrollReveal from '../components/ScrollReveal';
import ceo1DeskImage from '../assets/new.jpeg';
import ceo1SuitImage from '../assets/ceo-suit.jpg';
import cooImage from '../assets/ceo2.jpg';

export default function AboutPage() {
  const [ceo1Slide, setCeo1Slide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCeo1Slide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '10+', label: 'Years Serving Qatar' },
    { value: '500+', label: 'Commercial Clients' },
    { value: '100%', label: 'Eco-Friendly Detergents' },
    { value: '24/7', label: 'Support & Rapid Response' },
  ];

  return (
    <div className="bg-white w-full">
      {/* 1. Animated Hero Banner */}
      <PageHeroBanner
        badge="ABOUT SUDKI QATAR"
        title="Setting the Benchmark for Cleaning in"
        highlightText="Qatar"
        description="Dedicated to transforming indoor and corporate spaces across Doha with sustainable technology, rigorous training, and impeccable hospital-grade standards."
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        currentPage="About Us"
        primaryCtaText="Request Corporate Proposal"
        primaryCtaLink="/quote"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        bgImage="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Licensed in Doha, Qatar', icon: ShieldCheck },
          { label: 'Hospital Grade Eco-Safe', icon: Sparkles },
          { label: '50-Point Quality Checklist', icon: Award },
        ]}
      />

      {/* 2. CEO Message Component */}
      <ScrollReveal animation="fade-up">
        <CeoMessage />
      </ScrollReveal>

      {/* 3. Stats Counter Section */}
      <ScrollReveal animation="fade-up" delay={150}>
        <section className="bg-white py-12 border-b border-slate-100 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 4. Executive Leadership Team (Both Leaders) */}
      <ScrollReveal animation="fade-up" delay={150}>
        <section className="py-16 bg-white w-full border-b border-slate-100">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight mt-1">
                Guiding Sudki's Vision Across Qatar
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Decades of combined commercial operations, facilities management, and corporate leadership driving industry benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Leader 1 with 10s Slider */}
              <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center group">
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-md relative">
                  <div
                    className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${ceo1Slide * 100}%)` }}
                  >
                    <div className="w-full h-full flex-shrink-0">
                      <img
                        src={ceo1DeskImage}
                        alt="Chief Executive Officer, Sudki Cleaning Qatar - Executive Desk"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="w-full h-full flex-shrink-0">
                      <img
                        src={ceo1SuitImage}
                        alt="Chief Executive Officer, Sudki Cleaning Qatar - Official Portrait"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Slide dots */}
                  <div className="absolute top-2 right-2 z-10 flex gap-1 px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                    <button
                      onClick={() => setCeo1Slide(0)}
                      aria-label="Executive Desk Photo"
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${ceo1Slide === 0 ? 'w-3 bg-sky-300' : 'w-1 bg-white/60'}`}
                    />
                    <button
                      onClick={() => setCeo1Slide(1)}
                      aria-label="Official Suit Portrait"
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${ceo1Slide === 1 ? 'w-3 bg-sky-300' : 'w-1 bg-white/60'}`}
                    />
                  </div>
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wider">
                    Executive Leadership
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1E3B]">
                    Chief Executive Officer
                  </h3>
                  <p className="text-xs font-bold text-[#0284C7]">Sudki Cleaning Qatar</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    Directing corporate strategy, healthcare-grade hygiene standards, and enterprise client partnerships across Doha and Lusail.
                  </p>
                </div>
              </div>

              {/* Leader 2: Chief Operating Officer */}
              <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center group">
                <div className="w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-md">
                  <img
                    src={cooImage}
                    alt="Chief Operating Officer, Sudki Cleaning Qatar"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wider">
                    Executive Leadership
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1E3B]">
                    Chief Operating Officer
                  </h3>
                  <p className="text-xs font-bold text-[#0284C7]">Sudki Cleaning Qatar</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1 italic">
                    "At SUDKI, our vision is to set new standards in professional cleaning through quality, reliability and excellence. We are committed to creating cleaner, healthier and safer environments for every client. With a dedicated team and customer-first approach, we strive to deliver excellence in every service."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. Mission & Vision */}
      <ScrollReveal animation="fade-up" delay={200}>
        <section className="py-16 sm:py-20 bg-slate-50/60 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
                OUR MISSION & VISION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E3B] tracking-tight leading-tight">
                Delivering Healthy Environments for Commercial & Residential Growth
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Sudki was founded with a singular purpose: to elevate cleaning from a routine maintenance task into an essential foundation of public health and professional pride across the State of Qatar.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-base text-[#0B1E3B]">Hospital-Grade Cleanliness Standards</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">We utilize HEPA-filtration machinery, rotary polishers, and non-toxic sanitizing agents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-base text-[#0B1E3B]">Continuous Training Academy</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Our cleaners undergo intensive occupational health & safety training before attending client sites.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-base text-[#0B1E3B]">Qatar National Vision 2030 Sustainability</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Eco-friendly detergents minimizing water wastage and environmental footprint.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#0B1E3B] hover:bg-[#0284C7] transition-all shadow-xl hover:shadow-sky-500/25 active:scale-95 group"
                >
                  <span>Request Corporate Proposal</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=95"
                  alt="Team of cleaners reviewing cleaning standards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03] brightness-[1.01]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
