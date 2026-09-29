import { SectorItem, ClubEvent, MathProblemOfTheWeek, MemberApplication } from '../types';

export const ACCMC_SECTORS: SectorItem[] = [
  {
    id: 'administration',
    name: 'Administration',
    subtitle: 'The Executive Nexus & Operational Core',
    iconName: 'Shield',
    accentColor: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    description: "The Department of Administration is 'the brain' of ACCMC. It oversees all club operations, inter-departmental synergies, institutional communications with Adamjee Cantonment College authority, and festival execution.",
    keyResponsibilities: [
      'Master scheduling of workshops, seminars & annual carnivals',
      'Liaison with college principal, academic council & faculty advisors',
      'Budget management, resource allocation & formal documentation',
      'Overseeing member onboarding and internal governance'
    ],
    skillsLookedFor: ['Leadership', 'Event Management', 'Crisis Handling', 'Formal Communication']
  },
  {
    id: 'academics',
    name: 'Academics & Research',
    subtitle: 'The Vibrant Intellectual Heart',
    iconName: 'GraduationCap',
    accentColor: '#60A5FA',
    glowColor: 'rgba(96, 165, 250, 0.4)',
    description: 'The Academics Department of ACCMC is the vibrant core where raw mathematical curiosity is refined into national Olympiad excellence. We curate weekly problem sets, mentor junior members, and host advanced masterclasses.',
    keyResponsibilities: [
      'Curating BdMO / IMO standard training problem sets',
      'Conducting weekly math circle discussions & solution breakdowns',
      'Hosting peer-to-peer mentoring sessions for Class XI & XII',
      'Fact-checking and mathematical review for all publications'
    ],
    skillsLookedFor: ['Olympiad Problem Solving', 'Number Theory / Combinatorics', 'Pedagogy', 'Analytical Proofs']
  },
  {
    id: 'publication',
    name: 'Publication & Editorial',
    subtitle: 'The Voice of Mathematical Thought',
    iconName: 'BookOpen',
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    description: 'The Publication Department is the literary sanctuary of ACCMC. We write, edit, and publish the prestigious annual ACCMC Math Gazette, research digests, Olympiad solution manuals, and pedagogical articles.',
    keyResponsibilities: [
      'Authoring and editing the annual ACCMC Math Journal',
      'Drafting event souvenir books and problem archive manuals',
      'Writing mathematical exposition articles & history essays',
      'Proofreading Bengali and English technical content'
    ],
    skillsLookedFor: ['Technical Writing', 'LaTeX / Typst typesetting', 'Proofreading', 'Mathematical Exposition']
  },
  {
    id: 'public-relations',
    name: 'Public Relations & Media',
    subtitle: 'Connecting ACCMC to the Universe',
    iconName: 'Share2',
    accentColor: '#0EA5E9',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    description: 'The Public Relations Department of ACCMC is a dynamic team of communicators and negotiators. They work tirelessly to build strategic partnerships with other college math clubs, secure corporate sponsors, and coordinate with guest mathematicians.',
    keyResponsibilities: [
      'Inter-college club networking and campus ambassador programs',
      'Sponsorship acquisition and festival partner negotiations',
      'Official press releases, media coverage & public statements',
      'Managing external participant queries and helpline desks'
    ],
    skillsLookedFor: ['Public Speaking', 'Negotiation', 'Social Media Management', 'Networking']
  },
  {
    id: 'outreach',
    name: 'Outreach & Operations',
    subtitle: 'The Ground Force & Logistics Powerhouse',
    iconName: 'Compass',
    accentColor: '#2563EB',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    description: 'The Department of Outreach hosts some of the most hardworking members of ACCMC. They carry the club on their shoulders, executing on-ground festival logistics, stage setup, participant flow, and carnival crowd control.',
    keyResponsibilities: [
      'On-ground stage setup, audio-visual gear and exam hall management',
      'Participant registration desk logistics during mega carnivals',
      'Catering, crest, certificate and kit bag logistics',
      'Hospitality for distinguished judges and invited guests'
    ],
    skillsLookedFor: ['Logistical Agility', 'Teamwork Under Pressure', 'Crowd Management', 'Technical Setup']
  },
  {
    id: 'graphics-it',
    name: 'Graphics & IT',
    subtitle: 'The Digital Architects & Visual Crafters',
    iconName: 'Code',
    accentColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    description: 'The Department of Graphics & IT is the technological spine of ACCMC. We build and maintain web portals, design festival visual identities, craft high-impact social media posters, and program Olympiad scoring engines.',
    keyResponsibilities: [
      'Developing and maintaining the ACCMC digital web platform',
      'Designing official carnival banners, badges, ID cards & social banners',
      'Digital certificate automation and database infrastructure',
      'Video motion graphics, teasers and tech support during fests'
    ],
    skillsLookedFor: ['Web Development (React/TS)', 'Adobe Illustrator/Photoshop/Figma', 'Video Editing', 'Database Management']
  },
  {
    id: 'photography',
    name: 'Photography & Archive',
    subtitle: 'Preserving Every Historic Epoch',
    iconName: 'Camera',
    accentColor: '#1D4ED8',
    glowColor: 'rgba(29, 78, 216, 0.4)',
    description: 'ACCMC organizes numerous mathematical arrangements throughout the year. The Photography team ensures that every thrilling moment, intense Olympiad exam hall, and triumphant trophy celebration is immortalized in high definition.',
    keyResponsibilities: [
      'Official photojournalism of all ACCMC events, workshops & carnivals',
      'Live photo transmission for social media teams during festivals',
      'Curating the official ACCMC photo archive and Flickr gallery',
      'Documentary cinematography and winner highlight reels'
    ],
    skillsLookedFor: ['DSLR / Mirrorless Photography', 'Adobe Lightroom', 'Cinematography', 'Live Photo Sorting']
  }
];

