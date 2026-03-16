"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Power BI", icon: "📊" },
  { name: "AWS", icon: "☁️" },
  { name: "Next.js", icon: " ▲" },
  { name: "Docker", icon: "🐋" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Git", icon: "🌿" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Technologies You'll <span className="gradient-text">Master</span>
          </h2>
          <p className="text-text-main/50 text-lg max-w-2xl mx-auto">
            Get hands-on experience with the same tools used by top engineering teams worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 text-center group transition-all hover:bg-white hover:border-primary/20 hover:shadow-xl"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{tech.icon}</div>
              <span className="text-sm font-bold text-text-main/70 group-hover:text-text-main transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
