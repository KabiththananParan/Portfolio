"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function BlogPage() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // --- Blog Fetch Logic (Kept functional and clean) ---
  React.useEffect(() => {
    const controller = new AbortController();
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-site",
    };

    const formatTitle = (path) => {
      const segments = path.split("/");
      const fileName = segments.pop() || "";
      const parent = segments.pop() || "";
      const readable = fileName
        .replace(/\.md$/i, "")
        .replace(/[_-]+/g, " ")
        .trim();
      const parentLabel = parent ? ` — ${parent.replace(/[_-]+/g, " ")}` : "";
      return `${readable}${parentLabel}`;
    };

    const decodeSnippet = (base64Content) => {
      try {
        const text = atob(base64Content || "");
        const lines = text.split("\n");

        const cleanLine = (line) => {
          const stripped = line
            .replace(/^\s*#+\s*/, "") // drop headings
            .replace(/^\s*[-*>]\s*/, "") // drop bullets/quotes
            .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // drop images
            .replace(/\[[^\]]*\]\([^)]*\)/g, "") // drop links
            .replace(/`+/g, "")
            .trim();
          return stripped;
        };

        const candidate = lines.find((line) => {
          const cleaned = cleanLine(line);
          return cleaned.length > 0;
        });

        const summary = candidate ? cleanLine(candidate) : "";
        return summary ? summary.slice(0, 200) : "";
      } catch (err) {
        console.error("Failed to decode blog content", err);
        return "";
      }
    };

    const fetchPosts = async () => {
      try {
        const treeResp = await fetch(
          "https://api.github.com/repos/KabiththananParan/AI-ML-DS-DL-Blog/git/trees/main?recursive=1",
          { headers, signal: controller.signal }
        );

        if (!treeResp.ok) {
          throw new Error(`GitHub tree fetch failed: ${treeResp.status}`);
        }

        const treeData = await treeResp.json();
        const markdownFiles = (treeData.tree || []).filter(
          (node) =>
            node.type === "blob" &&
            node.path.toLowerCase().endsWith(".md") &&
            node.path.toLowerCase() !== "readme.md"
        );

        const posts = await Promise.all(
          markdownFiles.slice(0, 24).map(async (file) => {
            const commitResp = await fetch(
              `https://api.github.com/repos/KabiththananParan/AI-ML-DS-DL-Blog/commits?path=${encodeURIComponent(
                file.path
              )}&page=1&per_page=1`,
              { headers, signal: controller.signal }
            ).catch((err) => {
              console.error("Commit fetch failed", err);
              return null;
            });

            let commitDate = "";
            if (commitResp && commitResp.ok) {
              const commits = await commitResp.json();
              commitDate = commits?.[0]?.commit?.author?.date || "";
            }

            const contentResp = await fetch(
              `https://api.github.com/repos/KabiththananParan/AI-ML-DS-DL-Blog/contents/${file.path}?ref=main`,
              { headers, signal: controller.signal }
            ).catch((err) => {
              console.error("Content fetch failed", err);
              return null;
            });

            let description = "";
            if (contentResp && contentResp.ok) {
              const content = await contentResp.json();
              description = decodeSnippet(content.content);
            }

            return {
              title: formatTitle(file.path),
              date: commitDate,
              description,
              url: `https://kabiththananparan.github.io/AI-ML-DS-DL-Blog/${file.path.replace(/\.md$/i, '.html')}`,
            };
          })
        );

        const sorted = posts.sort((a, b) => {
          const aTime = a.date ? new Date(a.date).getTime() : 0;
          const bTime = b.date ? new Date(b.date).getTime() : 0;
          return bTime - aTime;
        });

        setPosts(sorted);
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error("Blog load failed", err);
          setError("Unable to load blog posts right now. Please try again later.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();
    return () => controller.abort();
  }, []);

  const formatDate = (date) => {
    if (!date) return "Recently updated";
    try {
      return new Date(date).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch (err) {
      return "Recently updated";
    }
  };

  // --- Article Card Component ---
  const ArticleCard = ({ post, index }) => (
    <article 
      className="relative pl-6 article-card transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* High-contrast B&W Dot/Timeline Marker */}
      <span className="absolute left-[-1.55rem] top-2 w-3 h-3 rounded-full bg-white border-2 border-black shadow-md" />
      
      <div className="bg-zinc-950/70 p-6 rounded-xl border border-zinc-800 transition-all duration-300 hover:border-white/50">
        <div className="text-xs text-gray-500 tracking-wider uppercase font-medium">{formatDate(post.date)}</div>
        
        <h2 className="text-2xl font-bold text-white mt-1 mb-2 leading-snug">{post.title}</h2>
        
        {post.description && (
          <p className="text-gray-400 text-base mb-3 leading-relaxed line-clamp-2">{post.description}</p>
        )}
        
        <a
          href={post.url}
          className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-gray-400 transition-colors border-b border-white/50 hover:border-gray-400"
          target="_blank"
          rel="noreferrer"
        >
          Read article <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );

  return (
    // Base: Deep black background (bg-black) with white text.
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Grid (Monochromatic, subtle) */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* <MonochromaticBackgroundAnimation /> if available */}

      {/* Navbar is a floating component (usually sticky/fixed top) */}
      <Navbar /> 

      {/* Theme Toggle is a fixed utility */}
      <div className="fixed right-8 top-6 z-40">
        <ThemeToggle />
      </div>

      <main className="container mx-auto px-4 sm:px-8 py-20 max-w-5xl relative z-10">
        
        {/* Header Section with Animation */}
        <header className="text-center mb-20 space-y-4 animate-slide-up-heading">
         
          
          {/* Accent text: High contrast white/gray */}
          <p className="text-sm tracking-widest text-white/80 font-semibold uppercase animate-fade-in-slow">
            Blog
          </p>
          
          {/* Main Heading: Strong B&W font */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            I write about things I'm learning and things I'm building.
          </h1>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.5s'}}>
            All of my long-form thoughts on programming, leadership, infrastructure, and the world of AI/ML, collected in chronological order.
          </p>
        </header>

        {/* Blog Timeline Section */}
        <section className="relative border-l border-zinc-800 pl-8 space-y-10">
          
          {/* Loading State Animation */}
          {loading && (
            <div className="space-y-8">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Timeline Dot */}
                  <span className="absolute left-[-1.55rem] top-2 w-3 h-3 rounded-full bg-zinc-700 animate-pulse" /> 
                  <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 animate-pulse">
                    <div className="h-3 w-20 bg-zinc-800 rounded mb-3" />
                    <div className="h-6 w-3/4 bg-zinc-700 rounded mb-3" />
                    <div className="h-4 w-full bg-zinc-800 rounded mb-3" />
                    <div className="h-4 w-1/3 bg-zinc-800 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="text-gray-400 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <p className="mb-3">{error}</p>
              <a
                className="text-white text-sm font-medium hover:text-gray-400 border-b border-white/50"
                href="https://github.com/KabiththananParan/AI-ML-DS-DL-Blog"
                target="_blank"
                rel="noreferrer"
              >
                Open blog repository →
              </a>
            </div>
          )}

          {/* No Posts Found */}
          {!loading && !error && posts.length === 0 && (
            <p className="text-gray-400 p-6 bg-zinc-900 rounded-xl border border-zinc-800">No posts yet. Check back soon!</p>
          )}

          {/* Render Posts */}
          {!loading && !error && posts.map((post, index) => (
            <ArticleCard key={index} post={post} index={index} />
          ))}
        </section>
      </main>

      {/* Custom Styles/Animations */}
      <style jsx>{`
        /* Timeline specific animation */
        .article-card {
            opacity: 0;
            animation: slideUpFade 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Shared Animations from other components */
        .animate-slide-up-heading {
          animation: slideUpFade 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-fade-in-slow {
          animation: fadeIn 1.5s ease-out 0.8s both;
        }

        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); }
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