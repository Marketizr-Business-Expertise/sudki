import React from 'react';
import { Star, Quote, Building2, User, CheckCircle2, ArrowRight } from '../components/Icons';
import { Link } from 'react-router-dom';
import PageHeroBanner from '../components/PageHeroBanner';
import ScrollReveal from '../components/ScrollReveal';
import SectionSideOverlays from '../components/SectionSideOverlays';

export default function TestimonialsPage() {
  const reviews = [
    {
      name: 'Ahmed Al-Kuwari',
      role: 'Facilities Director, West Bay Financial Tower',
      content:
        'Sudki has managed our 32-story commercial tower cleaning for over 3 years. Their teams are punctual, professional, and the floor scrubbing polish keeps our marble lobby looking pristine every single morning.',
      rating: 5,
      location: 'West Bay, Doha',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Operations, International Academy Doha',
      content:
        'In educational environments, hygiene and non-toxic disinfection are non-negotiable. Sudki provides child-safe sanitized classrooms and responsive after-hours deep cleans that parents and teachers trust completely.',
      rating: 5,
      location: 'Al Rayyan, Qatar',
    },
    {
      name: 'Tariq Mansour',
      role: 'Managing Partner, Luxury Retail Group',
      content:
        'Their after-construction cleaning saved our boutique launch in Place Vendôme Lusail. They removed all fine gypsum residue and glass streaks overnight with immaculate attention to detail.',
      rating: 5,
      location: 'Lusail City, Qatar',
    },
    {
      name: 'Fatima Al-Sulaiti',
      role: 'Homeowner, The Pearl Qatar',
      content:
        'We booked their move-in deep cleaning for our villa. The kitchen degreasing, bathroom descaling, and AC vent vacuuming were simply flawless. Highly recommended!',
      rating: 5,
      location: 'Porto Arabia, The Pearl',
    },
    {
      name: 'David Reynolds',
      role: 'General Manager, Tech Hub Doha',
      content:
        'Exceptional customer service from supervisor to cleaners. The team arrives with high-tech machinery, works efficiently without interrupting our engineers, and delivers consistent 5-star quality.',
      rating: 5,
      location: 'Msheireb Downtown, Doha',
    },
    {
      name: 'Maryam Al-Thani',
      role: 'Corporate HR Director',
      content:
        'Their flexible scheduling allows our offices to be cleaned discreetly outside normal business hours. Sudki truly represents the standard of corporate cleaning excellence in Qatar.',
      rating: 5,
      location: 'Doha Corniche',
    },
  ];

  return (
    <div className="bg-white w-full">
      {/* 1. Animated Hero Banner */}
      <PageHeroBanner
        badge="CLIENT FEEDBACK & TRUST"
        title="What Our Qatar Clients Say About"
        highlightText="Sudki"
        description="Discover why leading corporate towers, international schools, and prestigious residences across Doha, Lusail, and The Pearl partner with Sudki Cleaning Solutions."
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        currentPage="Testimonials"
        primaryCtaText="Share Your Experience"
        primaryCtaLink="/contact"
        secondaryCtaText="View Our Services"
        secondaryCtaLink="/services"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: '4.9 / 5.0 Average Client Rating', icon: Star },
          { label: 'Over 500+ Active Qatar Contracts', icon: Building2 },
          { label: '98% Client Retention Rate', icon: CheckCircle2 },
        ]}
      />

      {/* 2. Review Cards Grid */}
      <section className="py-20 bg-slate-50 w-full relative overflow-hidden" id="reviews">
        <SectionSideOverlays variant="light" />

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((rev, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-sky-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1.5 text-amber-400 mb-5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-500 ml-2">5.0 Star Verified</span>
                    </div>

                    {/* Quote Content */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8 font-normal">
                      "{rev.content}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-[#0B1E3B] group-hover:text-[#0284C7] transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">
                        {rev.role}
                      </p>
                      <span className="text-xs font-bold text-[#0284C7] inline-block mt-1">
                        {rev.location}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-colors shadow-inner">
                      <Quote className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Box */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="mt-16 bg-[#0B1E3B] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-3xl sm:text-4xl font-black">
                Ready to Experience the Sudki Difference?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-lg mx-auto">
                Contact our Qatar cleaning consultants today for a no-obligation quote and custom site walkthrough.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#0B1E3B] bg-white hover:bg-sky-50 transition-all shadow-xl active:scale-95 group"
                >
                  <span>Request Free Quotation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
