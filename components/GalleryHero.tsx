"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-[#08090A] font-sans">
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#A7DF58]/20 blur-[100px] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -60, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0299B6]/10 blur-[120px] rounded-full"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 w-[90%] max-w-5xl mx-auto text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-[#A7DF58] text-[10px] uppercase tracking-[0.3em] font-bold rounded-[2px]">
            Visual Narrative
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
            Inside <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7DF58] to-[#0299B6] italic">NIM Academy</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/50 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight"
        >
          Real moments. Real learning. Real transformations. <br className="hidden md:block" />
          A journey through the lens of NIM engineers.
        </motion.p>
      </div>

      {/* Decorative Slide Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white text-[8px] uppercase tracking-[0.5em] font-bold">Explore Gallery</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
           <motion.div 
             animate={{ y: [0, 48] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 left-0 w-full h-1/2 bg-[#A7DF58]"
           />
        </div>
      </motion.div>
    </section>
  );
}
