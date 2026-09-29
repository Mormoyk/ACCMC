import { MemberApplication, ProblemSolutionSubmission, ContactMessage } from '../types';
import { INITIAL_MEMBERS, DEFAULT_GOOGLE_FORM_URL } from '../data/clubData';

const APPS_STORAGE_KEY = 'accmc_member_applications_v1';
const GOOGLE_FORM_KEY = 'accmc_google_form_embed_url';
const SOLUTIONS_STORAGE_KEY = 'accmc_problem_solutions_v1';
const MESSAGES_STORAGE_KEY = 'accmc_contact_messages_v1';

export const getStoredApplications = (): MemberApplication[] => {
  try {
    const raw = localStorage.getItem(APPS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(INITIAL_MEMBERS));
      return INITIAL_MEMBERS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading member applications:', e);
    return INITIAL_MEMBERS;
  }
};

export const saveApplication = (app: Omit<MemberApplication, 'id' | 'submittedAt' | 'status'>): MemberApplication => {
  const current = getStoredApplications();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newApp: MemberApplication = {
    ...app,
    id: `ACCMC-2026-${randomSuffix}`,
    submittedAt: new Date().toISOString(),
    status: 'pending'
  };

  const updated = [newApp, ...current];
  localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(updated));
  return newApp;
};

export const updateApplicationStatus = (id: string, status: 'pending' | 'approved' | 'reviewing'): MemberApplication[] => {
  const current = getStoredApplications();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteApplication = (id: string): MemberApplication[] => {
  const current = getStoredApplications();
  const updated = current.filter(item => item.id !== id);
  localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const getStoredGoogleFormUrl = (): string => {
  try {
    return localStorage.getItem(GOOGLE_FORM_KEY) || DEFAULT_GOOGLE_FORM_URL;
  } catch {
    return DEFAULT_GOOGLE_FORM_URL;
  }
};

export const setStoredGoogleFormUrl = (url: string): void => {
  try {
    localStorage.setItem(GOOGLE_FORM_KEY, url);
  } catch (e) {
    console.error('Failed saving google form url:', e);
  }
};

export const getStoredSolutions = (): ProblemSolutionSubmission[] => {
  try {
    const raw = localStorage.getItem(SOLUTIONS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveProblemSolution = (data: Omit<ProblemSolutionSubmission, 'id' | 'submittedAt'>): ProblemSolutionSubmission => {
  const current = getStoredSolutions();
  const newSubmission: ProblemSolutionSubmission = {
    ...data,
    id: `SOL-${Date.now()}`,
    submittedAt: new Date().toISOString()
  };
  const updated = [newSubmission, ...current];
  localStorage.setItem(SOLUTIONS_STORAGE_KEY, JSON.stringify(updated));
  return newSubmission;
};

export const getStoredMessages = (): ContactMessage[] => {
  try {
    const raw = localStorage.getItem(MESSAGES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveContactMessage = (data: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage => {
  const current = getStoredMessages();
  const newMsg: ContactMessage = {
    ...data,
    id: `MSG-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  const updated = [newMsg, ...current];
  localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(updated));
  return newMsg;
};

export const exportApplicationsToCSV = (apps: MemberApplication[]): void => {
  const headers = [
    'Application ID',
    'Full Name',
    'College Roll',
    'Class / Grade',
    'Section',
    'Shift',
    'Email',
    'Phone',
    'Primary Sector',
    'Secondary Sector',
    'Math Interests',
    'Olympiad Experience',
    'Statement',
    'Status',
    'Submitted At'
  ];

  const escapeCSV = (val: string | undefined | null) => {
    if (val === undefined || val === null) return '""';
    const clean = String(val).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = apps.map(app => [
    escapeCSV(app.id),
    escapeCSV(app.fullName),
    escapeCSV(app.collegeRoll),
    escapeCSV(app.classGrade),
    escapeCSV(app.section),
    escapeCSV(app.shift),
    escapeCSV(app.email),
    escapeCSV(app.phone),
    escapeCSV(app.primarySector),
    escapeCSV(app.secondarySector || 'None'),
    escapeCSV(app.mathInterests.join(', ')),
    escapeCSV(app.olympiadExperience),
    escapeCSV(app.statement),
    escapeCSV(app.status),
    escapeCSV(new Date(app.submittedAt).toLocaleString())
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `ACCMC_Membership_Applicants_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
