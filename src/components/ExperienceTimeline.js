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
      // Color property is simplified to a neutral key for B&W theme
      colorKey: "primary", 
    },
    {
      id: 2,
      date: "2014 — May 2022 - Jaffna",
      title: "Secondary Education",
      desc: "Jaffna Hindu College — Completed GCE Advanced Level with focus on Mathematics, Physics, and Chemistry.",
      colorKey: "secondary",
    },
  ];

  const experience = [
    {
      id: 1,
      date: "Oct 2024 — Present",
      title: "ML Intern — HABB",
      desc: "Built data pipelines and trained prototype models for classification tasks; contributed to model evaluation and deployment scripts.",
      colorKey: "primary",
    },
    // {
    //   id: 2,
    //   date: "May 2023 — Dec 2023",
    //   title: "Research Assistant — University Project",
    //   desc: "Assisted with data collection and experiments in an NLP research project; helped prepare reports and visualizations.",
    //   colorKey: "secondary",
    // },
  ];

  const items = tab === "education" ? education : experience;
  
  // Define B&W styles based on the old color keys
  const getBorderAndDotStyles = (colorKey) => {
    // We can use a bright white/light gray accent for the border on hover/focus
    if (colorKey === "primary") {
      return { 
        borderBg: "bg-white", // White background for the item card border effect
        dotBg: "bg-white shadow-lg shadow-white/50" // High-contrast white dot
      };
    } 
    // Use a slightly darker accent for the secondary item
    if (colorKey === "secondary") {
      return { 
        borderBg: "bg-gray-400", // Gray background for the item card border effect
        dotBg: "bg-gray-400 shadow-lg shadow-gray-400/50" // Gray dot
      };
    }
  };

  const getTabStyles = (isActive) => {
    // For the active tab, use a solid white background with black text
    if (isActive) {
        return "bg-white text-black shadow-lg";
    }
    // For the inactive tab, use a dark gray background with light gray text
    return "text-gray-300 bg-zinc-800 hover:bg-zinc-700";
  }

  return (
    <section className="mt-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          {/* Title: Pure white text, removed colored gradient */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Experience <span className="text-white mx-2">&</span> Journey
          </h2>
          {/* Subtitle: Light gray text */}
          <p className="text-sm text-gray-400 mt-2">Explore my professional and educational timeline through highlighted milestones.</p>

          <div className="inline-flex items-center gap-2 mt-6 rounded-full bg-zinc-900 p-1" role="tablist" aria-label="Experience or Education">
            <button
              role="tab"
              aria-pressed={tab === "experience"}
              onClick={() => setTab("experience")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${getTabStyles(tab === "experience")}`}>
              Experience
            </button>

            <button
              role="tab"
              aria-pressed={tab === "education"}
              onClick={() => setTab("education")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${getTabStyles(tab === "education")}`}>
              Education
            </button>
          </div>
        </div>

        <div className="relative pt-8">
          {/* Timeline center line: Darker gray */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800" />

          <div className="space-y-16">
            {items.map((it, idx) => {
              const styles = getBorderAndDotStyles(it.colorKey);
              return (
              <div key={it.id} className="lg:flex lg:items-start lg:justify-between">
                {idx % 2 === 0 ? <div className="lg:w-5/12 lg:order-1 hidden lg:block" /> : null}

                <div className={`relative lg:w-6/12 lg:order-2`}> 
                  <div className={`${idx % 2 === 0 ? "ml-auto lg:ml-12" : "mr-auto lg:mr-12"} max-w-xl`}> 
                    {/* Outer Border Wrapper: Replaced dynamic gradient with solid B&W styles */}
                    <div className={`rounded-2xl p-1 ${styles.borderBg}`}>
                      {/* Inner Card: Dark background with light border */}
                      <div className="bg-zinc-900 rounded-xl p-6 border border-gray-700 relative hover:border-white transition-colors duration-300">
                        {/* Date: Light gray */}
                        <div className="text-sm text-gray-400">{it.date}</div>
                        {/* Title: High contrast white */}
                        <h3 className="font-semibold text-white mt-2">{it.title}</h3>
                        {/* Description: Light gray */}
                        <p className="text-gray-300 mt-3">{it.desc}</p>

                        {/* Additional Content (if any) */}
                        {tab === "education" && (
                          <div className="mt-4 text-gray-300">
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Dot: Replaced dynamic color with B&W style */}
                    <div className={`absolute ${idx % 2 === 0 ? "-left-6" : "-right-6"} top-8 w-3 h-3 rounded-full ${styles.dotBg} transition-shadow`} />
                  </div>
                </div>

                {idx % 2 !== 0 ? <div className="lg:w-5/12 lg:order-2 hidden lg:block" /> : null}
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}