import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Clock, Award, Users, MapPin, ArrowRight } from '../components/Icons';
import WhyChooseAndIndustries from '../components/WhyChooseAndIndustries';
import PageHeroBanner from '../components/PageHeroBanner';
import ScrollReveal from '../components/ScrollReveal';

export default function WhyChooseUsPage() {
  const pillars = [
    {
      title: 'Skilled & Trained Staff',
      desc: 'All janitorial and specialized staff undergo strict background checks, occupational safety training, and hands-on machinery certification before stepping foot into your premises.',
      icon: Users,
    },
    {
      title: 'Flexible Scheduling',
      desc: 'We operate 24/7/365 to fit your company workflow. Whether you need overnight deep cleans, weekend turnaround, or discreet daytime hotel housekeeping, we accommodate seamlessly.',
      icon: Clock,
    },
    {
      title: 'High Quality Standards',
      desc: 'Every completed site is inspected by our quality assurance supervisors with a 50-point checklist guaranteeing zero residues, sanitized touchpoints, and pristine finishes.',
      icon: Award,
    },
    {
      title: '100% Customer Satisfaction',
      desc: 'If any area fails to meet your highest expectations, our rapid response team will re-clean the area free of charge within 24 hours of notification.',
      icon: ShieldCheck,
    },
  ];

  const locations = [
    'West Bay Financial District',
    'The Pearl Qatar',
    'Lusail Marina & Downtown',
    'Doha Downtown',
    'Al Sadd Commercial Area',
    'Al Wakrah',
    'Al Rayyan',
    'Msheireb Downtown Doha',
  ];

  return (
    <div className="bg-white w-full">
      {/* 1. Animated Hero Banner */}
      <PageHeroBanner
        badge="WHY CLIENTS TRUST SUDKI"
        title="Your Trusted Cleaning Partner in"
        highlightText="Qatar"
        description="Uncompromising standards, modern rotary equipment, and background-checked teams providing unmatched reliability across commercial corporate towers and luxury compounds."
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        currentPage="Why Choose Us"
        primaryCtaText="Request Free Quotation"
        primaryCtaLink="/quote"
        secondaryCtaText="Contact Our Office"
        secondaryCtaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: '100% Background Checked Personnel', icon: Users },
          { label: '50-Point QA Supervisor Audits', icon: Award },
          { label: '24-Hour Free Re-clean Warranty', icon: ShieldCheck },
        ]}
      />

      {/* 2. 4 Pillars Section */}
      <ScrollReveal animation="fade-up">
        <section className="py-16 bg-slate-50 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
              OUR CORE DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E3B] mt-1">
              Engineered for Enterprise-Level Hygiene
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-sky-300 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-inner">
                    <PillarIcon className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 3. Why Choose & Industries Component */}
      <ScrollReveal animation="fade-up" delay={150}>
        <WhyChooseAndIndustries />
      </ScrollReveal>

      {/* 4. Coverage Areas across Qatar */}
      <ScrollReveal animation="fade-up" delay={200}>
        <section className="py-16 bg-white border-t border-slate-100 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0284C7] uppercase">
            NATIONWIDE SERVICE COVERAGE
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-[#0B1E3B]">
            Serving Businesses & Residences Across Qatar
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-[#0284C7] text-xs sm:text-sm font-bold border border-slate-200/70 transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                {loc}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#0B1E3B] hover:bg-[#0284C7] transition-all shadow-xl hover:shadow-sky-500/25 active:scale-95 group"
            >
              <span>Get Your Free Custom Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
