/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal,
  Cpu as CpuIcon,
  Play
} from "lucide-react";
import { SKILL_CATEGORIES } from "../app/data";

// Type-safe icon mapper to avoid dynamic string import errors
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "code":
      return Code;
    case "layers":
      return Layers;
    case "server":
      return Server;
    case "database":
      return Database;
    case "cloud":
      return Cloud;
    case "cpu":
    default:
      return Cpu;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950/20 border-t border-slate-900 overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching screenshot style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Powerful Technologies I Use to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Robust Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
            I specialize in full-stack JavaScript/TypeScript engineering, advanced Next.js routing, JVM-based microservices, and secure infrastructure.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Categories Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const Icon = getCategoryIcon(category.icon);
            return (
              <motion.div
                key={catIdx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 35 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.08 }}
                className={`relative group p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-800 backdrop-blur-md shadow-lg ${category.glowColor} hover:border-slate-700 hover:bg-slate-900/60 duration-300 flex flex-col justify-between`}
              >
                {/* Glow Backdrop */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-500/5 group-hover:to-cyan-500/5 opacity-0 group-hover:opacity-100 duration-500 -z-10" />

                <div>
                  {/* Category Title / Icon */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 shadow-xl group-hover:text-white duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 duration-300 tracking-wide uppercase text-[13px]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Mini-Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 bg-slate-950/60 border border-slate-800/80 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 duration-200 cursor-default flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Microline for premium feel */}
                <div className="mt-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                  <span>Firomsa Hika</span>
                  <div className="flex items-center gap-1 text-[9px] text-blue-500/60">
                    <Play className="w-2 h-2 fill-current" />
                    <span>Active Domain</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expert Quote or Quick Summary bottom panel */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/10 via-slate-900/40 to-cyan-950/10 border border-slate-800/80 text-center relative max-w-4xl mx-auto shadow-xl">
          <div className="absolute top-1/2 left-4 w-12 h-12 rounded-full bg-blue-500/5 blur-[20px] pointer-events-none" />
          <p className="text-slate-300 font-light italic text-sm sm:text-base leading-relaxed">
            "An elite engineer doesn't merely master languages; they specialize in solving runtime complexity, securing communications over distributed channels, and designing beautiful user-centric interfaces."
          </p>
          <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mt-4">
            — Firomsa Hika (ASTU CSE Class of 2026)
          </div>
        </div>

      </div>
    </section>
  );
}
