"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, Zap } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A7DF58]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0299B6]/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Radial Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/10 relative z-10">
        <div className="px-6 md:px-[100px] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-[#A7DF58] text-[10px] uppercase tracking-[0.3em] font-bold rounded-[2px]">
              <Zap size={14} className="animate-pulse" />
              Scale Your Career
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
              Ready to <br />
              <span className="text-[#A7DF58] italic">Start Building?</span>
            </h2>

            <p className="text-white/40 text-lg md:text-xl font-medium max-w-xl leading-tight">
              Don't just read about the future—build it. Join our elite program and master AI & Full Stack development with hands-on technical training.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="bg-[#A7DF58] hover:bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-[2px] transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(167,223,88,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Explore Programs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border border-white/10 hover:bg-white/5 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-[2px] transition-all flex items-center justify-center gap-2">
                Join Internship
              </button>
            </div>
          </div>

          <div className="md:w-2/5 relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A7DF58]/10 to-[#0299B6]/10 blur-[80px] rounded-full" />
            <div className="relative aspect-square border-2 border-white/10 rounded-[20px] p-8 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl">
                 <Terminal className="text-[#A7DF58] w-24 h-24 mb-6 stroke-[1.5px]" />
                 <div className="text-center">
                    <div className="text-white text-2xl font-bold uppercase tracking-widest mb-2">Build. Scale. Repeat.</div>
                    <div className="text-white/30 text-xs font-medium uppercase tracking-[0.3em]">Industrial Grade Training</div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
