import React from 'react';
import { X, Play, Sparkles, CheckCircle2 } from './Icons';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/80 border-b border-slate-700/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide">
              Sudki Cleaning — Corporate Overview & Standards in Qatar
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Showcase container */}
        <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
          {/* Simulated HD video player with high tech janitorial operations */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
            alt="Cleaning showcase video preview"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="relative z-10 max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl text-white group cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-9 h-9 fill-white translate-x-0.5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-md">
              Excellence in Commercial Cleaning
            </h3>
            <p className="text-sm text-slate-200 drop-shadow">
              See how our certified Qatar cleaning specialists utilize hospital-grade sanitization and advanced floor restoration technology.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-medium text-sky-300">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> ISO Certified
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-sky-400" /> Eco-Friendly Products
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Sudki Cleaning Solutions • Doha, Qatar</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}

