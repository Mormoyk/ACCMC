import React from 'react';
import { AccmcLogo } from './AccmcLogo';
import { Users, Sparkles, ArrowRight, BookOpen, Trophy } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onExploreSectors: () => void;
  onExploreCarnival: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onJoinClick,
  onExploreSectors,
  onExploreCarnival,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 math-grid-bg border-b border-blue-900/40">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Mathematical Constants & Equations (Subtle background details) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-20">
        <span className="absolute top-12 left-10 font-mono text-sm text-blue-300">e^(i·π) + 1 = 0</span>
        <span className="absolute top-36 right-20 font-mono text-sm text-sky-300">∫ e^(-x²) dx = √π/2</span>
        <span className="absolute bottom-24 left-1/4 font-mono text-sm text-blue-400">∑(1/n²) = π²/6</span>
        <span className="absolute top-2/3 right-1/4 font-mono text-sm text-cyan-300">φ = (1 + √5)/2</span>
        <span className="absolute bottom-10 right-16 font-mono text-sm text-indigo-300">∇ × E = -∂B/∂t</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Subtitle Kicker (Clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
              <span className="w-6 h-[2px] bg-sky-400 inline-block"></span>
              <span>Explore the Beauty of Mathematics</span>
            </div>

            {/* Main Club Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              ADAMJEE CANTONMENT COLLEGE{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200">
                MATHEMATICS CLUB
              </span>
            </h1>

            {/* Inspiring Club Lore & Welcome Statement */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Welcome math-enthusiasts to the mathematical realm of ACCMC, where perplexity meets rigour,
              and curious minds converge. We inquire and wonder about the intriguing whimsies of math together.
              Here in the most vibrant and meticulous club of Adamjee Cantonment College, you become an integral fragment
              of a greater inquisitive mind. Are you ready for what it has in store for us?
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onJoinClick}
                className="group px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all flex items-center gap-3 cursor-pointer"
              >
                <Users className="w-5 h-5 text-white" />
                <span>Become a Member</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreSectors}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 hover:bg-blue-950/80 hover:text-white border border-blue-900/70 hover:border-blue-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Explore 7 Sectors</span>
              </button>

              <button
                onClick={onExploreCarnival}
                className="px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-sky-300 hover:text-white hover:bg-sky-950/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>National Carnival 2026</span>
              </button>
            </div>

            {/* Quick Unboxed Stats Row */}
            <div className="pt-6 border-t border-blue-900/50 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="block text-2xl font-bold font-mono text-white">8+/YR</span>
                <span className="text-slate-400">Events & Fests</span>
              </div>
              <div className="w-px h-8 bg-blue-900/60" />
              <div>
                <span className="block text-2xl font-bold font-mono text-white">180+</span>
                <span className="text-slate-400">Problem Sessions</span>
              </div>
              <div className="w-px h-8 bg-blue-900/60" />
              <div>
                <span className="block text-2xl font-bold font-mono text-white">10K+</span>
                <span className="text-slate-400">Members & Alumni</span>
              </div>
              <div className="w-px h-8 bg-blue-900/60" />
              <div>
                <span className="block text-2xl font-bold font-mono text-sky-400">ESTD</span>
                <span className="text-slate-400">Adamjee Cantonment</span>
              </div>
            </div>

          </div>

          {/* Right Column: Emblem Showcase with Interactive Radial Geometry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Concentric Rotating / Glowing Orbit Rings */}
            <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
              
              {/* Outer Decorative Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/25 animate-[spin_60s_linear_infinite]" />
              
              {/* Second Orbit Ring */}
              <div className="absolute inset-6 rounded-full border border-blue-400/20" />
              
              {/* Radial Glow Behind Logo */}
              <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-2xl" />

              {/* The Official ACCMC Logo Component */}
              <div className="relative group p-2">
                <AccmcLogo 
                  size={270} 
                  showGlow 
                  className="transition-transform duration-500 group-hover:scale-105 filter drop-shadow-2xl" 
                />
              </div>

              {/* Quadrant Legend Bubbles Floating Around */}
              <div className="absolute -top-2 left-6 bg-slate-900/90 border border-amber-500/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-amber-300 shadow-md">
                + Addition / Expansion
              </div>
              <div className="absolute top-8 -right-4 bg-slate-900/90 border border-sky-500/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-sky-300 shadow-md">
                − Subtraction / Reduction
              </div>
              <div className="absolute -bottom-2 -left-4 bg-slate-900/90 border border-rose-500/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-rose-300 shadow-md">
                ÷ Division / Deconstruction
              </div>
              <div className="absolute bottom-6 -right-4 bg-slate-900/90 border border-lime-500/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-lime-300 shadow-md">
                × Multiplication / Impact
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400 text-center max-w-xs font-mono">
              The 4 Quadrants: Arithmetic fundamental pillars representing unity, analysis, logic, and multiplication of knowledge.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
