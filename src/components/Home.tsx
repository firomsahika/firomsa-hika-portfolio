"use client";

import React, { useState } from "react";
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { PERSONAL_INFO } from "../app/data";

interface HomeProps {
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export default function Home({ onDownloadResume, onOpenResumeModal }: HomeProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="pt-32 pb-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 font-mono text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Open for Senior Engineering Roles & High-Impact Contracts</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span className="hidden sm:inline text-neutral-400">Ubuntu Linux Daily Driver</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase font-sans">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-mono text-lg sm:text-xl text-neutral-300 font-medium tracking-tight">
            Senior Full-Stack Software Engineer
          </p>
          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed">
            Architecting scalable web platforms, distributed microservices, and high-throughput REST/gRPC APIs in TypeScript, Java, and Python. Proven track record collaborating directly with distributed engineering teams across agile sprints, code reviews, and lifecycle debugging.
          </p>
        </div>

        {/* Contact Links & Quick Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2 mb-12">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded border border-neutral-800 hover:border-neutral-500 bg-neutral-950 text-neutral-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>github/{PERSONAL_INFO.githubHandle}</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded border border-neutral-800 hover:border-neutral-500 bg-neutral-950 text-neutral-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            <span>linkedin/firomsa-hika</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-3.5 py-2 rounded border border-neutral-800 hover:border-neutral-500 bg-neutral-950 text-neutral-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
            title="Click to copy email address"
          >
            <Mail className="w-4 h-4" />
            <span>{PERSONAL_INFO.email}</span>
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3 h-3 text-neutral-500" />}
          </button>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="px-3.5 py-2 rounded border border-neutral-800 hover:border-neutral-500 bg-neutral-950 text-neutral-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
        </div>

        {/* Primary CTA Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2 pb-6 border-t border-neutral-900">
          <button
            onClick={() => scrollTo("experience")}
            className="px-5 py-2.5 rounded bg-white hover:bg-neutral-200 text-black font-mono text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <span>Explore Experience</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="px-5 py-2.5 rounded border border-neutral-700 hover:border-neutral-400 bg-neutral-950 text-neutral-200 hover:text-white font-mono text-xs transition-colors"
          >
            Featured Projects
          </button>

          <button
            onClick={onDownloadResume}
            className="px-5 py-2.5 rounded border border-neutral-700 hover:border-neutral-400 bg-neutral-950 text-neutral-200 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </button>
        </div>

        {/* Software Engineering Environment & Summary Box */}
        <div className="mt-8 p-6 rounded-lg border border-neutral-800 bg-neutral-950/70 font-mono">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4 text-xs text-neutral-400">
            <span className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-neutral-400" />
              SYSTEM OVERVIEW & CREDENTIALS
            </span>
            <span className="text-[11px] text-neutral-400">C1/C2 Fluent English • ASTU Computer Science & Engineering</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="space-y-1">
              <div className="text-neutral-400 text-[11px] uppercase tracking-wider">Primary Stack</div>
              <div className="text-neutral-200 font-medium">TypeScript, Java 17+, Python</div>
            </div>
            <div className="space-y-1">
              <div className="text-neutral-400 text-[11px] uppercase tracking-wider">Architecture</div>
              <div className="text-neutral-200 font-medium">Microservices, gRPC, REST</div>
            </div>
            <div className="space-y-1">
              <div className="text-neutral-400 text-[11px] uppercase tracking-wider">AI Workflows</div>
              <div className="text-neutral-200 font-medium">Cursor, Antigravity, Claude Code</div>
            </div>
            <div className="space-y-1">
              <div className="text-neutral-400 text-[11px] uppercase tracking-wider">Infrastructure</div>
              <div className="text-neutral-200 font-medium">Docker, Linux, CI/CD, AWS</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
