import React, { useState, useEffect, useRef } from 'react';
import SectionSideOverlays from './SectionSideOverlays';
import { ChevronLeft, ChevronRight } from './Icons';

import team1Img from '../assets/team/team-1.jpg';
import team2Img from '../assets/team/team-2.jpg';
import team3Img from '../assets/team/team-3.jpg';
import team4Img from '../assets/team/team-4.jpg';
import team5Img from '../assets/team/team-5.jpg';
import team6Img from '../assets/team/team-6.jpg';
import team7Img from '../assets/team/team-7.jpg';
import team8Img from '../assets/team/team-8.jpg';
import team9Img from '../assets/team/team-9.jpg';
import team10Img from '../assets/team/team-10.jpg';

const teamPhotos = [
  {
    id: 1,
    image: team6Img,
    alt: 'Sudki Professional Cleaning Specialist in Official Uniform',
  },
  {
    id: 2,
    image: team7Img,
    alt: 'Sudki Facility Operations Team Leader in Qatar',
  },
  {
    id: 3,
    image: team8Img,
    alt: 'Sudki Hospital-Grade Sanitization Specialist',
  },
  {
    id: 4,
    image: team10Img,
    alt: 'Sudki Cleaning Specialist On-Site Hallway Floor Care in Qatar',
  },
  {
    id: 5,
    image: team5Img,
    alt: 'Sudki Facility Maintenance On-Site Floor Mopping & Sanitization',
  },
  {
    id: 6,
    image: team1Img,
    alt: 'Sudki Commercial Event Cleaning Team On-Duty at Luxury Qatar Venue',
  },
  {
    id: 7,
    image: team2Img,
    alt: 'Sudki Professional Operations Staff On-Duty at Qatar Mall',
  },
  {
    id: 8,
    image: team3Img,
    alt: 'Sudki Operations Specialist with Detailing Mop at Qatar VIP Event',
  },
  {
    id: 9,
    image: team9Img,
    alt: 'Sudki Facility & Commercial Operations Specialist On-Duty in Qatar Mall',
  },
  {
    id: 10,
    image: team4Img,
    alt: 'Sudki Commercial Housekeeping & Retail Operations Specialist in Qatar',
  },
];

// Tripled for seamless, infinite looping in both directions
const displayPhotos = [...teamPhotos, ...teamPhotos, ...teamPhotos];

export default function OurTeamSection() {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(teamPhotos.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items-per-view calculation
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 cards
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 cards
      } else {
        setItemsPerView(4); // Desktop: 4 cards
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Automatic sliding interval (slides smoothly every 3 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Seamless infinite loop normalization on animation completion
  const handleTransitionEnd = () => {
    if (currentIndex >= teamPhotos.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - teamPhotos.length);
    } else if (currentIndex < teamPhotos.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + teamPhotos.length);
    }
  };

  // Re-enable smooth transition after silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  const activeDotIndex = currentIndex % teamPhotos.length;

  return (
    <section
      className="relative bg-[#F4F9FD] py-12 sm:py-16 lg:py-20 w-full overflow-hidden border-y border-slate-100 select-none"
      id="team"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <SectionSideOverlays variant="light" />

      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-0.5 bg-[#0284C7] rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#0284C7] uppercase">
              OUR TEAM & OPERATIONS
            </span>
            <span className="w-8 sm:w-12 h-0.5 bg-[#0284C7] rounded-full"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1E3B] tracking-tight">
            Our Dedicated Cleaning Specialists in Action
          </h2>

          {/* Live Auto-sliding Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs mt-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Live On-Duty in Qatar • Auto-Sliding Showcase
            </span>
          </div>
        </div>

        {/* Carousel Slider Wrapper */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous team photo"
            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#0284C7] text-[#0B1E3B] hover:text-white shadow-xl border border-slate-200/90 transition-all duration-300 flex items-center justify-center z-30 focus:outline-none cursor-pointer group active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next team photo"
            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#0284C7] text-[#0B1E3B] hover:text-white shadow-xl border border-slate-200/90 transition-all duration-300 flex items-center justify-center z-30 focus:outline-none cursor-pointer group active:scale-95"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Viewport Window */}
          <div className="overflow-hidden rounded-3xl py-1">
            <div
              className={`flex ${
                isTransitioning ? 'transition-transform duration-700 ease-out' : 'transition-none'
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayPhotos.map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  className="flex-shrink-0 px-1.5 sm:px-2 lg:px-2.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-sky-400 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      loading={index < 8 ? 'eager' : 'lazy'}
                    />

                    {/* Subtle hover gradient frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Navigation Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {teamPhotos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(teamPhotos.length + idx);
                }}
                aria-label={`Jump to team photo ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDotIndex === idx
                    ? 'w-7 sm:w-8 bg-[#0284C7] shadow-sm'
                    : 'w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
