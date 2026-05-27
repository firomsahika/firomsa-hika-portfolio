"use client"

import React from "react";
import { motion } from "motion/react";
import { User, ShieldCheck, HeartHandshake, Award, Compass, GraduationCap, Sparkles } from "lucide-react";
import { PERSONAL_INFO, LEADERSHIP } from "../app/data.ts";

export default function About() {
  const stats = [
    { label: "High-Traffic Deployed Apps", value: "6+", desc: "Vocational and corporate tools" },
    { label: "Industry Internships", value: "2+", desc: "Fullstack developmental stints" },
    { label: "ASTU CSE Club Competitions", value: "1st Place", desc: "Top bootcamp finalist" },
    { label: "Student Organization Scale", value: "200+", desc: "Active youth members managed" }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-900 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <User className="w-3 h-3" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering Code with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Social Care</span> and Purpose
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto" />
        </div>

        {/* Bento/Grid Layout for Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Column 1: Narrative (7 cols) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white">Full-Stack Development Philosophy</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-6">
                My passion for computer science and engineering began at <span className="text-blue-400 font-semibold">{PERSONAL_INFO.university}</span>. 
                I don't just write functional code; I architect systems that eliminate operational bottlenecks, secure national-level civil registries, and create modern digital opportunities.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-6">
                From configuring highly decoupled <span className="text-emerald-400 font-semibold">Java Spring Boot microservices</span> via gRPC at INSA to creating advanced 
                Next.js rendering architectures as a frontend specialist at Ozone, I command the entire lifecycle of enterprise-ready code.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
                I thrive in high-stakes environments, directing multi-member agile team workflows as project leader, and designing pixel-perfect user experiences that load seamlessly in any bandwidth condition.
              </p>
            </div>

            {/* Custom University Badge footer */}
            <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-10 h-10 text-indigo-400" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Education Status</h4>
                  <p className="text-sm font-semibold text-white">BSc in Computer Science & Engineering</p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 font-bold rounded-lg uppercase tracking-wider sm:self-center">
                ASTU Graduate - June 2026
              </span>
            </div>
          </motion.div>

          {/* Column 2: Leadership highlight (5 cols) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/20 via-slate-900/40 to-slate-950/80 border border-indigo-500/20 backdrop-blur-sm shadow-xl shadow-indigo-500/5 relative overflow-hidden"
          >
            {/* Ambient Background Glow Specific to Leadership card */}
            <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-indigo-500/10 blur-[80px]" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Social Care & Leadership</h3>
                    <p className="text-xs text-slate-400 font-medium">Academic Fellowship Roles</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold rounded-full">
                  VP FOCUS-ASTU
                </span>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl mb-6">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1.5">Executive Management</h4>
                <p className="text-slate-300 text-sm font-light">
                  Directed a vibrant university association of <span className="text-white font-bold">{LEADERSHIP.stats}</span>. Mentored regional peers and implemented structured, high-performing volunteer tasks.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Selected Accomplishment</h4>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm font-light">
                    Spearheaded the <span className="text-white font-semibold">AGAPE Project</span>, mobilizing resources to deliver essential support, feeding logistics, and active social aid to the local homeless population and regional hospital patients.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                  <p className="text-slate-300 text-sm font-light">
                    Promoted collaborative agility and built high-performance team frameworks that successfully managed local community service actions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/50">
              <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Mentoring & problem-solving excellence certified</span>
              </span>
            </div>
          </motion.div>

        </div>

        {/* Staggered Metrics Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-xl bg-slate-900/20 border border-slate-800/60 text-center relative hover:border-slate-700 hover:bg-slate-900/30 duration-300 group"
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 opacity-100 duration-500 -z-10" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white bg-clip-text group-hover:text-blue-400 duration-300 mb-2 font-mono">
                {stat.value}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-300 mb-1 leading-snug">
                {stat.label}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-normal">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
