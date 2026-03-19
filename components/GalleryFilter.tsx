"use client";

import React from "react";
import { motion } from "framer-motion";

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function GalleryFilter({ categories, activeCategory, setActiveCategory }: GalleryFilterProps) {
  return (
    <div className="w-full bg-white border-y border-black/10 sticky top-16 md:top-20 z-50 overflow-hidden">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/10">
        <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center md:justify-start">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                relative px-6 md:px-10 py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300
                border-b md:border-b-0 md:border-r border-black/10 last:border-r-0
                hover:bg-black/[0.02] flex-1 md:flex-none text-center
                ${activeCategory === category ? 'text-black' : 'text-black/40'}
              `}
            >
              <span className="relative z-10">{category}</span>
              
              {activeCategory === category && (
                <>
                  {/* Bottom Active Indicator */}
                  <motion.div
                    layoutId="activeFilterBar"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A7DF58] shadow-[0_-4px_12px_rgba(167,223,88,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  {/* Subtle Top Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#A7DF58]/30 blur-[2px]" />
                </>
              )}
            </button>
          ))}
          
          {/* Decorative Spacer for Desktop */}
          <div className="hidden md:block flex-1 border-l border-black/10 bg-black/[0.01]" />
        </div>
      </div>
    </div>
  );
}
