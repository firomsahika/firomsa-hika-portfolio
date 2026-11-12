"use client";

import React from "react";
import { Terminal, Shield, Cpu, Users, GitBranch, Check } from "lucide-react";
import { PERSONAL_INFO } from "../app/data";

export default function About() {
  const highlights = [
    {
      title: "Distributed Microservices & APIs",
      description:
        "Architecting low-latency inter-service communication with gRPC, Protocol Buffers, and RESTful APIs across modular monoliths and distributed services.",
    },
    {
      title: "Full-Stack Web Engineering",
      description:
        "Building production Next.js and React client applications backed by Java 17+ Spring Boot, Node.js/Express, and FastAPI microservices.",
    },
    {
      title: "AI-Assisted Development Workflows",
      description:
        "Leveraging Cursor, Google Antigravity IDE, Claude Code, Gemini, and GitHub Copilot to accelerate code generation, automated testing, and architectural refactoring.",
    },
    {
      title: "Linux & Terminal-Driven Engineering",
      description:
        "Deep daily Ubuntu Linux proficiency, containerized Docker deployments, and GitHub Actions CI/CD automation pipelines.",
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-neutral-400">
          <span className="text-white font-semibold">// 01</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase tracking-wider">Professional Summary</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Summary Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Scalable Systems with Architectural Precision
            </h2>

            <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-950/80">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs text-neutral-400">
              <span className="px-2.5 py-1 rounded border border-neutral-800 bg-neutral-950 text-neutral-300">
                ASTU B.Sc. Computer Science & Engineering
              </span>
              <span className="px-2.5 py-1 rounded border border-neutral-800 bg-neutral-950 text-neutral-300">
                English: C1 / C2 Proficient
              </span>
              <span className="px-2.5 py-1 rounded border border-neutral-800 bg-neutral-950 text-neutral-300">
                Agile / Scrum Sprint Leadership
              </span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="text-neutral-400 uppercase tracking-wider text-[11px] mb-2">
              Engineering Disciplines
            </div>

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-neutral-850 bg-neutral-950 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{item.title}</span>
                </div>
                <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
