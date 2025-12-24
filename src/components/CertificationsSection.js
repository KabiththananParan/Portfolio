"use client";

import React, { useState, useRef, useEffect } from "react";

export default function CertificationsSection() {
  const certs = [
    {
      id: "EMC-certificate",
      title: "Full Stack Developer",
      issuer: "Error Makes Clever",
      year: "2024",
      image: "EMC-certificate.png",
      desc: "Completed 3-months Full Stack MERN Development Bootcamp.",
    },
    {
      id: "Programming",
      title: "Introduction to Programming",
      issuer: "Kaggle",
      year: "2024",
      image: "Kabiththanan - Intro to Programming.png",
      desc: "Succesfully completed Introduction to Programming",
    },
    {
      id: "Python",
      title: "Python",
      issuer: "Kaggle",
      year: "2024",
      image: "Kabiththanan - Python.png",
      desc: "Succesfully completed Python",
    },
    {
      id: "Web-Dev",
      title: "Complete Intro to Web Development",
      issuer: "FrontendMasters",
      year: "2025",
      image: "Complete Intro to Web Development.png",
      desc: "Succesfully complete Intro to Web Development V3",
    },
  ];

  // When there is only one cert, avoid duplicating it for the marquee — duplication is only
  // needed when there are multiple items to create a seamless loop.
  const displayCerts = certs.length > 1 ? certs.concat(certs) : certs;

  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const lastActiveRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (selected) {
      // store last focused element to restore focus on close
      lastActiveRef.current = document.activeElement;
      // small delay to trigger CSS transition
      setTimeout(() => setShowModal(true), 10);
      // trap Escape to close
      const onKey = (e) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [selected]);

  function handleOpen(cert) {
    setSelected(cert);
  }

  function handleClose() {
    setShowModal(false);
    // wait for animation then clear selected
    setTimeout(() => {
      setSelected(null);
      if (lastActiveRef.current && lastActiveRef.current.focus) lastActiveRef.current.focus();
    }, 180);
  }

  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Certifications & Achievements</h2>
          <p className="text-sm text-zinc-400 mt-2">Professional certifications and notable achievements that showcase my expertise and continuous learning.</p>
        </div>

        {/* Marquee / horizontal scroll */}
        <div className="mt-8">
          <div className="cert-marquee overflow-hidden">
            <div className={`cert-marquee-track flex items-start gap-6 ${certs.length <= 1 ? 'no-marquee' : ''}`}>
              {displayCerts.map((c, idx) => (
                <article
                  key={`${c.id}-${idx}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpen(c);
                    }
                  }}
                  className="cert-card group relative w-56 h-56 sm:w-64 sm:h-60 md:w-72 md:h-64 lg:w-80 lg:h-72 bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-sm shrink-0 flex flex-col overflow-hidden focus:outline-none"
                >
                  <div className="cert-img w-full h-36 sm:h-40 md:h-44 lg:h-48 rounded-md overflow-hidden bg-zinc-800 flex items-center justify-center">
                    <img
                      src={`/certs/${c.image}`}
                      alt={`${c.title} certificate`}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/Kabi.jpg';
                      }}
                    />
                  </div>

                  {/* overlay shown on hover */}
                  <div
                    className="cert-overlay absolute left-3 right-3 bottom-3 rounded-lg px-3 py-2 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 focus-within:translate-y-0 focus-within:opacity-100 transition-all duration-260"
                    aria-hidden={false}
                  >
                    <div className="w-full flex items-center justify-between gap-3">
                      <div className="flex-1 truncate">
                        <div className="text-sm text-white font-semibold leading-tight truncate">{c.title}</div>
                        <div className="text-xs text-zinc-300 truncate">{c.issuer} · {c.year}</div>
                      </div>
                      <button
                        onClick={() => handleOpen(c)}
                        aria-label={`View details for ${c.title}`}
                        className="cert-cta ml-3 shrink-0"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 flex-1">
                    <h3 className="font-semibold text-lg text-white leading-snug">{c.title}</h3>
                    <div className="text-sm text-zinc-400 mt-1">{c.issuer} · {c.year}</div>
                    <p className="text-sm text-zinc-300 mt-2 max-h-20 overflow-hidden">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* Modal: details popup */}
      {selected && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center`} aria-modal="true" role="dialog">
          {/* backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${showModal ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
          />

          <div className={`relative w-full max-w-2xl mx-4 transform transition-all duration-150 ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <div className="flex gap-4">
                <div className="w-36 h-24 rounded-md overflow-hidden bg-zinc-800 flex items-center justify-center">
                  <img src={`/certs/${selected.image}`} alt={`${selected.title} certificate`} className="object-cover w-full h-full" onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src='/Kabi.jpg'}} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <div className="text-sm text-zinc-400 mt-1">{selected.issuer} · {selected.year}</div>
                  <p className="text-sm text-zinc-300 mt-4">{selected.desc}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button ref={closeBtnRef} onClick={handleClose} className="px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
