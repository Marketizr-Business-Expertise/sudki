import React from 'react';

export default function SectionSideOverlays({ variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none">
      {/* Left Edge Ambient Fade */}
      <div
        className={`absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-28 bg-gradient-to-r ${
          isDark
            ? 'from-[#071324]/80 via-[#071324]/30 to-transparent'
            : 'from-sky-200/40 via-sky-100/15 to-transparent'
        }`}
      />

      {/* Right Edge Ambient Fade */}
      <div
        className={`absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-28 bg-gradient-to-l ${
          isDark
            ? 'from-[#071324]/80 via-[#071324]/30 to-transparent'
            : 'from-sky-200/40 via-sky-100/15 to-transparent'
        }`}
      />

      {/* Floating Glowing Ambient Orbs on Sides */}
      <div
        className={`absolute -left-24 top-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl ${
          isDark ? 'bg-sky-500/10' : 'bg-sky-300/25'
        } animate-pulse-glow`}
      />
      <div
        className={`absolute -right-24 bottom-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-300/20'
        } animate-float`}
      />

      {/* Subtle Vertical Side Accent Lines */}
      <div
        className={`absolute top-12 bottom-12 left-2 sm:left-4 w-[1px] ${
          isDark ? 'bg-sky-400/15' : 'bg-sky-400/20'
        } hidden md:block`}
      />
      <div
        className={`absolute top-12 bottom-12 right-2 sm:right-4 w-[1px] ${
          isDark ? 'bg-sky-400/15' : 'bg-sky-400/20'
        } hidden md:block`}
      />
    </div>
  );
}

