import React, { useState } from 'react';
import { AccmcLogo } from './AccmcLogo';
import { Menu, X, Users, Database, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  applicationCount: number;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  applicationCount,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'events', label: 'Events' },
    { id: 'resources', label: 'Resources' },
    { id: 'executives', label: 'Executives' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#040915]/95 backdrop-blur-md border-b border-blue-900/40 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1 transition-all"
          >
            <AccmcLogo size={52} showGlow className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-200 uppercase">
                Adamjee Cantonment College
              </span>
              <span className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
                Mathematics Club
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded font-normal">
                  ACCMC
                </span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-md transition-colors text-sm font-medium ${
                  activeTab === link.id
                    ? 'text-white bg-blue-950/80 border border-blue-800/60 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-blue-950/40'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin Data Portal Button */}
            <button
              onClick={onOpenAdmin}
              title="Club Executive Member Database & Applications"
              className="flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium text-slate-300 bg-slate-900/80 hover:bg-blue-950 hover:text-blue-200 border border-slate-700/60 hover:border-blue-700/60 rounded-lg transition-all"
            >
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Database</span>
              <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full text-[10px] w-4 h-4 font-bold">
                {applicationCount}
              </span>
            </button>

            {/* Primary "Become a Member" Highlight Tab */}
            <button
              onClick={() => handleNavClick('membership')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all shadow-md ${
                activeTab === 'membership'
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-blue-500/30 ring-2 ring-blue-400/40'
                  : 'bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-600 hover:to-sky-500 text-white hover:shadow-blue-500/25'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Become a Member</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('membership')}
              className="px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-md"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#070e1f] border-b border-blue-900/60 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                activeTab === link.id
                  ? 'bg-blue-900/40 text-blue-200 border border-blue-700/50'
                  : 'text-slate-300 hover:bg-slate-800/40'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => handleNavClick('membership')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/50"
            >
              <Users className="w-4 h-4" />
              <span>Become a Member (Form & Details)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-700/60 rounded-lg"
            >
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Member Database ({applicationCount} collected)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
