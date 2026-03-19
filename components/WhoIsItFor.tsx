"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoIsItFor() {
  return (
    <section className="w-full bg-[#08090A] text-white font-sans border-b border-white/10 md:border-white/20">
      <div 
        className="w-full md:w-auto mx-auto md:mx-[153px] relative overflow-hidden transition-all duration-700 hover:bg-white/[0.02] md:border-x border-white/10" 
        style={{ 
          backgroundImage: "url('/images/hero3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for content readability */}
        <div className="absolute inset-0 bg-black/85 md:bg-black/70 backdrop-blur-[2px] md:backdrop-blur-none" />

        <div className="relative py-20 md:py-32 min-h-[400px] md:h-[610px] flex flex-col justify-center">
          <div className="relative md:pl-[60px] md:pr-[60px] px-6 sm:px-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] md:text-[16px] tracking-[4px] leading-none font-black uppercase text-primary mb-4"
            >
              AI FOR ALL STAGES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[56px] leading-[1.1] font-bold text-white mb-8 max-w-2xl tracking-tight"
            >
              Who is <span className="text-primary italic">NIM Academy</span> for?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-base sm:text-lg md:text-2xl max-w-3xl leading-relaxed font-medium"
            >
              Whether you're a student starting your tech journey, a professional looking to upskill, 
              or a business leader aiming to leverage AI, our curriculum is designed to meet your 
              ambitions at every level.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-3 sm:gap-4"
            >
              {['Students', 'Career Switchers', 'Tech Professionals', 'Business Leaders'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-[2px] border border-white/10 bg-white/5 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Architectural Line */}
        <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-primary/50 to-transparent hidden md:block" />
      </div>
    </section>
  );
}
