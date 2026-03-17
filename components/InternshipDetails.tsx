"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Globe2, GraduationCap, Coins, Sparkles } from "lucide-react";

const details = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Duration",
    value: "1–3 Months",
    description: "Flexible tracks tailored to project complexity and learning speed.",
    color: "#B8EF43"
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Program Mode",
    value: "Hybrid Focus",
    description: "Collaborative remote flexibility with optional on-campus immersion.",
    color: "#B8EF43"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Eligibility",
    value: "Pre-Final/Final",
    description: "Open to passionate students and recent graduates looking for scale.",
    color: "#B8EF43"
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Incentives",
    value: "Performance",
    description: "Stipend and rewards based on technical milestones and impact.",
    color: "#B8EF43"
  }
];

export default function InternshipDetails() {
  return (
    <section className="w-full bg-[#08090A] py-24 md:py-32 px-4 relative overflow-hidden border-y border-white/5">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="md:px-[60px] px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white/5 backdrop-blur-md rounded-[2px] p-10 border border-white/10 hover:border-[#B8EF43] transition-all duration-700 relative overflow-hidden text-center"
              >
                {/* Decorative Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${detail.color}, transparent 70%)` }}
                />

                <div className="relative z-10">
                  <div className="mb-8 p-4 bg-white/10 rounded-full w-fit mx-auto group-hover:bg-[#B8EF43] group-hover:text-[#080910] transition-all duration-500">
                    <div style={{ color: detail.color }} className="group-hover:text-[#080910] transition-colors">
                      {detail.icon}
                    </div>
                  </div>
                  
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    {detail.title}
                  </p>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight uppercase">
                    {detail.value}
                  </h3>
                  
                  <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
          >
            <Sparkles className="w-5 h-5 text-[#B8EF43]" />
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em]">
              CERTIFIED EXPERIENCE ◆ ELITE MENTORSHIP ◆ PRODUCTION-READY CODE
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
