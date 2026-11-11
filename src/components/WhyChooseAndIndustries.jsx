import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Building,
  Home,
  Briefcase,
  GraduationCap,
} from './Icons';
import SectionSideOverlays from './SectionSideOverlays';

export default function WhyChooseAndIndustries() {
  const whyPoints = [
    'Skilled & Trained Staff',
    'Flexible Scheduling',
    'High Quality Standards',
    '100% Customer Satisfaction',
  ];

  const industries = [
    { name: 'Commercial Buildings', icon: Building },
    { name: 'Homes', icon: Home },
    { name: 'Offices', icon: Briefcase },
    { name: 'Educational Institutions', icon: GraduationCap },
  ];

  return (
    <section className="relative bg-white py-8 lg:py-12 w-full overflow-hidden">
      <SectionSideOverlays variant="light" />
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* Left Block: Why Choose Sudki? */}
          <div className="lg:col-span-5 bg-[#0B1E3B] text-white rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl flex flex-col justify-between">
            
            {/* Decorative Botanical Leaf Outline in Lower Right */}
            <div className="absolute right-2 -bottom-6 w-56 h-56 pointer-events-none opacity-20">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-sky-400">
                <path
                  d="M100 190C100 190 70 140 70 95C70 50 100 10 100 10C100 10 130 50 130 95C130 140 100 190 100 190Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M100 190V30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M100 130C120 115 145 125 155 110"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M100 100C75 85 55 95 45 80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M100 70C120 55 135 65 145 50"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-6 relative z-10">
              {/* Badge */}
              <div className="text-xs sm:text-sm font-bold tracking-widest text-sky-400 uppercase">
                WHY CHOOSE SUDKI?
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
                Your Trusted <br />
                Cleaning Partner
              </h3>

              {/* Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                We are committed to delivering exceptional cleaning services with
                professionalism and care.
              </p>

              {/* Checklist */}
              <div className="space-y-4 pt-2">
                {whyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-100">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 relative z-10">
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#0B1E3B] bg-white hover:bg-sky-50 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Block: Industries We Serve */}
          <div className="lg:col-span-7 bg-[#F4F8FB] rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-100 flex flex-col justify-between">
            
            <div className="space-y-5">
              {/* Badge */}
              <div className="text-xs sm:text-sm font-bold tracking-widest text-[#0284C7] uppercase">
                INDUSTRIES WE SERVE
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1E3B] tracking-tight">
                Trusted Across Multiple Sectors
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                From offices to educational institutions, we serve a wide range of industries.
              </p>

              {/* 4 Industries Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
                {industries.map((ind, index) => {
                  const IconComp = ind.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors duration-200">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors leading-tight">
                        {ind.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Commercial Cleaning Action Banner */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] relative group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=95"
                alt="Professional commercial cleaning and hospital-grade disinfection services in Doha Qatar"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03] brightness-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/65 via-[#0B1E3B]/15 to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold drop-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-white text-xs sm:text-sm font-extrabold tracking-wide">
                    Hospital-Grade Commercial Sanitization Across Qatar
                  </span>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-sky-200">
                  Daily & Scheduled Crews
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
