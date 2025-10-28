"use client";

import React from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

export default function Home() {
  // Navbar behavior is handled by the shared <Navbar /> component

  const projects = [
    { image: "/project1.jpg", alt: "Project 1" },
    { image: "/project2.jpg", alt: "Project 2" },
    { image: "/project3.jpg", alt: "Project 3" },
    { image: "/project4.jpg", alt: "Project 4" },
    { image: "/project5.jpg", alt: "Project 5" },
  ];

  const blogPosts = [
  //   {
  //     date: "December 5, 2023",
  //     title: "XG Code Remote Development",
  //     description: "Join the Code against a remote workspace on enterprise.",
  //     category: "Digital Therapeutics"
  //   },
  //   {
  //     date: "October 27, 2023",
  //     title: "Understanding JavaScript Async/Await Behavior",
  //     description: "A deep dive into how JavaScript handles asynchronous operations, from callbacks to async/await syntax.",
  //     category: "JavaScript"
  //   },
  //   {
  //     date: "March 18, 2024",
  //     title: "Design UI: The Complete Guide",
  //     description: "An implementation guide for managing state in React applications, by Evan Daniels hosted by Digital Therapeutics.",
  //     category: "Digital Therapeutics"
  //   },
  //   {
  //     date: "March 10, 2024",
  //     title: "Mastering React State Management",
  //     description: "A comprehensive guide for managing state in React applications, from useState to Redux and beyond.",
  //     category: "React and Beyond"
  //   }
  ];

  const workItems = [
    { title: "Compassionate Refugee JAF set", date: "Oct 2024—Oct Now" },
    { title: "TwitchSubeddie", date: "Jul 2024—Sep Now" },
    { title: "HashSchedule", date: "Jul 2024—Oct Now" },
    { title: "GitHub Gamers of Code", date: "Jun 2024—Jul 2024" },
    { title: "True Date Late Gamers Of Code", date: "Feb 2023—May 2024" }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-50 dotted-grid">
      <Navbar />

      {/* Theme toggle */}
      <div className="fixed right-8 top-6 z-40">
        <ThemeToggle />
      </div>

      <main className="container mx-auto px-4 sm:px-8 py-20 max-w-7xl">
        {/* Hero Section */}
        <section className="hero-section mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="avatar-wrapper mb-8">
              <a href="/" className="block">
                <div className="avatar">
                  <Image
                    src="/Kabi.jpg"
                    alt="Kabi"
                    width={88}
                    height={88}
                    className="object-cover"
                    priority
                  />
                </div>
              </a>
            </div>

            <div className="content">
              <h1 className="big-heading text-zinc-50 mb-6">
                Software Engineer, Freelancer,
                <br /> and Open Source Enthusiast.
              </h1>

              <div className="space-y-4 text-base">
                <p className="text-zinc-400 leading-relaxed">
                  Here's what I've been up to lately. I'm always working on
                  something interesting, whether it's a new project, learning a new
                  technology, or contributing to open source.
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  I'm passionate about building tools that make developers' lives
                  easier. When I'm not coding, you'll find me writing about my
                  experiences and sharing what I've learned.
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  Let's connect and build something amazing together! Whether
                  you're looking to collaborate on a project or just want to chat
                  about tech, I'd love to hear from you.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 social-row">
              <a href="https://github.com/KabiththananParan" className="social-icon" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.396 7.867 10.915.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.964-3.2.695-3.877-1.542-3.877-1.542-.523-1.33-1.277-1.684-1.277-1.684-1.044-.713.08-.699.08-.699 1.155.082 1.763 1.187 1.763 1.187 1.026 1.757 2.692 1.25 3.346.956.104-.744.402-1.25.732-1.536-2.553-.29-5.238-1.277-5.238-5.684 0-1.255.45-2.28 1.187-3.084-.12-.29-.515-1.457.112-3.04 0 0 .967-.31 3.17 1.18.92-.256 1.904-.384 2.885-.389.98.005 1.964.133 2.884.389 2.2-1.49 3.166-1.18 3.166-1.18.63 1.583.235 2.75.116 3.04.74.804 1.186 1.83 1.186 3.084 0 4.418-2.69 5.39-5.256 5.675.413.355.782 1.06.782 2.14 0 1.545-.014 2.79-.014 3.17 0 .31.207.67.79.556C20.71 21.394 24 17.088 24 12 24 5.648 18.352.5 12 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kabiththananparan/" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56V24H.22zM8.98 8h4.38v2.16h.06c.61-1.18 2.1-2.16 4.32-2.16 4.62 0 5.46 3.04 5.46 6.98V24h-4.58v-7.6c0-1.82-.04-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.02V24H8.98V8z"/>
                </svg>
              </a>
              {/* <a href="#" className="social-icon" aria-label="Google">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Stack Overflow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.093-10.473-2.201zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a> */}
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* <a href="#" className="social-icon" aria-label="Dev.to">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6.1v4.36h.48c.38 0 .66-.07.84-.23.18-.16.27-.42.27-.83v-2.24c0-.41-.09-.67-.27-.83zm15.98 2.47c0 2.81-.61 4.73-1.84 5.73-1.24 1.01-3.37 1.51-6.39 1.51H0V3.24h15.17c3.02 0 5.15.5 6.39 1.51 1.23 1 1.84 2.92 1.84 5.73v2.04zM6.1 15.3H4.67V8.7H6.1c.84 0 1.53.24 2.06.72.53.48.79 1.25.79 2.31v.54c0 1.06-.26 1.83-.79 2.31-.53.48-1.22.72-2.06.72zm9.25-3.41c0-.82-.14-1.42-.42-1.79-.28-.37-.72-.56-1.32-.56s-1.04.19-1.32.56c-.28.37-.42.97-.42 1.79v1.5c0 .82.14 1.42.42 1.79.28.37.72.56 1.32.56s1.04-.19 1.32-.56c.28-.37.42-.97.42-1.79v-1.5zm5.74 1.05c0 .56-.16.99-.47 1.29-.31.3-.74.45-1.29.45h-1.1v-5.36h1.1c.55 0 .98.15 1.29.45.31.3.47.73.47 1.29v1.88z"/>
                </svg>
              </a> */}
            </div>
          </div>
        </section>

        {/* Projects Grid
        <section className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="aspect-[3/4] bg-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Blog and Sidebar Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-post">
                <time className="text-zinc-500 text-sm">{post.date}</time>
                <h2 className="text-xl font-bold text-zinc-50 mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-zinc-400 text-sm mb-3">
                  {post.description}
                </p>
                <a href="#" className="text-emerald-400 text-sm hover:text-emerald-300">
                  Read article →
                </a>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Newsletter */}
            <div className="sidebar-card">
              <h3 className="text-lg font-bold mb-2">Stay up to date</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Get notified when I publish something new, and unsubscribe at any time.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm focus:outline-none focus:border-zinc-700"
                />
                <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm font-medium">
                  Join
                </button>
              </form>
            </div>

            {/* Work */}
            <div className="sidebar-card">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
                Work
              </h3>
              {/* <div className="space-y-3">
                {workItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-zinc-800 rounded flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-200 truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-zinc-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              <a href="#" className="inline-block mt-4 text-sm text-zinc-400 hover:text-zinc-300">
                Download Resume →
              </a>
            </div>
          </aside>
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
