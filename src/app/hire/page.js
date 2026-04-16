"use client";

import React from 'react';
import Navbar from "@/components/Navbar";

export default function HirePage() {
  const techStack = {
    frontend: [
      { name: 'React', desc: 'Component Architecture' },
      { name: 'Next.js', desc: 'Server-Side Rendering & Routing' },
      { name: 'TailwindCSS', desc: 'Utility-first Styling' },
      { name: 'Framer Motion', desc: 'Complex Animations' },
      { name: 'TypeScript', desc: 'Type-safe Development' },
      { name: 'React Native', desc: 'Cross-platform Mobile' },
    ],
    backend: [
      { name: 'Node.js', desc: 'JavaScript Runtime' },
      { name: 'Express', desc: 'Web Framework' },
      { name: 'Python', desc: 'AI/ML & Scripts' },
      { name: 'Django/FastAPI', desc: 'Backend Services' },
    ],
    databases: [
      { name: 'MySQL / PostgreSQL', desc: 'Relational DBs' },
      { name: 'MongoDB', desc: 'NoSQL Data' }
    ],
    devops: [
      { name: 'AWS', desc: 'Cloud Infrastructure' },
      { name: 'Docker', desc: 'Containerization' },
      { name: 'Git', desc: 'Version Control' }
    ]
  };

  return (
    <div className="min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Navbar />

      <main className="pt-32 sm:pt-48 pb-20 px-6 sm:px-12 md:px-24">
        
        {/* Massive Hero Section */}
        <section className="min-h-[50vh] flex flex-col justify-center border-b border-[var(--border-color)] pb-24">
          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase text-[var(--accent)] max-w-[90vw]">
            Let's <br /> 
            <span className="text-[var(--foreground)]">Work together</span>
          </h1>

          <div className="mt-16 max-w-3xl text-lg sm:text-2xl font-medium tracking-tight leading-snug">
            <p>
              I'm always excited about new opportunities to create amazing digital experiences. 
              Whether you're looking for a full-time engineer or need help with a specific project, 
              I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-24 border-b border-[var(--border-color)] pb-24">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-24">Stack</h2>

          <div className="flex flex-col gap-12">
            {[
              { title: "Frontend", items: techStack.frontend },
              { title: "Backend", items: techStack.backend },
              { title: "Databases", items: techStack.databases },
              { title: "DevOps", items: techStack.devops },
            ].map((category, idx) => (
              <div key={idx} className="flex flex-col border-b border-[var(--border-color)] pb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-8">[{category.title}]</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {category.items.map((tech) => (
                    <div key={tech.name} className="flex flex-col group">
                      <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors">{tech.name}</span>
                      <span className="text-sm opacity-60 font-medium uppercase tracking-widest mt-2">{tech.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Hire Me */}
        <section className="mt-24 border-b border-[var(--border-color)] pb-24">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-24 max-w-4xl">Why want me on your team</h2>
          
          <div className="flex flex-col">
            {[
              "Unparalleled wit and a passion for turning complex problems into elegant solutions with a smile.",
              "Proven experience in top engineering teams across various domains (food-tech, ed-tech, and fintech).",
              "Fast learner who thrives in challenging environments and delivers production-ready code quickly."
            ].map((text, i) => (
              <div key={i} className="py-12 border-t border-[var(--border-color)] flex gap-8 items-start group hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors -mx-6 sm:-mx-12 md:-mx-24 px-6 sm:px-12 md:px-24 cursor-default">
                <span className="text-[var(--accent)] font-black text-4xl">/0{i + 1}</span>
                <p className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preferences */}
        <section className="mt-24 pt-12 pb-24">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-24 max-w-4xl">What I'm looking for</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {[
              { title: "Amazing work culture", desc: "I've been fortunate to work in environments that truly value people. I want to continue growing in a supportive, high-trust team." },
              { title: "Remote-first flexibility", desc: "I perform best when I have control over my environment and schedule. Remote work is a must." },
              { title: "Modern & familiar tech", desc: "Love working with cutting-edge tools (Next.js, TypeScript, etc.) but I'm always excited to learn the best tool for the job." },
              { title: "Fair compensation", desc: "I believe great work deserves great reward. Competitive salary + equity in something meaningful." }
            ].map((item) => (
              <div key={item.title} className="flex flex-col group cursor-default border border-[var(--border-color)] p-8 sm:p-12 hover:border-[var(--accent)] transition-colors">
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                <p className="text-lg opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-40 pt-32 pb-12 flex flex-col items-center text-center border-t border-[var(--border-color)]">
          <h2 className="text-[10vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12 text-[var(--accent)] hover:text-[var(--foreground)] transition-colors">
            Let's build
          </h2>
          <p className="text-xl sm:text-2xl font-medium tracking-tight mb-16 max-w-2xl">
            Have a project in mind? Need a technical co-founder? Or just want to chat about the future of the web?
          </p>
          <a 
            href="mailto:kabiththananparan@gmail.com" 
            className="btn-brutalist text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 uppercase"
          >
            Email me
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