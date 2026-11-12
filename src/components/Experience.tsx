"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Check } from "lucide-react";
import { PROFESSIONAL_EXPERIENCE } from "../app/data";

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string>(PROFESSIONAL_EXPERIENCE[0].id);

  const selectedExp = PROFESSIONAL_EXPERIENCE.find((exp) => exp.id === selectedId) || PROFESSIONAL_EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-neutral-400">
          <span className="text-white font-semibold">// 02</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase tracking-wider">Professional Experience</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Engineering History & Stints
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl font-mono">
              5 verified roles across distributed engineering teams, backend microservices, QA debugging, and AI code evaluation.
            </p>
          </div>
        </div>

        {/* Desktop Split View / Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company Selector Tab List */}
          <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs">
            {PROFESSIONAL_EXPERIENCE.map((exp) => {
              const isSelected = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? "bg-neutral-900 border-neutral-600 text-white shadow-sm"
                      : "bg-neutral-950/70 border-neutral-850 text-neutral-400 hover:text-neutral-200 hover:border-neutral-750"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white tracking-tight">
                      {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded border border-neutral-700 bg-black text-white uppercase font-bold tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate mb-1">
                    {exp.role}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {exp.period}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Display Panel */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-lg border border-neutral-800 bg-neutral-950/80">
            <div className="border-b border-neutral-800 pb-5 mb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedExp.role}
                </h3>
                <span className="font-mono text-xs text-neutral-400 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                  {selectedExp.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
                <span className="text-neutral-200 font-semibold">{selectedExp.company}</span>
                <span className="text-neutral-700">•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{selectedExp.location}</span>
                </span>
              </div>
            </div>

            {/* Resume Bullet Points */}
            <div className="space-y-4 mb-6">
              {selectedExp.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                  <span className="font-mono text-neutral-500 mt-1 select-none text-xs">—</span>
                  <p className="flex-1">{point}</p>
                </div>
              ))}
            </div>

            {/* Verified Indicator */}
            <div className="pt-4 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Aligned directly with official resume</span>
              <span className="text-neutral-400 uppercase">Verified Professional Milestone</span>
            </div>
          </div>

        </div>

        {/* Timeline Summary Table for Quick Skimming */}
        <div className="mt-12 p-6 rounded-lg border border-neutral-850 bg-neutral-950/40">
          <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-4">
            Chronological Career Summary
          </div>
          <div className="divide-y divide-neutral-850 font-mono text-xs">
            {PROFESSIONAL_EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer hover:bg-neutral-900/50 px-2 rounded transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium">{exp.company}</span>
                  <span className="text-neutral-600 hidden sm:inline">|</span>
                  <span className="text-neutral-400 font-sans">{exp.role}</span>
                </div>
                <div className="text-neutral-400 text-[11px] shrink-0">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
