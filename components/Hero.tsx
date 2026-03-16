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
      <div className="relative z-10 flex flex-col justify-center h-full w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="max-w-2xl md:pl-[60px] px-4 md:px-0">
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
            className="text-[40px] md:text-[60px] font-bold text-white mb-6 leading-[1.1] w-full"
          >
            Build Your Career in <br />
            <span className="gradient-text">AI & Full Stack Development</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base font-[400] md:text-[20px] text-white/60 mb-10 w-[90%] md:max-w-[600px] leading-relaxed"
          >
            Join NIM Academy and master modern technologies through hands-on training, real-world projects, and expert mentorship designed to prepare you for the tech industry.
          </motion.p>

          {/* mobile stats */}
          <div className="flex flex-row gap-8 mb-8 md:mb-0 md:hidden">
            <div>
              <div className="text-gray-400 text-xs">Flexible Learning</div>
              <div className="text-white text-sm font-medium">Online & Offline</div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-6"
          >
            <button className="border border-white/10 bg-primary hover:bg-lime-300 text-black font-bold px-8 py-4 w-full md:w-auto rounded-[4px] transition-all duration-300 ease-in-out shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 text-base uppercase tracking-wider">
              Apply Now
            </button>
            <button className="border border-white/20 bg-transparent hover:bg-white/5 text-white font-bold px-8 py-4 w-full md:w-auto rounded-[4px] transition-all duration-300 ease-in-out text-base uppercase tracking-wider">
              Explore Programs
            </button>
            <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
            
            {/* Desktop Stats */}
            <div className="hidden md:flex flex-row gap-10">
              <div>
                <div className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Flexible Learning</div>
                <div className="text-white text-sm md:text-base font-bold">Online & Offline</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-6 md:gap-12 mt-16 text-white border-t border-white/10 pt-10"
          >
            <div>
              <div className="text-xl md:text-3xl font-bold">1000+</div>
              <div className="text-[12px] md:text-sm text-gray-400 mt-1 uppercase tracking-widest">Students Trained</div>
            </div>
            <div className="h-12 w-[1px] bg-white/10"></div>
            <div>
              <div className="text-xl md:text-3xl font-bold">50+</div>
              <div className="text-[12px] md:text-sm text-gray-400 mt-1 uppercase tracking-widest">Hiring Partners</div>
            </div>
            <div className="h-12 w-[1px] bg-white/10"></div>
            <div>
              <div className="text-xl md:text-3xl font-bold">4.8/5</div>
              <div className="text-[12px] md:text-sm text-gray-400 mt-1 uppercase tracking-widest">Student Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
