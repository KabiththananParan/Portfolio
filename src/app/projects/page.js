"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [filter, setFilter] = useState('All');

  // Navbar scroll handling moved to shared component

  const projects = [
    {
      title: 'Studio Management System',
      description: 'A comprehensive studio management platform built with JavaScript. Features include booking management, client tracking, schedule coordination, and payment processing. Designed to streamline operations for photography and recording studios.',
      image: '/projects/studio.jpg',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/KabiththananParan/Studio-Management-System',
      demo: '#'
    },
    {
      title: 'e-Heal',
      description: 'A comprehensive e-channeling healthcare platform developed as a Year 2 university project. Enables patients to book appointments, manage medical records, and connect with healthcare providers. Features real-time appointment scheduling and doctor availability tracking.',
      image: '/projects/eheal.jpg',
      tags: ['Java', 'JavaFX', 'MySQL', 'Healthcare'],
      github: 'https://github.com/KabiththananParan/e-Heal',
      demo: '#'
    },
    {
      title: 'Simple CRUD App',
      description: 'A full-stack CRUD application showcasing MERN stack capabilities. Implements create, read, update, and delete operations with a clean and intuitive user interface. Perfect demonstration of RESTful API design and React state management.',
      image: '/projects/crud.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/KabiththananParan/Simple-CRUD-App',
      demo: '#'
    },
    {
      title: 'Data Science Projects',
      description: 'A collection of data science and machine learning projects demonstrating various techniques and algorithms. Includes data analysis, visualization, predictive modeling, and statistical analysis using Python libraries like Pandas, NumPy, and Scikit-learn.',
      image: '/projects/datascience.jpg',
      tags: ['Python', 'Machine Learning', 'Data Analysis', 'Jupyter'],
      github: 'https://github.com/KabiththananParan/Data-Science-Projects',
      demo: '#'
    },
    {
      title: 'EMC - Error Makes Clever',
      description: 'A comprehensive collection of MERN stack course projects showcasing modern web development practices. Features responsive designs, interactive UI components, and real-world application examples built with React, TailwindCSS, and JavaScript.',
      image: '/projects/emc.jpg',
      tags: ['React', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript'],
      github: 'https://github.com/KabiththananParan/EMC',
      demo: '#'
    },
    {
      title: 'Automated Parking System',
      description: 'SLIIT Year 1 Semester 2 project - An intelligent parking management system that automates vehicle entry, exit, and payment processing. Features include real-time slot availability, automated barrier control, and digital payment integration.',
      image: '/projects/parking.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'IoT'],
      github: 'https://github.com/KabiththananParan/Automated-Parking-System',
      demo: '#'
    },
    {
      title: 'The Odin Project Portfolio',
      description: 'A collection of web development projects completed as part of The Odin Project curriculum. Demonstrates progressive skill development in HTML, CSS, JavaScript, and modern web development best practices through hands-on projects.',
      image: '/projects/odin.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      github: 'https://github.com/KabiththananParan/The-Odin-Project',
      demo: '#'
    },
    {
      title: 'n8n Workflow Automation',
      description: 'Fair-code workflow automation platform with native AI capabilities. Combines visual building with custom code for creating complex automation workflows. Supports 400+ integrations and can be self-hosted or used in the cloud.',
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
    <div className="min-h-screen bg-[#0a0a0a] text-white dotted-grid">
      {/* avatar handled by shared <Navbar /> on non-home pages */}

      <Navbar />

      {/* Theme toggle top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <p className="text-zinc-500 mb-3">
            My Custom Portfolio. <span className="text-white font-semibold">Become affiliate »</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Things I've made trying<br />to put my mark
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-8">
            I've worked on tons of little projects over the years, but these are some of the ones 
            that I'm most proud of. If you see something that piques your interest, check it out!
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-detail-card group">
              {/* Project Image */}
              <div className="project-image-wrapper mb-4">
                <div className="project-image-placeholder">
                  <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="project-action-btn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="project-action-btn-secondary"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Demo
                </a>
              </div>
            </div>
          ))}
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
            <p>© 2025 present | Paran Kabiththanan</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
