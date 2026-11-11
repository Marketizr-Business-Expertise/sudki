import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from './Icons';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#071324] text-white pt-16 pb-12 border-t border-slate-800 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Tagline Column (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Logo variant="light" size="large" />
            <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase pt-1">
              Cleaner Spaces. Healthier Lives.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Qatar's premier commercial and residential cleaning contractor delivering spotless, sanitized, and eco-conscious spaces.
            </p>
          </div>

          {/* Quick Links Column (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wide text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Column (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold tracking-wide text-white uppercase">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-300">
              <div>
                <Link to="/services#hotel" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Hotel
                </Link>
              </div>
              <div>
                <Link to="/services#restaurant" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Restaurant
                </Link>
              </div>
              <div>
                <Link to="/services#facility-management" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Facility Management
                </Link>
              </div>
              <div>
                <Link to="/services#event-management" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Event Management
                </Link>
              </div>
              <div>
                <Link to="/services#commercial-cleaning" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Commercial Cleaning
                </Link>
              </div>
              <div>
                <Link to="/services#deep-cleaning" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Deep Cleaning
                </Link>
              </div>
              <div>
                <Link to="/services#move-in-out" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Move-In / Move-Out
                </Link>
              </div>
              <div>
                <Link to="/services#after-construction" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> After-Construction
                </Link>
              </div>
              <div>
                <Link to="/services#pest-control" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Pest Control
                </Link>
              </div>
              <div>
                <Link to="/services#waste-management" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">•</span> Waste Management
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us & Follow Us Column (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold tracking-wide text-white uppercase">
                Contact Us
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+97450117741" className="hover:text-sky-400 transition-colors">
                      +974 5011 7741 <span className="text-[10px] text-emerald-400 font-bold">(WhatsApp)</span>
                    </a>
                    <a href="tel:+97471606664" className="hover:text-sky-400 transition-colors">
                      +974 7160 6664
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="mailto:info@sudkicleaning.qa" className="hover:text-sky-400 transition-colors">
                      info@sudkicleaning.qa
                    </a>
                    <a href="mailto:operations@sudkicleaning.qa" className="hover:text-sky-400 transition-colors">
                      operations@sudkicleaning.qa
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Doha, Qatar</span>
                </li>
              </ul>
            </div>

            {/* Follow Us Social Icons */}
            <div className="space-y-2.5 pt-1">
              <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Follow Us
              </h5>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sudki Facebook"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0284C7] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sudki Instagram"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0284C7] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sudki LinkedIn"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0284C7] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sudki YouTube"
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0284C7] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Sudki Cleaning. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
