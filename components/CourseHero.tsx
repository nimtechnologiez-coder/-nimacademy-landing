"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="nim-course-hero relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#08090A]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image - Brain Visual */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[60%] h-full opacity-60 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/prog_ai_ml.png')] bg-contain bg-right bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000" />
          {/* Overlay to fade left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090A] via-[#08090A]/40 to-transparent" />
        </div>

        {/* Glow effects */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm mb-12">
              <div className="w-2 h-2 bg-primary rounded-[1px]" />
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Next-Gen Education Platform</span>
            </div>

            <h1 className="text-6xl md:text-[110px] font-display font-bold text-white leading-[0.85] tracking-tighter mb-12 uppercase drop-shadow-2xl">
              Learn modern <br />
              <span className="text-primary italic">tech</span> with<br />
              <span className="text-secondary italic">real projects</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-16 font-light">
              Expert guidance designed for the 2026 industry landscape.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <button
                onClick={() => document.getElementById("courses-list")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white hover:bg-primary text-black font-bold px-12 py-5 text-sm tracking-[0.1em] uppercase transition-all active:scale-[0.98]"
              >
                Explore Programs
              </button>
              <button className="group border border-white/20 hover:border-white/40 text-white font-bold px-12 py-5 text-sm tracking-[0.1em] uppercase transition-all bg-transparent flex items-center gap-2 active:scale-[0.98]">
                Contact Us
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom N Logo */}
      {/* <div className="absolute bottom-10 left-10 opacity-40">
        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold font-display">N</span>
        </div>
      </div> */}

      {/* Small blue accent square */}
      <div className="absolute bottom-10 right-[15%] w-2 h-2 bg-secondary" />
    </section>
  );
}
