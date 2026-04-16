"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import CTAActions from "@/components/CTAActions";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationsSection from "@/components/CertificationsSection";

export default function About() {
  const specs = [
    { key: "EDUCATION", value: "BSc (Hons) IT — SLIIT" },
    { key: "HOBBIES", value: "Cricket, Reading, Movies" },
    { key: "EMAIL", value: "kabiththananparan@gmail.com" },
    { key: "LOCATION", value: "Colombo, Sri Lanka" },
  ];

  const logs = [
    "Actively building production-ready AI/ML projects",
    "Mastering Python, TensorFlow, PyTorch & modern ML workflows",
    "Exploring LLMs, computer vision, and MLOps",
    "Always learning — currently obsessed with Transformers & RAG",
  ];

  return (
    <div className="min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)] font-mono">
      <Navbar />

      <main className="pt-32 sm:pt-48 pb-20 px-6 sm:px-12 md:px-24">

        {/* ── HERO ── */}
        <section className="min-h-[50vh] flex flex-col justify-center border-b border-[var(--border-color)] pb-24">
          <div className="flex justify-between items-center mb-6 text-[10px] uppercase tracking-widest opacity-50">
            <span>// IDENTITY_FILE [LOADED]</span>
            <span>SYS: STABLE</span>
          </div>

          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase text-[var(--accent)] max-w-[90vw] font-sans">
            About <br />
            <span className="text-[var(--foreground)]">Me</span>
          </h1>

          <div className="mt-16 sm:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Avatar with terminal frame */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square shrink-0 border border-[var(--border-color)] group overflow-hidden">
              {/* top bar */}
              <div className="absolute top-0 inset-x-0 flex justify-between items-center px-3 py-2 bg-[#0a0a0a] border-b border-[var(--border-color)] z-10 text-[9px] uppercase tracking-widest">
                <span className="text-[var(--accent)] opacity-70">CAM_01 [REC]</span>
                <span className="opacity-40">ISO_FACE_IDX: 99.9%</span>
              </div>
              <Image
                src="/Kabi.jpg"
                alt="Paran Kabiththanan"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* corner brackets */}
              <div className="absolute top-10 left-3 w-5 h-5 border-t-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute top-10 right-3 w-5 h-5 border-t-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-3 left-3 text-[var(--accent)] text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10">REC●</div>
            </div>

            {/* Bio logs */}
            <div className="flex flex-col gap-0">
              <div className="text-[var(--accent)] text-[10px] tracking-widest uppercase mb-6 opacity-70">// OPERATOR_LOG</div>
              <p className="text-lg sm:text-xl font-sans font-medium leading-snug mb-4 border-l-2 border-[var(--accent)] pl-4">
                Hi — I'm Paran. I enjoy turning raw data into meaningful insights and building intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg sm:text-xl font-sans font-medium leading-snug mb-8 border-l border-white/10 pl-4 opacity-70">
                Currently diving deep into machine learning, deep learning, NLP, and deploying end‑to‑end AI solutions.
              </p>

              <div className="text-[var(--accent)] text-[10px] tracking-widest uppercase mb-4 opacity-70">// ACTIVE_PROTOCOLS</div>
              <ul className="flex flex-col gap-3 mb-8">
                {logs.map((item, i) => (
                  <li key={i} className="group/log flex gap-3 items-start border border-[var(--border-color)] p-3 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200">
                    <span className="text-[var(--accent)] font-bold text-xs shrink-0 mt-0.5">[{String(i + 1).padStart(2,'0')}]</span>
                    <span className="text-sm font-sans leading-snug opacity-80 group-hover/log:opacity-100">{item}</span>
                  </li>
                ))}
              </ul>
              <CTAActions />
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="mt-24 border-b border-[var(--border-color)] pb-24">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter font-sans">Timeline</h2>
            <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60">// FIELD_OPERATIONS_LOG</span>
          </div>
          <ExperienceTimeline />
        </section>

        {/* ── SPECS ── */}
        <section className="mt-24 pb-24 border-b border-[var(--border-color)]">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter font-sans">Specs</h2>
            <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60">// SYSTEM_READOUT</span>
          </div>

          <div className="flex flex-col border-t border-[var(--border-color)]">
            {specs.map(({ key, value }) => (
              <div
                key={key}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--border-color)] hover:border-[var(--accent)] transition-colors -mx-6 sm:-mx-12 md:-mx-24 px-6 sm:px-12 md:px-24 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3 md:mb-0 shrink-0">
                  // {key}
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight break-all md:break-words text-left md:text-right font-sans group-hover:text-[var(--accent)] transition-colors">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="mt-24 border-t border-[var(--border-color)] pt-24 pb-24">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60">// CREDENTIALS_ARCHIVE</span>
          </div>
          <CertificationsSection />
        </section>

        {/* ── FOOTER CTA ── */}
        <section className="mt-40 pt-32 pb-12 flex flex-col items-center text-center border-t border-[var(--border-color)]">
          <div className="text-[10px] uppercase tracking-widest text-[var(--accent)] opacity-60 mb-6">// INITIATE_CONTACT_SEQUENCE</div>
          <h2 className="text-[10vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12 font-sans">
            Let's build
          </h2>
          <a
            href="mailto:kabiththananparan@gmail.com"
            className="btn-brutalist text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 uppercase"
          >
            Get In Touch
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