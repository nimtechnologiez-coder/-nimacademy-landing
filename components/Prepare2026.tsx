"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: <Zap className="w-5 h-5" />, value: "2026", label: "Industry Ready" },
  { icon: <Target className="w-5 h-5" />, value: "12+", label: "Specializations" },
  { icon: <TrendingUp className="w-5 h-5" />, value: "95%", label: "Placement Rate" },
  { icon: <Award className="w-5 h-5" />, value: "500+", label: "Alumni Placed" },
];

const pillars = [
  {
    number: "01",
    title: "AI-Augmented Curriculum",
    description: "Every module is built around real AI tools used in 2026's job market. No theory-only zones.",
  },
  {
    number: "02",
    title: "Compressed Learning Timeline",
    description: "Achieve mastery in weeks, not months. Our pedagogy is engineered for speed without compromise.",
  },
  {
    number: "03",
    title: "Live Industry Integration",
    description: "Work directly with industry partners on real client briefs during your training period.",
  },
  {
    number: "04",
    title: "Placement-First Structure",
    description: "Career coaching, résumé optimization, and interview prep are baked into every program.",
  },
];

export default function Prepare2026() {
  return (
    <section className="relative bg-[#08090A] py-32 overflow-hidden">
      {/* Huge BG text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-display font-black text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">
          2026
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-8">
              <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-[1px]" />
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">The NIM Advantage</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.9]">
              Prepare<br />
              <span className="text-primary">For</span>{" "}
              <span className="text-secondary">2026</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-white/50 text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
              The tech industry is evolving faster than ever. NIM Academy exists to bridge the gap between where you are and where the industry needs you to be.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between p-8 bg-[#08090A] hover:bg-white/5 transition-colors group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform w-fit">
                {stat.icon}
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars - Alternating layout */}
        <div className="space-y-0">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`flex flex-col md:flex-row items-stretch border-b border-white/10 group ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Number */}
              <div className="md:w-1/4 flex items-center justify-center p-10 border-r border-white/10 group-hover:bg-primary/5 transition-colors">
                <span className="text-7xl md:text-9xl font-display font-black text-white/5 group-hover:text-primary/20 transition-colors">
                  {pillar.number}
                </span>
              </div>
              {/* Content */}
              <div className="md:w-3/4 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-base leading-relaxed max-w-xl">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 p-10">
          <p className="text-2xl md:text-3xl font-display font-bold text-white">
            Your 2026 Career Starts<br />
            <span className="text-primary">Here. Now.</span>
          </p>
          <button className="shrink-0 bg-primary hover:bg-[#A7DF58] text-black font-bold px-14 py-5 text-sm tracking-[0.1em] uppercase transition-all active:scale-[0.98] shadow-[0_0_40px_rgba(184,239,67,0.3)]">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
