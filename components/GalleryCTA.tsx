"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="w-full bg-[#08090A] py-32 px-4 relative overflow-hidden border-t border-white/5">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="relative overflow-hidden py-24 md:px-[60px] px-6 text-center">
          {/* Background Decorative Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A7DF58]/5 blur-[120px] pointer-events-none rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-[2px] text-[#A7DF58]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Become a builder</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
              BE PART OF THE <br />
              <span className="text-[#A7DF58] italic">EXPERIENCE.</span>
            </h2>

            <p className="text-white/40 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight">
              Join the elite builders at NIM Academy. <br className="hidden md:block" /> 
              Your seat in the next masterclass is waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-[#B8EF43] flex items-center justify-center hover:bg-lime-300 text-[#080910] font-bold px-12 py-6 w-full md:w-auto min-w-[280px] rounded-[2px] transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_8px_24px_rgba(184,239,67,0.5)] text-sm uppercase tracking-wider group">
                Apply for Internship 
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-12 py-6 bg-white/5 text-white border border-white/10 font-bold uppercase tracking-widest text-sm rounded-[2px] hover:bg-white hover:text-[#080910] transition-all flex items-center justify-center gap-3">
                Explore Courses
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
