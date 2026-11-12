"use client";

import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "../app/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-neutral-400">
          <span className="text-white font-semibold">// 03</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase tracking-wider">Featured Engineering Projects</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Production-Grade Systems & Platforms
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl font-mono">
              Key engineering projects solving operational fragmentation, cryptographic verification, and AI digital workflows.
            </p>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-lg border border-neutral-800 bg-neutral-950/80 hover:border-neutral-650 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header & Live Link */}
                <div className="flex items-start justify-between gap-3 border-b border-neutral-850 pb-4 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-400 mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900 text-neutral-300 hover:text-white transition-colors"
                      title={`Visit ${project.displayUrl}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Live Domain Badge */}
                <div className="mb-4 font-mono text-xs">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-all text-xs"
                  >
                    <span>{project.displayUrl}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </a>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Points */}
                <div className="space-y-2.5 mb-6">
                  {project.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed">
                      <span className="font-mono text-neutral-500 mt-1 select-none text-[10px]">—</span>
                      <p className="flex-1">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer */}
              <div className="pt-3.5 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Production Live</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white flex items-center gap-1 font-medium"
                >
                  <span>Launch</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
