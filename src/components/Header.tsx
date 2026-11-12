"use client";

import React, { useEffect, useState } from "react";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../app/data";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  onDownloadResume,
  onOpenResumeModal,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-neutral-800 py-3.5"
          : "bg-black/60 backdrop-blur-sm border-b border-neutral-900/60 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("home");
          }}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="font-mono text-sm font-semibold tracking-wider text-white uppercase group-hover:text-neutral-300 transition-colors">
            {PERSONAL_INFO.displayName}
          </div>
          <div className="font-mono text-[11px] text-neutral-400 tracking-tight">
            Senior Full-Stack Software Engineer
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded transition-colors ${
                  isActive
                    ? "text-white bg-neutral-900 border border-neutral-700"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResumeModal}
            className="px-3 py-1.5 rounded border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5 bg-neutral-950"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onDownloadResume}
            className="px-3 py-1.5 rounded bg-white hover:bg-neutral-200 text-black font-mono text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onDownloadResume}
            className="p-1.5 rounded border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-5 mt-3 space-y-1 font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left py-2 px-3 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-2 text-center rounded border border-neutral-700 text-neutral-200 font-mono text-xs"
            >
              View Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadResume();
              }}
              className="flex-1 py-2 text-center rounded bg-white text-black font-mono text-xs font-medium"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
