"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConnectHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#08090A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[60%] h-full opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/hero3.png')] bg-cover bg-center grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090A] via-[#08090A]/60 to-transparent" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm mb-8">
              <div className="w-2 h-2 bg-primary rounded-[1px]" />
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Industry-Academia Partnership</span>
            </div>

            <h1 className="text-5xl md:text-[90px] font-display font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase">
              Empowering <br />
              <span className="text-primary italic">Campuses</span>, <br />
              Transforming <span className="text-secondary italic">Futures</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12 font-light">
              At NIM Academy, we believe true education happens when academia meets industry. 
              We&apos;ve partnered with leading colleges and universities across South India to bridge the gap 
              between classroom learning and real-world skills.
            </p>

            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById("partnership-details")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-black font-bold px-10 py-5 text-sm tracking-[0.1em] uppercase transition-all hover:bg-white active:scale-95"
              >
                Why Partner With Us?
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
