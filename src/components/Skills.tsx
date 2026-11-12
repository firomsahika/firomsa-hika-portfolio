"use client";

import React from "react";
import { Terminal, Code, Cpu, Database, Server, ShieldCheck, Check } from "lucide-react";
import { CORE_TECHNICAL_SKILLS } from "../app/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-neutral-400">
          <span className="text-white font-semibold">// 04</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase tracking-wider">Core Technical Skills</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Technical Proficiencies & Toolchain
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl font-mono">
              6 core technical domains directly aligned with production engineering and system architecture.
            </p>
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_TECHNICAL_SKILLS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-neutral-800 bg-neutral-950/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-neutral-850 pb-3 mb-4">
                  <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[10px] text-neutral-500">
                    #{idx + 1}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 font-mono text-xs text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>Verified in production</span>
                <span className="text-neutral-300">● Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
