import React from 'react';
import { Users, GraduationCap, Award, Mail } from 'lucide-react';

export const Executives: React.FC = () => {
  const facultyModerator = {
    name: 'Prof. Mohammad Rashedul Islam',
    role: 'Faculty Moderator & Club Advisor',
    designation: 'Associate Professor & Head of Department of Mathematics',
    institution: 'Adamjee Cantonment College, Dhaka',
    quote: 'Mathematics does not teach us to add love or minus hate, but it teaches us that every problem has a solution when approached with persistence and intellectual honesty.'
  };

  const studentExecutives = [
    {
      name: 'Tahmidur Rahman',
      role: 'President',
      session: 'Class XII (HSC 2026)',
      sector: 'Administration & Overall Governance',
      motto: 'Building a legacy of national Olympiad triumphs.'
    },
    {
      name: 'Abrar Shahriar',
      role: 'General Secretary',
      session: 'Class XII (HSC 2026)',
      sector: 'Executive Logistics & Operations',
      motto: 'Translating mathematical vision into relentless execution.'
    },
    {
      name: 'Nayeem Hasan Shanto',
      role: 'Academic Secretary',
      session: 'Class XII (HSC 2026)',
      sector: 'Academics & BdMO Squad Lead',
      motto: 'Every complex equation unfolds with the right lemma.'
    },
    {
      name: 'Samia Afrin',
      role: 'Head of Graphics & IT',
      session: 'Class XII (HSC 2026)',
      sector: 'Graphics, Web Platforms & Branding',
      motto: 'Transforming mathematical structures into visual art.'
    },
    {
      name: 'Saadman Sakib',
      role: 'Head of Public Relations',
      session: 'Class XII (HSC 2026)',
      sector: 'Media, Sponsorships & External Liaisons',
      motto: 'Connecting ACCMC with the global math circuit.'
    },
    {
      name: 'Zareen Tasnim',
      role: 'Editor-in-Chief',
      session: 'Class XII (HSC 2026)',
      sector: 'Publications & ACCMC Gazette',
      motto: 'Chronicles of math thought, proofs, and inquiry.'
    },
    {
      name: 'Mushfiqur Rahman',
      role: 'Head of Outreach & Operations',
      session: 'Class XII (HSC 2026)',
      sector: 'On-ground Mega Fest Logistics',
      motto: 'The backbone ensuring flawless carnivals.'
    },
    {
      name: 'Rayhanul Haque',
      role: 'Director of Photography',
      session: 'Class XII (HSC 2026)',
      sector: 'Photography, Media & Digital Archive',
      motto: 'Framing every moment of mathematical triumph.'
    }
  ];

  return (
    <section id="executives" className="py-20 bg-[#040915] border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-14 text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
            Leadership & Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Executive Committee 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            The visionary minds, dedicated student council, and respected faculty steering Adamjee Cantonment College
            Mathematics Club toward greater heights.
          </p>
        </div>

        {/* Faculty Moderator Spotlight */}
        <div className="rounded-2xl border border-blue-800/80 bg-gradient-to-r from-[#091530] via-[#0b1b3d] to-[#081329] p-6 sm:p-8 shadow-xl mb-12 text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-blue-900/60 border-2 border-sky-400/80 flex items-center justify-center shrink-0 shadow-lg text-sky-300">
              <GraduationCap className="w-12 h-12" />
            </div>

            <div className="space-y-3 flex-1">
              <div>
                <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block font-bold">
                  {facultyModerator.role}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {facultyModerator.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {facultyModerator.designation} · {facultyModerator.institution}
                </p>
              </div>

              <blockquote className="text-xs sm:text-sm italic text-slate-200 border-l-2 border-sky-400 pl-3 py-1">
                &ldquo;{facultyModerator.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Student Council Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentExecutives.map((exec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#071024] border border-blue-900/60 hover:border-blue-700/80 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center mb-4 text-sky-400 font-mono font-bold text-xs">
                  {exec.name.slice(0, 2).toUpperCase()}
                </div>

                <span className="text-[11px] font-mono text-amber-300 uppercase font-semibold block mb-1">
                  {exec.role}
                </span>

                <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {exec.name}
                </h4>

                <p className="text-xs text-sky-300/80 font-mono mb-2">
                  {exec.session}
                </p>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {exec.sector}
                </p>
              </div>

              <div className="pt-3 border-t border-blue-900/50 text-[11px] text-slate-400 italic">
                &ldquo;{exec.motto}&rdquo;
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
