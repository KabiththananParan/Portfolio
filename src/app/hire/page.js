"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import GitHubActivity from "@/components/GitHubActivity";

import reactIcon from './react.png';
import nextJSIcon from './next_js.png';
import tailwindIcon from './tailwind.png';

import {
  Brackets,
  Smartphone,
  Server,
  TrainFront,
  Code,
  Wrench,
  Database,
  Leaf,
  Cloud,
  Box,
  GitCommit,
  Sparkles
} from 'lucide-react';

export default function HirePage() {
  const techStack = {
    frontend: [
      { name: 'React', desc: 'Component Architecture', img: reactIcon },
      { name: 'Next.js', desc: 'SSR & Routing', img: nextJSIcon },
      { name: 'TailwindCSS', desc: 'Utility Styling', img: tailwindIcon },
      { name: 'Framer Motion', desc: 'Complex Animations', Icon: Sparkles },
      { name: 'TypeScript', desc: 'Type-safe Dev', Icon: Brackets },
      { name: 'React Native', desc: 'Cross-platform Mobile', Icon: Smartphone },
    ],
    backend: [
      { name: 'Node.js', desc: 'JavaScript Runtime', Icon: Server },
      { name: 'Express', desc: 'Web Framework', Icon: TrainFront },
      { name: 'Python', desc: 'AI/ML & Scripts', Icon: Code },
      { name: 'Django / FastAPI', desc: 'Backend Services', Icon: Wrench },
    ],
    databases: [
      { name: 'MySQL / Postgres', desc: 'Relational DBs', Icon: Database },
      { name: 'MongoDB', desc: 'NoSQL Data', Icon: Leaf }
    ],
    devops: [
      { name: 'AWS', desc: 'Cloud Infrastructure', Icon: Cloud },
      { name: 'Docker', desc: 'Containerization', Icon: Box },
      { name: 'Git', desc: 'Version Control', Icon: GitCommit }
    ]
  };

  const whyMe = [
    "Unparalleled wit and a passion for turning complex problems into elegant solutions with a smile.",
    "Proven experience in AI/ML engineering — delivering production-ready models into live environments.",
    "Fast learner who thrives in challenging environments and delivers clean, maintainable code quickly."
  ];

  const looking = [
    { title: "Amazing Work Culture", desc: "Supportive, high-trust teams that genuinely value their people. I want to continue growing in an environment where craft matters." },
    { title: "Remote-first", desc: "I perform best when I have control over my environment and schedule. Remote work is a must." },
    { title: "Modern Tech", desc: "Love working with cutting-edge tools (Next.js, PyTorch, etc.) but always excited to learn the best tool for the job." },
    { title: "Fair Compensation", desc: "I believe great work deserves great reward. Competitive salary + meaningful equity." },
  ];

  return (
    <div className="min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)] font-mono">
      <Navbar />

      <main className="pt-32 sm:pt-48 pb-20 px-6 sm:px-12 md:px-24">

        {/* ── HERO ── */}
        <section className="min-h-[50vh] flex flex-col justify-center border-b border-[var(--border-color)] pb-24">
          <div className="flex justify-between items-center mb-6 text-[10px] uppercase tracking-widest opacity-50">
            <span>// RECRUITMENT_BRIEF [CLASSIFIED]</span>
            <span>STATUS: OPEN_TO_WORK</span>
          </div>

          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase text-[var(--accent)] max-w-[90vw] font-sans">
            Let's <br />
            <span className="text-[var(--foreground)]">Work Together</span>
          </h1>

          <div className="mt-16 max-w-3xl border-l-2 border-[var(--accent)] pl-6">
            <span className="text-[10px] text-[var(--accent)] uppercase tracking-widest mb-2 block opacity-70">// MISSION_STATEMENT</span>
            <p className="text-lg sm:text-xl font-sans font-medium leading-snug opacity-90">
              I'm always excited about new opportunities to create amazing digital experiences.
              Whether you're looking for a full-time engineer or need help with a specific project,
              I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* ── STACK ── */}
        <section className="mt-24 border-b border-[var(--border-color)] pb-24">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter font-sans">Stack</h2>
            <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60">// EQUIPMENT_INVENTORY</span>
          </div>

          <div className="flex flex-col gap-12">
            {[
              { title: "FRONTEND", key: "frontend" },
              { title: "BACKEND",  key: "backend"  },
              { title: "DATABASES", key: "databases" },
              { title: "DEVOPS",   key: "devops"   },
            ].map(({ title, key }) => (
              <div key={key}>
                {/* Category label row */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest">// {title}_MODULE</span>
                  <div className="flex-1 h-px bg-[var(--accent)]/20" />
                  <span className="text-[9px] uppercase tracking-widest opacity-30">[ACTIVE]</span>
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {techStack[key].map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative flex flex-col items-center justify-center gap-3 p-5 border border-[var(--border-color)] bg-[#0a0a0a] hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200 cursor-crosshair overflow-hidden text-center"
                    >
                      {/* scanline top */}
                      <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_var(--accent)]" />

                      {/* Icon */}
                      <div className="w-10 h-10 relative flex items-center justify-center shrink-0">
                        {tech.img ? (
                          <div className="w-full h-full relative grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">
                            <Image src={tech.img} alt={tech.name} fill className="object-contain" />
                          </div>
                        ) : (
                          tech.Icon && (
                            <tech.Icon
                              className="w-7 h-7 opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent)] group-hover:scale-110 transition-all duration-300"
                              strokeWidth={1.5}
                            />
                          )
                        )}
                      </div>

                      {/* Name */}
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-tight font-sans group-hover:text-[var(--accent)] transition-colors leading-tight">{tech.name}</span>

                      {/* Desc */}
                      <span className="text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-70 transition-opacity leading-tight">{tech.desc}</span>

                      {/* scanline bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-40 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GITHUB ACTIVITY ── */}
        <GitHubActivity />

        {/* ── WHY ME ── */}
        <section className="mt-24 border-b border-[var(--border-color)] pb-24">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter font-sans max-w-2xl leading-tight">Why want me on your team</h2>
            <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60 self-end">// CASE_FOR_HIRE</span>
          </div>

          <div className="flex flex-col border-t border-[var(--border-color)]">
            {whyMe.map((text, i) => (
              <div
                key={i}
                className="group relative py-12 border-b border-[var(--border-color)] flex gap-6 sm:gap-10 items-start hover:border-[var(--accent)] transition-colors -mx-6 sm:-mx-12 md:-mx-24 px-6 sm:px-12 md:px-24 cursor-default overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[var(--accent)] font-black text-2xl sm:text-3xl font-sans shrink-0 mt-1">/0{i + 1}</span>
                <p className="text-xl sm:text-2xl font-sans font-bold tracking-tight leading-snug group-hover:text-[var(--accent)] transition-colors">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── LOOKING FOR ── */}
        <section className="mt-24 pb-24">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter font-sans">What I'm looking for</h2>
            <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60">// REQUIREMENTS_FILE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {looking.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex flex-col border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors overflow-hidden"
              >
                {/* terminal top bar */}
                <div className="flex justify-between items-center px-5 py-2.5 bg-[#0a0a0a] border-b border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
                  <span className="text-[var(--accent)] text-[9px] uppercase tracking-widest opacity-70">// REQUIREMENT_{String(i+1).padStart(2,'0')}</span>
                  <span className="text-[9px] uppercase tracking-widest opacity-30">[MANDATORY]</span>
                </div>
                {/* scanline */}
                <div className="absolute inset-x-0 top-8 h-px bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] opacity-0 group-hover:opacity-30 transition-opacity" />

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 font-sans group-hover:text-[var(--accent)] transition-colors border-l-2 border-[var(--accent)] pl-3">{item.title}</h3>
                  <p className="text-sm font-sans opacity-60 leading-relaxed group-hover:opacity-90 transition-opacity">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-40 pt-32 pb-12 flex flex-col items-center text-center border-t border-[var(--border-color)]">
          <div className="text-[10px] uppercase tracking-widest text-[var(--accent)] opacity-60 mb-6">// INITIATE_CONTACT_SEQUENCE</div>
          <h2 className="text-[10vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12 font-sans text-[var(--accent)] hover:text-[var(--foreground)] transition-colors">
            Let's build
          </h2>
          <p className="text-sm sm:text-base font-sans tracking-tight mb-16 max-w-xl opacity-70">
            Have a project in mind? Need a technical co-founder? Or just want to chat about the future of AI?
          </p>
          <a
            href="mailto:kabiththananparan@gmail.com"
            className="btn-brutalist text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 uppercase"
          >
            Email me
          </a>

          <div className="mt-32 w-full flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-50 gap-4">
            <p>© {new Date().getFullYear()} Kabiththanan Paran</p>
            <div className="flex gap-6">
              <a href="https://github.com/KabiththananParan" className="hover:text-[var(--accent)] transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/kabiththananparan/" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
              <a href="https://x.com" className="hover:text-[var(--accent)] transition-colors">Twitter</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}