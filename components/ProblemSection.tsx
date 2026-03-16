"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookX, LayoutDashboard, UserMinus, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Outdated Curriculum",
    description: "Most institutions teach technologies that were relevant 5 years ago, leaving students unprepared for the 2026 AI era.",
  },
  {
    icon: LayoutDashboard,
    title: "Lack of Real Projects",
    description: "Theories are useless without execution. Students often graduate without a single production-ready project in their portfolio.",
  },
  {
    icon: UserMinus,
    title: "No Industry Exposure",
    description: "The gap between academia and industry is wider than ever. Networking and mentorship are often non-existent.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Traditional Education Is <span className="text-red-500">Not Enough</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto"
          >
            The tech landscape is evolving faster than ever. Why stick to a system that hasn't changed in decades?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[32px] group hover:scale-[1.02] transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TransformationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Your Evolution Starts <span className="gradient-text">Here</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We don't just teach code; we build engineers who can lead in the AI-first world. See the transformation our students undergo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <CheckCircle2 className="text-primary w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Industry-Led Mentorship</h4>
                  <p className="text-gray-500">Learn directly from experts at Google, Amazon, and Meta.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                  <CheckCircle2 className="text-secondary w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">AI-Native Workflow</h4>
                  <p className="text-gray-500">Master AI tools that increase your productivity by 10x.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-[32px] shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <XCircle size={120} />
              </div>
              <h3 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-widest">Before NIM</h3>
              <ul className="space-y-4">
                {["Limited Skills", "No Portfolio", "Generic Projects", "Slow Career Growth"].map((text) => (
                  <li key={text} className="flex items-center gap-2 text-gray-600">
                    <XCircle className="text-red-400 w-4 h-4" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-bg border border-white/20 p-8 rounded-[32px] shadow-xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle2 size={120} />
              </div>
              <h3 className="text-lg font-bold text-white/60 mb-6 uppercase tracking-widest">After NIM</h3>
              <ul className="space-y-4">
                {["Real AI Skills", "Premium Portfolio", "Startup Network", "100% Placement Help"].map((text) => (
                  <li key={text} className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="text-white w-4 h-4" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connecting Arrow */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-xl z-10 border border-gray-100">
              <ArrowRight className="text-secondary w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
