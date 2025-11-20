import React from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import CTAActions from "@/components/CTAActions";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationsSection from "@/components/CertificationsSection";

export const metadata = {
  title: "About — Paran Kabiththanan",
};

export default function About() {
  // const skills = ["Python", "TensorFlow", "PyTorch", "NumPy", "Pandas", "ML"];

  return (
    <div className="min-h-screen bg-black text-zinc-50 dotted-grid">
      <Navbar />

      <div className="fixed right-6 top-6 z-40">
        <ThemeToggle />
      </div>

  <main className="container mx-auto px-6 pt-28 pb-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Avatar + chips */}
          <section className="flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-5xl font-bold">About me</h1>

            <div className="relative">
              {/* softened neon ring */}
              <div className="absolute -inset-1 rounded-full bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#ec4899)] p-1 opacity-60 blur-sm" />

              <div className="relative w-56 h-56 rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                <Image src="/Kabi.jpg" alt="Paran Kabiththanan" width={224} height={224} className="object-cover" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-extrabold">Paran Kabiththanan</h2>
              <p className="text-zinc-400">Data Science & AI enthusiast — building practical ML projects</p>
            </div>

            <div className="w-full flex flex-wrap gap-2">
              <a className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm" href="https://github.com/KabiththananParan">GitHub</a>
              <a className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm" href="https://www.linkedin.com/in/kabiththananparan/">LinkedIn</a>
              <a className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm" href="/hire">Hire</a>
            </div>

            {/* <div className="w-full grid grid-cols-3 gap-2">
              {skills.map((s) => (
                <span key={s} className="text-xs bg-zinc-900 border border-zinc-800 px-2 py-1 rounded-full text-zinc-200 text-center">{s}</span>
              ))}
            </div> */}

            {/* <div className="w-full bg-zinc-800 p-4 rounded-lg border border-zinc-700">
              <h3 className="text-sm font-semibold tracking-widest">E D U C A T I O N</h3>
              <div className="mt-2 text-sm text-zinc-300">
                <div className="font-medium">BSc (Hons) in IT — SLIIT</div>
                <div className="text-xs text-zinc-400">2023 — Present</div>
              </div>
            </div> */}
          </section>

          {/* RIGHT: Neon card with info boxes and CTAs */}
          <aside>
            <div className="rounded-2xl p-1 bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#ec4899)]">
              <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                <h3 className="text-xl font-bold">Passionate AI & Data Science Student</h3>

                <div className="mt-4 text-zinc-300 space-y-3">
                  <p>
                    Hi — I'm Paran. I enjoy turning data into insights and building models that solve real problems. I'm learning deep learning, experimenting with NLP, and shipping small projects end-to-end.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <InfoBox title="EDUCATION" value="BSc (Hons) in IT — SLIIT" icon="school" />
                  <InfoBox title="HOBBIES" value="Cricket, Reading, Movies" icon="hobby" />
                  <InfoBox title="EMAIL" value="kabiththananparan@gmail.com" icon="mail" />
                  <InfoBox title="LOCATION" value="Colombo, SriLanka" icon="location" />
                </div>

                <ul className="mt-4 text-zinc-300 list-disc pl-5 space-y-2">
                  <li>Actively building AI/ML projects</li>
                  <li>Focused on Python, ML libraries and data pipelines</li>
                </ul>

                <div className="mt-6">
                  <CTAActions />
                </div>

                <p className="text-xs text-zinc-500 mt-4">Available for internships · Open to collaborations</p>
              </div>
            </div>

            {/* <div className="flex gap-4 mt-6">
              <a href="https://github.com/KabiththananParan" className="text-zinc-300 hover:text-white">GitHub</a>
              <a href="https://www.linkedin.com/in/kabiththananparan/" className="text-zinc-300 hover:text-white">LinkedIn</a>
              <a href="https://leetcode.com/u/ParanKabiththanan/" className="text-zinc-300 hover:text-white">LeetCode</a>
            </div> */}
          </aside>
        </div>
  {/* EXPERIENCE & JOURNEY SECTION (client component - interactive) */}
  <ExperienceTimeline />

  {/* CERTIFICATIONS SECTION */}
  <CertificationsSection />

      </main>

      <footer className="mt-24 pt-12 border-t border-zinc-800 text-center text-zinc-500">
        <nav className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/hire" className="text-cyan-400 font-semibold">Hire Me</a>
          <a href="/uses" className="hover:text-white transition">Uses</a>
        </nav>
        <p className="text-sm">© 2025 Kabiththanan Paran. Made with curiosity and caffeine.</p>
      </footer>
    </div>
  );
}

function InfoBox({ title, value, icon }) {
  const iconSvg = {
    school: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z"/><path d="M3 10.5v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/></svg>
    ),
    hobby: (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a7 7 0 0 0-1.6-2.9"/></svg>
    ),
    mail: (
      <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l9 6 9-6"/><path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/></svg>
    ),
    location: (
      <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z"/><circle cx="12" cy="10" r="2"/></svg>
    ),
  }[icon];

  return (
    <div className="bg-zinc-800 p-3 rounded-md border border-zinc-700 flex items-start gap-3">
      {iconSvg}
      <div>
        <div className="text-xs text-zinc-400">{title}</div>
        <div className="font-medium mt-1 text-sm">{value}</div>
      </div>
    </div>
  );
}
