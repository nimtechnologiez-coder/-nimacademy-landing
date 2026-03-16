"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-white font-sans relative overflow-hidden" style={{ borderTop: "1px solid rgba(8, 9, 10, 0.15)" }}>
      {/* Visual Alignment Lines */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[153px] w-px bg-black/5 z-0 pointer-events-none"></div>
      <div className="hidden md:block absolute top-0 bottom-0 right-[153px] w-px bg-black/5 z-0 pointer-events-none"></div>

      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] relative z-10" style={{ borderLeft: "1px solid rgba(8, 9, 10, 0.15)", borderRight: "1px solid rgba(8, 9, 10, 0.15)" }}>
        <div className="px-4 md:px-[60px] py-20 md:py-32">
          
          <div className="relative rounded-[4px] overflow-hidden bg-black p-12 md:p-24 text-center text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 text-primary font-bold tracking-[3px] uppercase text-sm mb-6"
              >
                <Sparkles size={18} /> PREPARE FOR 2026
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                Ready to Secure Your <br /> 
                <span className="text-primary italic">Future</span> in Tech?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
              >
                Join hundreds of students who have already transformed their careers through our industry-immersion programs. Don't let the 2026 shift leave you behind.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row justify-center items-center gap-6 pt-6"
              >
                <button className="w-full md:w-auto px-10 py-5 bg-primary text-black font-bold text-lg rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3">
                  Apply Now <ArrowRight size={20} />
                </button>
                <button className="w-full md:w-auto px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 transition-all">
                  Book a Career Call
                </button>
              </motion.div>

              <div className="pt-12 text-white/30 text-[12px] font-bold tracking-[2px] uppercase">
                ADMISSIONS OPEN FOR JULY 2026 COHORT • LIMITED SEATS
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
