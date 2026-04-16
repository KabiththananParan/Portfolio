"use client";
import React from 'react';

export default function CTAActions() {
  const downloadResume = async () => {
    try {
      const res = await fetch('/api/resume');
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Paran_Kabiththanan_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed', err);
      window.location.href = '/api/resume';
    }
  };

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-6">
      <button 
        onClick={downloadResume} 
        className="px-8 py-4 uppercase font-black tracking-widest text-sm bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors border border-transparent"
      >
        Download CV
      </button>
      <a 
        href="mailto:kabiththananparan@gmail.com" 
        className="px-8 py-4 uppercase font-black tracking-widest text-sm border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-center"
      >
        Contact Me
      </a>
    </div>
  );
}
