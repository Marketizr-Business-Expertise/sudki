import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, FileText, Loader2, Phone, MessageCircle } from './Icons';
import logoImg from '../assets/logo.png';

const countryCodes = [
  { code: '+974', label: 'QA +974', country: 'Qatar' },
  { code: '+971', label: 'AE +971', country: 'UAE' },
  { code: '+966', label: 'SA +966', country: 'Saudi Arabia' },
  { code: '+965', label: 'KW +965', country: 'Kuwait' },
  { code: '+973', label: 'BH +973', country: 'Bahrain' },
  { code: '+968', label: 'OM +968', country: 'Oman' },
  { code: '+44', label: 'GB +44', country: 'United Kingdom' },
  { code: '+1', label: 'US +1', country: 'United States' },
  { code: '+91', label: 'IN +91', country: 'India' },
];

const serviceTags = [
  'Hotel',
  'Restaurant',
  'Facility Management',
  'Event Management',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Pest Control',
  'Waste Management',
];

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+974',
    mobileNumber: '',
    email: '',
    serviceRequest: "Let's arrange a free consultation.",
    agreeUpdates: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-trigger modal after 4 seconds when the site opens
  useEffect(() => {
    // Check if dismissed in this browser session
    const hasDismissed = sessionStorage.getItem('sudki_consultation_dismissed');
    if (hasDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Listen to custom window event if triggered from anywhere else
  useEffect(() => {
    const handleOpenEvent = (e) => {
      if (e.detail?.service) {
        setFormData((prev) => ({
          ...prev,
          serviceRequest: `Interested in: ${e.detail.service}. Let's arrange a free consultation.`,
        }));
      }
      setIsOpen(true);
    };

    window.addEventListener('open-consultation-modal', handleOpenEvent);
    return () => window.removeEventListener('open-consultation-modal', handleOpenEvent);
  }, []);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('sudki_consultation_dismissed', 'true');
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      countryCode: '+974',
      mobileNumber: '',
      email: '',
      serviceRequest: "Let's arrange a free consultation.",
      agreeUpdates: true,
    });
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Blurred Backdrop in Sudki Navy */}
      <div
        className="fixed inset-0 bg-[#0B1E3B]/75 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={handleClose}
      ></div>

      {/* Main Modal Card (Site Theme: Sudki Navy & Sky Blue, 100% Mobile & Landscape Safe) */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl lg:rounded-[32px] shadow-2xl overflow-y-auto border border-slate-200/90 z-10 my-auto animate-scaleUp">
        
        {/* Close Button Top-Right */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white/95 text-slate-500 hover:text-[#0B1E3B] hover:bg-slate-100 flex items-center justify-center z-30 shadow-xs transition-colors focus:outline-none cursor-pointer"
          aria-label="Close consultation modal"
        >
          <X className="w-4 h-4 stroke-[2.2]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0">
          
          {/* ======================================================== */}
          {/* LEFT PANEL: SUDKI THEMED BRANDING & SOCIAL PROOF        */}
          {/* Deep Navy `#0B1E3B`, Sky Blue `#0284C7` & `#38BDF8`      */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#08172E] via-[#0B1E3B] to-[#0A1A33] text-white p-5 sm:p-7 lg:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
            
            {/* Subtle dot matrix grid background */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            ></div>

            {/* Ambient Water/Cleaning Wave in Sudki Sky Blue */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              viewBox="0 0 380 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M -20 220 C 80 190, 140 310, 240 270 C 310 245, 360 300, 420 310"
                stroke="#0284C7"
                strokeWidth="2.5"
                strokeDasharray="4 6"
                strokeOpacity="0.6"
              />
              <path
                d="M -20 260 C 70 240, 160 350, 260 320 C 320 300, 370 330, 420 350"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                strokeOpacity="0.4"
              />
              {/* Glowing Sky Blue Nodes */}
              <circle cx="95" cy="220" r="4.5" fill="#38BDF8" filter="drop-shadow(0 0 8px #38BDF8)" />
              <circle cx="230" cy="275" r="4.5" fill="#38BDF8" filter="drop-shadow(0 0 8px #38BDF8)" />
              <circle cx="340" cy="295" r="4.5" fill="#38BDF8" filter="drop-shadow(0 0 8px #38BDF8)" />
            </svg>

            {/* TOP: Official Logo & Pill Badge */}
            <div className="relative z-10 space-y-2.5 sm:space-y-3.5 pr-8 lg:pr-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <img
                  src={logoImg}
                  alt="Sudki Cleaning Qatar"
                  className="h-9 sm:h-11 w-auto object-contain filter drop-shadow brightness-105"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none font-sans">
                    Sudki
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-sky-300 font-semibold tracking-wider uppercase mt-0.5">
                    Cleaning Qatar
                  </p>
                </div>
              </div>

              {/* Pill Badge in Sudki Sky Blue */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping inline-block"></span>
                <span>TRUSTED CLEANING PARTNER</span>
              </div>
            </div>

            {/* MIDDLE: 4 High-Impact Stats in 2x2 Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 lg:gap-y-7 my-5 sm:my-6 lg:my-8">
              {/* Stat 1 */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#38BDF8] tracking-tight font-sans">
                  8+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                  Years Qatar expertise
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-sans">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                  Hygiene compliance
                </div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#38BDF8] tracking-tight font-sans">
                  1.5k+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                  Satisfied clients
                </div>
              </div>

              {/* Stat 4 */}
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-sans">
                  1.2k+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                  Reviews on Google
                </div>
              </div>
            </div>

            {/* BOTTOM: Google Rating Pill */}
            <div className="relative z-10 pt-3 sm:pt-4 border-t border-sky-800/40">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300 font-medium">
                <span className="font-bold text-white">4.9 Stars</span>
                <span className="text-amber-400 tracking-wider text-xs sm:text-sm">★★★★★</span>
                <span>1.2k+ reviews on</span>
                {/* Official Google Colored G Logo */}
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.42 7.33 24 12 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.58 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                  />
                </svg>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT PANEL: CLEAN CONSULTATION FORM                     */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 lg:p-10 flex flex-col justify-between">
            
            {isSuccess ? (
              /* Success View */
              <div className="my-auto py-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-sky-50 text-[#0284C7] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-[#0B1E3B]">
                    Consultation Request Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#0B1E3B]">{formData.name || 'valued client'}</span>. Our cleaning supervisor in Doha will review your scope and contact you within 2 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/97450117741"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                  <a
                    href="tel:+97450117741"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1E3B] font-bold text-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +974 5011 7741</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-700 underline cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* Consultation Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Header */}
                <div className="space-y-1 text-center sm:text-left pr-8">
                  <h3 className="text-2xl sm:text-[28px] font-black text-[#0B1E3B] tracking-tight">
                    Get Free Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Let's discuss how we can accelerate your cleaning standards & facility hygiene in Qatar.
                  </p>
                </div>

                {/* Field 1: NAME * */}
                <div className="space-y-1.5 pt-1">
                  <label className="block text-[11px] font-black text-[#0B1E3B] uppercase tracking-wider">
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                  />
                </div>

                {/* Field 2: MOBILE NUMBER * */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-black text-[#0B1E3B] uppercase tracking-wider">
                    MOBILE NUMBER *
                  </label>
                  <div className="flex rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden focus-within:border-[#0284C7] focus-within:ring-2 focus-within:ring-sky-100 transition-all">
                    {/* Country Code Select */}
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="bg-slate-50 border-r border-slate-200 px-3 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-700 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>

                    {/* Phone Input */}
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="5011 7741"
                      className="w-full px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 outline-none"
                    />
                  </div>
                </div>

                {/* Field 3: EMAIL ID * */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-black text-[#0B1E3B] uppercase tracking-wider">
                    EMAIL ID *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                  />
                </div>

                {/* Field 4: WHAT YOU ARE LOOKING FOR * */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-black text-[#0B1E3B] uppercase tracking-wider">
                    WHAT YOU ARE LOOKING FOR *
                  </label>
                  <div className="relative rounded-xl sm:rounded-2xl border border-slate-200 focus-within:border-[#0284C7] focus-within:ring-2 focus-within:ring-sky-100 transition-all p-2.5 sm:p-3 bg-white">
                    <div className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-1" />
                      <textarea
                        rows={2}
                        required
                        value={formData.serviceRequest}
                        onChange={(e) => setFormData({ ...formData, serviceRequest: e.target.value })}
                        placeholder="Let's arrange a free consultation."
                        className="w-full text-sm text-slate-800 placeholder-slate-400 outline-none resize-none bg-transparent"
                      />
                    </div>

                    {/* Quick Tag Pills in Sudki Theme */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 mt-2">
                      {serviceTags.map((tag) => (
                        <button
                          type="button"
                          key={tag}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              serviceRequest: `Interested in: ${tag}. Let's arrange a free consultation.`,
                            }))
                          }
                          className="px-2 py-0.5 rounded-md bg-sky-50 hover:bg-sky-100 text-[10px] font-bold text-[#0284C7] transition-colors cursor-pointer border border-sky-100"
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="modalAgreeUpdates"
                    checked={formData.agreeUpdates}
                    onChange={(e) => setFormData({ ...formData, agreeUpdates: e.target.checked })}
                    className="w-4 h-4 rounded text-[#0284C7] focus:ring-[#0284C7] border-slate-300 mt-0.5 cursor-pointer accent-[#0284C7]"
                  />
                  <label htmlFor="modalAgreeUpdates" className="text-[11px] sm:text-xs text-slate-500 leading-snug cursor-pointer select-none">
                    I agree to receive service proposals, cleaning audit updates, and professional offers.
                  </label>
                </div>

                {/* Submit Button (Sudki Theme: Navy & Sky Blue Pill) */}
                <div className="pt-2 flex justify-center sm:justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 rounded-full bg-[#0B1E3B] hover:bg-[#0284C7] text-white text-sm font-bold shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group active:scale-95 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-sky-300" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <span className="w-6 h-6 rounded-full bg-[#0284C7] group-hover:bg-white text-white group-hover:text-[#0B1E3B] flex items-center justify-center shadow-xs group-hover:scale-110 transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.8]" />
                        </span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
