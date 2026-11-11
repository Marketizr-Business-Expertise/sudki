import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X } from './Icons';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'Hotel', path: '/services#hotel' },
        { name: 'Restaurant', path: '/services#restaurant' },
        { name: 'Facility Management', path: '/services#facility-management' },
        { name: 'Event Management', path: '/services#event-management' },
        { name: 'Pest Control', path: '/services#pest-control' },
        { name: 'Waste Management', path: '/services#waste-management' },
        { name: 'Commercial Cleaning', path: '/services#commercial-cleaning' },
        { name: 'Deep Cleaning', path: '/services#deep-cleaning' },
        { name: 'Move-In / Move-Out', path: '/services#move-in-out' },
        { name: 'After-Construction Cleaning', path: '/services#after-construction' },
        { name: 'Educational Facilities', path: '/services#educational-facilities' },
        { name: 'Domestic Cleaning', path: '/services#domestic-cleaning' },
      ],
    },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`w-full relative z-40 transition-all duration-300 ${
        scrolled ? 'sticky top-0 bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors ${
                          isActive
                            ? 'text-[#0284C7] font-semibold'
                            : 'text-slate-800 hover:text-[#0284C7]'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#0284C7]' : 'text-slate-600'
                        }`}
                      />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 z-50 animate-fadeIn">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 grid gap-1">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="px-3.5 py-2 rounded-xl hover:bg-sky-50 text-sm font-medium text-slate-700 hover:text-[#0284C7] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative py-2 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'text-[#0284C7] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#0284C7] after:rounded-full'
                        : 'text-slate-800 hover:text-[#0284C7]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold text-white bg-[#0B1E3B] hover:bg-[#0284C7] shadow-sm hover:shadow-md transition-all duration-200 group active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/quote"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0B1E3B]"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-slate-100 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-xl text-base font-semibold ${
                      isActive
                        ? 'text-[#0284C7] bg-sky-50'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {link.hasDropdown && (
                  <div className="pl-4 py-1 space-y-1">
                    {link.subItems.slice(0, 4).map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-1 px-3 text-xs font-medium text-slate-600 hover:text-[#0284C7]"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
