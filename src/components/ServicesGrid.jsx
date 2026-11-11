import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from './Icons';
import { servicesData } from '../data/servicesData';
import SectionSideOverlays from './SectionSideOverlays';

export default function ServicesGrid({ showAllLink = false }) {
  const [viewMode, setViewMode] = useState('images'); // 'images' | 'icons'

  return (
    <section className="relative bg-white py-12 lg:py-16 w-full overflow-hidden" id="services">
      <SectionSideOverlays variant="light" />
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-16 h-0.5 bg-[#0284C7] rounded-full"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
              OUR SERVICES
            </span>
            <span className="w-10 sm:w-16 h-0.5 bg-[#0284C7] rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E3B] tracking-tight">
            Comprehensive Cleaning Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-xl mx-auto">
            Professional, certified, and eco-friendly solutions tailored for corporate, commercial, and residential spaces across Qatar.
          </p>

          {/* View Toggle (Images vs Minimal Icons) */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-full mt-6 border border-slate-200">
            <button
              onClick={() => setViewMode('images')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'images'
                  ? 'bg-white text-[#0B1E3B] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🖼️ Photo Cards
            </button>
            <button
              onClick={() => setViewMode('icons')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'icons'
                  ? 'bg-white text-[#0B1E3B] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⚡ Icon View
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* VIEW 1: RICH PHOTO CARDS (REQUESTED BY USER)             */}
        {/* ======================================================== */}
        {viewMode === 'images' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 focus:outline-none"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover ${service.imagePosition || 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-[#0B1E3B] uppercase tracking-wider shadow-sm">
                        {service.tag}
                      </span>
                    </div>

                    {/* Floating Icon Badge on Image */}
                    <div className="absolute bottom-3 right-3 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md text-[#0284C7] shadow-lg flex items-center justify-center group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-black text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors mb-1.5 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7] group-hover:text-[#0B1E3B] transition-colors">
                      <span>Explore service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          /* ======================================================== */
          /* VIEW 2: MINIMAL ICON CARDS (AS SEEN IN ORIGINAL MOCKUP)  */
          /* ======================================================== */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-sky-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 focus:outline-none"
                >
                  {/* Pale Blue Rounded Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-[#EAF5FC] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-inner group-hover:scale-108">
                    <IconComponent className="w-8 h-8 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  {/* Subtle link arrow */}
                  <div className="mt-5 pt-4 border-t border-slate-100 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sky-600 text-xs font-bold inline-flex items-center justify-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Optional View All Services Link */}
        {showAllLink && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#0B1E3B] bg-slate-100 hover:bg-sky-50 hover:text-[#0284C7] transition-all shadow-sm active:scale-95"
            >
              <span>Explore full service specifications & pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
