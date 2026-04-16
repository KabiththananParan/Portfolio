"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for a short duration to show the preloader, then hide it
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]"
        >
          <div className="flex items-center gap-12 sm:gap-24 text-[15vw] font-black uppercase tracking-tighter">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              P
            </motion.span>
            
            {/* Optional center element similar to the reference, could be an icon or just empty space */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[var(--accent)]"
            />

            <motion.span
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              K
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
