"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastY, setLastY] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < lastY || y < 10) setIsVisible(true);
      else if (y > lastY && y > 100) setIsVisible(false);
      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const pathname = usePathname();

  return (
    <>
      {/* Desktop / tablet nav (hidden on small screens) */}
      <nav className={`site-nav ${isVisible ? "nav-visible" : "nav-hidden"} hidden sm:block`}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6">
          {/* Left: avatar + name */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <div className="avatar-small">
                <Image src="/Kabi.jpg" alt="Kabi" width={40} height={40} className="object-cover" />
              </div>
              <span className="font-semibold text-sm">Paran Kabiththanan</span>
            </a>
          </div>

          {/* Center: links (with small related icon) */}
          <div className="flex gap-6 items-center">
            <a href="/about" className="nav-link text-sm text-zinc-200 hover:text-zinc-100">About</a>
            <a href="/blog" className="nav-link text-sm text-zinc-200 hover:text-zinc-100">Blog</a>
            <a href="/projects" className="nav-link text-sm text-zinc-200 hover:text-zinc-100">Projects</a>
            <a href="/hire" className="nav-link text-sm text-zinc-200 hover:text-zinc-100">Hire</a>
            <a href="/uses" className="nav-link text-sm text-zinc-200 hover:text-zinc-100">Uses</a>
          </div>

          {/* Right: theme toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile header: centered Menu pill (visible on small screens) */}
      <div className="mobile-header sm:hidden fixed top-4 left-0 right-0 z-50 flex items-center justify-center">
        {/* Avatar on the left (only show on non-root pages) */}
        {/* {pathname && pathname !== '/' && (
          <a href="/" className="mobile-avatar absolute left-4">
            <div className="avatar-small">
              <Image src="/Kabi.jpg" alt="Kabi" width={40} height={40} className="object-cover" />
            </div>
          </a>
        )} */}
        {/* Centered Menu pill */}
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="mobile-menu-btn nav-toggle"
        >
          <span className="menu-label">Menu</span>
          <svg className="menu-arrow w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d={mobileOpen ? "M6 12l4-4 4 4" : "M6 8l4 4 4-4"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="mobile-menu sm:hidden fixed top-16 z-40 rounded-lg p-3 bg-zinc-900/90 backdrop-blur border border-zinc-700 flex flex-col gap-2">
          <a href="/" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="/about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="/blog" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href="/hire" onClick={() => setMobileOpen(false)}>Hire</a>
          <a href="/projects" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="/uses" onClick={() => setMobileOpen(false)}>Uses</a>
        </div>
      )}
    </>
  );
}
