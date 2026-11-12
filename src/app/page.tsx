"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "./data";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ResumeModal from "../components/ResumeModal";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleDownloadResume = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Firomsa_Hika_Telila_Resume.pdf";
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
    <div className="relative min-h-screen bg-[#050505] text-neutral-100 font-sans tracking-tight antialiased selection:bg-white selection:text-black">
      
      {/* Subtle monochrome technical grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40 z-0" />

      {/* Sticky Header Navigation */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onDownloadResume={handleDownloadResume}
        onOpenResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Home
          onDownloadResume={handleDownloadResume}
          onOpenResumeModal={() => setIsResumeOpen(true)}
        />

        {/* 01. Professional Summary */}
        <About />

        {/* 02. Professional Experience */}
        <Experience />

        {/* 03. Featured Engineering Projects */}
        <Projects />

        {/* 04. Core Technical Skills */}
        <Skills />

        {/* 05. Academic Foundation & Leadership */}
        <Education />

        {/* 06. Direct Contacts & Inquiries */}
        <Contact />
      </main>

      {/* Monochrome Footer */}
      <footer className="relative bg-black border-t border-neutral-900 py-12 z-20 font-mono text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-white text-sm tracking-wider uppercase">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-neutral-400 text-[11px]">
              Senior Full-Stack Software Engineer • Addis Ababa, Ethiopia
            </p>
            <p className="text-neutral-400 text-[10px]">
              ASTU B.Sc. Computer Science & Engineering • Class of 2026
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 rounded text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 rounded text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 rounded text-neutral-400 hover:text-white transition-colors"
                aria-label="Email Firomsa"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-950 text-neutral-400 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-4 border-t border-neutral-950 text-center text-[10px] text-neutral-400">
          Strictly Black & White Architectural Edition • Built with Next.js & TypeScript
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownloadResume={handleDownloadResume}
      />

    </div>
  );
}
