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
    <div className="mt-6 flex gap-4">
      <button onClick={downloadResume} className="px-5 py-2 rounded-lg bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-cyan-400/30">Download CV</button>
      <a href="mailto:kabiththananparan@gmail.com" className="px-5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 font-medium hover:bg-zinc-800">Contact Me</a>
    </div>
  );
}
