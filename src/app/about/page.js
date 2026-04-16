import React from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import CTAActions from "@/components/CTAActions";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationsSection from "@/components/CertificationsSection";

export const metadata = {
  title: "About — Paran Kabiththanan",
};

export default function About() {
  return (
    <div className="min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Navbar />

      <main className="pt-32 sm:pt-48 pb-20 px-6 sm:px-12 md:px-24">
        {/* Massive Hero Section */}
        <section className="min-h-[60vh] flex flex-col justify-center border-b border-[var(--border-color)] pb-24">
          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase text-[var(--accent)] max-w-[90vw]">
            About <br /> 
            <span className="text-[var(--foreground)]">Me</span>
          </h1>

          <div className="mt-16 sm:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square shrink-0 grayscale hover:grayscale-0 transition-all duration-700 border border-[var(--border-color)]">
              <Image 
                src="/Kabi.jpg" 
                alt="Paran Kabiththanan" 
                fill 
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col gap-8 text-xl sm:text-2xl font-medium tracking-tight leading-snug">
              <p>
                Hi — I'm Paran. I enjoy turning raw data into meaningful insights and building intelligent systems that solve real-world problems.
              </p>
              <p>
                Currently diving deep into machine learning, deep learning, NLP, and deploying end-to-end AI solutions. 
              </p>
              
              <ul className="mt-8 space-y-4 text-lg">
                {[
                  "Actively building production-ready AI/ML projects",
                  "Mastering Python, TensorFlow, PyTorch & modern ML workflows",
                  "Exploring LLMs, computer vision, and MLOps",
                  "Always learning — currently obsessed with transformers & RAG"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[var(--accent)] font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAActions />
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Certifications */}
        <section className="mt-24 border-b border-[var(--border-color)] pb-24">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-16">Timeline</h2>
          <ExperienceTimeline />
        </section>

        <section className="mt-24 pb-24">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-16">Specs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16 border-t border-[var(--border-color)] pt-16">
            <InfoBox title="EDUCATION" value="BSc (Hons) in IT — SLIIT" />
            <InfoBox title="HOBBIES" value="Cricket, Reading, Movies" />
            <InfoBox title="EMAIL" value="kabiththananparan@gmail.com" />
            <InfoBox title="LOCATION" value="Colombo, Sri Lanka" />
          </div>
        </section>

        <section className="mt-24 border-t border-[var(--border-color)] pt-24 pb-24">
          <CertificationsSection />
        </section>

        {/* Footer / CTA Section */}
        <section className="mt-40 pt-32 pb-12 flex flex-col items-center text-center border-t border-[var(--border-color)]">
          <h2 className="text-[10vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12">
            Let's build
          </h2>
          <a 
            href="mailto:kabiththananparan@gmail.com" 
            className="btn-brutalist text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 uppercase"
          >
            Get In Touch
          </a>

          <div className="mt-32 w-full flex flex-col sm:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest opacity-50 gap-4">
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

function InfoBox({ title, value }) {
  return (
    <div className="flex flex-col pb-8 border-b border-[var(--border-color)] group hover:-translate-y-2 transition-transform duration-300">
      <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-2">{title}</p>
      <p className="text-4xl font-black uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors">{value}</p>
    </div>
  );
}