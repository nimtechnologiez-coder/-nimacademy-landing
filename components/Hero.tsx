"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative w-full h-[720px] md:h-screen overflow-hidden font-sans">
      {/* Background with isometric AI Illustration */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet="/images/hero1.png" />
        <img
          src="/images/hero1.png"
          alt="NIM Academy AI Masterclass"
          aria-hidden="true"
          loading="eager"
          className="h-full w-full object-cover object-center opacity-40 brightness-[0.3]"
        />
      </picture>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-0" />

      {/* Main Content Container with Thin Side Borders */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full md:w-auto mx-auto md:mx-[153px] md:border-x border-white/10">
        <div className="max-w-3xl md:pl-[60px] px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-6"
          >
            India's #1 AI & Tech Academy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[72px] font-bold text-white mb-6 leading-[1.1] w-full tracking-tight"
          >
            Build Your Career in <br />
            <span className="gradient-text">AI & Full Stack Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-[22px] text-white/60 mb-10 max-w-[600px] leading-relaxed font-medium"
          >
            Join NIM Academy and master modern technologies through hands-on training, real-world projects, and expert mentorship designed to prepare you for the tech industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-stretch md:items-center flex-col md:flex-row gap-4 md:gap-8"
          >
            <button className="bg-primary hover:bg-[#96c94f] text-black font-bold px-10 py-4 rounded-[2px] transition-all duration-300 shadow-[0_0_20px_rgba(167,223,88,0.3)] hover:shadow-[0_0_30px_rgba(167,223,88,0.5)] active:scale-95 text-sm uppercase tracking-widest">
              Apply Now
            </button>
            <button className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-[2px] transition-all duration-300 text-sm uppercase tracking-widest backdrop-blur-sm">
              Explore Programs
            </button>
            <div className="h-10 w-[1px] bg-white/10 hidden lg:block mx-4"></div>

            {/* Desktop Stats */}
            <div className="hidden lg:flex flex-row gap-10">
              <div className="border-l border-white/10 pl-6">
                <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Flexible Learning</div>
                <div className="text-white text-sm font-bold uppercase tracking-wider">Online & Offline</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-between md:justify-start gap-4 sm:gap-8 md:gap-16 mt-16 text-white border-t border-white/10 pt-10"
          >
            <div className="flex-1 md:flex-none">
              <div className="text-2xl md:text-4xl font-bold tracking-tighter">1000+</div>
              <div className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-[0.2em] font-bold">Students</div>
            </div>
            <div className="h-10 w-[1px] bg-white/10"></div>
            <div className="flex-1 md:flex-none">
              <div className="text-2xl md:text-4xl font-bold tracking-tighter">50+</div>
              <div className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-[0.2em] font-bold">Partners</div>
            </div>
            <div className="h-10 w-[1px] bg-white/10"></div>
            <div className="flex-1 md:flex-none">
              <div className="text-2xl md:text-4xl font-bold tracking-tighter">4.8/5</div>
              <div className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-[0.2em] font-bold">Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
