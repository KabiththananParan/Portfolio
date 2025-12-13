"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

export default function UsesPage() {
  // lastScrollY state is unused, removing for cleanup
  // const [lastScrollY, setLastScrollY] = useState(0); 

  const tools = [
    {
      category: 'Workstation',
      items: [
        {
          name: 'HP 250 G8 Notebook PC',
          type: 'Personal',
          description: 'Intel Core i5, 16GB RAM, 256GB SSD running Ubuntu. It handles all my development needs smoothly and is perfect for my daily tasks.'
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
          name: 'Ubuntu Terminal',
          type: 'Personal',
          description: 'The new Ubuntu Terminal is a huge improvement over the traditional command prompt. Multiple tabs, split panes, and custom themes make it easy to use.'
        },
        {
          name: 'GitHub Desktop',
          type: 'Personal',
          description: 'While I\'m comfortable with git commands, GitHub Desktop makes visual operations more visual and intuitive.'
        },
        {
          name: 'Brave Browser',
          type: 'Personal',
          description: 'A great browser that provides excellent developer tools and performance while being resource-efficient.'
        }
      ]
    }
  ];

  // Helper component for animated items
  const UseItemCard = ({ name, type, description }) => (
    <div className="
      p-6 rounded-xl bg-zinc-900 border border-gray-800 
      shadow-lg transition-all duration-300 ease-in-out
      hover:shadow-white/20 hover:border-gray-700 
      transform hover:-translate-y-0.5
      relative overflow-hidden
    ">
        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>

        <div className="flex items-baseline gap-3 mb-3 relative">
            <h3 className="text-xl font-bold text-white transition-colors duration-300">{name}</h3>
            <span className="
                text-xs px-3 py-1 rounded-full bg-zinc-800 text-gray-400 
                border border-gray-700 font-medium whitespace-nowrap
            ">
                {type}
            </span>
        </div>
        <p className="text-gray-400 leading-relaxed text-base">
            {description}
        </p>
    </div>
  );

  return (
    // Base: Deep black background (zinc-950) with white text.
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {/* Animated Dotted Grid Background - Monochromatic Style */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          animation: 'float 30s ease-in-out infinite'
        }}
      />

      <Navbar />

      {/* Theme toggle top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16 relative z-10">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
            Software and gadgets I use.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a big fan of trying out new software and setups to optimize my workflow. Here's how I keep things up-to-date as{' '}
            {/* Links changed to B&W styling */}
            <a href="/about" className="text-white hover:text-gray-400 font-medium underline transition">things change</a>.{' '}
            If you have any questions about any of these, feel free to reach out on{' '}
            <a href="https://twitter.com/kabiththanan" className="text-white hover:text-gray-400 font-medium underline transition">Twitter</a>.{' '}
            I'm always happy to{' '}
            <a href="/hire" className="text-white hover:text-gray-400 font-medium underline transition">chat about this stuff</a>.
          </p>
        </div>

        {/* Tools Sections */}
        <div className="space-y-16">
          {tools.map((section, sectionIndex) => (
            <div key={sectionIndex} className="uses-section">
              <div className="flex gap-6">
                {/* Vertical Timeline/Divider (Monochromatic) */}
                <div className="relative flex-shrink-0 pt-2">
                  <div className="w-0.5 h-full bg-gray-800 absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                  {/* Dot: High-contrast white for emphasis */}
                  <div className="w-3 h-3 rounded-full bg-white absolute left-1/2 transform -translate-x-1/2 top-0 border-2 border-zinc-950 shadow-md"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h2 className="text-3xl font-bold mb-8 text-white">{section.category}</h2>

                  {/* Items Grid (Responsive) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <UseItemCard 
                        key={itemIndex}
                        name={item.name}
                        type={item.type}
                        description={item.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm italic">
            *Personal: Stuff bought by me, stays with me forever.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-800 text-center text-gray-500">
          <nav className="flex flex-wrap justify-center gap-8 mb-6 text-sm font-medium">
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/projects" className="hover:text-white transition">Projects</a>
            {/* Hire Me link is now strong white/bold */}
            <a href="/hire" className="text-white font-bold hover:text-gray-400 transition">Hire Me</a>
            <a href="/uses" className="text-white font-bold transition">Uses</a>
          </nav>
          <p className="text-sm">© {new Date().getFullYear()} Kabiththanan Paran. Made with curiosity and caffeine.</p>
        </footer>
      </main>
    </div>
  );
}