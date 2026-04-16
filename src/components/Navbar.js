"use client";

import React from "react";
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white">
        {/* Left: Name */}
        <div className="font-bold tracking-tighter text-xl uppercase z-50 relative">
          <Link href="/">
            Paran Kabiththanan
          </Link>
        </div>

        {/* Center: Desktop links */}
        <div className="hidden sm:flex gap-8 items-center font-semibold text-sm uppercase tracking-widest z-50 relative">
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="/projects" className="hover:opacity-50 transition-opacity">Projects</Link>
          <Link href="/hire" className="hover:opacity-50 transition-opacity">Hire Me</Link>
        </div>

        {/* Right: Mobile Menu */}
        <div className="flex items-center gap-6 z-50 relative">
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden font-bold tracking-widest uppercase text-sm"
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu full screen */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center gap-8 text-4xl uppercase font-bold tracking-tighter">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/hire" onClick={() => setMobileOpen(false)}>Hire Me</Link>
        </div>
      )}
    </>
  );
}
