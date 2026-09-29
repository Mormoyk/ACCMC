/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sectors } from './components/Sectors';
import { Events } from './components/Events';
import { Resources } from './components/Resources';
import { Executives } from './components/Executives';
import { Contact } from './components/Contact';
import { MembershipTab } from './components/MembershipTab';
import { AdminPortal } from './components/AdminPortal';
import { Footer } from './components/Footer';
import { SectorId, MemberApplication } from './types';
import { getStoredApplications } from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedSectorForApp, setSelectedSectorForApp] = useState<SectorId | null>(null);
  const [applications, setApplications] = useState<MemberApplication[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load stored applications on mount
  useEffect(() => {
    const apps = getStoredApplications();
    setApplications(apps);
  }, []);

  const refreshApplications = () => {
    const updated = getStoredApplications();
    setApplications(updated);
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'membership') {
      const el = document.getElementById('membership');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApplyForSector = (sectorId: SectorId) => {
    setSelectedSectorForApp(sectorId);
    setActiveTab('membership');
    setTimeout(() => {
      const el = document.getElementById('membership');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#040915] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        applicationCount={applications.length}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Official ACCMC Logo & Lorentz Math Plane */}
        <Hero
          onJoinClick={() => handleSelectTab('membership')}
          onExploreSectors={() => handleSelectTab('sectors')}
          onExploreCarnival={() => handleSelectTab('events')}
        />

        {/* Dedicated "Become a Member" Tab / Section (with attached Google Form & Data Collection) */}
        <MembershipTab
          initialSector={selectedSectorForApp}
          onApplicationSubmitted={refreshApplications}
          onOpenDatabase={() => setIsAdminOpen(true)}
        />

        {/* About ACCMC Section (Inspired by Reference 3 with Stats & Lore) */}
        <About />

        {/* 7 Core Sectors Grid (Inspired by Reference 4) */}
        <Sectors onSelectSectorToApply={handleApplyForSector} />

        {/* Events & Mega Math Carnival 2026 */}
        <Events onJoinClick={() => handleSelectTab('membership')} />

        {/* Resources & Problem of the Week with Interactive Solution Collector */}
        <Resources />

        {/* Executive Committee & Faculty Guidance */}
        <Executives />

        {/* Contact Coordinates, Inquiries & FAQ */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Executive Member Database & Data Collection Vault Modal */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        applications={applications}
        onRefreshApplications={setApplications}
      />
    </div>
  );
}
