import React from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import CTAActions from "@/components/CTAActions";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationsSection from "@/components/CertificationsSection";
// framer-motion removed from server component; animations handled via CSS/Tailwind

export const metadata = {
  title: "About — Paran Kabiththanan",
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 relative overflow-hidden">
      {/* Animated Dotted Grid Background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px, rgba(100, 248, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          animation: 'float 30s ease-in-out infinite'
        }}
      />

      <Navbar />

      {/* Theme Toggle (no client animation wrapper here) */}
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      <main className="relative z-10 container mx-auto px-6 pt-28 pb-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* LEFT: Hero Avatar Section */}
          <section className="flex flex-col items-center lg:items-start">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
              About me
            </h1>

            {/* Avatar with Animated Neon Glow */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 blur-md group-hover:blur-lg transition-all duration-700" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-zinc-900 border-4 border-zinc-800 shadow-2xl">
                <Image 
                  src="/Kabi.jpg" 
                  alt="Paran Kabiththanan" 
                  width={320} 
                  height={320} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div className="text-center lg:text-left mt-8">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Paran Kabiththanan
              </h2>
              <p className="text-xl text-zinc-400 mt-2 font-medium">
                Data Science & AI Enthusiast
              </p>
              <p className="text-lg text-cyan-400 italic">Turning data into real-world impact</p>
            </div>

            {/* Social Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              {[
                { label: "GitHub", href: "https://github.com/KabiththananParan", color: "from-cyan-500 to-blue-600" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kabiththananparan/", color: "from-blue-500 to-cyan-600" },
                { label: "Hire Me", href: "/hire", color: "from-purple-500 to-pink-600" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${link.color} text-black font-bold text-sm shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          {/* RIGHT: Info Card with Gradient Border */}
          <aside>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-10 border border-zinc-800 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Passionate AI & Data Science Student</h3>

                <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                  Hi — I'm Paran. I enjoy turning raw data into meaningful insights and building intelligent systems that solve real-world problems. 
                  Currently diving deep into machine learning, deep learning, NLP, and deploying end-to-end AI solutions.
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <InfoBox title="EDUCATION" value="BSc (Hons) in IT — SLIIT" icon="school" delay={0.8} />
                  <InfoBox title="HOBBIES" value="Cricket, Reading, Movies" icon="hobby" delay={0.85} />
                  <InfoBox title="EMAIL" value="kabiththananparan@gmail.com" icon="mail" delay={0.9} />
                  <InfoBox title="LOCATION" value="Colombo, Sri Lanka" icon="location" delay={0.95} />
                </div>

                <ul className="mt-10 space-y-4 text-zinc-300">
                  {[
                    "Actively building production-ready AI/ML projects",
                    "Mastering Python, TensorFlow, PyTorch & modern ML workflows",
                    "Exploring LLMs, computer vision, and MLOps",
                    "Always learning — currently obsessed with transformers & RAG"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-cyan-400 text-xl">→</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <CTAActions />
                </div>

                <p className="text-center mt-8 text-cyan-400 font-semibold text-lg animate-pulse">Available for internships · Open to collaborations · Let's build the future!</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Experience & Certifications */}
        <div className="mt-8">
          <ExperienceTimeline />
        </div>

        <div className="mt-8">
          <CertificationsSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-32 pt-12 border-t border-zinc-800 text-center">
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-lg font-medium">
          <a href="/about" className="text-cyan-400 font-bold">About</a>
          <a href="/projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="/hire" className="hover:text-purple-400 transition">Hire Me</a>
          <a href="/uses" className="hover:text-pink-400 transition">Uses</a>
        </nav>
        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Paran Kabiththanan. Built with curiosity, caffeine, and a lot of code.</p>
      </footer>

      {/* Global styles moved to `globals.css` to keep this page a Server Component. */}
    </div>
  );
}

// Enhanced Animated InfoBox Component
function InfoBox({ title, value, icon, delay = 0 }) {
  const icons = {
    school: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l10 5v6c0 5.04-4.48 9-10 9S2 18.04 2 13V7l10-5z" />
        <path d="M12 22V12M8 12h8" strokeLinecap="round" />
      </svg>
    ),
    hobby: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
    mail: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-8.97 6.77a2 2 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    location: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
          {icons[icon]}
        </div>
        <div>
          <p className="text-xs text-cyan-400 font-semibold tracking-wider">{title}</p>
          <p className="font-bold text-white mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}