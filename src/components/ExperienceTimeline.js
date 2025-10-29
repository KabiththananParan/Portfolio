"use client";

import React, { useState } from "react";

export default function ExperienceTimeline() {
  const [tab, setTab] = useState("education");

  const education = [
    {
      id: 1,
      date: "Aug 2023 — Present · SLIIT",
      title: "BSc in Information Technology",
      desc: "Started Bachelor's in Information Technology specialization in Data Science.",
      color: "cyan",
    },
    {
      id: 2,
      date: "2014 — May 2022 - Jaffna",
      title: "Secondary Education",
      desc: "Jaffna Hindu College — Completed GCE Advanced Level with focus on Mathematics, Physics, and Chemistry.",
      color: "pink",
    },
  ];

  const experience = [
    {
      id: 1,
      date: "Oct 2024 — Present",
      title: "ML Intern — HABB",
      desc: "Built data pipelines and trained prototype models for classification tasks; contributed to model evaluation and deployment scripts.",
      color: "violet",
    },
    // {
    //   id: 2,
    //   date: "May 2023 — Dec 2023",
    //   title: "Research Assistant — University Project",
    //   desc: "Assisted with data collection and experiments in an NLP research project; helped prepare reports and visualizations.",
    //   color: "teal",
    // },
  ];

  const items = tab === "education" ? education : experience;

  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Experience <span className="relative inline-block">
              <span className="mx-2 bg-clip-text text-transparent bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#ec4899)]">&</span>
            </span> Journey
          </h2>
          <p className="text-sm text-zinc-400 mt-2">Explore my professional and educational timeline through highlighted milestones.</p>

          <div className="inline-flex items-center gap-2 mt-6 rounded-full bg-zinc-900 p-1" role="tablist" aria-label="Experience or Education">
            <button
              role="tab"
              aria-pressed={tab === "experience"}
              onClick={() => setTab("experience")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${tab === "experience" ? "bg-linear-to-r from-cyan-500 to-violet-500 text-white shadow-md" : "text-zinc-300 bg-zinc-800"}`}>
              Experience
            </button>

            <button
              role="tab"
              aria-pressed={tab === "education"}
              onClick={() => setTab("education")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${tab === "education" ? "bg-linear-to-r from-pink-500 to-violet-500 text-white shadow-md" : "text-zinc-300 bg-zinc-800"}`}>
              Education
            </button>
          </div>
        </div>

        <div className="relative pt-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-800" />

          <div className="space-y-16">
            {items.map((it, idx) => (
              <div key={it.id} className="lg:flex lg:items-start lg:justify-between">
                {idx % 2 === 0 ? <div className="lg:w-5/12 lg:order-1 hidden lg:block" /> : null}

                <div className={`relative lg:w-6/12 lg:order-2`}> 
                  <div className={`${idx % 2 === 0 ? "ml-auto lg:ml-12" : "mr-auto lg:mr-12"} max-w-xl`}> 
                    <div className={`rounded-2xl p-1 ${tab === "education" ? (it.color === "cyan" ? "bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#ec4899)]" : "bg-[linear-gradient(90deg,#f472b6,#f97316)]") : (it.color === "violet" ? "bg-[linear-gradient(90deg,#7c3aed,#a78bfa)]" : "bg-[linear-gradient(90deg,#06b6d4,#34d399)]")}`}>
                      <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 relative">
                        <div className="text-sm text-zinc-400">{it.date}</div>
                        <h3 className="font-semibold text-white mt-2">{it.title}</h3>
                        <p className="text-zinc-300 mt-3">{it.desc}</p>

                        {tab === "education" && (
                          <div className="mt-4 text-zinc-300">
                            {/* <h4 className="text-sm font-medium text-zinc-200">Highlights</h4> */}
                            {/* <ul className="mt-3 space-y-2 text-sm">
                              <li className="flex items-start gap-3"><span className="mt-1 text-cyan-400">●</span> Hands-on projects and labs.</li>
                              <li className="flex items-start gap-3"><span className="mt-1 text-yellow-400">●</span> Coursework focused on applied ML.</li>
                            </ul> */}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`absolute ${idx % 2 === 0 ? "-left-6" : "-right-6"} top-8 w-3 h-3 rounded-full ${it.color === "pink" ? "bg-pink-400" : it.color === "cyan" ? "bg-cyan-400" : it.color === "violet" ? "bg-violet-400" : "bg-teal-400"} shadow-sm`} />
                  </div>
                </div>

                {idx % 2 !== 0 ? <div className="lg:w-5/12 lg:order-2 hidden lg:block" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
