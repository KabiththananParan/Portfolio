"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

// Assuming these icons are available or you will provide B&W versions.
// For the B&W theme, we will assume these images are grayscale or simple outlines.
import reactIcon from './react.png';
import nextJSIcon from './next_js.png';
import tailwindIcon from './tailwind.png';

export default function HirePage() {
  const techStack = {
    frontend: [
      { name: 'React', icon: reactIcon, colorClass: "text-white" },
      { name: 'Next.js', icon: nextJSIcon, colorClass: "text-white" },
      { name: 'TailwindCSS', icon: tailwindIcon, colorClass: "text-white" },
      { name: 'Framer Motion', emoji: '🎬', colorClass: "text-gray-400" },
      { name: 'TypeScript', emoji: '📘', colorClass: "text-gray-400" },
      { name: 'React Query', emoji: '🔄', colorClass: "text-gray-400" },
      { name: 'React Native', emoji: '📱', colorClass: "text-gray-400" },
    ],
    backend: [
      { name: 'Node.js', emoji: '🟢' },
      { name: 'Express', emoji: '🚂' },
    ],
    databases: [
      { name: 'MySQL', emoji: '🐬' },
      { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'MongoDB', emoji: '🍃' }
    ],
    devops: [
      { name: 'AWS', emoji: '☁️' },
      { name: 'Docker', emoji: '🐳' },
      { name: 'Git', emoji: '📦' }
    ]
  };

  return (
    // Base: Deep black background, White text
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dotted Grid Background - Monochromatic */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }} />

      <Navbar />

      {/* Theme Toggle */}
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 lg:px-8">
        
        {/* Hero Section */}
        <section className="text-center mb-24 lg:mb-32">
          {/* Heading: Pure white, removed gradient. Added subtle letter spacing and animation. */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tightest text-white mb-8 animate-slide-up-fade">
            Let's work together
          </h1>
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
            I'm always excited about new opportunities to create amazing digital experiences. 
            Whether you're looking for a full-time engineer or need help with a specific project, 
            I'd love to hear from you.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-24 lg:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Tech Stack</h2>
            <p className="text-gray-500 text-lg">Technologies I use daily to build exceptional products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Frontend */}
            <div className="tech-stack-card group">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                {/* Icon Circle: High contrast white on dark background */}
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <ul className="space-y-4">
                {techStack.frontend.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">
                    {tech.icon ? (
                      // Apply grayscale filter to color images
                      <Image src={tech.icon} alt={tech.name} width={28} height={28} className="rounded-lg shadow-lg grayscale transition-all duration-300 group-hover:grayscale-0" />
                    ) : (
                      <span className="text-2xl">{tech.emoji}</span> // Emojis remain for clarity/visual interest
                    )}
                    <span className="font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="tech-stack-card group">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.001 12H4z"/>
                    <path d="M9.293 9.293L5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <ul className="space-y-4">
                {techStack.backend.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">
                    <span className="text-2xl">{tech.emoji}</span>
                    <span className="font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div className="tech-stack-card group">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 3.343 2 5v14c0 1.657 4.486 3 10 3s10-1.343 10-3V5c0-1.657-4.486-3-10-3zm0 2c4.411 0 8 1.119 8 2s-3.589 2-8 2-8-1.119-8-2 3.589-2 8-2zm0 16c-4.411 0-8-1.119-8-2v-2.092c2.056.917 5.111 1.092 8 1.092s5.944-.175 8-1.092V18c0 .881-3.589 2-8 2zm0-5c-4.411 0-8-1.119-8-2V9.092C6.056 10.009 9.111 10.184 12 10.184s5.944-.175 8-1.092V13c0 .881-3.589 2-8 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Databases</h3>
              </div>
              <ul className="space-y-4">
                {techStack.databases.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">
                    <span className="text-2xl">{tech.emoji}</span>
                    <span className="font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DevOps */}
            <div className="tech-stack-card group">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.8 18.4c0 .4-.3.7-.7.7H3.9c-.4 0-.7-.3-.7-.7V5.6c0-.4.3-.7.7-.7h16.2c.4 0 .7.3.7.7v12.8zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 16h-2v-2h2v2zm0-4h-2V7h2v7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">DevOps & Tools</h3>
              </div>
              <ul className="space-y-4">
                {techStack.devops.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">
                    <span className="text-2xl">{tech.emoji}</span>
                    <span className="font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Hire Me */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why you'll want me on your team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "Unparalleled wit and a passion for turning complex problems into elegant solutions with a smile",
              "Proven experience in top engineering teams across various domains (food-tech, ed-tech, and fintech)",
              "Fast learner who thrives in challenging environments and delivers production-ready code quickly"
            ].map((text, i) => (
              // Card Style: Strong border/shadow hover
              <div key={i} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 transition-all duration-500 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1">
                {/* Icon Circle: High contrast B&W */}
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:rotate-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preferences */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What I'm looking for</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { title: "Amazing work culture", desc: "I've been fortunate to work in environments that truly value people. I want to continue growing in a supportive, high-trust team." },
              { title: "Remote-first flexibility", desc: "I perform best when I have control over my environment and schedule. Remote work is a must." },
              { title: "Modern & familiar tech", desc: "Love working with cutting-edge tools (Next.js, TypeScript, etc.) but I'm always excited to learn the best tool for the job." },
              { title: "Fair & transparent compensation", desc: "I believe great work deserves great reward. Competitive salary + equity in something meaningful." }
            ].map((item) => (
              <div key={item.title} className="group cursor-default">
                {/* Card Style: Light accent border on hover */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 transition-all duration-300 group-hover:border-white/50 group-hover:shadow-lg group-hover:shadow-white/10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 bg-white/5 rounded-3xl border border-gray-800 shadow-xl transition-all duration-500 hover:bg-white/10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let's build something extraordinary</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Have a project in mind? Need a technical co-founder? Or just want to chat about the future of the web?
          </p>
          {/* CTA Button: High contrast, white background, black text, strong shadow */}
          <a href="mailto:kabiththananparan@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-200 text-black font-extrabold text-lg rounded-full transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-white/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            kabiththananparan@gmail.com
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-800 text-center text-gray-500">
          <nav className="flex flex-wrap justify-center gap-8 mb-6 text-sm font-medium">
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/projects" className="hover:text-white transition">Projects</a>
            {/* Hire Me link is now strong white/bold */}
            <a href="/hire" className="text-white font-bold transition">Hire Me</a>
            <a href="/uses" className="hover:text-white transition">Uses</a>
          </nav>
          <p className="text-sm">© 2025 Kabiththanan Paran. Made with curiosity and caffeine.</p>
        </footer>
      </main>

      {/* Custom Styles/Animations */}
      <style jsx>{`
        .tech-stack-card {
          @apply bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-0.5;
        }
        .animate-slide-up-fade {
          animation: slideUpFade 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-fade-in-slow {
          animation: fadeIn 2s ease-out 0.5s both;
        }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}