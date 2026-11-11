import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Logo({ variant = 'dark', showTagline = false, size = 'default' }) {
  const isLight = variant === 'light';

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group focus:outline-none select-none">
      <img
        src={logoImg}
        alt="Sudki Commercial Cleaning Solutions Qatar"
        className={`${
          size === 'large' ? 'h-11 sm:h-13' : 'h-9 sm:h-11'
        } w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
      />

      {showTagline && (
        <span
          className={`text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase mt-0.5 ${
            isLight ? 'text-sky-300' : 'text-[#0284C7]'
          }`}
        >
          Cleaner Spaces. Healthier Lives.
        </span>
      )}
    </Link>
  );
}
