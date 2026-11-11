import React, { useState } from 'react';
import { Calculator, CheckCircle2, Send, Building2, Home, Sparkles, Clock, ArrowRight } from '../components/Icons';
import QuotationSection from '../components/QuotationSection';
import PageHeroBanner from '../components/PageHeroBanner';
import ScrollReveal from '../components/ScrollReveal';
import SectionSideOverlays from '../components/SectionSideOverlays';

export default function QuotePage() {
  const [propertyType, setPropertyType] = useState('commercial');
  const [frequency, setFrequency] = useState('monthly');
  const [areaSize, setAreaSize] = useState(250);

  // Approximate estimation logic (QAR)
  const baseRate = propertyType === 'commercial' ? 1.2 : 0.9;
  const freqMultiplier = frequency === 'daily' ? 0.65 : frequency === 'weekly' ? 0.8 : frequency === 'monthly' ? 0.9 : 1.1;
  const estimatedTotal = Math.round(areaSize * baseRate * freqMultiplier * 10) / 10;

  return (
    <div className="bg-white w-full">
      {/* 1. Animated Hero Banner */}
      <PageHeroBanner
        badge="INSTANT ESTIMATION & PROPOSAL"
        title="Request a Free Cleaning Quotation in"
        highlightText="Qatar"
        description="Calculate preliminary benchmarks below or submit your detailed scope of work for a customized formal proposal with transparent itemized pricing."
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        currentPage="Request Quote"
        primaryCtaText="Calculate Estimate"
        primaryCtaLink="#calculator"
        secondaryCtaText="Contact Operations"
        secondaryCtaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Fast 2-Hour Response Guarantee', icon: Clock },
          { label: 'Zero Obligation Free Site Walkthrough', icon: Sparkles },
          { label: 'Transparent Binding QAR Quotations', icon: CheckCircle2 },
        ]}
      />

      {/* 2. Interactive Quotation Calculator */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 w-full relative overflow-hidden" id="calculator">
        <SectionSideOverlays variant="light" />

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center shadow-inner">
                  <Calculator className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E3B]">
                    Quick Cleaning Cost Calculator
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Select parameters for an instant budgetary benchmark in Qatari Riyals (QAR).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Property Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2.5 uppercase tracking-wider">
                    1. Facility Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPropertyType('commercial')}
                      className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                        propertyType === 'commercial'
                          ? 'border-[#0B1E3B] bg-[#0B1E3B] text-white shadow-lg'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      Commercial
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('residential')}
                      className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                        propertyType === 'residential'
                          ? 'border-[#0B1E3B] bg-[#0B1E3B] text-white shadow-lg'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Home className="w-4 h-4" />
                      Residential
                    </button>
                  </div>
                </div>

                {/* Cleaning Frequency */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2.5 uppercase tracking-wider">
                    2. Cleaning Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['one-time', 'weekly', 'monthly'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFrequency(f)}
                        className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold capitalize transition-all ${
                          frequency === f
                            ? 'border-[#0284C7] bg-[#0284C7] text-white shadow-lg'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {f.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area Size Slider */}
                <div className="sm:col-span-2 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                      3. Approximate Area: <span className="text-[#0284C7] font-black text-base">{areaSize} sqm</span>
                    </label>
                    <span className="text-xs text-slate-500 font-medium">Up to 2,000 sqm</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="25"
                    value={areaSize}
                    onChange={(e) => setAreaSize(Number(e.target.value))}
                    className="w-full accent-[#0284C7] h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Total Estimated Box */}
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0B1E3B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <div className="text-xs text-sky-300 font-bold uppercase tracking-wider">
                    Estimated Indicative Rate
                  </div>
                  <div className="text-3xl sm:text-4xl font-black mt-1">
                    ~ {estimatedTotal.toLocaleString()} <span className="text-sm font-medium text-slate-300">QAR / service</span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-right max-w-xs font-normal">
                  Includes eco-certified cleaning supplies, rotary buffer machinery, trained staff, and supervisor audit.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Official Form Component */}
      <QuotationSection />
    </div>
  );
}
