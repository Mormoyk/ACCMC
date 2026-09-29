import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { saveContactMessage } from '../utils/storage';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [collegeRoll, setCollegeRoll] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    saveContactMessage({
      name: name.trim(),
      email: email.trim(),
      collegeRoll: collegeRoll.trim(),
      subject: subject.trim() || 'General Inquiry',
      message: message.trim()
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setCollegeRoll('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  const faqs = [
    {
      q: 'Who is eligible to join Adamjee Cantonment College Mathematics Club?',
      a: 'All currently enrolled students of Adamjee Cantonment College (Class XI and Class XII, both Morning and Day shifts, across Science, Commerce, and Humanities) are eligible to apply. We also welcome active involvement from ACC alumni.'
    },
    {
      q: 'Do I need prior Olympiad medal experience to become a member?',
      a: 'Not at all! ACCMC is built for learners of all levels. While we have dedicated wings for advanced BdMO Olympiad candidates, we have equally vital departments in Logistics, Graphics & IT, Publications, and Public Relations.'
    },
    {
      q: 'Can I apply through both the website form and the Google Form?',
      a: 'Yes. Both submission methods are linked directly to the ACCMC membership committee. You only need to submit once through either form.'
    },
    {
      q: 'When are weekly workshops and math problem sessions held?',
      a: 'Regular workshops are held every Thursday afternoon and Saturday morning in the college seminar rooms and academic classrooms, as well as on Discord/Zoom during exam preparation periods.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#030713] border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-14 text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact & Queries
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Have questions regarding membership admissions, carnival sponsorships, or Olympiad training?
            Send us a direct message or review our frequently asked questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Coordinates & FAQ */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Coordinates Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#071128] border border-blue-900/60 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800 text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Club Headquarters</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Adamjee Cantonment College Campus<br />
                    Dhaka Cantonment, Dhaka-1206, Bangladesh
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071128] border border-blue-900/60 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Official Inquiries</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    mathclub@adamjeecollege.edu.bd<br />
                    accmc.official@gmail.com
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071128] border border-blue-900/60 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800 text-sky-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Club Helpline</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    +880 1711-234567 / +880 1819-876543
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 pt-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-blue-900/60 rounded-xl bg-[#060e22] overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full p-3.5 text-left text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-between hover:text-white"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-sky-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-blue-900/40">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-6 bg-[#071128] border border-blue-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
            <h3 className="text-xl font-bold text-white mb-1">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our executive desk will review your inquiry and follow up via email or phone.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-800 rounded-xl text-emerald-300 text-xs text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 mx-auto" />
                <h5 className="text-sm font-bold text-white">Message Transmitted!</h5>
                <p>Thank you for reaching out to ACCMC. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#040a1a] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full bg-[#040a1a] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      College Roll (if Adamjeean)
                    </label>
                    <input
                      type="text"
                      value={collegeRoll}
                      onChange={(e) => setCollegeRoll(e.target.value)}
                      placeholder="e.g. 261042"
                      className="w-full bg-[#040a1a] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-mono text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Question about National Carnival 2026 / Membership"
                    className="w-full bg-[#040a1a] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your query or message in detail..."
                    className="w-full bg-[#040a1a] border border-blue-900/80 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to ACCMC</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
