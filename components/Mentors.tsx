"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const mentors = [
  {
    name: "David Miller",
    role: "Senior Full Stack Dev",
    experience: "10+ Years",
    company: "Google",
    image: "/home/ni2.webp",
  },
  {
    name: "Elena Rodriguez",
    role: "AI Ethics Lead",
    experience: "8+ Years",
    company: "Anthropic",
    image: "/home/ni3.webp",
  },
  {
    name: "Samir Gupta",
    role: "Cloud Architect",
    experience: "12+ Years",
    company: "AWS",
    image: "/home/ni4.webp",
  },
  {
    name: "Olivia Thompson",
    role: "Product Design Lead",
    experience: "7+ Years",
    company: "Figma",
    image: "/home/ni5.webp",
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main">
              Learn from <span className="gradient-text">World Class</span> Mentors
            </h2>
            <p className="text-text-main/50 text-lg max-w-xl">
              Direct access to industry veterans who help you navigate your career and technical challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[24px] bg-white p-4 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-white font-bold text-lg">{mentor.name}</p>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest">{mentor.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 glass rounded-full text-white hover:bg-white hover:text-text-main transition-all">
                      <Linkedin size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-2 pb-2">
                <p className="text-sm font-bold text-text-main/80 mb-1">{mentor.role}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                  <ExternalLink size={12} /> {mentor.experience} Exp
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
