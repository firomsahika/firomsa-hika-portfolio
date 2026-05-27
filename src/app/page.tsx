

"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "./data";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ResumeModal from "../components/ResumeModal";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

 const handleDownloadResume = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Looks straight inside the Next.js public directory
      link.download = "Firomsa_Hika_Resume.pdf"; // Clean file name saving structure for recruiters
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveSection("home");
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans tracking-tight antialiased select-none selection:bg-blue-600/20 selection:text-blue-400 overflow-x-hidden">
      
      {/* Absolute Ambient Grid Layer (from screenshot style guide) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,24,48,0.3),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent pointer-events-none" />
      
      {/* Sticky Pill-based Header Navigation */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Single Page Portfolios */}
      <main className="relative z-15">
        
        {/* Home Hero Screen */}
        <Home onDownloadResume={handleDownloadResume} />

        {/* Narrative / Metrics Section */}
        <About />

        {/* Categories Bento Skills Section */}
        <Skills />

        {/* Grid of Deployed Projects */}
        <Projects />

        {/* Professional Jobs / Internships Timeline */}
        <Experience />

        {/* Academic Coursework & Milestones */}
        <Education />

        {/* Collaboration Form & Direct Contacts */}
        <Contact />

      </main>

      {/* Premium Footer with stats */}
      <footer className="relative bg-slate-950 border-t border-slate-900 py-12 z-20 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Copyright description */}
          <div className="text-center md:text-left">
            <div className="text-lg font-extrabold text-white tracking-wider mb-2">
              FH<span className="text-blue-500">.</span>
            </div>
            <p className="text-slate-500 text-xs font-mono">
              Designed & Built by {PERSONAL_INFO.name} © {new Date().getFullYear()}
            </p>
            <p className="text-[10px] text-slate-600 mt-1">
              ASTU Computer Science & Engineering • Class of 2026
            </p>
          </div>

          {/* Social icons in Footer */}
          <div className="flex flex-col items-center md:items-end gap-3.5">
            <div className="flex items-center gap-4">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-400 hover:text-white duration-200 shadow"
                aria-label="GitHub Profile"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-400 hover:text-white duration-200 shadow"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-400 hover:text-white duration-200 shadow"
                aria-label="Email Firomsa"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Back to top anchor */}
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-xs font-mono font-bold rounded-lg flex items-center gap-1.5 duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Small aesthetic note */}
        <div className="border-t border-slate-900/40 mt-8 pt-4 text-center">
          <p className="text-[9px] text-slate-600 uppercase tracking-widest flex items-center justify-center gap-1.5 font-mono">
            <span>Powered by Next.js 15 & Tailwind CSS v4</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Adama Science & Technology University</span>
          </p>
        </div>
      </footer>

      {/* Interactive Modal to print/view full Resume */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal 
            isOpen={isResumeOpen} 
            onClose={() => setIsResumeOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}