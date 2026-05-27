/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  BookmarkCheck, 
  CheckCircle2, 
  Library,
  BookOpen
} from "lucide-react";
import { EDUCATION } from "../app/data";

export default function Education() {
  return (
    <section id="education" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Intellectual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Foundation & Merits</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
            Rigorous undergraduate studies in Computer Science & Engineering combined with advanced laboratory projects and leadership awards.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Institution Card (7 columns) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 xl:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5 mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/35 text-blue-400">
                    <Library className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">Adama Science & Technology University</h3>
                    <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mt-0.5">EST. 1993 | Elite Engineering Center</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="px-3 py-1 bg-blue-500/15 border border-blue-500/20 rounded text-xs font-bold text-blue-300">
                    Class of 2026
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-1 sm:justify-end">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Adama, Ethiopia</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest mb-2.5">Degree Objective:</h4>
                <p className="text-slate-200 font-medium text-sm sm:text-base leading-relaxed">
                  BSc in <span className="text-blue-400 font-semibold">{String(EDUCATION.degree).replace("Bachelor of Science in ", "")}</span>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest">Key Accomplishments & Academic Merits:</h4>
                {EDUCATION.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 text-slate-500 text-xs flex justify-between items-center font-bold uppercase tracking-wider">
              <span>Registrar Verified</span>
              <span className="text-blue-500 text-[10px]">Grad June '26</span>
            </div>
          </motion.div>

          {/* Special Certificate/Award Card (5 columns) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-12 xl:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/20 via-slate-900/35 to-slate-950 border border-indigo-500/20 backdrop-blur-md shadow-2xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* Ambient visual badge background */}
            <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-blue-600/10 rounded-full blur-[50px]" />

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-indigo-500/25 rounded-2xl border border-indigo-500/35 text-indigo-400">
                  <Award className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Full Stack Bootcamp Champion</h3>
                  <p className="text-xs text-indigo-300 font-medium">CSEC-ASTU Award</p>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-850 p-4.5 rounded-xl mb-6">
                <p className="text-slate-300 text-xs leading-relaxed font-light mb-3">
                  Placed <span className="text-indigo-400 font-bold">#1 Out of all Teams</span> in the hyper-competitive 5-Week Advanced FullStack Web Development Bootcamp organized by ASTU's elite Computer Science Club.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-slate-900 rounded text-[9px] font-mono text-slate-400">Next.js</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded text-[9px] font-mono text-slate-400">Express.js</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded text-[9px] font-mono text-slate-400">Prisma</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded text-[9px] font-mono text-slate-400">PostgreSQL</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-300 text-xs font-light">
                <p className="flex items-center gap-2">
                  <BookmarkCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Judged by senior CSE faculty & industry reviewers</span>
                </p>
                <p className="flex items-center gap-2">
                  <BookmarkCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Highest system performance score recorded</span>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">
                ★ Bootcamp Finalist Trophy Deployed
              </span>
            </div>
          </motion.div>

        </div>

        {/* Coursework Panel Block */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 35 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-800/80 backdrop-blur-md shadow-xl"
        >
          <div className="flex items-center gap-3.5 mb-8">
            <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-850 text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-[13px]">Select Rigorous Coursework</h3>
              <p className="text-xs text-slate-500 font-medium">Core scientific credentials and laboratory engineering studies</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {EDUCATION.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 bg-slate-950 border border-slate-850 hover:border-slate-700 duration-200 text-xs font-medium text-slate-300 rounded-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500/80" />
                <span>{course}</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
