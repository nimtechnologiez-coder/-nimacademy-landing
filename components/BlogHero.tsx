"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp } from "lucide-react";

interface BlogHeroProps {
  onSearch: (query: string) => void;
}

const trendingTags = ["AI", "React", "Python", "Machine Learning", "Career Tips", "Projects"];

export default function BlogHero({ onSearch }: BlogHeroProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-black border-b border-white/5 overflow-hidden">
      {/* Background Decorative Elements - High Impact */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A7DF58]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0299B6]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Radial Grid Overlay for Architectural Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-[60px]">
        <div className="md:border-x border-white/10 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-[#A7DF58] text-[10px] uppercase tracking-[0.4em] font-bold rounded-[2px] shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#A7DF58] rounded-full animate-ping" />
              NIM INSIGHTS 2026
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] uppercase max-w-4xl">
              Engineering <br />
              <span className="text-[#A7DF58] italic">Knowledge Core.</span>
            </h1>

            <p className="text-white/40 text-lg md:text-2xl font-medium max-w-2xl leading-tight">
              Deep-dive tutorials, industry analysis, and technical career roadmaps curated by the NIM Academy lead engineers.
            </p>

            {/* Premium Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl pt-4 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A7DF58]/20 to-[#0299B6]/20 rounded-[2px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Query our technical archive..."
                  value={query}
                  onChange={(e) => {
                      setQuery(e.target.value);
                      onSearch(e.target.value);
                  }}
                  className="w-full bg-black/60 border border-white/10 px-6 md:px-8 py-4 md:py-6 pr-16 rounded-[2px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#A7DF58] transition-all backdrop-blur-xl text-sm md:text-base"
                />
                <button 
                  type="submit"
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#A7DF58] text-black rounded-[2px] flex items-center justify-center hover:bg-white transition-all transform active:scale-95"
                  aria-label="Search"
                >
                  <Search size={22} strokeWidth={2.5} />
                </button>
              </div>
            </form>

            {/* Trending Tags - Refined */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4">
              <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                <TrendingUp size={14} />
                Topics:
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#A7DF58] transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#A7DF58]" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
