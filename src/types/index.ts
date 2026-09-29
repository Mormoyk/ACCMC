export type ClassGrade = 'Class XI (Freshman)' | 'Class XII (Senior)' | 'HSC Candidate' | 'Alumni / Ex-Adamjeean';
export type ShiftType = 'Morning Shift' | 'Day Shift';

export type SectorId = 
  | 'administration'
  | 'academics'
  | 'publication'
  | 'public-relations'
  | 'outreach'
  | 'graphics-it'
  | 'photography';

export interface MemberApplication {
  id: string;
  fullName: string;
  collegeRoll: string;
  email: string;
  phone: string;
  classGrade: ClassGrade;
  section: string;
  shift: ShiftType;
  primarySector: SectorId;
  secondarySector?: SectorId;
  mathInterests: string[];
  olympiadExperience: string;
  statement: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'reviewing';
}

export interface SectorItem {
  id: SectorId;
  name: string;
  subtitle: string;
  iconName: string;
  accentColor: string;
  glowColor: string;
  description: string;
  keyResponsibilities: string[];
  skillsLookedFor: string[];
}

export interface ClubEvent {
  id: string;
  title: string;
  tagline: string;
  category: 'Olympiad' | 'Carnival' | 'Workshop' | 'Webinar' | 'Competition';
  date: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Registration Open' | 'Ongoing' | 'Archived';
  description: string;
  segments?: string[];
  highlights: string[];
  regFee: string;
}

export interface MathProblemOfTheWeek {
  id: string;
  weekNumber: number;
  title: string;
  topic: 'Number Theory' | 'Combinatorics' | 'Geometry' | 'Algebra' | 'Analysis';
  difficulty: 'Olympiad Junior' | 'Olympiad Senior' | 'National Level';
  statement: string;
  latexFormula?: string;
  author: string;
  deadline: string;
}

export interface ProblemSolutionSubmission {
  id: string;
  problemId: string;
  studentName: string;
  collegeRoll: string;
  email: string;
  solutionText: string;
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  collegeRoll?: string;
  subject: string;
  message: string;
  createdAt: string;
}
