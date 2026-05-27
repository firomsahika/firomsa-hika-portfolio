

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Copy, Check, Code } from "lucide-react";
import { PERSONAL_INFO } from "../app/data";

interface HomeProps {
  onDownloadResume: () => void;
}

export default function Home({ onDownloadResume }: HomeProps) {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"profile" | "experience" | "passion">("profile");

  const codeSnippets = {
    profile: `const developer = {
  name: "${PERSONAL_INFO.name}",
  role: "Full-Stack Web Developer",
  university: "Adama Science & Technology University (ASTU)",
  graduation: "June 2026",
  skills: [
    "Next.js", "React.js", "Node.js", "TypeScript", 
    "Java Spring Boot", "Django", "PostgreSQL", "Docker"
  ],
  isEliteBootcampWinner: true,
  currentStatus: "Ready for hire!"
};`,
    experience: `const experience = [
  {
    company: "INSA",
    role: "Backend Architect Intern",
    tech: ["Java Spring Boot", "gRPC", "Microservices"]
  },
  {
    company: "Ozone Technology",
    role: "Frontend Developer (Falcon)",
    tech: ["Next.js", "Tailwind CSS", "SSR Builder"]
  }
];`,
    passion: `function passion() {
  return "Engineering secure, cryptographic, high-performance " +
         "web portals that solve real public and corporate challenges.";
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Orbs with radial glowing gradient (from the screenshot design) */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest shadow-inner shadow-blue-500/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span>Available for New Projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I'm <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">{PERSONAL_INFO.name}</span>
        </motion.h1>

        {/* Roles Details with separator bars */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-md sm:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-10 px-4"
        >
          Software Engineer <span className="text-blue-500/60 mx-1 sm:mx-2">||</span> Full-Stack Web Developer <span className="text-blue-500/60 mx-1 sm:mx-2">||</span> Systems Architect <span className="text-blue-500/60 mx-1 sm:mx-2">||</span> Advanced Next.js Developer
        </motion.p>

        {/* Primary and secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-500/60 flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onDownloadResume}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-200 font-bold rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 text-blue-400" />
            <span>Download CV</span>
          </button>
        </motion.div>

        {/* Code Block Container (From user request stylesheet image) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="max-w-3xl mx-auto text-left"
        >
          <div className="relative rounded-2xl bg-slate-950/90 border border-slate-900 shadow-2xl p-0 overflow-hidden shadow-blue-500/5">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900 bg-slate-900/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="flex items-center gap-1.5 ml-4 text-xs font-mono text-slate-500">
                  <Terminal className="w-3.5 h-3.5" />
                  firomsa-hika.js
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Custom Tab Toggles in Coder Container */}
                <div className="flex bg-slate-900/80 border border-slate-800 rounded-lg p-0.5 mr-2">
                  <button 
                    onClick={() => setActiveCodeTab("profile")}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded duration-200 ${activeCodeTab === "profile" ? "bg-blue-600/20 text-blue-400 border border-blue-500/20" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    profile.json
                  </button>
                  <button 
                    onClick={() => setActiveCodeTab("experience")}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded duration-200 ${activeCodeTab === "experience" ? "bg-blue-600/20 text-blue-400 border border-blue-500/20" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    experience.js
                  </button>
                  <button 
                    onClick={() => setActiveCodeTab("passion")}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded duration-200 ${activeCodeTab === "passion" ? "bg-blue-600/20 text-blue-400 border border-blue-500/20" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    passion()
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="p-1 px-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg text-xs flex items-center gap-1.5 duration-200"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="font-mono text-[10px]">{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Editor Text Workspace */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[220px]">
              <pre className="whitespace-pre">
                <code>
                  {codeSnippets[activeCodeTab].split("\n").map((line, i) => {
                    // Do rudimentary manual syntax highlighting to look incredibly high fidelity
                    let highlighted = line;
                    
                    // Strings
                    highlighted = highlighted.replace(/"([^"]*)"/g, '<span class="text-emerald-400">"$1"</span>');
                    // Keywords
                    highlighted = highlighted.replace(/\b(const|let|var|function|return|true|false)\b/g, '<span class="text-blue-400 font-bold">$1</span>');
                    // Numbers
                    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-amber-400">$1</span>');

                    return (
                      <div key={i} className="flex hover:bg-slate-900/30 px-1 duration-150">
                        <span className="text-slate-600 select-none mr-6 text-right w-5 text-[11px] font-mono">{i + 1}</span>
                        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
            
            {/* Bottom Status bar */}
            <div className="flex items-center justify-between px-5 py-1.5 border-t border-slate-900 bg-slate-900/20 text-[10px] font-mono text-slate-600">
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Ln {codeSnippets[activeCodeTab].split("\n").length}, Col 1</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
