"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InternshipHero() {
  return (
    <section className="w-full bg-[#08090A] font-sans">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] pt-20 pb-10 md:py-24 md:pt-36 border-x border-white/20">
        <div className="md:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto min-h-[770px] md:min-h-0 rounded-[2px] md:border md:border-white/20 p-6 md:p-12 relative overflow-hidden"
          >
            {/* Blurred Background Layer */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: "url('/images/hero3.png')",
                filter: "blur(8px)",
                transform: "scale(1.1)" // Scale up slightly to hide blurred edges
              }}
            />

            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="flex flex-col md:flex-row items-center justify-between md:h-[450px] relative z-20">
              <div className="md:w-3/5 text-left flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-black bg-[#FFFFFF]/90 text-xs md:text-sm font-bold mb-6 p-3 rounded-[2px] tracking-wider"
                >
                  Launch Your Career ◆ REAL-WORLD TECH EXPERIENCE
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-bold mb-6 text-white text-4xl md:text-6xl leading-tight tracking-tight"
                >
                  NIM Academy <br />
                  <span className="text-[#B8EF43]">Internship Program</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white text-base md:text-xl mb-8 font-medium max-w-xl leading-relaxed opacity-90"
                >
                  Work on real projects, gain hands-on experience, and build a portfolio that gets you hired.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap md:flex-row gap-8 text-sm mb-10 w-full md:w-auto"
                >
                  <div className="flex-1 min-w-[120px]">
                    <span className="font-normal block text-white/60 mb-1 uppercase tracking-tighter text-[10px]">Interns Trained</span>
                    <span className="text-white font-bold text-lg">100+ Interns Trained</span>
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <span className="font-normal block text-white/60 mb-1 uppercase tracking-tighter text-[10px]">Projects Completed</span>
                    <span className="text-white font-bold text-lg">50+ Projects Completed</span>
                  </div>
                  <div className="w-full md:flex-1 min-w-[200px]">
                    <span className="font-normal block text-white/60 mb-1 uppercase tracking-tighter text-[10px]">Hiring Partners</span>
                    <span className="text-white font-bold text-lg">20+ Hiring Partners</span>
                  </div>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="bg-[#B8EF43] flex items-center justify-center hover:bg-lime-300 text-black font-bold px-8 py-4 w-full md:w-auto min-w-[240px] rounded-[2px] transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_8px_24px_rgba(184,239,67,0.5)] text-lg uppercase tracking-wider"
                >
                  Apply Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
