"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] md:min-h-[80vh] flex items-center overflow-hidden bg-black font-sans py-12">
      {/* Background Grid/Image */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[url('/images/modern_hero_bg.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#08090A]" />
        {/* Decorative background visual - simulating Outskill's background */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] md:min-h-[80vh]">
          {/* Left Side Content */}
          <div className="md:pl-12 px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-medium text-white leading-[1.1] max-w-xl">
                Learn modern technologies through <span className="text-primary">practical training, real-world projects,</span> and expert mentorship.
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
                Master AI in one weekend and become the go-to expert for AI solutions in your field.
              </p>

              <div className="flex flex-col md:flex-row gap-6 pt-4">
                <button className="bg-primary hover:bg-[#A7DF58] text-black font-medium px-8 py-4 rounded-[4px] transition-all shadow-[0_8px_16px_-4px_rgba(184,239,67,0.4)] text-base">
                  Begin with Free Mastermind
                </button>
                
                <div className="hidden md:flex gap-8 items-center border-l border-white/20 pl-6">
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">Start Date</div>
                    <div className="text-white text-base font-medium">14 Mar 2026</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">Start Time</div>
                    <div className="text-white text-base font-medium">10 AM IST</div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center gap-8 md:gap-12 mt-12 pt-12 border-t border-white/10">
                <div>
                  <div className="text-2xl md:text-3xl font-medium text-white">10M+</div>
                  <div className="text-sm text-white/40 mt-1">Active Learners</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div className="text-2xl md:text-3xl font-medium text-white">160+</div>
                  <div className="text-sm text-white/40 mt-1">Countries</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div className="text-2xl md:text-3xl font-medium text-white">4.9/5</div>
                  <div className="text-sm text-white/40 mt-1">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Visual */}
          <div className="relative h-full hidden lg:block overflow-hidden">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative h-full w-full"
             >
                <Image
                  src="/images/modern_hero_visual.png"
                  alt="NIM Academy AI Mastery"
                  fill
                  className="object-cover object-center transition-all duration-700 hover:scale-105"
                />
                {/* Floating UI cards */}
                <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-primary rounded-full animate-pulse" />
                        </div>
                        <div>
                            <div className="text-white font-bold">95%</div>
                            <div className="text-white/60 text-xs">Placement Rate</div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                             <div className="w-5 h-5 bg-primary rounded-full" />
                        </div>
                        <div>
                            <div className="text-white font-bold">120%</div>
                            <div className="text-white/60 text-xs">Avg Salary Hike</div>
                        </div>
                    </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
