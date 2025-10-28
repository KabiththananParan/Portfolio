"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from "@/components/ThemeToggle";

export default function HirePage() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const techStack = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎬' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'React Query', icon: '🔄' },
      { name: 'React Native', icon: '📱' },
      { name: 'Expo', icon: '🚀' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'tRPC', icon: '🔌' }
    ],
    databases: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '🔴' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' }
    ],
    devops: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📦' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white dotted-grid">
      {/* Fixed avatar top-left */}
      <div className="fixed top-4 left-4 z-50">
        <a href="/" className="block">
          <div className="avatar-small">
            <Image
              src="/Kabi.jpg"
              alt="Avatar"
              width={48}
              height={48}
              className="object-cover"
              priority
            />
          </div>
        </a>
      </div>

      {/* Top centered nav */}
      <nav className={`site-nav ${isNavVisible ? 'nav-visible' : 'nav-hidden'}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/hire">Hire</a>
        <a href="/blog">Blog</a>
        <a href="/projects">Projects</a>
        <a href="/uses">Uses</a>
      </nav>
      
      {/* Theme Toggle - separate from nav */}
      <div className={`fixed right-8 transition-all duration-300 ${isNavVisible ? 'top-6' : 'top-[-60px]'}`}>
        <ThemeToggle />
      </div>

      {/* Theme toggle top-right */}
      <div className="fixed top-4 right-4 z-50">
        <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's work together
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            I'm always excited about new opportunities to create amazing digital experiences. Whether 
            you're looking for a full-time engineer or need help with a specific project, I'd love to hear 
            from you.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-3">My Tech Stack</h2>
          <p className="text-zinc-500 mb-8">Technologies that I use to get the job done.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Frontend */}
            <div className="tech-stack-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"/>
                </svg>
                <h3 className="font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-2.5">
                {techStack.frontend.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="tech-stack-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.001 12H4z"/>
                  <path d="M9.293 9.293L5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"/>
                </svg>
                <h3 className="font-semibold">Backend</h3>
              </div>
              <ul className="space-y-2.5">
                {techStack.backend.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div className="tech-stack-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 3.343 2 5v14c0 1.657 4.486 3 10 3s10-1.343 10-3V5c0-1.657-4.486-3-10-3zm0 2c4.411 0 8 1.119 8 2s-3.589 2-8 2-8-1.119-8-2 3.589-2 8-2zm0 16c-4.411 0-8-1.119-8-2v-2.092c2.056.917 5.111 1.092 8 1.092s5.944-.175 8-1.092V18c0 .881-3.589 2-8 2zm0-5c-4.411 0-8-1.119-8-2V9.092C6.056 10.009 9.111 10.184 12 10.184s5.944-.175 8-1.092V13c0 .881-3.589 2-8 2z"/>
                </svg>
                <h3 className="font-semibold">Databases</h3>
              </div>
              <ul className="space-y-2.5">
                {techStack.databases.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DevOps */}
            <div className="tech-stack-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.8 18.4c0 .4-.3.7-.7.7H3.9c-.4 0-.7-.3-.7-.7V5.6c0-.4.3-.7.7-.7h16.2c.4 0 .7.3.7.7v12.8zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 16h-2v-2h2v2zm0-4h-2V7h2v7z"/>
                </svg>
                <h3 className="font-semibold">DevOps</h3>
              </div>
              <ul className="space-y-2.5">
                {techStack.devops.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-zinc-400 hover:text-zinc-200 transition-colors">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why must you hire me? Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Why must you hire me?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Well, hiring me comes with a complimentary package of unparalleled wit, a knack for turning challenges into well, still challenges but 
                with a bit of humour, and a passion for delighting with everything I build.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Jokes aside, I've worked among the leading engineering teams in India. I also have experience of working in various sectors ranging 
                from food-tech, ed-tech to fin-tech.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                I am a quick learner and I am always looking to learn new things. I can work independently and I love a challenge.
              </p>
            </div>
          </div>
        </div>

        {/* My preferences Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">My preferences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Amazing work culture.</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed ml-8">
                  It's fair to say I've been spoilt by the amazing work culture at my 
                  previous companies. I'd love to work at a place that values its 
                  employees and their well-being.
                </p>
              </div>

              <div>
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Familiar Tech stack.</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed ml-8">
                  I believe in using the right tool for the right job, and so far I've been 
                  able to pick up new technologies fairly quickly.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Remote first.</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed ml-8">
                  I value the flexibility and comfort of working from anywhere. A 
                  company that supports remote work is a big plus for me.
                </p>
              </div>

              <div>
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Fair compensation.</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed ml-8">
                  I won't lie, I love getting fairly paid. for the work I do. But that's not my 
                  only incentive, anything but my side-projects are a testament to that.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16 text-center py-12">
          <p className="text-zinc-400 text-lg mb-3">
            Ready to start a conversation? Reach out at{' '}
            <a href="mailto:kabiththananparan@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              kabiththananparan@gmail.com
            </a>
          </p>
          <p className="text-zinc-500 italic text-base">
            Let's create something extraordinary together!
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-zinc-500">
            <nav className="flex gap-6">
              <a href="/about" className="hover:text-zinc-300">About</a>
              <a href="/projects" className="hover:text-zinc-300">Projects</a>
              <a href="/hire" className="hover:text-zinc-300">Hire Me</a>
              <a href="/uses" className="hover:text-zinc-300">Uses</a>
            </nav>
            <p>© 2025 present | kabiththananparan</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
