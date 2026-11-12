"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ExternalLink, Send } from "lucide-react";
import { PERSONAL_INFO } from "../app/data";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open user's default email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-neutral-400">
          <span className="text-white font-semibold">// 06</span>
          <span className="text-neutral-600">/</span>
          <span className="uppercase tracking-wider">Contact & Inquiries</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Let&apos;s Discuss Engineering Opportunities
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl font-mono">
              Available for full-time senior engineering positions, remote architecture roles, and high-impact software contracts.
            </p>
          </div>
        </div>

        {/* 2 Columns: Contact Direct Info & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="text-neutral-400 uppercase tracking-wider text-[11px] mb-2">
              Direct Channels
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase">Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white hover:underline text-xs"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase">Phone</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-white hover:underline text-xs"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-1.5 rounded border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-neutral-800 bg-neutral-950/80 flex items-center justify-between hover:border-neutral-600 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase">GitHub Profile</div>
                  <div className="text-white group-hover:underline text-xs">
                    github.com/{PERSONAL_INFO.githubHandle}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-neutral-800 bg-neutral-950/80 flex items-center justify-between hover:border-neutral-600 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase">LinkedIn Profile</div>
                  <div className="text-white group-hover:underline text-xs truncate max-w-[200px]">
                    linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white" />
            </a>

            {/* Location Card */}
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-950/80 flex items-center gap-3">
              <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-400 uppercase">Location & Availability</div>
                <div className="text-white text-xs">
                  {PERSONAL_INFO.location} • Available Globally (Remote)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg border border-neutral-800 bg-neutral-950/80">
            <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Send Direct Message
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Enter your details below to dispatch a message directly to {PERSONAL_INFO.email}.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded border border-neutral-700 bg-neutral-900/60 text-center space-y-2">
                <div className="font-mono text-xs text-white font-semibold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Message Client Launched</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Thank you! Your email composer has been opened. You can also write directly to{" "}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white underline">
                    {PERSONAL_INFO.email}
                  </a>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-3 py-1.5 rounded border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-neutral-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-neutral-400 uppercase">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-neutral-400 uppercase">Project / Position Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the opportunity, engineering requirements, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 resize-none font-sans text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-white hover:bg-neutral-200 text-black font-semibold font-mono text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
