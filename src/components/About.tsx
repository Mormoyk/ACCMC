import React, { useState } from 'react';
import { Award, Compass, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-[#040915] border-b border-blue-900/40 relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-blue-800/50 bg-gradient-to-b from-blue-950/60 to-slate-950 p-6 shadow-2xl">
              
              {/* Math Chalkboard Aesthetic Graphic */}
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-[#091429] border border-blue-900/60 p-5 flex flex-col justify-between">
                <div className="font-mono text-xs text-sky-400/80 space-y-1">
                  <p className="text-slate-400">// ACCMC Olympiad Lemma Proof</p>
                  <p className="text-blue-300">f(x + y) + f(x - y) = 2f(x) + 2f(y)</p>
                  <p className="text-emerald-400">⇒ ∀n ∈ ℕ : f(nx) = n² f(x)</p>
                  <p className="text-indigo-300">lim┬(h→0) [f(x+h) - f(x)] / h = f&apos;(x)</p>
                  <p className="text-amber-300">∮_C (P dx + Q dy) = ∬_D (∂Q/∂x - ∂P/∂y) dA</p>
                </div>

                <div className="bg-[#050c1e]/90 backdrop-blur border border-blue-800/60 rounded-lg p-3.5 mt-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-300 font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Adamjee Cantonment College</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Fostering elite problem-solving minds, National Math Olympiad contenders, and analytical pioneers since inception.
                  </p>
                </div>
              </div>

              {/* Mission Highlights List */}
              <div className="mt-5 space-y-2.5">
                {[
                  'Official college math wing approved by Adamjee Cantonment College Administration',
                  'Regular training for Bangladesh Mathematical Olympiad (BdMO)',
                  'Inter-college Olympiads, carnivals, and peer problem-solving circles',
                  'Annual peer-reviewed mathematical journal & problem gazettes',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: About Narrative & Stat Grid (Reference 3) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
                Welcome to the World of Numbers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                About Us
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <blockquote className="border-l-2 border-blue-500 pl-4 py-1 italic text-slate-200 font-medium">
                &ldquo;Mathematics is the language with which God has written the universe.&rdquo;
                <span className="block text-xs font-mono not-italic text-sky-400 mt-1">— Galileo Galilei</span>
              </blockquote>

              <p>
                The <strong className="text-white">Adamjee Cantonment College Mathematics Club (ACCMC)</strong> is 
                one of the premier, most intellectually rigorous academic student bodies in Dhaka Cantonment. 
                Our mission is to foster a vibrant, inquisitive community for students who are eager to delve into the 
                captivating world of mathematics—transcending traditional rote memorization in favor of pure, 
                creative problem solving.
              </p>

              <p>
                With over a thousand active student members, dedicated faculty moderators from the Department of Mathematics, 
                and an extensive alumni fraternity studying in leading universities worldwide, ACCMC continues to serve as an 
                incubator for Olympiad champions, researchers, and scientific leaders.
              </p>

              {expanded && (
                <div className="space-y-3 pt-2 text-slate-300">
                  <p>
                    Throughout each academic calendar, ACCMC hosts intensive weekly problem sessions across Number Theory, 
                    Combinatorics, Euclidean Geometry, and Classical Algebra. Our members consistently capture laurels in the 
                    Bangladesh Mathematical Olympiad (BdMO), Inter-College Math Fests, and National Science Carnivals.
                  </p>
                  <p>
                    Whether you aspire to compete on the national stage, explore visual geometry and code in Python, 
                    or write articles for our acclaimed journal, ACCMC provides the platform, resources, and mentorship 
                    to unlock your peak mathematical potential.
                  </p>
                </div>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sky-400 hover:text-sky-300 font-semibold text-xs sm:text-sm underline underline-offset-4 cursor-pointer"
              >
                {expanded ? 'Show Less' : '(See More Details)'}
              </button>
            </div>

            {/* 4 Stat Boxes (Faithfully designed from Reference 3) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-[#081226] border border-blue-900/60 rounded-xl p-4 text-center glow-card">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-white">8/YR</span>
                <span className="text-xs text-slate-400 font-medium mt-1 block">Festivals</span>
              </div>

              <div className="bg-[#081226] border border-blue-900/60 rounded-xl p-4 text-center glow-card">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-white">200+</span>
                <span className="text-xs text-slate-400 font-medium mt-1 block">Workshops</span>
              </div>

              <div className="bg-[#081226] border border-blue-900/60 rounded-xl p-4 text-center glow-card">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-white">4/YR</span>
                <span className="text-xs text-slate-400 font-medium mt-1 block">Publications</span>
              </div>

              <div className="bg-[#081226] border border-blue-900/60 rounded-xl p-4 text-center glow-card">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-sky-400">10K+</span>
                <span className="text-xs text-slate-400 font-medium mt-1 block">Members & Alumni</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
