"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function InternshipCTA() {
  return (
    <section className="w-full bg-[#08090A] py-24 md:py-48 px-4 relative overflow-hidden border-t border-white/5">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="md:px-[60px] px-6 py-20 relative overflow-hidden">
          {/* Background Decorative Glow */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#B8EF43]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-white/5 blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-[2px] text-[#B8EF43]"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Batch 2026 Now Open</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] uppercase"
            >
              STOP WATCHING. <br />
              <span className="text-[#B8EF43] italic">START BUILDING.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/40 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight"
            >
              Join the elite cohort of builders creating production-scale SaaS and AI solutions at NIM Academy.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <button 
                className="bg-[#B8EF43] flex items-center justify-center hover:bg-lime-300 text-[#080910] font-bold px-12 py-6 w-full md:w-auto min-w-[280px] rounded-[2px] transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_8px_24px_rgba(184,239,67,0.5)] text-sm uppercase tracking-wider group"
              >
                Apply for Internship 
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-12 py-6 bg-white/5 text-white border border-white/10 font-bold uppercase tracking-widest text-sm rounded-[2px] hover:bg-white hover:text-[#080910] transition-all flex items-center justify-center gap-3">
                <MessageSquare className="w-5 h-5" />
                Talk to Mentor
              </button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 flex flex-wrap items-center justify-center gap-12 opacity-30">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8EF43]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Industry Certifications</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8EF43]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Placement Support</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8EF43]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Lifetime Community Access</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
