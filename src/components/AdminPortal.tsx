import React, { useState } from 'react';
import { 
  MemberApplication, 
  SectorId, 
  ClassGrade 
} from '../types';
import { 
  exportApplicationsToCSV, 
  updateApplicationStatus, 
  deleteApplication 
} from '../utils/storage';
import { 
  X, 
  Download, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  Trash2, 
  Eye, 
  Users, 
  FileSpreadsheet,
  Check,
  Calendar
} from 'lucide-react';
import { ACCMC_SECTORS } from '../data/clubData';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: MemberApplication[];
  onRefreshApplications: (updated: MemberApplication[]) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  isOpen,
  onClose,
  applications,
  onRefreshApplications,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSector, setFilterSector] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedApp, setSelectedApp] = useState<MemberApplication | null>(null);

  if (!isOpen) return null;

  const filteredApps = applications.filter((app) => {
    const matchesSearch = 
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.collegeRoll.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSector = filterSector === 'all' || app.primarySector === filterSector;
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;

    return matchesSearch && matchesSector && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: 'pending' | 'approved' | 'reviewing') => {
    const updated = updateApplicationStatus(id, newStatus);
    onRefreshApplications(updated);
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp({ ...selectedApp, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm(`Are you sure you want to remove application ${id}?`)) {
      const updated = deleteApplication(id);
      onRefreshApplications(updated);
      if (selectedApp && selectedApp.id === id) {
        setSelectedApp(null);
      }
    }
  };

  const handleExport = () => {
    exportApplicationsToCSV(applications);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#070e22] border-2 border-blue-800/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#091530] border-b border-blue-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
              <Users className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>ACCMC Member Database & Candidate Vault</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-900/60 text-sky-300 border border-blue-700/50">
                  {applications.length} Records
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Data collected from applicants for Adamjee Cantonment College Mathematics Club
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-all cursor-pointer"
              title="Download entire dataset as CSV for Excel or Google Sheets"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-6 bg-[#060c1d] border-b border-blue-900/60 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Name, College Roll, Email, or Application ID..."
              className="w-full pl-10 pr-4 py-2 bg-[#091530] border border-blue-900/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Sector Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-mono">Sector:</span>
              <select
                value={filterSector}
                onChange={(e) => setFilterSector(e.target.value)}
                className="bg-[#091530] border border-blue-900/80 rounded-lg px-2.5 py-2 text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                <option value="all">All Sectors ({applications.length})</option>
                {ACCMC_SECTORS.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-mono">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-[#091530] border border-blue-900/80 rounded-lg px-2.5 py-2 text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="reviewing">Under Review</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Area (Table + Detail view) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredApps.length === 0 ? (
            <div className="text-center py-16 space-y-2">
              <p className="text-base text-slate-300 font-medium">No matching applications found</p>
              <p className="text-xs text-slate-500">Try clearing the search or filters above.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-blue-900/60 bg-[#060c1c]">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-blue-900/80 bg-[#091530] text-sky-300 font-mono text-xs">
                    <th className="p-3.5">Roll & ID</th>
                    <th className="p-3.5">Applicant Name</th>
                    <th className="p-3.5">Class / Shift</th>
                    <th className="p-3.5">Primary Sector</th>
                    <th className="p-3.5">Contact</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-900/40 text-slate-300">
                  {filteredApps.map((app) => (
                    <tr 
                      key={app.id}
                      className="hover:bg-blue-950/40 transition-colors cursor-pointer"
                      onClick={() => setSelectedApp(app)}
                    >
                      <td className="p-3.5 font-mono">
                        <div className="font-bold text-white">{app.collegeRoll}</div>
                        <div className="text-[11px] text-sky-400">{app.id}</div>
                      </td>
                      <td className="p-3.5">
                        <div className="font-bold text-white">{app.fullName}</div>
                        <div className="text-xs text-slate-400">{app.section}</div>
                      </td>
                      <td className="p-3.5">
                        <div>{app.classGrade.split(' ')[0]} {app.classGrade.split(' ')[1]}</div>
                        <div className="text-[11px] text-slate-400">{app.shift}</div>
                      </td>
                      <td className="p-3.5">
                        <span className="font-mono text-xs text-amber-300 uppercase font-semibold">
                          {app.primarySector}
                        </span>
                      </td>
                      <td className="p-3.5 font-mono text-xs">
                        <div className="text-slate-300">{app.phone}</div>
                        <div className="text-slate-400 text-[11px] truncate max-w-[150px]">{app.email}</div>
                      </td>
                      <td className="p-3.5">
                        <span className={`inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded-full ${
                          app.status === 'approved'
                            ? 'bg-emerald-950 border border-emerald-700 text-emerald-300'
                            : app.status === 'reviewing'
                            ? 'bg-amber-950 border border-amber-700 text-amber-300'
                            : 'bg-blue-950 border border-blue-700 text-blue-300'
                        }`}>
                          {app.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                          {app.status === 'reviewing' && <Clock className="w-3 h-3" />}
                          <span className="capitalize">{app.status}</span>
                        </span>
                      </td>
                      <td className="p-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="p-1.5 rounded hover:bg-blue-900/60 text-slate-300 hover:text-white"
                            title="View Full Profile"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleStatusChange(app.id, app.status === 'approved' ? 'pending' : 'approved')}
                            className="p-1.5 rounded hover:bg-blue-900/60 text-emerald-400 hover:text-emerald-300"
                            title={app.status === 'approved' ? 'Set Pending' : 'Approve Member'}
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(app.id)}
                            className="p-1.5 rounded hover:bg-rose-950/60 text-rose-400 hover:text-rose-300"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Detail Dossier if an applicant is clicked */}
        {selectedApp && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-[#08152e] border-2 border-sky-400/60 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl text-left">
              <div className="flex items-start justify-between border-b border-blue-900/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-white">{selectedApp.fullName}</h4>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-900 text-sky-300">
                      {selectedApp.id}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    College Roll: <strong className="text-sky-300 font-mono">{selectedApp.collegeRoll}</strong> · {selectedApp.classGrade} ({selectedApp.section})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Primary Sector</span>
                  <span className="font-bold text-amber-300 uppercase">{selectedApp.primarySector}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Secondary Sector</span>
                  <span className="text-slate-200 capitalize">{selectedApp.secondarySector || 'None'}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Email</span>
                  <span className="text-slate-200 font-mono">{selectedApp.email}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Phone</span>
                  <span className="text-slate-200 font-mono">{selectedApp.phone}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 font-mono block mb-1.5">Math Interests</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedApp.mathInterests.map((interest, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-[#050c1e] border border-blue-800/80 text-xs text-sky-200">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 font-mono block mb-1">Olympiad & Math Experience</span>
                <p className="p-3 bg-[#050c1e] border border-blue-900/60 rounded-xl text-xs text-slate-300 leading-relaxed">
                  {selectedApp.olympiadExperience}
                </p>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 font-mono block mb-1">Motivation / Statement</span>
                <p className="p-3 bg-[#050c1e] border border-blue-900/60 rounded-xl text-xs text-slate-300 leading-relaxed">
                  {selectedApp.statement}
                </p>
              </div>

              <div className="pt-4 border-t border-blue-900/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Set Status:</span>
                  {(['pending', 'reviewing', 'approved'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedApp.id, st)}
                      className={`px-3 py-1 text-xs rounded-lg font-mono uppercase font-bold transition-all cursor-pointer ${
                        selectedApp.status === st
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedApp(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
