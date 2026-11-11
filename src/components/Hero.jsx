import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, Sparkles, ShieldCheck } from './Icons';
import VideoModal from './VideoModal';
import heroBannerImg from '../assets/hero-banner.jpg';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center w-full">
      
      {/* ======================================================== */}
      {/* 1. CRYSTAL-CLEAR HERO BANNER IMAGE (100% NATIVE SHARPNESS) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full bg-white flex justify-end">
        <img
          src={heroBannerImg}
          alt="Sudki Professional Commercial Cleaning Team in Qatar"
          className="h-full w-full lg:w-auto lg:min-w-[62%] xl:min-w-[66%] object-cover lg:object-contain object-right filter contrast-[1.04] brightness-[1.01] saturate-[1.04] transition-transform duration-700 ease-out"
          loading="eager"
          decoding="async"
        />

        {/* Adaptive feather gradient for 100% crisp text readability across mobile & desktop */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/45 to-transparent pointer-events-none"></div>
      </div>

      {/* ======================================================== */}
      {/* 2. HERO CONTENT CONTAINER (EXACT HEADLINE, SUBTITLE, CTAS) */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20 animate-fade-in-up">
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7">
          
          {/* Subtitle / Tagline Badge with Horizontal Line */}
          <div className="inline-flex items-center gap-3">
            <span className="text-[13px] sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
              CLEANER SPACES. HEALTHIER LIVES.
            </span>
            <span className="w-12 sm:w-16 h-[2px] bg-[#0284C7] rounded-full inline-block"></span>
          </div>

          {/* Main Bold Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-black text-[#0B1E3B] tracking-tight leading-[1.08]">
            Commercial <br />
            Cleaning Solutions <br />
            <span className="relative inline-block">
              in Qatar
              {/* Highlight flourish */}
              <svg
                className="absolute left-0 -bottom-2 w-full h-2.5 text-sky-400 opacity-60 -z-10"
                viewBox="0 0 180 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 6C50 1 130 1 180 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Description Text */}
          <p className="text-base sm:text-lg text-slate-700 max-w-lg leading-relaxed font-normal">
            Reliable, professional and eco-friendly cleaning services for a spotless environment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            {/* Primary Navy Pill CTA */}
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-bold text-white bg-[#0B1E3B] hover:bg-[#0284C7] shadow-xl shadow-[#0B1E3B]/15 hover:shadow-sky-500/25 transition-all duration-300 group active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Circular Outline Play Button + Watch Video */}
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-3 text-[15px] font-bold text-[#0B1E3B] hover:text-[#0284C7] group focus:outline-none transition-colors py-2"
            >
              <span className="w-11 h-11 rounded-full border-2 border-[#0B1E3B] group-hover:border-[#0284C7] group-hover:bg-sky-50 flex items-center justify-center transition-all duration-200 shadow-xs">
                <Play className="w-4 h-4 fill-current text-[#0B1E3B] group-hover:text-[#0284C7] translate-x-0.5" />
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Trust Highlights under buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-[13px] font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Licensed in Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
              <span>100% Background Checked Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Hospital-Grade Eco Detergents</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Live Indicator Badge in Top Right */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-12 z-20 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="text-xs font-bold text-[#0B1E3B]">Doha Cleaning Crews On-Duty</span>
      </div>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
