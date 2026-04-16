"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { linkedInPosts } from "@/data/linkedin-posts";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const workItems = [
    { 
      title: "ML Intern at HABB", 
      date: "Aug 2024—Present",
      role: "Machine Learning",
    },
  ];

  return (
    <div className="min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Preloader />
      <Navbar />

      <main className="px-6 sm:px-12 md:px-24">
        
        {/* Massive Hero Section - Full Height */}
        <section className="min-h-screen flex flex-col justify-center border-b border-[var(--border-color)]">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-24"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-[12vw] sm:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase max-w-[90vw]"
            >
              Software <br /> 
              Engineer <br />
              <span className="text-[var(--accent)]">Data & AI</span>
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 shrink-0 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Image 
                src="/Kabi.jpg" 
                alt="Kabi" 
                fill 
                className="object-cover object-center rounded-xl md:rounded-3xl border border-[var(--border-color)]"
                priority
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-16 sm:mt-32 max-w-2xl text-lg sm:text-2xl font-medium tracking-tight leading-snug pb-12"
          >
            <p className="mb-6">
              I build robust, intelligent systems and engaging digital experiences. 
              Currently driven by the intersection of AI, data science, and modern engineering.
            </p>
            <Link 
              href="/about" 
              className="inline-block mt-4 border-b-2 border-[var(--foreground)] pb-1 transition-opacity uppercase tracking-widest text-sm font-bold opacity-60 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:opacity-100"
            >
              More about me
            </Link>
          </motion.div>
        </section>

        {/* Selected Works - Large padding for separation */}
        <section className="min-h-[80vh] py-32 border-b border-[var(--border-color)] flex flex-col justify-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-between items-baseline mb-24"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter">Insights &<br/>Updates</h2>
            <Link href="/projects" className="mt-4 sm:mt-0 uppercase tracking-widest text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">
              View All [→]
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col border-t border-[var(--border-color)]"
          >
            {linkedInPosts.slice(0, 3).map((post, index) => (
              <motion.a 
                variants={fadeInUp}
                key={index} 
                href={post.url} 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-10 sm:py-16 border-b border-[var(--border-color)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors px-4 -mx-4"
              >
                <div className="max-w-3xl">
                  <h3 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 group-hover:px-4 transition-all duration-300">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="opacity-60 max-w-xl group-hover:px-4 transition-all duration-300 delay-75">
                      {post.description.substring(0, 100)}...
                    </p>
                  )}
                </div>
                <div className="mt-6 sm:mt-0 opacity-60 uppercase tracking-widest text-xs sm:text-sm font-semibold group-hover:-translate-x-4 transition-transform duration-300">
                  {post.date || "Read Insight"}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Experience / Work - Min height for spacing */}
        <section className="min-h-[80vh] py-32 border-b border-[var(--border-color)] flex flex-col justify-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-24"
          >
            Experience
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          >
            {workItems.map((item, index) => (
              <motion.div 
                variants={fadeInUp}
                key={index} 
                className="flex flex-col pb-8 border-b border-[var(--border-color)] group"
              >
                <p className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2 group-hover:opacity-100 transition-opacity">{item.date}</p>
                <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-xl font-medium opacity-80">{item.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Footer / CTA Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.h2 variants={fadeInUp} className="text-[10vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none mb-12 text-[var(--accent)] hover:text-[var(--foreground)] transition-colors">
              Let's build
            </motion.h2>
            <motion.a 
              variants={fadeInUp}
              href="mailto:kabiththananparan@gmail.com" 
              className="btn-brutalist text-xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 uppercase"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <footer className="mt-auto pt-32 pb-12 w-full flex flex-col sm:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest opacity-50 gap-4">
            <p>© {new Date().getFullYear()} Kabiththanan Paran</p>
            <div className="flex gap-6">
              <a href="https://github.com/KabiththananParan" className="hover:text-[var(--accent)] transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/kabiththananparan/" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
              <a href="https://x.com" className="hover:text-[var(--accent)] transition-colors">Twitter</a>
            </div>
          </footer>
        </section>

      </main>
    </div>
  );
}
