import React, { useState } from 'react';
import { ACCMC_SECTORS } from '../data/clubData';
import { 
  Shield, 
  GraduationCap, 
  BookOpen, 
  Share2, 
  Compass, 
  Code, 
  Camera,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { SectorId } from '../types';

interface SectorsProps {
  onSelectSectorToApply: (sectorId: SectorId) => void;
}

export const Sectors: React.FC<SectorsProps> = ({ onSelectSectorToApply }) => {
  const [selectedSector, setSelectedSector] = useState<SectorId | null>(null);

  const getIcon = (id: SectorId) => {
    switch (id) {
      case 'administration':
        return <Shield className="w-6 h-6 text-sky-400" />;
      case 'academics':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'publication':
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      case 'public-relations':
        return <Share2 className="w-6 h-6 text-indigo-400" />;
      case 'outreach':
        return <Compass className="w-6 h-6 text-sky-400" />;
      case 'graphics-it':
        return <Code className="w-6 h-6 text-teal-400" />;
      case 'photography':
        return <Camera className="w-6 h-6 text-blue-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="sectors" className="py-20 bg-[#030713] math-grid-bg border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
            Explore Our Structure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sectors
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            The core engine of Adamjee Cantonment College Mathematics Club is divided into 7 specialized wings.
            Each sector empowers members to nurture both their analytical rigor and organizational mastery.
          </p>
        </div>

        {/* Sectors Grid (Faithful to Reference Image 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCMC_SECTORS.map((sector) => {
            const isSelected = selectedSector === sector.id;

            return (
              <div
                key={sector.id}
                onClick={() => setSelectedSector(isSelected ? null : sector.id)}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0b1b3b] border-2 border-sky-400 shadow-xl shadow-sky-500/20'
                    : 'bg-[#071022]/90 hover:bg-[#0a1630] border border-blue-900/50 hover:border-blue-700/80 shadow-lg'
                }`}
              >
                <div>
                  {/* Icon Container with subtle glow */}
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center mb-5 shadow-inner">
                    {getIcon(sector.id)}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-xs font-mono text-sky-300/80 mb-3">
                    {sector.subtitle}
                  </p>

                  {/* Description matching the reference tone */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                    {sector.description}
                  </p>

                  {/* Responsibilities list if expanded */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-blue-900/60 space-y-2 animate-fadeIn">
                      <span className="text-xs font-semibold text-sky-300 block uppercase font-mono">
                        Key Responsibilities:
                      </span>
                      {sector.keyResponsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Apply CTA */}
                <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {sector.skillsLookedFor[0]}
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSectorToApply(sector.id);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white hover:bg-blue-600/40 px-2.5 py-1.5 rounded-lg border border-sky-500/30 hover:border-sky-400 transition-all cursor-pointer"
                  >
                    <span>Join Wing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
