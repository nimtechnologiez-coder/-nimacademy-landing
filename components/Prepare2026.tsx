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
    <section className="nim-advantage-section relative bg-black pt-8 pb-12 overflow-hidden border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-100 -mt-100" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -ml-100 -mb-100" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-3x">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm mb-8">
                <div className="w-2 h-2 bg-primary rounded-[1px] animate-pulse" />
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">The NIM Advantage</span>
              </div>
              <h2 className="text-6xl md:text-[100px] font-display font-black text-white leading-[0.85] tracking-tighter uppercase mb-6">
                Prepare<br />
                <span className="text-primary italic">For</span> <span className="text-secondary italic">2026</span>
              </h2>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md pb-4"
          >
            <p className="text-white/50 text-xl leading-relaxed border-l-2 border-primary/40 pl-8">
              The tech industry is evolving faster than ever. We bridge the gap between where you are and where the world is headed.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-white/[0.03] border border-white/10 p-12 rounded-sm"
          >
            <div className="absolute top-0 right-0 p-12 text-[15rem] font-black text-white/[0.02] leading-none select-none">
              NIM
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Zap className="text-primary w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
                  Industry-First <br /><span className="text-primary italic">Pedagogy</span>
                </h3>
                <p className="text-white/60 text-xl max-w-xl leading-relaxed">
                  Our curriculum isn&apos;t just updated; it&apos;s architected for 2026. Every module is built around live industry requirements and emerging AI workflows.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="md:col-span-4 group relative overflow-hidden bg-white/[0.03] border border-white/10 p-8 rounded-sm hover:border-primary/40 transition-colors"
            >
              <div className="absolute top-4 right-4 text-4xl font-black text-white/[0.05] group-hover:text-primary transition-colors">
                {pillar.number}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                {pillar.title}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-widest">Mastery</span>
                <div className="h-[1px] w-8 bg-primary" />
              </div>
            </motion.div>
          ))}

          {/* Newsletter/Action Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 mt-12 bg-primary p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter mb-2">
                Your 2026 Career Starts <span className="italic">Now.</span>
              </h3>
              <p className="text-black/60 font-medium">Join 500+ professionals who have already secured their future.</p>
            </div>
            <button className="bg-black text-primary font-bold px-12 py-5 rounded-sm uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-3">
              Begin Journey
              <Target size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
