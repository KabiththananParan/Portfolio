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
    // Base: Deep Black background, White text, relative overflow for containment
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle Dotted Grid Background - Simplified to a monochromatic look */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          // Use a very light gray/white for the dot color
          backgroundImage: `radial-gradient(circle at 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          animation: 'float 30s ease-in-out infinite'
        }}
      />

      <Navbar />

      {/* Theme Toggle */}
      <div className="fixed right-6 top-6 z-50">
        {/* Assuming ThemeToggle handles its own styling, but its container should remain */}
        <ThemeToggle />
      </div>

      <main className="relative z-10 container mx-auto px-6 pt-28 pb-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* LEFT: Hero Avatar Section */}
          <section className="flex flex-col items-center lg:items-start">
            {/* Title: Pure white for high contrast. Removed gradient. */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10">
              About me
            </h1>

            {/* Avatar with Animated Glow - Simplified to a soft white/silver glow */}
            <div className="relative group cursor-pointer">
              {/* Glow: Soft silver/white blur */}
              <div className="absolute -inset-2 rounded-full bg-white opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 animate-pulse" />
              {/* Inner outline: Subtle light gray */}
              <div className="absolute -inset-1 rounded-full bg-gray-500/20 opacity-30 blur-md group-hover:blur-lg transition-all duration-700" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-zinc-900 border-4 border-gray-700 shadow-2xl">
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
              {/* Name: Pure white/light silver. Removed gradient. */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Paran Kabiththanan
              </h2>
              {/* Subtitle: High contrast light gray */}
              <p className="text-xl text-gray-400 mt-2 font-medium">
                Data Science & AI Enthusiast
              </p>
              {/* Tagline: Accent color, using a pure white/silver for emphasis */}
              <p className="text-lg text-gray-300 italic">Turning data into real-world impact</p>
            </div>

            {/* Social Chips - Monochromatic Styling */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              {[
                // Use consistent black background with white/silver text for a B&W theme
                { label: "GitHub", href: "https://github.com/KabiththananParan", color: "bg-gray-800 hover:bg-white hover:text-black" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kabiththananparan/", color: "bg-gray-800 hover:bg-white hover:text-black" },
                { label: "Hire Me", href: "/hire", color: "bg-gray-700 hover:bg-white hover:text-black" } // Slightly different shade for the main CTA
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  // Apply new monochromatic styles
                  className={`px-6 py-3 rounded-full ${link.color} text-white font-bold text-sm shadow-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          {/* RIGHT: Info Card with Gradient Border - Simplified to a sharp B&W border/shadow */}
          <aside>
            <div className="relative group">
              {/* Border Glow: Solid light gray/white for a sharp, clean effect */}
              <div className="absolute -inset-1 bg-white rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-700" />
              
              {/* Card Body: Darker background with slightly transparent effect */}
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-700 shadow-2xl">
                {/* Heading: Pure white. Removed gradient. */}
                <h3 className="text-3xl md:text-4xl font-bold text-white">Passionate AI & Data Science Student</h3>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Hi — I'm Paran. I enjoy turning raw data into meaningful insights and building intelligent systems that solve real-world problems. 
                  Currently diving deep into machine learning, deep learning, NLP, and deploying end-to-end AI solutions.
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <InfoBox title="EDUCATION" value="BSc (Hons) in IT — SLIIT" icon="school" />
                  <InfoBox title="HOBBIES" value="Cricket, Reading, Movies" icon="hobby" />
                  <InfoBox title="EMAIL" value="kabiththananparan@gmail.com" icon="mail" />
                  <InfoBox title="LOCATION" value="Colombo, Sri Lanka" icon="location" />
                </div>

                {/* List Items */}
                <ul className="mt-10 space-y-4 text-gray-300">
                  {[
                    "Actively building production-ready AI/ML projects",
                    "Mastering Python, TensorFlow, PyTorch & modern ML workflows",
                    "Exploring LLMs, computer vision, and MLOps",
                    "Always learning — currently obsessed with transformers & RAG"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {/* Accent Arrow: Use a high contrast white/silver */}
                      <span className="text-white text-xl">→</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <CTAActions />
                </div>

                {/* Call to Action Text: High contrast white/silver for the pulse */}
                <p className="text-center mt-8 text-white font-semibold text-lg animate-pulse">Available for internships · Open to collaborations · Let's build the future!</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Experience & Certifications (Assuming these components use the global theme) */}
        <div className="mt-8">
          <ExperienceTimeline />
        </div>

        <div className="mt-8">
          <CertificationsSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-32 pt-12 border-t border-gray-800 text-center">
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-lg font-medium">
          {/* Navigation links updated to B&W hover states */}
          <a href="/about" className="text-white font-bold">About</a>
          <a href="/projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="/hire" className="hover:text-gray-300 transition">Hire Me</a>
          <a href="/uses" className="hover:text-gray-300 transition">Uses</a>
        </nav>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Paran Kabiththanan. Built with curiosity, caffeine, and a lot of code.</p>
      </footer>
    </div>
  );
}

// Enhanced InfoBox Component - Adapted for Black & White
function InfoBox({ title, value, icon }) {
  // Removed delay prop as it's not being used for explicit animation, and simplifies the component
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
    // Card styling: Dark gray background, light gray/white border on hover
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-gray-700 p-5 transition-all duration-300 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20">
      {/* Background Accent: Subtle white/silver fill on hover */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-start gap-4">
        {/* Icon Background: High contrast black text on white/silver background */}
        <div className="p-3 bg-white rounded-xl text-black group-hover:scale-110 transition-transform">
          {icons[icon]}
        </div>
        <div>
          {/* Title: Light gray accent */}
          <p className="text-xs text-gray-400 font-semibold tracking-wider">{title}</p>
          {/* Value: High contrast white */}
          <p className="font-bold text-white mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}