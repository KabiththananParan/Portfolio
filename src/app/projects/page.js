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
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-[var(--border-color)] pb-24 font-mono">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative flex flex-col border border-[var(--border-color)] bg-black/40 hover:border-[var(--accent)] transition-all duration-300 overflow-hidden"
            >
              {/* Scanline sweep on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />

              {/* Top terminal bar */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[#0a0a0a]">
                <span className="text-[var(--accent)] text-[9px] uppercase tracking-widest opacity-70">// PROJECT_LOG [{String(idx + 1).padStart(2, '0')}]</span>
                <span className="text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-80 transition-opacity">[READ_ONLY]</span>
              </div>

              {/* Image with corner brackets */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0a0a0a] border-b border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
                <ProjectPreview image={project.image} title={project.title} />
                {/* Camera bracket corners */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute top-2 left-2 text-[var(--accent)] text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10">REC●</div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Project title */}
                <div className="border-l-2 border-[var(--accent)] pl-4 mb-6 group-hover:border-l-4 transition-all duration-300">
                  <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest mb-1 block opacity-70">// SYSTEM_NAME</span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[var(--foreground)] leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm opacity-60 group-hover:opacity-90 transition-opacity leading-relaxed mb-6 flex-grow border-l border-white/10 pl-4">
                  {project.description}
                </p>

                {/* Tags as terminal chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 border border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--accent)]/5 group-hover:bg-[var(--accent)]/10 transition-colors"
                    >
                      [{tag}]
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 border border-white/10 opacity-40">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border-color)] group-hover:border-[var(--accent)]/30 transition-colors mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest font-bold text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all flex items-center gap-2"
                  >
                    <span className="text-[var(--accent)]">[→]</span> Source_Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-widest font-bold text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all flex items-center gap-2"
                    >
                      <span className="text-[var(--accent)]">[↗]</span> Live_Demo
                    </a>
                  )}
                  <span className="ml-auto text-[9px] uppercase tracking-widest opacity-30">SYS: STABLE</span>
                </div>
              </div>

              {/* Bottom scanline accent */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
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