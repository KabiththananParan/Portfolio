"use client";

import { useEffect, useMemo, useState } from 'react';
import Navbar from "@/components/Navbar";

const GITHUB_USER = 'KabiththananParan';
const MAX_PROJECTS = 18;

function normalizeHomepage(url) {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
}

function formatProjectTitle(name) {
  if (!name) return 'Untitled Project';
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function ProjectPreview({ image, title }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!image || imageFailed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">
        <span className="font-bold uppercase tracking-widest text-xs">NO IMAGE</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${title} preview`}
      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json',
              'User-Agent': 'portfolio-site',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub fetch failed: ${response.status}`);
        }

        const repos = await response.json();

        const formattedProjects = repos
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .slice(0, MAX_PROJECTS)
          .map((repo) => {
            const tags = [repo.language, ...(repo.topics || []).slice(0, 3)].filter(Boolean);
            const title = formatProjectTitle(repo.name);
            return {
              title,
              description: repo.description || `Open-source project by ${GITHUB_USER}.`,
              image: `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repo.name}`,
              tags,
              github: repo.html_url,
              demo: normalizeHomepage(repo.homepage),
            };
          });

        setProjects(formattedProjects);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError('Unable to refresh projects from GitHub right now.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  const categories = useMemo(() => {
    const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags || [])));
    return ['All', ...uniqueTags.slice(0, 8)];
  }, [projects]);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Navbar />

      <main className="pt-32 sm:pt-48 pb-20 px-6 sm:px-12 md:px-24">
        
        {/* Massive Hero Section */}
        <section className="min-h-[50vh] flex flex-col justify-center border-b border-[var(--border-color)] pb-24">
          <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase text-[var(--accent)] max-w-[90vw]">
            Latest <br /> 
            <span className="text-[var(--foreground)]">Works</span>
          </h1>

          <div className="mt-16 max-w-2xl text-lg sm:text-2xl font-medium tracking-tight leading-snug">
            <p className="mb-8">
              Fresh from my GitHub profile, these are the latest projects I've been building and maintaining.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 uppercase tracking-widest text-xs font-bold transition-all border ${
                    filter === category
                      ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                      : 'bg-transparent text-[var(--foreground)] border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {loading && (
          <div className="py-24 text-2xl font-bold uppercase tracking-widest text-center animate-pulse">Loading Projects...</div>
        )}

        {error && (
          <div className="py-24 text-2xl font-bold uppercase tracking-widest text-center text-[var(--accent)]">{error}</div>
        )}

        {/* Projects Grid */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24 border-b border-[var(--border-color)] pb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col h-full border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-[var(--border-color)]">
                <ProjectPreview image={project.image} title={project.title} />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg opacity-70 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-widest font-bold text-[var(--accent)]"
                    >
                      [{tag}]
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs uppercase tracking-widest font-bold opacity-50">+{project.tags.length - 3}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-8 mt-auto pt-8 border-t border-[var(--border-color)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase tracking-widest font-bold text-sm border-b-2 border-transparent hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    Source Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase tracking-widest font-bold text-sm border-b-2 border-transparent hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Footer / CTA Section */}
        <section className="mt-40 pt-32 pb-12 flex flex-col items-center text-center border-t border-[var(--border-color)]">
          <h2 className="text-[10vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12">
            Let's build
          </h2>
          <a 
            href="mailto:kabiththananparan@gmail.com" 
            className="btn-brutalist text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 uppercase"
          >
            Get In Touch
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