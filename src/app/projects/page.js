"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  }
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Studio Management System',
      description: 'A comprehensive studio management platform built with JavaScript. Features include booking management, client tracking, schedule coordination, and payment processing.',
      image: '/projects/studio.jpg',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/KabiththananParan/Studio-Management-System',
      demo: '#'
    },
    {
      title: 'e-Heal',
      description: 'A comprehensive e-channeling healthcare platform developed as a Year 2 university project. Enables patients to book appointments, manage medical records, and connect with healthcare providers.',
      image: '/projects/eheal.jpg',
      tags: ['Java', 'JavaFX', 'MySQL', 'Healthcare'],
      github: 'https://github.com/KabiththananParan/e-Heal',
      demo: '#'
    },
    {
      title: 'Simple CRUD App',
      description: 'A full-stack CRUD application showcasing MERN stack capabilities. Implements create, read, update, and delete operations with a clean and intuitive user interface.',
      image: '/projects/crud.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/KabiththananParan/Simple-CRUD-App',
      demo: '#'
    },
    {
      title: 'Data Science Projects',
      description: 'A collection of data science and machine learning projects demonstrating various techniques and algorithms. Includes data analysis, visualization, and predictive modeling.',
      image: '/projects/datascience.jpg',
      tags: ['Python', 'Machine Learning', 'Data Analysis', 'Jupyter'],
      github: 'https://github.com/KabiththananParan/Data-Science-Projects',
      demo: '#'
    },
    {
      title: 'EMC - Error Makes Clever',
      description: 'A comprehensive collection of MERN stack course projects showcasing modern web development practices. Features responsive designs and interactive UI components.',
      image: '/projects/emc.jpg',
      tags: ['React', 'HTML5', 'CSS3', 'TailwindCSS'],
      github: 'https://github.com/KabiththananParan/EMC',
      demo: '#'
    },
    {
      title: 'Automated Parking System',
      description: 'An intelligent parking management system that automates vehicle entry, exit, and payment processing. Features real-time slot availability and automated barrier control.',
      image: '/projects/parking.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'IoT'],
      github: 'https://github.com/KabiththananParan/Automated-Parking-System',
      demo: '#'
    },
    {
      title: 'The Odin Project Portfolio',
      description: 'A collection of web development projects completed as part of The Odin Project curriculum. Demonstrates progressive skill development in HTML, CSS, and JavaScript.',
      image: '/projects/odin.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web Dev'],
      github: 'https://github.com/KabiththananParan/The-Odin-Project',
      demo: '#'
    },
    {
      title: 'n8n Workflow Automation',
      description: 'Fair-code workflow automation platform with native AI capabilities. Combines visual building with custom code for creating complex automation workflows.',
      image: '/projects/n8n.jpg',
      tags: ['Automation', 'Workflow', 'AI', 'Integration'],
      github: 'https://github.com/KabiththananParan/n8n',
      demo: '#'
    }
  ];

  const categories = ['All', 'JavaScript', 'React', 'Python', 'Java', 'Node.js'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 relative overflow-x-hidden">
      
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full" />
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" style={{ backgroundSize: '30px 30px' }}></div> 
      </div>

      <Navbar />

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6 hover:border-zinc-700 transition-colors cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Things I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Built</span>
          </h1>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            I've worked on tons of little projects over the years, but these are some of the ones 
            that I'm most proud of. Open source and built with passion.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === category
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                    : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-colors duration-300 flex flex-col h-full"
              >
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-800/50 border-b border-zinc-800">
                  {/* Placeholder/Real Image Logic */}
                  {project.image ? (
                     <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out">
                        {/* Note: Ensure you have images in public/projects/ or remove this block if only using placeholder */}
                        {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                        
                        {/* Fallback visualization for this demo since images might not exist locally for me */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                           <svg className="w-12 h-12 text-zinc-700 group-hover:text-zinc-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                     </div>
                  ) : null}
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] text-zinc-500">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-800/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source
                    </a>
                    <div className="h-4 w-px bg-zinc-800"></div>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Simple Footer */}
        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-zinc-800 text-center text-zinc-500">
          <nav className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/projects" className="hover:text-white transition">Projects</a>
            <a href="/hire" className="text-cyan-400 font-semibold">Hire Me</a>
            <a href="/uses" className="hover:text-white transition">Uses</a>
          </nav>
          <p className="text-sm">© 2025 Kabiththanan Paran. Made with curiosity and caffeine.</p>
        </footer>

      </main>
    </div>
  );
}