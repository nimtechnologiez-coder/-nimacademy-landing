"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Foundation",
    description: "Build a strong base in programming logic and computer science fundamentals.",
    duration: "4 Weeks",
  },
  {
    title: "Frontend",
    description: "Master modern UI/UX principles and frameworks like React and Next.js.",
    duration: "6 Weeks",
  },
  {
    title: "Backend",
    description: "Learn to build scalable server-side systems and complex databases.",
    duration: "6 Weeks",
  },
  {
    title: "Projects",
    description: "Build real-world production-grade applications for your portfolio.",
    duration: "4 Weeks",
  },
  {
    title: "Placement Preparation",
    description: "Exclusive interview prep and direct access to hiring partners.",
    duration: "Unlimited",
  },
];

export default function Journey() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Your Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-main/50 text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed to take you from absolute zero to a professional developer.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="w-6 h-6 rounded-full gradient-bg border-4 border-white shadow-lg mx-auto mb-6 hidden lg:block scale-125 group-hover:scale-150 transition-transform" />

                <div className="glass p-8 rounded-[24px] bg-white border-transparent hover:border-primary/20 transition-all hover:shadow-2xl h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{step.duration}</span>
                    <CheckCircle2 size={24} className="text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{step.title}</h3>
                  <p className="text-text-main/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
