"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Customized Training Programs (Online & Offline)",
  "Industry-Recognized Certifications",
  "Dedicated Internship & Placement Access",
  "Faculty Development & Research Collaboration",
  "Student Projects & Hackathons",
  "Annual Career Development Workshop"
];

export default function PartnerBenefits() {
  return (
    <section className="bg-[#08090A] py-24 border-b border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        {/* Header */}
        <div className="mb-20">
          <p className="text-primary text-[14px] tracking-[2px] font-bold uppercase mb-4">
            Value Addition
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Partner Benefits <span className="text-primary italic">At a Glance</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all rounded-sm min-h-[220px] flex flex-col justify-between"
            >
              {/* Decorative Number Background */}
              <div className="absolute top-0 right-0 p-8 text-8xl font-display font-bold text-white/[0.02] group-hover:text-primary/[0.05] transition-colors leading-none select-none">
                {idx + 1}
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 mb-8 border border-primary/30 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-black transition-all">
                  0{idx + 1}
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300">
                  {benefit}
                </h3>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold tracking-widest uppercase">Strategic Advantage</span>
                <div className="h-[1px] w-8 bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
