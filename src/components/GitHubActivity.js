"use client";

const GITHUB_USER = "KabiththananParan";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

const statItems = [
  { label: "Repositories", value: "20+" },
  { label: "Contributions",value: "500+" },
  { label: "Languages",    value: "8+"   },
  { label: "Status",       value: "Active" },
];

export default function GitHubActivity() {
  return (
    <section className="mt-24 border-b border-[var(--border-color)] pb-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter font-sans">
          Contributions
        </h2>
        <span className="text-[var(--accent)] text-[10px] uppercase tracking-widest opacity-60">
          // COMMIT_HISTORY_LOG
        </span>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {statItems.map((s, i) => (
          <div
            key={i}
            className="group relative border border-[var(--border-color)] bg-[#0a0a0a] p-5 flex flex-col items-center justify-center text-center hover:border-[var(--accent)] transition-colors overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_var(--accent)]" />
            <span className="text-2xl sm:text-3xl font-black font-sans text-[var(--accent)] leading-none">
              {s.value}
            </span>
            <span className="text-[9px] uppercase tracking-widest opacity-50 mt-2">{s.label}</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Contribution calendar */}
      <div className="group border border-[var(--border-color)] bg-[#0a0a0a] overflow-hidden hover:border-[var(--accent)] transition-colors mb-6">
        <div className="flex justify-between items-center px-4 py-2.5 border-b border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-black">
          <span className="text-[var(--accent)] text-[9px] uppercase tracking-widest opacity-70">
            // GITHUB_CONTRIBUTION_GRAPH [{GITHUB_USER}]
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest opacity-40">[LIVE]</span>
          </div>
        </div>

        <div className="p-4 sm:p-8 overflow-x-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/891a20/${GITHUB_USER}`}
            alt="GitHub Contribution Graph"
            className="w-full min-w-[600px] opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ display: "block" }}
          />
        </div>

        <div className="px-4 py-2 border-t border-[var(--border-color)] flex justify-between items-center">
          <span className="text-[9px] uppercase tracking-widest opacity-30">SYS_DIAGNOSTIC: STABLE</span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-widest text-[var(--accent)] opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1.5"
          >
            <span>[→]</span> View_Profile
          </a>
        </div>
      </div>

      {/* Streak + Top languages cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            label: "STREAK_STATS",
            src: `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=dark&background=0a0a0a&border=891a20&stroke=891a20&ring=891a20&fire=891a20&currStreakNum=f4f4f5&sideNums=f4f4f5&currStreakLabel=891a20&sideLabels=891a20&dates=888888`,
          },
          {
            label: "TOP_LANGUAGES",
            src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=dark&bg_color=0a0a0a&border_color=891a20&title_color=891a20&text_color=f4f4f5&langs_count=6`,
          },
        ].map(({ label, src }) => (
          <div
            key={label}
            className="group border border-[var(--border-color)] bg-[#0a0a0a] overflow-hidden hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-black">
              <span className="text-[var(--accent)] text-[9px] uppercase tracking-widest opacity-70">// {label}</span>
              <span className="text-[9px] uppercase tracking-widest opacity-30">[READ_ONLY]</span>
            </div>
            <div className="p-4 flex items-center justify-center min-h-[160px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={label}
                className="w-full max-w-md opacity-90 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.style.display = "block";
                }}
              />
              <span
                style={{ display: "none" }}
                className="text-[10px] text-[var(--accent)] uppercase tracking-widest opacity-50"
              >
                // DATA_UNAVAILABLE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
