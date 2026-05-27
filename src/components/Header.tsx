/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Mail, 
  Download,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { PERSONAL_INFO } from "../app/data";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onDownloadResume: () => void;
}

export default function Header({ activeSection, setActiveSection, onDownloadResume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState("rgba(59, 130, 246, 0.15)");

  // Detect scroll to style header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Automatically update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
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
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
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
    <>
      <header 
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-sky-400 opacity-60 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <div className="relative px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800 text-lg font-bold tracking-wider text-white">
                FH<span className="text-blue-500">.</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation Pill (As requested in image layout) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
          >
            <nav className="relative h-12 px-2.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 h-8 flex items-center gap-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      isActive 
                        ? "text-white" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/40 border border-blue-500/30 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </motion.div>

          {/* Right Action Widgets */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Visual Indicator of online availability */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/85 border border-slate-800/60 rounded-full text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>

            {/* Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDownloadResume}
              className="relative group overflow-hidden px-5 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-500/25 border border-blue-400/20"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 duration-300" />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Tablet & Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onDownloadResume}
              className="px-3.5 py-1.5 bg-blue-600 text-white rounded-full text-xs font-extrabold shadow-md flex items-center gap-1.5"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-900/80 rounded-lg border border-slate-800/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full z-40 lg:hidden px-4 py-3"
          >
            <div className="bg-slate-950/95 backdrop-blur-2xl border border-slate-900/90 rounded-2xl p-5 shadow-2xl">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold tracking-wide transition-all ${
                        isActive 
                          ? "bg-blue-600/20 border border-blue-500/30 text-white" 
                          : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
