"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden font-sans border-b border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A7DF58]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0299B6]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Radial Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-[60px]">
        <div className="md:border-x border-white/10 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-[#A7DF58] text-[10px] uppercase tracking-[0.4em] font-bold rounded-[2px] shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#A7DF58] rounded-full animate-ping" />
              Direct Support 2026
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] uppercase max-w-4xl">
              Let’s Connect & <br />
              <span className="text-primary italic">Build Your Tech Career.</span>
            </h1>

            <p className="text-white/40 text-lg md:text-2xl font-medium max-w-2xl leading-tight">
              Have questions about courses, internships, or career paths? Our lead engineers and advisors are ready to architect your future.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                Available: 10AM - 7PM (Mon-Sat)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
