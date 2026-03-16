"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, BarChart3, Megaphone, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Full Stack Development",
    icon: Code2,
    description: "Master React, Next.js, Node.js and cloud architecture. Build scalable web applications for 2026.",
    duration: "6 Months",
    color: "from-blue-500 to-cyan-400",
    id: "fsd",
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description: "Beyond coding. Learn LLMs, Neural Networks, and Agentic Workflows to build the future of AI.",
    duration: "8 Months",
    color: "from-primary to-secondary",
    id: "ai",
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    description: "Transform raw data into strategic insights using Python, SQL, and modern BI tools.",
    duration: "5 Months",
    color: "from-purple-500 to-pink-500",
    id: "da",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Master AI-driven marketing strategies, SEO, and growth hacking for modern brands.",
    duration: "4 Months",
    color: "from-orange-500 to-red-400",
    id: "dm",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Future-Ready <span className="gradient-text">Programs</span>
            </motion.h2>
            <p className="text-xl text-gray-600">
              Curriculums designed by industry experts to bridge the gap between learning and high-impact tech careers.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-secondary font-bold text-lg group bg-secondary/5 hover:bg-secondary/10 px-6 py-3 rounded-full transition-all"
          >
            View All Curriculums
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col p-8 rounded-[40px] bg-gray-50 border border-gray-100 h-full hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500",
                program.color
              )}>
                <program.icon size={32} />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">{program.duration}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={10} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {program.description}
              </p>

              <button className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                Enroll Now
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
