import React from 'react';
import { AccmcLogo } from './AccmcLogo';
import { Heart, Sparkles, Database, Users } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenAdmin }) => {
  return (
    <footer className="bg-[#02050e] border-t border-blue-900/60 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AccmcLogo size={48} showGlow />
              <div>
                <span className="block text-xs font-semibold text-blue-300 uppercase tracking-widest">
                  Adamjee Cantonment College
                </span>
                <span className="block text-base font-extrabold text-white tracking-tight">
                  Mathematics Club (ACCMC)
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Cultivating the spirit of analytical thought, BdMO Olympiad problem solving, 
              and mathematical innovation within the storied halls of Adamjee Cantonment College.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Official Academic Student Body</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('about')} className="hover:text-sky-300 transition-colors">
                  About Us & Lore
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('sectors')} className="hover:text-sky-300 transition-colors">
                  7 Core Sectors
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('events')} className="hover:text-sky-300 transition-colors">
                  Carnivals & Olympiads
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('resources')} className="hover:text-sky-300 transition-colors">
                  Problem of the Week & Guides
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('executives')} className="hover:text-sky-300 transition-colors">
                  Executive Committee
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contact')} className="hover:text-sky-300 transition-colors">
                  Contact & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Membership & Data */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Join & Data Access
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              New session admissions are open for Adamjee Cantonment College students.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => onSelectTab('membership')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all w-fit cursor-pointer"
              >
                <Users className="w-3.5 h-3.5" />
                <span>Become a Member (Form)</span>
              </button>

              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-blue-950 text-slate-300 hover:text-white border border-slate-700/60 font-mono text-[11px] transition-all w-fit cursor-pointer"
              >
                <Database className="w-3 h-3 text-sky-400" />
                <span>Executive Member Vault</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Adamjee Cantonment College Mathematics Club. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Developed by ACCMC Graphics & IT Wing</span>
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};
