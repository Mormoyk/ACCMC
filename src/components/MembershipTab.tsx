import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Settings, 
  Download, 
  AlertCircle,
  QrCode,
  Printer,
  Copy,
  Check
} from 'lucide-react';
import { AccmcLogo } from './AccmcLogo';
import { SectorId, ClassGrade, ShiftType, MemberApplication } from '../types';
import { ACCMC_SECTORS } from '../data/clubData';
import { saveApplication, getStoredGoogleFormUrl, setStoredGoogleFormUrl } from '../utils/storage';

interface MembershipTabProps {
  initialSector?: SectorId | null;
  onApplicationSubmitted: () => void;
  onOpenDatabase: () => void;
}

export const MembershipTab: React.FC<MembershipTabProps> = ({
  initialSector,
  onApplicationSubmitted,
  onOpenDatabase,
}) => {
  // Mode: 'interactive' or 'google-form'
  const [activeMode, setActiveMode] = useState<'interactive' | 'google-form'>('interactive');
  
  // Google Form URL settings
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(getStoredGoogleFormUrl());
  const [isEditingFormUrl, setIsEditingFormUrl] = useState(false);
  const [tempUrl, setTempUrl] = useState(googleFormUrl);
  const [urlSavedNotice, setUrlSavedNotice] = useState(false);

  // Form Fields State
  const [fullName, setFullName] = useState('');
  const [collegeRoll, setCollegeRoll] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [classGrade, setClassGrade] = useState<ClassGrade>('Class XI (Freshman)');
  const [section, setSection] = useState('Section A (Science)');
  const [shift, setShift] = useState<ShiftType>('Morning Shift');
  const [primarySector, setPrimarySector] = useState<SectorId>(initialSector || 'academics');
  const [secondarySector, setSecondarySector] = useState<SectorId>('publication');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Number Theory',
    'Euclidean Geometry'
  ]);
  const [olympiadExperience, setOlympiadExperience] = useState('');
  const [statement, setStatement] = useState('');

  // Submission Status & Generated Member ID
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<MemberApplication | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Sync initial sector prop if changed
  useEffect(() => {
    if (initialSector) {
      setPrimarySector(initialSector);
      setActiveMode('interactive');
    }
  }, [initialSector]);

  const interestOptions = [
    'Number Theory',
    'Euclidean Geometry',
    'Combinatorics & Graph Theory',
    'Classical Algebra & Polynomials',
    'Calculus & Mathematical Analysis',
    'Olympiad Problem Solving',
    'Computer Science & Algorithms',
    'Recreational Mathematics & Cryptography'
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSaveGoogleFormUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredGoogleFormUrl(tempUrl);
    setGoogleFormUrl(tempUrl);
    setIsEditingFormUrl(false);
    setUrlSavedNotice(true);
    setTimeout(() => setUrlSavedNotice(false), 3000);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !collegeRoll.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill in all required fields (Name, Roll, Email, Phone).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const saved = saveApplication({
        fullName: fullName.trim(),
        collegeRoll: collegeRoll.trim(),
        email: email.trim(),
        phone: phone.trim(),
        classGrade,
        section,
        shift,
        primarySector,
        secondarySector,
        mathInterests: selectedInterests,
        olympiadExperience: olympiadExperience.trim() || 'No prior competitive Olympiad experience reported.',
        statement: statement.trim() || 'Excited to learn and contribute to ACCMC activities.'
      });

      setSubmittedApp(saved);
      setIsSubmitting(false);
      onApplicationSubmitted();
    }, 600);
  };

  const handleCopyId = () => {
    if (submittedApp) {
      navigator.clipboard.writeText(submittedApp.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2500);
    }
  };

  const handlePrintCard = () => {
    window.print();
  };

  const resetForm = () => {
    setSubmittedApp(null);
    setFullName('');
    setCollegeRoll('');
    setEmail('');
    setPhone('');
    setOlympiadExperience('');
    setStatement('');
  };

  return (
    <section id="membership" className="py-20 bg-[#040816] math-grid-bg border-b border-blue-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-mono text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Official ACCMC Recruitment 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Become a Member
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Join the mathematical vanguard of Adamjee Cantonment College. Submit your details below
            through our direct member portal or via the official Google Form.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1.5 bg-[#081226] border border-blue-900/70 rounded-xl shadow-inner gap-1">
              <button
                onClick={() => setActiveMode('interactive')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeMode === 'interactive'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-blue-950/40'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Interactive Application</span>
              </button>

              <button
                onClick={() => setActiveMode('google-form')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeMode === 'google-form'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-blue-950/40'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Google Form Embed</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: GOOGLE FORM VIEW */}
        {activeMode === 'google-form' && (
          <div className="space-y-6">
            
            {/* Control Bar for Club Executives & Participants */}
            <div className="bg-[#09152e] border border-blue-900/60 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Attached Google Form</h4>
                  <p className="text-xs text-slate-400">
                    Official form attached directly to this tab.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <span>Open in Full Screen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsEditingFormUrl(!isEditingFormUrl)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono border border-slate-700 transition-all cursor-pointer"
                  title="Configure Google Form URL for ACCMC"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Configure Link</span>
                </button>
              </div>
            </div>

            {/* URL Editor Drawer for Club Admins */}
            {isEditingFormUrl && (
              <form onSubmit={handleSaveGoogleFormUrl} className="bg-[#0b1b3b] border border-sky-500/40 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-300 font-mono flex items-center gap-2">
                    <Settings className="w-3.5 h-3.5" />
                    ACCMC Executive: Update Attached Google Form Link
                  </span>
                  <span className="text-[11px] text-slate-400">Saved to browser storage</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    placeholder="https://docs.google.com/forms/d/e/.../viewform?embedded=true"
                    className="flex-1 bg-[#050c1e] border border-blue-800/80 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-all"
                  >
                    Save URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingFormUrl(false)}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {urlSavedNotice && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Google Form embed link updated successfully!</span>
              </div>
            )}

            {/* Embedded Iframe Container */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-900/70 bg-[#070e22] shadow-2xl min-h-[680px]">
              <iframe
                src={googleFormUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="ACCMC Membership Registration Form"
                className="w-full min-h-[750px] bg-[#070e22]"
              >
                Loading Adamjee Cantonment College Mathematics Club Membership Form…
              </iframe>

              {/* In case iframe cannot be displayed due to frame-ancestors restrictions */}
              <div className="p-4 bg-slate-950/90 border-t border-blue-900/50 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    If Google Form doesn&apos;t load in iframe due to Google restrictions, use the direct button:
                  </span>
                </div>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  Direct Google Form Link <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: INTERACTIVE DATA COLLECTION FORM */}
        {activeMode === 'interactive' && !submittedApp && (
          <div className="bg-[#071127]/95 border border-blue-900/60 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            
            <form onSubmit={handleSubmitApplication} className="space-y-8">
              
              {/* Step 1: Personal Credentials */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-sky-400 uppercase font-mono border-b border-blue-900/60 pb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-xs text-white">1</span>
                  <span>Personal & Academic Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name (as in College Records) *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. S. M. Farhan Chowdhury"
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      College Roll Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={collegeRoll}
                      onChange={(e) => setCollegeRoll(e.target.value)}
                      placeholder="e.g. 261045"
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Class / Academic Year *
                    </label>
                    <select
                      value={classGrade}
                      onChange={(e) => setClassGrade(e.target.value as ClassGrade)}
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      <option value="Class XI (Freshman)">Class XI (Freshman)</option>
                      <option value="Class XII (Senior)">Class XII (Senior)</option>
                      <option value="HSC Candidate">HSC Candidate</option>
                      <option value="Alumni / Ex-Adamjeean">Alumni / Ex-Adamjeean</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Shift *
                    </label>
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value as ShiftType)}
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      <option value="Morning Shift">Morning Shift</option>
                      <option value="Day Shift">Day Shift</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Section & Group *
                    </label>
                    <input
                      type="text"
                      required
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      placeholder="e.g. Section B (Science)"
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 17XX XXXXXX"
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Sector Preference */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-sky-400 uppercase font-mono border-b border-blue-900/60 pb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-xs text-white">2</span>
                  <span>Sector Allocation Preference</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Primary Sector *
                    </label>
                    <select
                      value={primarySector}
                      onChange={(e) => setPrimarySector(e.target.value as SectorId)}
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      {ACCMC_SECTORS.map((sec) => (
                        <option key={sec.id} value={sec.id}>
                          {sec.name} ({sec.subtitle})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Secondary Sector Preference
                    </label>
                    <select
                      value={secondarySector}
                      onChange={(e) => setSecondarySector(e.target.value as SectorId)}
                      className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      {ACCMC_SECTORS.map((sec) => (
                        <option key={sec.id} value={sec.id}>
                          {sec.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Math Interests */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-sky-400 uppercase font-mono border-b border-blue-900/60 pb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-xs text-white">3</span>
                  <span>Mathematical Interests & Sub-fields</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {interestOptions.map((topic) => {
                    const isChecked = selectedInterests.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => toggleInterest(topic)}
                        className={`text-left p-2.5 rounded-lg text-xs font-medium border transition-all ${
                          isChecked
                            ? 'bg-blue-600/30 border-sky-400 text-sky-200'
                            : 'bg-[#050c1e] border-blue-900/60 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{topic}</span>
                          {isChecked && <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Statement & Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-sky-400 uppercase font-mono border-b border-blue-900/60 pb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-xs text-white">4</span>
                  <span>Experience & Motivation</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Prior Math Olympiad / Competitive Math Experience (if any)
                  </label>
                  <textarea
                    rows={2}
                    value={olympiadExperience}
                    onChange={(e) => setOlympiadExperience(e.target.value)}
                    placeholder="e.g. Participated in BdMO Dhaka Regional 2024, Inter-school math Olympiad champion, or enthusiastic beginner eager to train..."
                    className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Why do you wish to join Adamjee Cantonment College Mathematics Club?
                  </label>
                  <textarea
                    rows={3}
                    value={statement}
                    onChange={(e) => setStatement(e.target.value)}
                    placeholder="Share what excites you about mathematics, club activities, organizing carnivals, or publication writing..."
                    className="w-full bg-[#050c1e] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Data will be registered into the ACCMC executive candidate ledger.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Application...</span>
                  ) : (
                    <>
                      <Users className="w-4 h-4" />
                      <span>Submit Membership Application</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        )}

        {/* APPLICATION SUCCESS & DIGITAL MEMBER PASS PREVIEW */}
        {submittedApp && (
          <div className="bg-[#071127] border-2 border-sky-400/80 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fadeIn">
            
            {/* Top Celebration Banner */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Application Successfully Registered!
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto">
                Welcome to the ACCMC applicant fraternity. Your details have been stored securely
                in the official membership ledger.
              </p>
            </div>

            {/* Generated Official Digital Membership Admit Slip / Card */}
            <div 
              id="printable-member-pass"
              className="relative max-w-xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c1e42] via-[#08152e] to-[#040a17] border-2 border-blue-500/60 p-6 sm:p-8 shadow-2xl text-left"
            >
              {/* Card Watermark */}
              <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
                <AccmcLogo size={220} />
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-blue-800/80 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <AccmcLogo size={46} showGlow />
                  <div>
                    <span className="block text-[11px] font-semibold text-blue-300 uppercase tracking-widest">
                      Adamjee Cantonment College
                    </span>
                    <span className="block text-base font-extrabold text-white tracking-tight">
                      Mathematics Club (ACCMC)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Application Slip</span>
                  <span className="text-xs font-mono font-bold text-sky-400">{submittedApp.id}</span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Candidate Name</span>
                  <span className="font-bold text-white text-base">{submittedApp.fullName}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">College Roll</span>
                  <span className="font-mono font-bold text-sky-300 text-base">{submittedApp.collegeRoll}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Class & Shift</span>
                  <span className="text-slate-200">{submittedApp.classGrade} · {submittedApp.shift}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Assigned Sector Wing</span>
                  <span className="font-bold text-amber-300 uppercase font-mono">
                    {submittedApp.primarySector}
                  </span>
                </div>

                <div className="col-span-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Contact Coordinates</span>
                  <span className="text-slate-300 font-mono text-xs">{submittedApp.email} | {submittedApp.phone}</span>
                </div>
              </div>

              {/* Card Footer with Verification Code */}
              <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-sky-400" />
                  <span>VERIFIED RECORD #{submittedApp.id}</span>
                </div>
                <span className="text-[11px] text-slate-500">
                  {new Date(submittedApp.submittedAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Actions for the Candidate */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopyId}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId ? 'Copied to Clipboard!' : 'Copy Application ID'}</span>
              </button>

              <button
                onClick={handlePrintCard}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Membership Slip</span>
              </button>

              <button
                onClick={onOpenDatabase}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-950 text-sky-300 hover:text-white text-xs font-mono border border-blue-800/80 transition-all cursor-pointer"
              >
                <span>View in Club Ledger</span>
              </button>

              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent text-slate-400 hover:text-white text-xs underline cursor-pointer"
              >
                <span>Register Another Member</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