export const ACCMC_EVENTS: ClubEvent[] = [
  {
    id: 'carnival-2026',
    title: 'ACCMC National Math Carnival 2026',
    tagline: 'The Ultimate Battlefield of Numbers, Logic & Strategy',
    category: 'Carnival',
    date: 'October 24-25, 2026',
    time: '08:30 AM - 05:30 PM',
    venue: 'Adamjee Cantonment College Campus & Auditorium, Dhaka',
    status: 'Upcoming',
    description: 'The signature flagship event of Adamjee Cantonment College Mathematics Club. Featuring over 1,500 participants from across 80+ educational institutions in Bangladesh.',
    segments: [
      'Olympiad Solo (Junior, Secondary, Higher Secondary)',
      'Math Team Olympiad (3-Member Battle)',
      'Rubik’s Cube Speed Solving Championship',
      'Sudoku & Kakuro Mania',
      'Mathematical Project & Wall Magazine Display',
      'Math Olympiad Relay Race'
    ],
    highlights: [
      'Tk 1,50,000+ Prize Pool with Trophies & Medals',
      'Renowned Guest Mathematicians & BdMO Coaches',
      'Official ACCMC Souvenir & Certificate for all attendees'
    ],
    regFee: 'Tk 250 / participant'
  },
  {
    id: 'intra-olympiad-2026',
    title: 'Intra-Adamjee Math Olympiad & Talent Hunt',
    tagline: 'Discovering the Next Generation of Cantonment Math Legends',
    category: 'Olympiad',
    date: 'November 14, 2026',
    time: '09:00 AM - 01:00 PM',
    venue: 'College Main Academic Building (Classrooms 301-315)',
    status: 'Registration Open',
    description: 'Exclusive to Adamjee Cantonment College students. The primary qualifier to represent ACC in the National Math Olympiad and Divisionals.',
    segments: ['Class XI Division', 'Class XII Division'],
    highlights: [
      'Direct selection for ACCMC Elite Olympiad Squad',
      'Champion crests and books signed by faculty',
      'Full scholarship to ACCMC Advanced Boot Camp'
    ],
    regFee: 'Free for Registered Members'
  },
  {
    id: 'workshop-number-theory',
    title: 'Masterclass: Modular Arithmetic & Diophantine Equations',
    tagline: 'Deep Dive into Olympiad Number Theory Proofs',
    category: 'Workshop',
    date: 'December 05, 2026',
    time: '03:30 PM - 06:00 PM',
    venue: 'College Seminar Hall & Live Stream on Zoom',
    status: 'Upcoming',
    description: 'An intensive technical workshop hosted by former International Mathematical Olympiad (IMO) medalists and ACCMC alumni.',
    highlights: [
      'Comprehensive hand-written theorem digest',
      'Live breakdown of 10 classic IMO Shortlist problems',
      'Q&A on Olympiad preparation roadmap'
    ],
    regFee: 'Free'
  }
];

