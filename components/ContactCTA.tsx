"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-black py-20 md:py-32 px-6 md:px-[60px] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/[0.02] border border-white/10 p-12 md:p-24 rounded-[2px] text-center space-y-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full"
          >
            <Sparkles size={14} className="animate-spin" />
            NEXT STEPS
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter max-w-4xl mx-auto leading-none"
          >
            Start Your Journey with <br /><span className="text-secondary italic">NIM Academy.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
          >
            <Link 
              href="/apply" 
              className="group relative w-full sm:w-auto px-12 py-5 bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all overflow-hidden"
            >
              <span className="relative z-10">Apply For Admission</span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
            
            <Link 
              href="https://wa.me/919778250570" 
              className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 transition-all flex items-center justify-center gap-3 group"
            >
              Talk to Advisor <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
