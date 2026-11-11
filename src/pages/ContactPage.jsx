import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, PhoneCall } from '../components/Icons';
import PageHeroBanner from '../components/PageHeroBanner';
import ScrollReveal from '../components/ScrollReveal';
import SectionSideOverlays from '../components/SectionSideOverlays';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white w-full">
      {/* 1. Animated Hero Banner */}
      <PageHeroBanner
        badge="24/7 DOHA CLIENT DESK"
        title="Contact Sudki Cleaning"
        highlightText="Qatar"
        description="Get in touch with our commercial operations team in Doha for site audits, long-term facility contracts, or immediate emergency cleaning dispatch."
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        currentPage="Contact Us"
        primaryCtaText="Call +974 5011 7741"
        primaryCtaLink="tel:+97450117741"
        secondaryCtaText="WhatsApp Chat"
        secondaryCtaLink="https://wa.me/97450117741"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Hotlines: +974 5011 7741 / 7160 6664', icon: PhoneCall },
          { label: 'Headquarters: Grand Hamad St, Doha', icon: MapPin },
          { label: '24/7 Field Support Dispatch', icon: Clock },
        ]}
      />

      {/* 2. Main Content */}
      <section className="py-20 bg-slate-50 w-full relative overflow-hidden">
        <SectionSideOverlays variant="light" />

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="fade-right">
                <div className="bg-[#0B1E3B] text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black">Doha Central Office</h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Serving all municipalities throughout the State of Qatar.
                    </p>
                  </div>

                  <div className="space-y-5 text-sm relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone & WhatsApp Support</div>
                        <div className="flex flex-col gap-1 mt-1">
                          <a href="tel:+97450117741" className="text-base font-bold text-white hover:text-sky-300 transition-colors flex items-center gap-2">
                            <span>+974 5011 7741</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">WhatsApp</span>
                          </a>
                          <a href="tel:+97471606664" className="text-base font-bold text-white hover:text-sky-300 transition-colors">
                            +974 7160 6664
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Addresses</div>
                        <div className="flex flex-col gap-1 mt-1">
                          <a href="mailto:info@sudkicleaning.qa" className="text-base font-bold text-white hover:text-sky-300 transition-colors">
                            info@sudkicleaning.qa
                          </a>
                          <a href="mailto:operations@sudkicleaning.qa" className="text-base font-bold text-white hover:text-sky-300 transition-colors">
                            operations@sudkicleaning.qa
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                        <span className="text-base font-bold text-white leading-snug block">
                          Grand Hamad St, Doha, State of Qatar
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Operating Hours</div>
                        <span className="text-base font-bold text-white leading-snug block">
                          Office: Sat – Thu (8:00 AM – 8:00 PM) <br />
                          <span className="text-sky-300 font-medium text-xs">Field Cleaning Crews: 24/7 Available</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 relative z-10">
                    <a
                      href="https://wa.me/97450117741"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-xl active:scale-95"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Instant WhatsApp Inquiry (+974 5011 7741)</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-left" delay={150}>
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
                  <h3 className="text-3xl font-black text-[#0B1E3B] mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-slate-500 mb-8 font-normal">
                    Fill out the form below and one of our client service executives in Doha will reach out shortly.
                  </p>

                  {sent ? (
                    <div className="bg-emerald-50 border border-emerald-300 rounded-3xl p-8 text-center space-y-4 animate-fade-in-up">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#0B1E3B]">Message Successfully Sent!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you for reaching out to Sudki Cleaning. Our duty supervisor will respond within 2 hours.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="px-6 py-2.5 text-xs font-bold bg-[#0B1E3B] hover:bg-[#0284C7] text-white rounded-full transition-colors shadow-md"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+974 ..."
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@company.qa"
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Subject</label>
                          <input
                            type="text"
                            required
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            placeholder="Commercial Contract Inquiry"
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                        <textarea
                          rows={4}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Please describe your facility type, approximate square meters, or specific cleaning requirements..."
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-[#0B1E3B] hover:bg-[#0284C7] transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-sky-500/25 active:scale-98 group"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