export const CURRENT_PROBLEM: MathProblemOfTheWeek = {
  id: 'potw-42',
  weekNumber: 42,
  title: 'The Integer Spiral Diophantine Puzzle',
  topic: 'Number Theory',
  difficulty: 'Olympiad Senior',
  statement: 'Find all pairs of positive integers (x, y) such that x³ + 7y = y³ + 7x, and x² + y² is a prime number strictly less than 200.',
  latexFormula: 'x^3 + 7y = y^3 + 7x \\quad \\text{and} \\quad x^2 + y^2 = p \\in \\mathbb{P}, \\, p < 200',
  author: 'ACCMC Academics & Problem Curation Wing',
  deadline: 'Friday, 11:59 PM BST'
};

export const INITIAL_MEMBERS: MemberApplication[] = [
  {
    id: 'ACCMC-2026-1001',
    fullName: 'Tanvir Hossain Chowdhury',
    collegeRoll: '261042',
    email: 'tanvir.acc26@gmail.com',
    phone: '+880 1711 234567',
    classGrade: 'Class XI (Freshman)',
    section: 'Section B (Science)',
    shift: 'Morning Shift',
    primarySector: 'academics',
    secondarySector: 'publication',
    mathInterests: ['Number Theory', 'Combinatorics', 'Olympiad Proofs'],
    olympiadExperience: 'BdMO Regional Runner-up (Junior Category, 2024)',
    statement: 'I have loved math since grade 6 and want to train rigorously for the National Olympiad while contributing problem solutions to the ACCMC gazette.',
    submittedAt: '2026-09-28T14:22:00Z',
    status: 'approved'
  },
  {
    id: 'ACCMC-2026-1002',
    fullName: 'Sabrina Rahman Neha',
    collegeRoll: '262109',
    email: 'sabrina.neha@yahoo.com',
    phone: '+880 1819 876543',
    classGrade: 'Class XI (Freshman)',
    section: 'Section A (Science)',
    shift: 'Day Shift',
    primarySector: 'graphics-it',
    secondarySector: 'outreach',
    mathInterests: ['Geometry', 'Calculus', 'Visual Math & Fractals'],
    olympiadExperience: 'Inter-school Math Fest 2nd place in Project Presentation',
    statement: 'I specialize in UI design and digital posters. Excited to elevate the online presence and promotional branding of ACCMC!',
    submittedAt: '2026-09-29T08:15:00Z',
    status: 'pending'
  },
  {
    id: 'ACCMC-2026-1003',
    fullName: 'Zubair Al Mahmud',
    collegeRoll: '251883',
    email: 'zubair.mahmud@gmail.com',
    phone: '+880 1923 456789',
    classGrade: 'Class XII (Senior)',
    section: 'Section C (Science)',
    shift: 'Morning Shift',
    primarySector: 'administration',
    secondarySector: 'public-relations',
    mathInterests: ['Algebra', 'Discrete Mathematics'],
    olympiadExperience: 'Organized Intra-School Fest 2024, BdMO Participant',
    statement: 'I want to help organize the mega ACCMC National Carnival and coordinate logistics between colleges.',
    submittedAt: '2026-09-29T10:45:00Z',
    status: 'reviewing'
  }
];

export const DEFAULT_GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScJ_v5Gf7_placeholder_accmc_membership_form/viewform?embedded=true';
export const DEFAULT_DIRECT_GOOGLE_FORM = 'https://forms.gle/ACCMCmembership2026';
