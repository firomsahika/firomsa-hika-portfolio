"use client";

import React from "react";
import { GraduationCap, Users, MapPin, Check } from "lucide-react";
import { EDUCATION, LEADERSHIP } from "../app/data";

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-neutral-400">
          <span className="text-white font-semibold">// 05</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase tracking-wider">Education & Leadership</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Academic Foundation & Community Initiatives
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl font-mono">
              Computer Science & Engineering degree paired with student leadership and engineering mentorship.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Education and Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card (7 columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg border border-neutral-800 bg-neutral-950/80 flex flex-col justify-between">
            <div>
              <div className="border-b border-neutral-850 pb-5 mb-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {EDUCATION.institution}
                  </h3>
                  <span className="font-mono text-xs text-neutral-300 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 font-semibold">
                    GPA: {EDUCATION.gpa}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
                  <span className="text-neutral-200 font-medium">{EDUCATION.degree}</span>
                  <span className="text-neutral-700">•</span>
                  <span>{EDUCATION.graduation}</span>
                  <span className="text-neutral-700">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{EDUCATION.location}</span>
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>B.Sc. in Computer Science & Engineering</span>
              <span className="text-neutral-300">Class of 2026</span>
            </div>
          </div>

          {/* Leadership Card (5 columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-lg border border-neutral-800 bg-neutral-950/80 flex flex-col justify-between">
            <div>
              <div className="border-b border-neutral-850 pb-5 mb-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {LEADERSHIP.organization}
                  </h3>
                  <span className="font-mono text-xs text-neutral-400 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                    {LEADERSHIP.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
                  <span className="text-neutral-200 font-semibold">{LEADERSHIP.role}</span>
                  <span className="text-neutral-700">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{LEADERSHIP.location}</span>
                  </span>
                </div>
              </div>

              {/* Leadership Points */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Leadership Scope & Impact
                </h4>
                {LEADERSHIP.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <span className="font-mono text-neutral-500 mt-1 select-none text-xs">—</span>
                    <p className="flex-1">{pt}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>200+ Members Coordinated</span>
              <span className="text-neutral-300">Technical Mentorship</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
