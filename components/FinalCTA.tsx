"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Flame } from "lucide-react";

const badges = [
  { icon: <Clock size={14} />, text: "July 2026 Cohort" },
  { icon: <Flame size={14} />, text: "Limited Seats" },
  { icon: <CheckCircle size={14} />, text: "100% Placement Support" },
];

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#08090A] border-t border-white/5 relative overflow-hidden">
      {/* Glow strips */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-1/2 bg-primary/[0.02]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">

          {/* Left – Headline side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-8 md:px-[60px] py-24 border-b lg:border-b-0 lg:border-r border-white/10"
          >
            <div className="flex flex-wrap gap-3 mb-12">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-white/60 text-xs font-medium"
                >
                  <span className="text-primary">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Ready to<br />
              Secure Your<br />
              <span className="text-primary italic">Future</span><br />
              in Tech?
            </h2>

            <p className="text-white/40 text-base leading-relaxed max-w-md">
              Admissions are open and filling fast. Join hundreds who have already transformed their careers through NIM Academy.
            </p>
          </motion.div>

          {/* Right – Action side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center px-8 md:px-[60px] py-24 gap-10"
          >
            {/* Urgency indicator */}
            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse shrink-0" />
              <p className="text-white/60 text-sm tracking-wide uppercase font-medium">
                Admissions Open — July 2026 Cohort
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4">
              <button className="group w-full py-6 bg-primary hover:bg-[#A7DF58] text-black font-bold text-base tracking-[0.1em] uppercase transition-all active:scale-[0.98] flex items-center justify-between px-8 shadow-[0_0_60px_rgba(184,239,67,0.2)]">
                Apply Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full py-6 border border-white/15 hover:border-white/30 text-white font-bold text-base tracking-[0.1em] uppercase transition-all bg-transparent flex items-center justify-between px-8 hover:bg-white/5">
                Book a Career Call
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex -space-x-2">
                {["#B8EF43", "#0299B6", "#FFFFFF", "#B8EF43"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2" style={{ backgroundColor: c + "30", borderColor: c + "60" }} />
                ))}
              </div>
              <p className="text-white/40 text-xs">
                <span className="text-white font-semibold">500+</span> students already enrolled this year
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
