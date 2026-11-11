import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Send, Loader2 } from './Icons';
import SectionSideOverlays from './SectionSideOverlays';

export default function QuotationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending quotation request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        service: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section className="relative bg-white py-8 lg:py-12 w-full overflow-hidden" id="quotation">
      <SectionSideOverlays variant="light" />
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Quotation Container Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A1D37] text-white shadow-2xl border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Office Backdrop & Call to Action */}
            <div className="lg:col-span-5 relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden min-h-[340px]">
              {/* Modern Office Interior Background */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=95"
                alt="Corporate office interior background"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D37] via-[#0A1D37]/90 to-transparent"></div>

              {/* Text Information */}
              <div className="relative z-10 space-y-4 max-w-sm">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Request a Free <br />
                  Cleaning Quotation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Let us help you maintain a cleaner and healthier space.
                </p>
              </div>

              {/* Get in Touch Button */}
              <div className="relative z-10 pt-8">
                <a
                  href="tel:+97450117741"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold text-[#0B1E3B] bg-white hover:bg-sky-50 transition-all duration-200 shadow-md group"
                >
                  <span>Call +974 5011 7741</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Quotation Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-[#08172E] border-t lg:border-t-0 lg:border-l border-slate-700/50">
              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 my-6">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Quotation Request Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you! Our commercial cleaning supervisor in Doha will contact you within 2 hours with your tailored estimate.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-200"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-200"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Select Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-200"
                      />
                    </div>
                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-200"
                      >
                        <option value="" disabled>Select Service</option>
                        <option value="hotel">Hotel</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="facility-management">Facility Management</option>
                        <option value="event-management">Event Management</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="deep-cleaning">Deep Cleaning</option>
                        <option value="domestic">Domestic Cleaning</option>
                        <option value="move-in-out">Move-In / Move-Out</option>
                        <option value="educational">Educational Facilities</option>
                        <option value="after-construction">After-Construction Cleaning</option>
                        <option value="marble-polishing">Marble Polishing & Floor Care</option>
                        <option value="detail-cleaning">Detail Cleaning</option>
                        <option value="pest-control">Pest Control</option>
                        <option value="waste-management">Waste Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 border border-slate-200 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#0B1E3B] hover:bg-sky-600 transition-all duration-200 shadow-lg border border-sky-500/20 flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    </section>
  );
}
