"use client";

import React, { useRef, useState } from "react";
import { X, Printer, Copy, Download, Check, ExternalLink } from "lucide-react";
import {
  PERSONAL_INFO,
  CORE_TECHNICAL_SKILLS,
  PROFESSIONAL_EXPERIENCE,
  FEATURED_PROJECTS,
  EDUCATION,
  LEADERSHIP,
} from "../app/data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadResume: () => void;
}

export default function ResumeModal({ isOpen, onClose, onDownloadResume }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const printableAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleCopyRawText = () => {
    const textResume = `
FIROMSA HIKA TELILA
Senior Full-Stack Software Engineer
Addis Ababa, Ethiopia | ${PERSONAL_INFO.phone}
Gmail: ${PERSONAL_INFO.email} |
Github: ${PERSONAL_INFO.github}
Linkedin: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

CORE TECHNICAL SKILLS
${CORE_TECHNICAL_SKILLS.map((cat) => `● ${cat.category}: ${cat.skills.join(", ")}`).join("\n")}

PROFESSIONAL EXPERIENCE
${PROFESSIONAL_EXPERIENCE.map(
  (exp) => `
${exp.company} | ${exp.location}
${exp.role} | ${exp.period}
${exp.points.map((pt) => `● ${pt}`).join("\n")}
`
).join("\n")}

FEATURED ENGINEERING PROJECTS
${FEATURED_PROJECTS.map(
  (p) => `
${p.title} – ${p.subtitle} | ${p.displayUrl}
Tech Stack: ${p.techStack.join(", ")}
${p.points.map((pt) => `● ${pt}`).join("\n")}
`
).join("\n")}

EDUCATION
${EDUCATION.institution} | ${EDUCATION.location}
${EDUCATION.degree} | ${EDUCATION.graduation}
● Cumulative GPA: ${EDUCATION.gpa}
● Relevant Coursework: ${EDUCATION.coursework.join(", ")}

LEADERSHIP & COMMUNITY ENGAGEMENT
${LEADERSHIP.organization} | ${LEADERSHIP.location}
${LEADERSHIP.role} | ${LEADERSHIP.period}
${LEADERSHIP.points.map((pt) => `● ${pt}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl my-8 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black/50 font-mono text-xs">
          <div className="text-white font-semibold flex items-center gap-2">
            <span>OFFICIAL RESUME VIEW</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">Firomsa_Hika_Telila.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRawText}
              className="px-2.5 py-1.5 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onDownloadResume}
              className="px-2.5 py-1.5 rounded bg-white hover:bg-neutral-200 text-black font-semibold transition-colors flex items-center gap-1.5"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors ml-2"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div ref={printableAreaRef} className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-neutral-950 text-neutral-200 font-sans text-xs sm:text-sm">
          
          {/* Document Header */}
          <div className="border-b border-neutral-800 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase font-sans">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-neutral-300 mt-1 font-mono">
              {PERSONAL_INFO.title}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-400">
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>|</span>
              <span>Gmail: {PERSONAL_INFO.email}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-400">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                Github: {PERSONAL_INFO.github}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                Linkedin: {PERSONAL_INFO.linkedin}
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-850 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Section: Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-850 pb-1">
              CORE TECHNICAL SKILLS
            </h2>
            <ul className="space-y-2 font-sans text-xs sm:text-sm text-neutral-300">
              {CORE_TECHNICAL_SKILLS.map((cat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">●</span>
                  <span>
                    <strong className="text-white font-medium">{cat.category}:</strong> {cat.skills.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Professional Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-850 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-5">
              {PROFESSIONAL_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline font-mono text-xs">
                    <span className="font-bold text-white">{exp.company} | {exp.location}</span>
                  </div>
                  <div className="flex flex-wrap justify-between items-baseline font-mono text-xs text-neutral-400">
                    <span className="font-semibold text-neutral-200">{exp.role}</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-1 mt-2 text-xs sm:text-sm text-neutral-300">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">●</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Featured Engineering Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-850 pb-1">
              FEATURED ENGINEERING PROJECTS
            </h2>
            <div className="space-y-5">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline font-mono text-xs">
                    <span className="font-bold text-white">
                      {proj.title} – {proj.subtitle} | {proj.displayUrl}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-neutral-400">
                    <span className="font-semibold text-neutral-300">Tech Stack:</span> {proj.techStack.join(", ")}
                  </div>
                  <ul className="space-y-1 mt-2 text-xs sm:text-sm text-neutral-300">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-1">●</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-850 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-1 font-mono text-xs">
              <div className="font-bold text-white">{EDUCATION.institution} | {EDUCATION.location}</div>
              <div className="text-neutral-300">{EDUCATION.degree} | {EDUCATION.graduation}</div>
              <div className="text-neutral-300">● Cumulative GPA: {EDUCATION.gpa}</div>
              <div className="text-neutral-400">
                ● Relevant Coursework: {EDUCATION.coursework.join(", ")}
              </div>
            </div>
          </div>

          {/* Section: Leadership & Community */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-850 pb-1">
              LEADERSHIP & COMMUNITY ENGAGEMENT
            </h2>
            <div className="space-y-1 font-mono text-xs">
              <div className="font-bold text-white">{LEADERSHIP.organization} | {LEADERSHIP.location}</div>
              <div className="text-neutral-300">{LEADERSHIP.role} | {LEADERSHIP.period}</div>
              <ul className="space-y-1 mt-1 font-sans text-xs sm:text-sm text-neutral-300">
                {LEADERSHIP.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-1">●</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
