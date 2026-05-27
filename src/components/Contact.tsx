/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  Github, 
  Linkedin,
  MessageSquare
} from "lucide-react";
import { PERSONAL_INFO } from "../app/data.ts";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate real server delivery
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-hide success banner after 5 sec
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950/20 border-t border-slate-900 overflow-hidden">
      {/* Background neon orbs */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-blue-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Initiate a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Collaboration</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
            Interested in hiring me as a Full-Stack developer or discussing digital architectures? Fill out the fast contact channel below.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mx-auto mt-6" />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards Info Panel (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-[11px] text-slate-500 pl-2">
                Coordinates & Directories
              </h3>

              {/* Email Copier Card */}
              <div className="p-4 rounded-xl bg-slate-900/35 border border-slate-800 flex items-center justify-between group hover:border-slate-700 duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email Inquiry</h4>
                    <p className="text-slate-200 text-xs sm:text-sm font-medium font-mono">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-1 px-2.5 bg-slate-950 border border-slate-850 text-slate-400 hover:text-white rounded-lg text-xs flex items-center gap-1.5 hover:bg-slate-900 duration-150"
                  title="Copy email to clipboard"
                >
                  {copiedField === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span className="text-[9px] font-mono">{copiedField === "email" ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Copier Card */}
              <div className="p-4 rounded-xl bg-slate-900/35 border border-slate-800 flex items-center justify-between group hover:border-slate-700 duration-200">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider font-sans">Mobile Line</h4>
                    <p className="text-slate-200 text-xs sm:text-sm font-medium font-mono">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-1 px-2.5 bg-slate-950 border border-slate-850 text-slate-400 hover:text-white rounded-lg text-xs flex items-center gap-1.5 hover:bg-slate-900 duration-150"
                  title="Copy phone to clipboard"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span className="text-[9px] font-mono">{copiedField === "phone" ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/35 border border-slate-800 flex items-center gap-4">
                <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Office Region</h4>
                  <p className="text-slate-200 text-xs sm:text-sm font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Social Anchor Buttons */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-950 border border-slate-850 hover:border-slate-800 duration-300 shadow-xl mt-6">
              <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest mb-4">Connect on Social Portals:</h4>
              <div className="grid grid-cols-2 gap-3.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 duration-200"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 duration-200"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <span className="text-[10px] text-slate-600 block mt-4 text-center font-mono uppercase tracking-wider">
                ASTU Class of 2026 Developer Space
              </span>
            </div>

          </div>

          {/* Interactive Form Panel (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-850 backdrop-blur-md shadow-2xl relative">
              <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5 mb-6">
                <div className="p-2.5 bg-blue-600/20 rounded-xl border border-blue-500/35 text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Direct Communication Portal</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Messages are logged directly to the local states</p>
                </div>
              </div>

              {/* Form implementation */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name-email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Full Name *</label>
                    <input
                      id="name-email"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="px-4 py-3 bg-slate-950/80 border border-slate-850 hover:border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-xs sm:text-sm text-slate-300 duration-150 shadow-inner"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="input-email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Email Address *</label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. johndoe@company.com"
                      className="px-4 py-3 bg-slate-950/80 border border-slate-850 hover:border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-xs sm:text-sm text-slate-300 duration-150 shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="input-subject" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1 font-sans">Topic Name</label>
                  <input
                    id="input-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Recruiter Outreach / Project Partnership"
                    className="px-4 py-3 bg-slate-950/80 border border-slate-850 hover:border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-xs sm:text-sm text-slate-300 duration-150 shadow-inner"
                  />
                </div>

                {/* Message text area */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="input-msg" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1 font-sans">Detailed message *</label>
                  <textarea
                    id="input-msg"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message details here..."
                    className="px-4 py-3 bg-slate-950/80 border border-slate-850 hover:border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl text-xs sm:text-sm text-slate-300 duration-150 shadow-inner resize-none select-text"
                  />
                </div>

                {/* Actions submit block */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Succes Banner inside Contact Card */}
                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold rounded-xl text-xs flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                    className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 duration-300 shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-white/35 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
