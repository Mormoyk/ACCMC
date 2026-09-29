import React, { useState } from 'react';
import { CURRENT_PROBLEM } from '../data/clubData';
import { saveProblemSolution, getStoredSolutions } from '../utils/storage';
import { 
  BookMarked, 
  HelpCircle, 
  Send, 
  Download, 
  CheckCircle2, 
  FileText, 
  Flame,
  Award,
  Sparkles
} from 'lucide-react';

export const Resources: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [collegeRoll, setCollegeRoll] = useState('');
  const [email, setEmail] = useState('');
  const [solutionText, setSolutionText] = useState('');
  const [solutionSubmitted, setSolutionSubmitted] = useState(false);
  const [solutionsCount, setSolutionsCount] = useState(getStoredSolutions().length + 18);

  const handleSolutionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !collegeRoll.trim() || !solutionText.trim()) {
      alert('Please fill in your name, roll, and solution breakdown.');
      return;
    }

    saveProblemSolution({
      problemId: CURRENT_PROBLEM.id,
      studentName: studentName.trim(),
      collegeRoll: collegeRoll.trim(),
      email: email.trim(),
      solutionText: solutionText.trim()
    });

    setSolutionSubmitted(true);
    setSolutionsCount(prev => prev + 1);
    setTimeout(() => {
      setSolutionSubmitted(false);
      setSolutionText('');
    }, 4000);
  };

  const archiveResources = [
    {
      title: 'ACCMC BdMO Olympiad Comprehensive Handbook',
      category: 'Olympiad Guide',
      pages: '142 Pages',
      downloads: '1.8k Downloads',
      description: 'Curated by former national medalists covering Number Theory, Combinatorics, and Geometry lemmas.'
    },
    {
      title: 'ACCMC Math Gazette (Volume III)',
      category: 'Journal',
      pages: '68 Pages',
      downloads: '940 Downloads',
      description: 'The annual literary showcase of Adamjee Cantonment College with original student math essays and proofs.'
    },
    {
      title: 'Euclidean Geometry & Inversion Lemma Toolkit',
      category: 'Cheat Sheet',
      pages: '28 Pages',
      downloads: '2.4k Downloads',
      description: 'Radical axis, cyclic quadrilaterals, homothety, and pole-polar transformations for BdMO seniors.'
    },
    {
      title: 'Intra-Adamjee Olympiad 2025 Archive & Solutions',
      category: 'Past Papers',
      pages: '36 Pages',
      downloads: '3.1k Downloads',
      description: 'Complete question papers with verified step-by-step solutions and alternate methods.'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-[#030713] math-grid-bg border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12 text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
            Knowledge Vault & Challenges
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Resources & Problem of the Week
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Sharpen your mathematical intuition with our weekly Olympiad challenge and explore
            handbooks curated by the ACCMC Academics Department.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Problem of the Week Challenge Card */}
          <div className="lg:col-span-7 bg-[#071128] border-2 border-blue-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-900/80 pb-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-xs font-bold text-amber-300 uppercase">
                  Problem of the Week #{CURRENT_PROBLEM.weekNumber}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-sky-300">{CURRENT_PROBLEM.topic}</span>
                <span>·</span>
                <span className="text-rose-400">{CURRENT_PROBLEM.difficulty}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                {CURRENT_PROBLEM.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
                {CURRENT_PROBLEM.statement}
              </p>

              {/* Latex / Math Formula Display Box */}
              <div className="p-4 rounded-xl bg-[#030816] border border-blue-900/80 font-mono text-sm sm:text-base text-sky-300 flex items-center justify-center text-center shadow-inner">
                {CURRENT_PROBLEM.latexFormula}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-blue-900/60">
              <span>Curated by: {CURRENT_PROBLEM.author}</span>
              <span className="text-amber-300">Deadline: {CURRENT_PROBLEM.deadline}</span>
            </div>

            {/* Interactive Solution Submission Form */}
            <div className="pt-4 border-t border-blue-900/80">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Send className="w-4 h-4 text-sky-400" />
                <span>Submit Your Mathematical Solution</span>
                <span className="text-[11px] font-mono text-slate-400">({solutionsCount} solutions submitted)</span>
              </h4>

              {solutionSubmitted ? (
                <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Your solution has been captured! The Academics wing will review and post top solutions on Friday.</span>
                </div>
              ) : (
                <form onSubmit={handleSolutionSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Your Name *"
                      className="bg-[#040a1a] border border-blue-900/80 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                    <input
                      type="text"
                      required
                      value={collegeRoll}
                      onChange={(e) => setCollegeRoll(e.target.value)}
                      placeholder="College Roll *"
                      className="bg-[#040a1a] border border-blue-900/80 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email (optional)"
                      className="bg-[#040a1a] border border-blue-900/80 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <textarea
                    rows={3}
                    required
                    value={solutionText}
                    onChange={(e) => setSolutionText(e.target.value)}
                    placeholder="Outline your derivation, equations, or integer cases here..."
                    className="w-full bg-[#040a1a] border border-blue-900/80 rounded-lg p-3 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-900/50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Solution</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Problem Archive & Hall of Fame */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#071128] border border-blue-900/60 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Award className="w-4 h-4 text-amber-400" />
                <span>POTW Hall of Fame (Recent Solvers)</span>
              </div>
              <div className="space-y-2.5 text-xs">
                {[
                  { name: 'Nafis Al-Zahid', roll: 'Roll 251014 (Class XII)', time: 'Submitted in 42 mins' },
                  { name: 'Tasnim Hasan Mahir', roll: 'Roll 262145 (Class XI)', time: 'Submitted in 1h 12m' },
                  { name: 'Farah Tahsin', roll: 'Roll 261890 (Class XI)', time: 'Submitted in 2h 05m' }
                ].map((solver, idx) => (
                  <div key={idx} className="p-2.5 bg-[#040a1a] rounded-lg border border-blue-900/40 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-white block">{solver.name}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{solver.roll}</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">{solver.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0c1c3d] to-[#060e22] border border-sky-500/40 rounded-2xl p-6 text-left space-y-3">
              <span className="text-xs font-mono text-sky-300 uppercase tracking-widest block font-bold">
                Olympiad Archive Access
              </span>
              <h4 className="text-lg font-bold text-white">
                BdMO & IMO Solution Compendium
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Free access for Adamjee Cantonment College students to 15+ years of regional and national
                mathematical problem sets with verified analytical proofs.
              </p>
              <button
                onClick={() => alert('Accessing ACCMC Digital Archive. Downloads will begin automatically.')}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Archive Pack (ZIP, 48MB)</span>
              </button>
            </div>

          </div>

        </div>

        {/* Resources Grid */}
        <div className="space-y-4 text-left">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-sky-400" />
            <span>Official ACCMC Publications & Booklets</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {archiveResources.map((res, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#060d21] border border-blue-900/50 hover:border-blue-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-sky-300 mb-2">
                    <span>{res.category}</span>
                    <span>{res.pages}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">{res.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{res.description}</p>
                </div>

                <div className="pt-3 border-t border-blue-900/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{res.downloads}</span>
                  <button
                    onClick={() => alert(`Downloading "${res.title}"...`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-white"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
