/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  Trophy,
  Cpu,
  GraduationCap,
  ExternalLink
} from "lucide-react";
import { WORK_EXPERIENCE } from "../app/data.ts";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<string>(WORK_EXPERIENCE[0].id);

  // Icon type mapping helper
  const getExperienceIcon = (cat: string) => {
    switch (cat) {
      case "internship":
        return Cpu;
      case "certificate":
        return Trophy;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-950/20 border-t border-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-blue-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Industry Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
            I have completed active internships and developmental bootcamps, deploying microservices for government agencies and optimizing frontend load-speeds for plc organizations.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Timeline Columns: Nav on Left, detailed Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Controls (4 cols on lg, full width on mobile) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-4 mb-1">
              Select Milestones
            </h3>
            <div className="space-y-2.5">
              {WORK_EXPERIENCE.map((exp) => {
                const IsSelected = selectedExp === exp.id;
                const ExpIcon = getExperienceIcon(exp.category);
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExp(exp.id)}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                      IsSelected
                        ? "bg-blue-600/15 border-blue-500/40 text-white shadow-lg shadow-blue-500/5"
                        : "bg-slate-900/30 border-slate-800/80 text-slate-400 hover:bg-slate-900/60 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {/* Tiny glowing bar left */}
                    {IsSelected && (
                      <motion.div
                        layoutId="activeTimelineGlowBar"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-sky-400"
                      />
                    )}

                    <div className="flex items-center gap-4.5 relative z-10">
                      {/* Circle representation */}
                      <div className={`p-2.5 rounded-xl border duration-300 ${
                        IsSelected 
                          ? "bg-blue-600/20 text-blue-400 border-blue-500/30" 
                          : "bg-slate-950 text-slate-500 border-slate-850 group-hover:text-slate-350"
                      }`}>
                        <ExpIcon className="w-4 h-4" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold tracking-wide truncate">
                          {exp.company === "CSEC-ASTU Advanced FullStack Bootcamp" ? "CSEC-ASTU Bootcamp" : exp.company}
                        </h4>
                        <span className="text-xs text-slate-500 group-hover:text-slate-400 duration-300">
                          {exp.period}
                        </span>
                      </div>

                      <ChevronRight className={`w-4 h-4 text-slate-600 duration-300 ${IsSelected ? "translate-x-1 text-blue-400" : ""}`} />
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Download summary hint card */}
            <div className="p-5 rounded-2xl bg-slate-900/20 border border-slate-800/60 mt-4 text-center">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                ● Certification Verified
              </span>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                ASTU CS engineering bootcamps and Ozone certification credentials available on request.
              </p>
            </div>
          </div>

          {/* Details Dashboard (8 cols on lg) */}
          <div className="lg:col-span-8">
            {WORK_EXPERIENCE.map((exp) => {
              if (exp.id !== selectedExp) return null;
              const ExpIcon = getExperienceIcon(exp.category);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-850 backdrop-blur-md shadow-2xl relative"
                >
                  {/* Decorative faint glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Area */}
                  <div className="border-b border-slate-800/80 pb-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold rounded uppercase tracking-wider mb-2 inline-block">
                        {exp.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-blue-400 font-bold text-sm sm:text-base mt-1">
                        {exp.company}
                      </div>
                    </div>

                    {/* Metadata chips */}
                    <div className="flex flex-wrap sm:flex-col items-start gap-2.5">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements and bullets */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest">
                      Primary Responsibilities & Outcomes:
                    </h4>
                    {exp.description.map((bullet, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges used in this role */}
                  {exp.technologies && (
                    <div className="pt-6 border-t border-slate-850/80">
                      <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Tools & Core Competence Applied:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 group hover:text-white hover:border-slate-700 duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
