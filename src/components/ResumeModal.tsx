/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Printer, Copy, FileText, Check, Phone, Mail, MapPin, Github, Linkedin, Calendar, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, EDUCATION, LEADERSHIP } from "../app/data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const printableAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleCopyRawText = () => {
    // Generate clean text representation of the resume
    const textResume = `
FIROMSA HIKA - FULLSTACK SOFTWARE ENGINEER
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
${EDUCATION.institution} - ${EDUCATION.period}
${EDUCATION.degree}
Key Achievements:
${EDUCATION.achievements.join("\n")}
Relevant Coursework:
${EDUCATION.coursework.join(", ")}

INDUSTRY EXPERIENCE
${WORK_EXPERIENCE.map(exp => `
${exp.role} | ${exp.company} | ${exp.period}
${exp.description.map(desc => `- ${desc}`).join("\n")}
`).join("\n")}

PROJECTS
${PROJECTS.map(proj => `
${proj.title} - ${proj.role} (${proj.url || "Repository"})
${proj.highlights.map(h => `- ${h}`).join("\n")}
`).join("\n")}

LEADERSHIP
${LEADERSHIP.role} | ${LEADERSHIP.organization} (${LEADERSHIP.period})
${LEADERSHIP.description.map(d => `- ${d}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printContent = printableAreaRef.current?.innerHTML;
    if (!printContent) return;

    // Create a temporary hidden iframe on the same main document
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Resume - Firomsa Hika</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body { 
                font-family: 'Inter', system-ui, sans-serif; 
                padding: 40px; 
                color: #1f2937; 
                line-height: 1.5; 
                background: white;
              }
              @media print {
                body { padding: 0 !important; color: #000 !important; }
              }
            </style>
          </head>
          <body>
            <div class="max-w-3xl mx-auto">
              ${printContent}
            </div>
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.focus();
                  window.print();
                }, 250);
              };
            </script>
          </body>
        </html>
      `);
      doc.close();
    }

    // Safely remove the hidden element after the print dialog is triggered
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      
      {/* Modal Wrapper Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-blue-500/5 select-text"
      >
        {/* Sticky Controller Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/40 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Firomsa Hika CV Portal</h3>
              <p className="text-[10px] text-slate-500 font-mono">Format: High Fidelity Professional Resume</p>
            </div>
          </div>

          {/* Action widgets */}
          <div className="flex items-center gap-2">
            
            {/* Copy raw text button */}
            <button
              onClick={handleCopyRawText}
              className="p-2 bg-slate-950 border border-slate-850 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg text-xs flex items-center gap-1.5 duration-200"
              title="Copy resume text to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="font-mono text-[10px] hidden sm:inline">{copied ? "Copied" : "Copy Raw Text"}</span>
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs flex items-center gap-1.5 duration-200"
              title="Print standard A4 copy"
            >
              <Printer className="w-4 h-4" />
              <span className="font-sans font-bold text-[10px] hidden sm:inline">Print CV</span>
            </button>

            {/* Separator */}
            <span className="w-px h-6 bg-slate-800 mx-1" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg duration-250"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Shell */}
        <div className="flex-grow p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 leading-normal select-text">
          <div ref={printableAreaRef} className="max-w-3xl mx-auto space-y-6 text-slate-800 text-xs sm:text-sm">
            
            {/* CV Identity Head */}
            <div className="border-b-2 border-slate-900 pb-5 text-center">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mt-1">Full-Stack Software Engineer</p>
              
              {/* Context bar with icons */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-600 font-medium mt-3.5">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.email}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.location}</span>
                <span className="flex items-center gap-1"><Github className="w-3.5 h-3.5 text-slate-500" /> github.com/firomsa</span>
              </div>
            </div>

            {/* Brief Executive Summary */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-350 pb-1 mb-2.5">Executive Summary</h2>
              <p className="text-slate-700 leading-relaxed text-[11.5px] font-normal">{PERSONAL_INFO.summary}</p>
            </div>

            {/* Education block */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-350 pb-1 mb-2.5">Education</h2>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900">{EDUCATION.institution}</h3>
                  <p className="text-[11px] text-blue-700 font-semibold">{EDUCATION.degree}</p>
                </div>
                <div className="text-right text-[11px] text-slate-600 font-bold">
                  <span>{EDUCATION.period}</span>
                  <p className="font-normal">Adama, Ethiopia</p>
                </div>
              </div>
              <div className="mt-2.5 space-y-1 text-slate-700 text-[11px] pl-3 border-l border-slate-300">
                <p><strong>Bootcamp Status:</strong> {EDUCATION.achievements[0]}</p>
                <p><strong>Rigorous Coursework:</strong> {EDUCATION.coursework.join(", ")}</p>
              </div>
            </div>

            {/* Professional industry experience */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-350 pb-1 mb-3">Industry Experience</h2>
              <div className="space-y-4">
                {WORK_EXPERIENCE.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-extrabold text-slate-900">{exp.role}</h4>
                        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">{exp.company}</span>
                      </div>
                      <div className="text-right text-[11px] text-slate-600 font-bold">
                        <span>{exp.period}</span>
                        <p className="font-normal">{exp.location}</p>
                      </div>
                    </div>
                    {/* Descriptions bullet details */}
                    <ul className="list-disc pl-4.5 mt-2 space-y-1.5 text-slate-700 text-[11px]">
                      {exp.description.map((bullet, bulkIdx) => (
                        <li key={bulkIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Project profiles */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-350 pb-1 mb-3">Projects Developed</h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex items-start justify-between border-b border-dashed border-slate-200 pb-1">
                      <div>
                        <span className="font-extrabold text-slate-900">{proj.title}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-800 font-mono px-1.5 py-0.5 ml-2.5 rounded">{proj.role}</span>
                      </div>
                      <span className="text-[10px] text-blue-600 font-medium font-mono lowercase">{proj.url}</span>
                    </div>
                    <ul className="list-disc pl-4.5 mt-1.5 space-y-1 text-slate-700 text-[11px]">
                      {proj.highlights.map((mil, milIdx) => (
                        <li key={milIdx} className="leading-relaxed">{mil}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Social organization leadership */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-350 pb-1 mb-2.5">Leadership Work</h2>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900">{LEADERSHIP.role}</h3>
                  <p className="text-[11px] text-blue-700 font-semibold">{LEADERSHIP.organization}</p>
                </div>
                <span className="text-[11px] text-slate-600 font-bold">{LEADERSHIP.period}</span>
              </div>
              <ul className="list-disc pl-4.5 mt-2 space-y-1 text-slate-700 text-[11px]">
                {LEADERSHIP.description.map((lead, leadIdx) => (
                  <li key={leadIdx} className="leading-relaxed">{lead}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Modal Bottom Footer bar */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-3">
          <div className="flex items-center gap-1.5 font-mono">
            <span>Author verified signature: Firomsa Hika</span>
          </div>
          <p className="font-sans text-right">Close CV to view online credentials anytime.</p>
        </div>

      </motion.div>
    </div>
  );
}
