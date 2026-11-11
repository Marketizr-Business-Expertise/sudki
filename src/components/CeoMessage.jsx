import React, { useState, useEffect } from 'react';
import { ShieldCheck, Leaf, Clock, HeartHandshake } from './Icons';
import ceo1DeskImage from '../assets/new.jpeg';
import ceo1SuitImage from '../assets/ceo-suit.jpg';
import cooImage from '../assets/ceo2.jpg';
import SectionSideOverlays from './SectionSideOverlays';

export default function CeoMessage() {
  const [ceo1Index, setCeo1Index] = useState(0);

  const ceo1Images = [
    {
      src: ceo1DeskImage,
      alt: 'Chief Executive Officer, Sudki Cleaning Qatar - Executive Desk',
    },
    {
      src: ceo1SuitImage,
      alt: 'Chief Executive Officer, Sudki Cleaning Qatar - Official Portrait',
    },
  ];

  // Auto-slide between both CEO 1 images every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCeo1Index((prev) => (prev === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      title: 'Trusted Team',
      icon: ShieldCheck,
    },
    {
      title: 'Eco-Friendly',
      icon: Leaf,
    },
    {
      title: 'Timely Service',
      icon: Clock,
    },
    {
      title: 'Customer Focused',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="relative bg-[#F4F9FD] py-4 sm:py-6 lg:py-8 overflow-hidden border-y border-slate-100 w-full">
      <SectionSideOverlays variant="light" />
      
      {/* Container matching the panoramic card across full width */}
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/80 overflow-hidden">
          
          {/* ======================================================== */}
          {/* 1. DESKTOP VIEW (xl:grid): 3-COLUMN PANORAMIC LAYOUT     */}
          {/* Left: CEO 1 | Middle: Dual Quotes & Badges | Right: CEO 2 */}
          {/* ======================================================== */}
          <div className="hidden xl:grid xl:grid-cols-12 items-stretch relative z-10">
            
            {/* LEFT: CEO 1 (CHIEF EXECUTIVE OFFICER) - SLIDES EVERY 10 SECONDS */}
            <div className="xl:col-span-3 relative self-stretch flex items-stretch">
              <div className="relative w-full h-full min-h-[300px] overflow-hidden bg-slate-100 flex items-center justify-center rounded-l-2xl sm:rounded-l-3xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-white to-sky-50 pointer-events-none"></div>
                <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-gradient-to-tr from-[#0284C7] to-sky-300 transform -rotate-12 rounded-3xl opacity-20 pointer-events-none"></div>

                {/* Sliding Track for Both Images (10s Transition) */}
                <div
                  className="flex w-full h-full transition-transform duration-1000 ease-in-out relative z-10"
                  style={{ transform: `translateX(-${ceo1Index * 100}%)` }}
                >
                  {ceo1Images.map((imgItem, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                      <img
                        src={imgItem.src}
                        alt={imgItem.alt}
                        className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none z-20"></div>

                {/* Top Slide Indicator Pills */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                  {ceo1Images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCeo1Index(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        ceo1Index === idx ? 'w-5 bg-sky-300' : 'w-1.5 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-30">
                  <div className="px-3 py-1.5 rounded-xl bg-[#0B1E3B]/85 backdrop-blur-md text-white border border-white/20 text-center shadow-lg">
                    <p className="text-xs font-bold leading-tight">Chief Executive Officer</p>
                    <p className="text-[10px] text-sky-300 font-semibold uppercase tracking-wider">Sudki Qatar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE: EXECUTIVE LEADERSHIP MESSAGE & DUAL QUOTES */}
            <div className="xl:col-span-6 py-5 px-5 sm:py-6 sm:px-8 space-y-4 text-center flex flex-col justify-between self-stretch relative overflow-hidden">
              
              {/* Subtle Skyline Watermark in middle background */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-end justify-center opacity-10">
                <svg
                  viewBox="0 0 520 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-lg h-auto text-sky-800"
                >
                  <path d="M40 280V120L65 95L90 120V280H40Z" fill="currentColor" />
                  <rect x="105" y="70" width="35" height="210" rx="2" fill="currentColor" />
                  <path d="M150 280C155 190 180 90 195 20C210 90 235 190 240 280H150Z" fill="currentColor" />
                  <path d="M255 280V60L280 40L305 60V280H255Z" fill="currentColor" />
                  <path d="M325 280V70C345 25 380 25 400 70V280H325Z" fill="currentColor" />
                  <rect x="415" y="80" width="40" height="200" rx="3" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-center gap-2.5">
                  <span className="w-8 h-[2px] bg-[#0284C7] rounded-full inline-block"></span>
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#0284C7] uppercase">
                    EXECUTIVE LEADERSHIP
                  </span>
                  <span className="w-8 h-[2px] bg-[#0284C7] rounded-full inline-block"></span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-[25px] font-black text-[#0B1E3B] tracking-tight leading-tight">
                  Building Cleaner, Healthier Communities
                </h2>
              </div>

              {/* Side-by-side Dual Executive Quotes */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-1">
                {/* CEO Statement (Adjacent to CEO Photo) */}
                <div className="bg-slate-50/90 rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 text-left flex flex-col justify-between hover:border-sky-300 transition-colors shadow-2xs">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-sky-100 text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                      CEO Statement
                    </span>
                    <p className="text-slate-600 text-xs sm:text-[12px] leading-relaxed italic">
                      "At SUDKI, we believe that cleanliness is the foundation of a healthy, safe and productive environment. Our commitment is to deliver high-quality cleaning solutions with professionalism and care."
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span
                      className="font-signature text-xl sm:text-2xl font-bold text-[#0B1E3B] italic tracking-wide select-none"
                      style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                    >
                      CEO, Sudki
                    </span>
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Chief Executive
                    </span>
                  </div>
                </div>

                {/* COO Statement (Adjacent to COO Photo) */}
                <div className="bg-slate-50/90 rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 text-left flex flex-col justify-between hover:border-sky-300 transition-colors shadow-2xs">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-sky-100 text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                      COO Statement
                    </span>
                    <p className="text-slate-600 text-xs sm:text-[12px] leading-relaxed italic">
                      "At SUDKI, our vision is to set new standards in professional cleaning through quality, reliability and excellence. We are committed to creating cleaner, healthier and safer environments for every client. With a dedicated team and customer-first approach, we strive to deliver excellence in every service."
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span
                      className="font-signature text-xl sm:text-2xl font-bold text-[#0B1E3B] italic tracking-wide select-none"
                      style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                    >
                      COO, Sudki
                    </span>
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Chief Operating Officer
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Trust Highlights Pill Strip */}
              <div className="relative z-10 grid grid-cols-4 gap-2 pt-1 border-t border-slate-100/80">
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-colors"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0 stroke-[2]" />
                      <span className="text-[11px] font-bold text-[#0B1E3B] leading-tight">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT: COO (CHIEF OPERATING OFFICER) */}
            <div className="xl:col-span-3 relative self-stretch flex items-stretch">
              <div className="relative w-full h-full min-h-[300px] overflow-hidden bg-slate-100 flex items-center justify-center rounded-r-2xl sm:rounded-r-3xl group border-l border-slate-200/60">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 via-white to-sky-100"></div>
                <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-gradient-to-tr from-sky-300 to-[#0284C7] transform rotate-12 rounded-3xl opacity-20 pointer-events-none"></div>

                <img
                  src={cooImage}
                  alt="Chief Operating Officer, Sudki Cleaning Qatar"
                  className="relative z-10 w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-500 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"></div>

                <div className="absolute bottom-3 left-3 right-3 z-30">
                  <div className="px-3 py-1.5 rounded-xl bg-[#0B1E3B]/85 backdrop-blur-md text-white border border-white/20 text-center shadow-lg">
                    <p className="text-xs font-bold leading-tight">Chief Operating Officer</p>
                    <p className="text-[10px] text-sky-300 font-semibold uppercase tracking-wider">Sudki Qatar</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* 2. MOBILE, TABLET & COMPACT LAPTOP VIEW (< xl)            */}
          {/* Tablet & Laptop (md-lg): 2 Side-by-side Cards | Mobile: Stacked */}
          {/* ======================================================== */}
          <div className="block xl:hidden p-4 sm:p-6 sm:px-8 space-y-6 relative z-10">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center gap-2">
                <span className="w-6 h-[2px] bg-[#0284C7] rounded-full inline-block"></span>
                <span className="text-xs font-extrabold tracking-widest text-[#0284C7] uppercase">
                  EXECUTIVE LEADERSHIP
                </span>
                <span className="w-6 h-[2px] bg-[#0284C7] rounded-full inline-block"></span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B1E3B] tracking-tight">
                Building Cleaner, Healthier Communities
              </h2>
            </div>

            {/* Both CEOs in Responsive Cards (2 cols on tablet, 1 col on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Leader 1: Chief Executive Officer with 10s Image Slider */}
              <div className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] max-h-[460px] rounded-xl overflow-hidden mb-4 bg-slate-200 shadow-sm group">
                    {/* Sliding Track for Both Images */}
                    <div
                      className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                      style={{ transform: `translateX(-${ceo1Index * 100}%)` }}
                    >
                      {ceo1Images.map((imgItem, idx) => (
                        <div key={idx} className="w-full h-full flex-shrink-0 relative">
                          <img
                            src={imgItem.src}
                            alt={imgItem.alt}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                    {/* Top Slide Indicator Pills */}
                    <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                      {ceo1Images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCeo1Index(idx)}
                          aria-label={`Slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            ceo1Index === idx ? 'w-4 bg-sky-300' : 'w-1.5 bg-white/60 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-center z-20">
                      <span className="inline-block px-3 py-1 rounded-lg bg-[#0B1E3B]/90 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                        Chief Executive Officer
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed italic">
                    "At SUDKI, we believe that cleanliness is the foundation of a healthy, safe and productive environment. Our commitment is to deliver high-quality cleaning solutions with professionalism and care."
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <span
                    className="font-signature text-2xl font-bold text-[#0B1E3B] italic tracking-wide select-none"
                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  >
                    CEO, Sudki
                  </span>
                  <span className="text-[10px] font-extrabold text-[#0284C7] uppercase tracking-wider">
                    Chief Executive Officer
                  </span>
                </div>
              </div>

              {/* Leader 2: Chief Operating Officer */}
              <div className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] max-h-[460px] rounded-xl overflow-hidden mb-4 bg-slate-200 shadow-sm">
                    <img
                      src={cooImage}
                      alt="Chief Operating Officer, Sudki Cleaning Qatar"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 left-3 right-3 text-center">
                      <span className="inline-block px-3 py-1 rounded-lg bg-[#0B1E3B]/90 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                        Chief Operating Officer
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed italic">
                    "At SUDKI, our vision is to set new standards in professional cleaning through quality, reliability and excellence. We are committed to creating cleaner, healthier and safer environments for every client. With a dedicated team and customer-first approach, we strive to deliver excellence in every service."
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <span
                    className="font-signature text-2xl font-bold text-[#0B1E3B] italic tracking-wide select-none"
                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  >
                    COO, Sudki
                  </span>
                  <span className="text-[10px] font-extrabold text-[#0284C7] uppercase tracking-wider">
                    Chief Operating Officer
                  </span>
                </div>
              </div>

            </div>

            {/* 4 Trust Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100 text-center"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                    <span className="text-[11px] font-bold text-[#0B1E3B] leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
