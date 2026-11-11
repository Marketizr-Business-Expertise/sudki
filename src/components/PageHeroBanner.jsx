import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2, Sparkles, ShieldCheck } from './Icons';

export default function PageHeroBanner({
  badge = 'SUDKI CLEANING QATAR',
  title = 'Commercial Cleaning Solutions',
  highlightText = '',
  description = 'Excellence, reliability, and eco-certified sanitization for high-end corporate and residential properties across Doha.',
  breadcrumbs = [{ name: 'Home', path: '/' }],
  currentPage = 'Services',
  primaryCtaText = 'Request Free Quotation',
  primaryCtaLink = '/quote',
  secondaryCtaText = 'Explore Services',
  secondaryCtaLink = '/services',
  bgImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=95',
  stats = [
    { label: 'Licensed in Doha', icon: ShieldCheck },
    { label: 'Hospital Grade Eco-Safe', icon: Sparkles },
    { label: '24/7 Field Response', icon: CheckCircle2 },
  ],
}) {
  return (
    <section className="relative overflow-hidden bg-[#0A1A33] text-white pt-14 pb-20 lg:pt-20 lg:pb-28 w-full border-b border-sky-900/40">
      
      {/* Background Photography with High Contrast Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dynamic Multi-stop Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3B] via-[#0A1A33]/90 to-[#0284C7]/25"></div>
        {/* Dot pattern matrix overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Floating Animated Geometric Accents */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-float"></div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mb-6 animate-fade-in-down">
          <ol className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="inline-flex items-center gap-2">
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.name}
                </Link>
                <span className="text-sky-400">/</span>
              </li>
            ))}
            <li className="font-bold text-white tracking-wide">
              {currentPage}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Text & CTAs */}
          <div className="lg:col-span-8 space-y-6 animate-fade-in-up">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-sky-400 uppercase">
                {badge}
              </span>
              <span className="w-12 h-0.5 bg-sky-400 rounded-full inline-block"></span>
            </div>

            {/* Title with Highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {title}{' '}
              {highlightText && (
                <span className="text-[#38BDF8] relative inline-block">
                  {highlightText}
                  <svg
                    className="absolute left-0 -bottom-2 w-full h-2 text-sky-400 opacity-60 -z-10"
                    viewBox="0 0 160 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 6C45 1 115 1 160 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {primaryCtaText && (
                <Link
                  to={primaryCtaLink}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#0B1E3B] bg-white hover:bg-sky-50 shadow-xl hover:shadow-sky-400/20 transition-all duration-300 group active:scale-95"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}

              {secondaryCtaText && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>

          </div>

          {/* Right Column: Floating Highlights Card */}
          <div className="lg:col-span-4 animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4 hover:border-sky-400/50 transition-colors">
              <div className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                Qatar Standards Guarantee
              </div>
              <div className="space-y-3.5">
                {stats.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Doha Operations Hub</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Now
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Wave Bottom Mask */}
      <div className="absolute -bottom-1 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-white fill-current"
        >
          <path d="M0,0 C300,48 900,48 1200,0 L1200,48 L0,48 Z"></path>
        </svg>
      </div>

    </section>
  );
}

