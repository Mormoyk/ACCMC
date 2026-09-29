import React, { useState } from 'react';
import { ACCMC_EVENTS } from '../data/clubData';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Users,
  AlertCircle
} from 'lucide-react';
import { ClubEvent } from '../types';

interface EventsProps {
  onJoinClick: () => void;
}

export const Events: React.FC<EventsProps> = ({ onJoinClick }) => {
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent>(ACCMC_EVENTS[0]);
  const [showEventRegModal, setShowEventRegModal] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [participantCollege, setParticipantCollege] = useState('Adamjee Cantonment College');
  const [participantSegment, setParticipantSegment] = useState('Olympiad Solo (Senior)');
  const [regSuccess, setRegSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setShowEventRegModal(false);
      setParticipantName('');
    }, 2000);
  };

  return (
    <section id="events" className="py-20 bg-[#040915] border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 text-left">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
              The Grand Arena
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Events & Math Carnivals
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              From intense intra-college Olympiad selection battles to our nationwide mega math festivals,
              ACCMC ignites pure competitive spirit.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Next Major Gathering:</span>
            <span className="px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-700/60 text-sky-300 font-mono text-xs font-bold">
              National Carnival 2026
            </span>
          </div>
        </div>

        {/* Featured Big Carnival Card */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-800/80 bg-gradient-to-br from-[#0a1838] via-[#071126] to-[#040817] p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  Flagship Mega Carnival
                </span>
                <span className="text-xs font-mono text-sky-300">
                  {selectedEvent.category} · {selectedEvent.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {selectedEvent.title}
              </h3>

              <p className="text-base font-medium text-sky-200">
                {selectedEvent.tagline}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {selectedEvent.description}
              </p>

              {/* Event Metadata (No pill clutter, crisp grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-blue-900/60 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">{selectedEvent.venue}</span>
                </div>
              </div>

              {/* Segments List */}
              {selectedEvent.segments && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-sky-300 font-semibold block">
                    Competition Segments:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.segments.map((seg, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-800/60 text-xs text-slate-200"
                      >
                        {seg}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowEventRegModal(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Register for Carnival</span>
                </button>

                <button
                  onClick={onJoinClick}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-blue-900 text-sm font-semibold transition-all cursor-pointer"
                >
                  Become a Volunteer / Organizer
                </button>
              </div>

            </div>

            {/* Highlights Card */}
            <div className="lg:col-span-4 bg-[#050d21] border border-blue-900/80 rounded-xl p-6 space-y-4">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block font-bold">
                Carnival Highlights
              </span>

              <div className="space-y-3">
                {selectedEvent.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-blue-900/60">
                <span className="text-xs text-slate-400 block font-mono">Registration:</span>
                <span className="text-lg font-bold font-mono text-amber-300">{selectedEvent.regFee}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Other Upcoming Events Carousel / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACCMC_EVENTS.slice(1).map((ev) => (
            <div
              key={ev.id}
              onClick={() => setSelectedEvent(ev)}
              className="p-6 rounded-2xl bg-[#081226]/80 hover:bg-[#0b1836] border border-blue-900/50 hover:border-blue-700 transition-all cursor-pointer text-left space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sky-400 uppercase font-semibold">
                  {ev.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{ev.date}</span>
              </div>

              <h4 className="text-xl font-bold text-white tracking-tight">{ev.title}</h4>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{ev.description}</p>

              <div className="flex items-center justify-between pt-2 border-t border-blue-900/50 text-xs">
                <span className="text-slate-400 font-mono">{ev.venue}</span>
                <span className="font-semibold text-sky-400 flex items-center gap-1">
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Quick Event Pre-Registration Modal */}
      {showEventRegModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#091530] border border-sky-400/60 rounded-2xl p-6 sm:p-8 max-w-md w-full space-y-5 text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-blue-900 pb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-sky-400" />
                <span>Carnival Pre-Registration</span>
              </h4>
              <button
                onClick={() => setShowEventRegModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {regSuccess ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h5 className="text-lg font-bold text-white">Pre-Registration Noted!</h5>
                <p className="text-xs text-slate-300">
                  We will contact you with your carnival admit slip before October 2026.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Participant Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#050c1e] border border-blue-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Institution / College *
                  </label>
                  <input
                    type="text"
                    required
                    value={participantCollege}
                    onChange={(e) => setParticipantCollege(e.target.value)}
                    className="w-full bg-[#050c1e] border border-blue-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Segment
                  </label>
                  <select
                    value={participantSegment}
                    onChange={(e) => setParticipantSegment(e.target.value)}
                    className="w-full bg-[#050c1e] border border-blue-900 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  >
                    <option value="Olympiad Solo (Senior)">Olympiad Solo (Senior)</option>
                    <option value="Math Team Olympiad (3 Members)">Math Team Olympiad (3 Members)</option>
                    <option value="Rubik's Cube Speedcubing">Rubik&apos;s Cube Speedcubing</option>
                    <option value="Sudoku Mania">Sudoku Mania</option>
                    <option value="Math Wall Magazine Display">Math Wall Magazine Display</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowEventRegModal(false)}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-all"
                  >
                    Confirm Pre-Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
