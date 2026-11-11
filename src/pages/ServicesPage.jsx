import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Check, Sparkles, ShieldCheck, PhoneCall } from '../components/Icons';
import PageHeroBanner from '../components/PageHeroBanner';
import ScrollReveal from '../components/ScrollReveal';
import SectionSideOverlays from '../components/SectionSideOverlays';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === selectedService) || servicesData[0];
  const IconComp = activeService.icon;

  return (
    <div className="bg-white w-full">
      {/* 1. Animated Hero Banner */}
      <PageHeroBanner
        badge="OUR SPECIALIZED SOLUTIONS"
        title="Comprehensive Cleaning Services in"
        highlightText="Qatar"
        description="From hospital-grade sanitization and heavy post-construction scrubbing to daily commercial maintenance and luxury villa care across Doha, Lusail, and The Pearl."
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        currentPage="Services"
        primaryCtaText="Request Free Quotation"
        primaryCtaLink="/quote"
        secondaryCtaText="Contact Ops Desk"
        secondaryCtaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: '14 Specialized Cleaning & Facility Divisions', icon: Sparkles },
          { label: 'Hospital-Grade HEPA Technology', icon: ShieldCheck },
          { label: '24/7 Rapid Response Crews', icon: PhoneCall },
        ]}
      />

      {/* 2. Services Tabs & Interactive Showcase */}
      <section className="py-20 bg-slate-50 w-full relative overflow-hidden">
        <SectionSideOverlays variant="light" />

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          
          {/* Quick Filter Buttons */}
          <ScrollReveal animation="fade-down">
            <div className="flex flex-wrap gap-2.5 justify-center mb-12">
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                    selectedService === s.id
                      ? 'bg-[#0B1E3B] text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200 shadow-2xs'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Service Showcase Card */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-3 p-2.5 pr-5 rounded-2xl bg-sky-50 text-[#0284C7] shadow-inner">
                  <div className="w-11 h-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-md">
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-sm font-extrabold">{activeService.title}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight leading-tight">
                  {activeService.description}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeService.detailedDesc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Specialized industrial grade rotary scrubbers & HEPA extraction</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Eco-certified and non-toxic disinfection chemistry meeting Qatar health codes</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Flexible shifts (Night shifts, weekend & emergency response dispatch)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#0B1E3B] hover:bg-[#0284C7] transition-all shadow-xl hover:shadow-sky-500/25 active:scale-95 group"
                  >
                    <span>Request Free Quotation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="tel:+97450117741"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#0B1E3B] bg-slate-100 hover:bg-slate-200 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#0284C7]" />
                    <span>Call +974 5011 7741</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-[4/3] group">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className={`w-full h-full object-cover ${activeService.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

          {/* Grid of All 8 Services with Direct Anchor IDs */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
                COMPLETE CATALOG
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1E3B] mt-1">
                Complete Services Catalog
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Card Top Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-[#0B1E3B] uppercase tracking-wider shadow-sm">
                          {item.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#0284C7] shadow-lg flex items-center justify-center group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                        <ItemIcon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="text-lg font-black text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {item.detailedDesc}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-slate-100 mt-5">
                        <Link
                          to="/quote"
                          className="text-xs font-bold text-[#0284C7] hover:text-[#0B1E3B] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                        >
                          <span>Book this service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
