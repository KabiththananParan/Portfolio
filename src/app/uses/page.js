"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from "@/components/ThemeToggle";

export default function UsesPage() {
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

  const tools = [
    {
      category: 'Workstation',
      items: [
        {
          name: 'HP Victus 15',
          type: 'Personal',
          description: 'Intel Core i5-12450H, 16GB RAM, NVIDIA GeForce RTX 3050, 512GB SSD running Windows 11. It handles all my development needs smoothly and is perfect for my daily tasks.'
        }
      ]
    },
    {
      category: 'Development Tools',
      items: [
        {
          name: 'Visual Studio Code',
          type: 'Personal',
          description: 'My go-to code editor for all development work. The extensive plugin ecosystem and integrated terminal make it perfect for my workflow.'
        }
      ]
    },
    {
      category: 'Documentation & Design',
      items: [
        {
          name: 'Personal Code Diary',
          type: 'Personal',
          description: 'I maintain a personal documentation of code logs and solutions, helping me track my learning journey and create a reference for future projects.'
        },
        {
          name: 'Excalidraw',
          type: 'Personal',
          description: 'My favorite tool for quick sketching, system design diagrams, and visualizing code architecture. Its hand-drawn style makes technical sketches more fun.'
        },
        {
          name: 'Figma',
          type: 'Personal',
          description: 'For every element of design work and prototyping. I use it occasionally to plan layouts and design systems before implementation.'
        }
      ]
    },
    {
      category: 'Productivity',
      items: [
        {
          name: 'Windows Terminal',
          type: 'Personal',
          description: 'The new Windows Terminal is a huge improvement over the traditional command prompt. Multiple tabs, split panes, and custom themes make it easy to use.'
        },
        {
          name: 'GitHub Desktop',
          type: 'Personal',
          description: 'While I\'m comfortable with git commands, GitHub Desktop makes visual operations more visual and intuitive.'
        },
        {
          name: 'Microsoft Edge',
          type: 'Personal',
          description: 'Built on Chromium. Edge provides great developer tools and excellent performance while being more resource-efficient than Chrome.'
        }
      ]
    }
  ];

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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Software and gadgets I use to get the job done.
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            I'm a big fan of hard work to try out new software and setups to optimize my life. Here's I keep things up-to-date as{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">things change</a>.{' '}
            If you have any questions about any of these, feel free to reach out on{' '}
            <a href="https://twitter.com/kabiththanan" className="text-cyan-400 hover:text-cyan-300 underline">Twitter</a>.{' '}
            I'm always happy to{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 underline">chat about this stuff</a> 😊.
          </p>
        </div>

        {/* Tools Sections */}
        <div className="space-y-16">
          {tools.map((section, sectionIndex) => (
            <div key={sectionIndex} className="uses-section">
              {/* Category with vertical line and dot */}
              <div className="flex gap-6">
                {/* Vertical line with dot */}
                <div className="uses-timeline">
                  <div className="uses-dot"></div>
                  <div className="uses-line"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h2 className="text-3xl font-bold mb-8">{section.category}</h2>

                  {/* Items */}
                  <div className="space-y-8">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="uses-item-card">
                        <div className="flex items-baseline gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                          <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm italic">
            *Personal: Stuff bought by me, stays with me forever.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-8 border-t border-zinc-800">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-zinc-500">
            <nav className="flex gap-6">
              <a href="/about" className="hover:text-zinc-300">About</a>
              <a href="/projects" className="hover:text-zinc-300">Projects</a>
              <a href="/hire" className="hover:text-zinc-300">Hire Me</a>
              <a href="/uses" className="hover:text-zinc-300">Uses</a>
            </nav>
            <p>© 2025 present | Kabi Maharry</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
