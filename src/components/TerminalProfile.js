import React from 'react';
import Image from 'next/image';

export default function TerminalProfile() {
  return (
    <div className="w-full font-mono text-sm border-t border-[var(--border-color)] pb-32 pt-16">
      {/* Top Banner similar to the reference */}
      <div className="flex justify-between items-center py-4 border-b border-[var(--border-color)] opacity-70 text-xs">
        <span className="uppercase tracking-widest text-[10px]">CAM_04 [REC]</span>
        <span className="text-right text-[10px] tracking-widest">23:04:01:41<br />ISO: 800</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 overflow-hidden">
        {/* LEFT COLUMN: Identity Profile */}
        <div className="col-span-1 lg:col-span-3 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[var(--accent)] font-bold text-xs uppercase">X: 0 Y: 15</span>
            <h2 className="text-3xl font-black tracking-tighter uppercase font-sans">Kabi Paran</h2>
          </div>

          <div className="relative w-full aspect-square border border-[var(--border-color)] mb-8 p-1">
            <div className="relative w-full h-full grayscale overflow-hidden group hover:grayscale-0 transition-all duration-700 cursor-crosshair">
              <Image src="/Kabi.jpg" alt="Kabiththanan Paran" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              {/* Cyberpunk Camera Bracket Overlays */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[var(--accent)]"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--accent)]"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--accent)]"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[var(--accent)]"></div>

              <div className="absolute top-2 right-2 bg-[var(--accent)] text-[var(--foreground)] text-[9px] px-1 font-bold z-10 transition-colors group-hover:text-[var(--background)]">REC_ACTIVE:1</div>
              <div className="absolute bottom-2 left-2 text-[var(--accent)] text-[9px] font-bold shadow-black drop-shadow-md z-10">ISO_FACE_IDX: 99.9%</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 opacity-80 text-xs tracking-widest uppercase">
            <div>
              <span className="opacity-50 block mb-1 text-[10px]">Class:</span>
              <span className="font-bold break-words">AI_Engineer</span>
            </div>
            <div>
              <span className="opacity-50 block mb-1 text-[10px]">XP_Level:</span>
              <span className="font-bold break-words">Mid_Level</span>
            </div>
            <div>
              <span className="opacity-50 block mb-1 text-[10px]">Lang_1:</span>
              <span className="font-bold break-words">EN (Fluent)</span>
            </div>
            <div>
              <span className="opacity-50 block mb-1 text-[10px]">Lang_2:</span>
              <span className="font-bold break-words">TA (Native)</span>
            </div>
          </div>

          <div className="border border-[var(--accent)] p-4 relative overflow-hidden group bg-black/40 backdrop-blur-sm">
            {/* Scanline effect placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.15] to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-[200%] transition-all duration-1000 ease-linear z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
                <span className="text-[var(--accent)] text-[10px] font-bold tracking-widest">SYSTEM_ALERT</span>
              </div>
              <h3 className="text-2xl font-black font-sans uppercase mb-4 tracking-tighter">Open to Work</h3>
              <div className="flex justify-between text-[9px] sm:text-[10px] opacity-70 uppercase tracking-widest border-t border-[var(--accent)]/30 pt-2">
                <span>// Contracts: Enabled</span>
                <span className="text-[var(--accent)]">[Remote_Ready]</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Core Logs */}
        <div className="col-span-1 lg:col-span-6 flex flex-col pt-0 lg:pt-4">
          <div className="flex justify-between items-center mb-8 uppercase text-xs font-bold tracking-widest mt-8 lg:mt-0">
            <span className="text-[var(--accent)] truncate mr-2">COMPETENCE_ANALYSIS_REPORT</span>
            <span className="text-[var(--accent)] shrink-0">[READ_ONLY]</span>
          </div>

          <p className="text-xl sm:text-2xl font-sans tracking-tight leading-snug mb-16 opacity-90 indent-12 sm:indent-24">
            Hybrid engineer obsessed with the absolute fusion of <span className="text-[var(--background)] bg-[var(--accent)] px-2 font-bold transform -skew-x-6 inline-block mx-1">Data Science</span> and <span className="text-[var(--background)] bg-[var(--accent)] px-2 font-bold transform -skew-x-6 inline-block mx-1">Software Engineering</span>. I don't just build systems, I design robust deterministic paradigms that leave a lasting impression.
          </p>

          <div className="mb-12 border-t border-white/10 pt-12 relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-white/20"></div>
            <span className="text-xs tracking-widest opacity-50 uppercase mb-6 block text-[var(--accent)]">// ACADEMIC_LOG [EDUCATION]</span>

            <div className="border-l border-[var(--accent)] pl-4 hover:border-l-4 transition-all duration-300 group cursor-crosshair">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[var(--accent)] font-bold tracking-widest text-xs lg:text-sm group-hover:underline underline-offset-4">[SLIIT]</span>
                <span className="bg-[#1a1a1a] text-[var(--accent)] opacity-70 text-[10px] px-2 py-0.5 border border-[var(--accent)]/20 uppercase tracking-widest group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-colors">2023—CURRENT</span>
              </div>
              <p className="text-sm uppercase tracking-wide opacity-80 pl-2 border-l border-white/10 ml-1 group-hover:opacity-100 transition-opacity">BSC (HONS) IT - Specializing in Data Science</p>
            </div>
          </div>

          <div className="mb-12 border-t border-white/10 pt-12 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white/20"></div>
            <span className="text-xs tracking-widest opacity-50 uppercase mb-6 block text-[var(--accent)]">// FIELD_OPERATIONS [EXPERIENCE]</span>

            <div className="flex flex-col gap-8">
              <div className="border-l border-[var(--accent)] pl-4 hover:border-l-4 transition-all duration-300 group cursor-crosshair">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[var(--accent)] font-bold tracking-widest text-xs lg:text-sm group-hover:underline underline-offset-4">[INTERNSHIP]</span>
                  <span className="bg-[#1a1a1a] text-[var(--accent)] opacity-70 text-[10px] px-2 py-0.5 border border-[var(--accent)]/20 uppercase tracking-widest group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-colors">AUG 2025— FEB 2026</span>
                </div>
                <p className="text-sm uppercase tracking-wide py-1 opacity-90 font-bold pl-2 border-l border-white/10 ml-1 group-hover:text-[var(--foreground)] transition-colors">HABB — Machine Learning Intern</p>
                <p className="text-xs uppercase tracking-wide opacity-50 mt-1 pl-2 border-l border-white/10 ml-1 group-hover:opacity-80 transition-opacity leading-relaxed max-w-lg">Work on RAG based project.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Skills */}
        <div className="col-span-1 lg:col-span-3 flex flex-col pt-0 lg:pt-4">
          <div className="flex justify-between items-center mb-8 text-[10px] uppercase font-bold tracking-widest opacity-50 mt-8 lg:mt-0">
            <span>EQUIPMENT_INVENTORY</span>
            <span className="border border-white/20 px-1 py-0.5">SYS</span>
          </div>

          <div className="mb-16">
            <span className="text-[var(--accent)] text-[10px] font-bold tracking-widest mb-4 block">// HARD SKILLS</span>
            <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs text-center uppercase tracking-wider font-semibold">
              {['Python', 'TensorFlow', 'PyTorch', 'Next.js', 'React', 'TypeScript', 'SQL', 'MongoDB'].map(skill => (
                <div key={skill} className="border border-[var(--border-color)] py-3 bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] transition-colors cursor-crosshair shadow-[2px_2px_0px_transparent] hover:shadow-[2px_2px_0px_var(--accent)] hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0 active:translate-x-0 active:shadow-none duration-150">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <span className="text-[var(--accent)] text-[10px] font-bold tracking-widest mb-4 block">// SOFT SKILLS</span>
            <div className="flex flex-col gap-2 text-[10px] sm:text-xs uppercase tracking-wider text-center font-semibold">
              {['Problem Solving', 'Data Interpretation', 'Critical Thinking'].map(skill => (
                <div key={skill} className="border border-[var(--border-color)] py-3 border-dashed hover:border-solid hover:bg-[var(--border-color)] transition-all cursor-crosshair">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="text-right text-[8px] opacity-40 uppercase tracking-widest mt-auto hidden lg:block">
            Sys_Diagnostic: <span className="text-[var(--accent)]">Stable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
