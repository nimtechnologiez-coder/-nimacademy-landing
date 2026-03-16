"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, BarChart, Globe, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Full Stack Development",
    description: "Master modern web architectures with React, Node.js, and cloud deployments.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Artificial Intelligence",
    description: "Build autonomous agents and production-ready machine learning systems.",
    icon: Cpu,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Data Analytics",
    description: "Transform complex data into actionable business insights with AI-driven tools.",
    icon: BarChart,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Digital Marketing",
    description: "Scale businesses using data-driven strategies and AI content automation.",
    icon: Code,
    color: "bg-orange-500/10 text-orange-600",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main">
              Future-Ready Programs
            </h2>
            <p className="text-text-main/50 text-lg max-w-xl">
              Equip yourself with the skills demanded by the tech giants of tomorrow.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all">
            See All Courses <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[24px] glass border-transparent hover:border-primary/20 hover:bg-white transition-all card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                <program.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">{program.title}</h3>
              <p className="text-text-main/60 leading-relaxed mb-8">{program.description}</p>
              
              <button className="flex items-center gap-2 text-sm font-bold text-text-main/80 group-hover:text-primary transition-colors">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
