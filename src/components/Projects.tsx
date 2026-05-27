/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FolderGit, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  ShieldAlert, 
  Wrench, 
  HeartHandshake, 
  Sparkles,
  Link2,
  Home,
  Palette
} from "lucide-react";
import { PROJECTS } from "../app/data";
import { ProjectType } from "../types";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend">("all");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  // Unique visual abstract gradient mockup generator for developer flavor
  const getProjectBgGradient = (id: string) => {
    switch (id) {
      case "sersocaa":
        return "from-emerald-600/20 via-slate-900 to-emerald-950/40 border-emerald-500/20";
      case "conwise":
        return "from-blue-600/20 via-slate-900 to-indigo-950/40 border-blue-500/20";
      case "atisnama":
        return "from-pink-600/20 via-slate-900 to-purple-950/40 border-purple-500/20";
      case "roofapp":
        return "from-cyan-600/20 via-slate-900 to-sky-950/40 border-cyan-500/20";
      case "interia":
        return "from-rose-600/20 via-slate-900 to-fuchsia-950/40 border-rose-500/20";
      case "focusastu":
      default:
        return "from-amber-600/20 via-slate-900 to-orange-950/40 border-orange-500/20";
    }
  };

  // Icon for visual mockup representation
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "sersocaa":
        return ShieldAlert; // Cryptographic Security Lookup
      case "conwise":
        return Wrench; // Construction Project Management
      case "atisnama":
        return HeartHandshake; // Community Outreach
      case "roofapp":
        return Home; // Roofing Services Home Portal
      case "interia":
        return Palette; // Boutique Design Palette
      case "focusastu":
      default:
        return Sparkles; // Modern Community Web Portal
    }
  };

  return (
    <section id="projects" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background Neon Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <FolderGit className="w-3.5 h-3.5" />
            <span>My Creative Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Production-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Deployed Platforms</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
            These are actual digital ecosystems that are live, designed with responsive layouts, optimal compression, and secure backend routing.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Filter Pill Controls */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {(["all", "fullstack", "frontend"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat === "all" ? "All Projects" : cat === "fullstack" ? "Full Stack" : "Frontend Only"}
            </button>
          ))}
        </div>

        {/* Projects Cards List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const ProjectIconComp = getProjectIcon(project.id);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`flex flex-col h-full rounded-2xl bg-slate-900/40 border backdrop-blur-md overflow-hidden hover:border-slate-700 duration-300 group ${getProjectBgGradient(project.id)}`}
                >
                  
                  {/* Decorative Graphical Mockup Frame */}
                  <div className="relative h-48 sm:h-56 bg-slate-950/80 p-5 flex flex-col justify-between border-b border-slate-900/80 group-hover:bg-slate-950/50 duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 pointer-events-none" />
                    
                    {/* Mock Browser Header */}
                    <div className="flex items-center justify-between border-b border-slate-900/60 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                        <span className="ml-2 font-mono text-[10px] text-slate-500">
                          https://{project.url ? project.url.replace("https://", "") : "project-repo"}
                        </span>
                      </div>
                      
                      {project.featured && (
                        <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/30 text-[9px] font-bold text-blue-400 rounded-full uppercase tracking-widest animate-pulse">
                          Featured App
                        </span>
                      )}
                    </div>

                    {/* Styled Mock Content Container */}
                    <div className="flex items-center justify-center p-4">
                      <motion.div 
                        whileHover={{ rotate: 3, scale: 1.05 }}
                        className="p-5 rounded-2xl bg-slate-900 border border-slate-800/80 text-blue-400 group-hover:text-blue-300 duration-300 shadow-2xl relative"
                      >
                        <ProjectIconComp className="w-10 h-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
                        <span className="absolute -bottom-1 -right-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-[9px] font-mono text-slate-500 text-slate-400">
                          {project.category.toUpperCase()}
                        </span>
                      </motion.div>
                    </div>

                    {/* Tags at bottom of header */}
                    <div className="flex flex-wrap gap-1.5 mb-1.5 relative z-10">
                      {project.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 bg-slate-900/90 border border-slate-800 rounded text-[10px] font-mono text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-slate-900/90 border border-slate-800 rounded text-[10px] font-mono text-slate-500">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Name / Role Title */}
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">
                          {project.role}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Brief description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>

                      {/* Accomplishments Checkpoints */}
                      <div className="space-y-2.5 mb-8">
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Milestones:</h4>
                        {project.highlights.map((milestone, milIdx) => (
                          <div key={milIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <p className="text-slate-300 text-xs leading-normal font-light">
                              {milestone}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions Anchor Links Links */}
                    <div className="flex items-center gap-3 pt-6 border-t border-slate-800/60">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 duration-200 shadow-md shadow-blue-600/10"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Platform</span>
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300 font-bold rounded-lg text-xs flex items-center justify-center gap-2 duration-200"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
