"use client";

import React from "react";
import { motion } from "framer-motion";

const partnershipPillars = [
  {
    title: "Skill Development & Industry Programs",
    description: "We conduct industry-aligned workshops and certification programs in emerging technologies like AI, Machine Learning, Data Analytics, Cloud, Cybersecurity, IoT, Full Stack Development, and Digital Marketing.",
    image: "/images/prog_ai_ml.png",
    tag: "SKILL DEVELOPMENT PROGRAM"
  },
  {
    title: "Internship & Placement Support",
    description: "We collaborate with faculty teams to create joint research initiatives, conduct train-the-trainer sessions, and provide industry resource materials for upskilling.",
    image: "/images/project1.png",
    tag: "INTERNSHIP SUPPORT"
  },
  {
    title: "Faculty Empowerment & Research Collaboration",
    description: "We collaborate with faculty teams to create joint research initiatives, conduct expert sessions, and provide modern teaching resources.",
    image: "/images/hero1.png",
    tag: "FACULTY DEVELOPMENT"
  },
  {
    title: "Workshops, Seminars & Bootcamps",
    description: "Our expert trainers conduct hands-on workshops, seminars, coding bootcamps, AI hackathons, and innovation challenges for students.",
    image: "/images/hero4.png",
    tag: "ACADEMIC COLLABORATION"
  }
];

export default function WhyPartner() {
  return (
    <section id="partnership-details" className="bg-black py-24 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="mb-20">
          <p className="text-primary text-[14px] tracking-[2px] font-bold uppercase mb-4">
            PARTNERSHIP PILLARS
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Why Colleges <span className="text-primary italic">Partner</span> with NIM Academy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {partnershipPillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative h-[300px] mb-8 overflow-hidden rounded-sm border border-white/10 group-hover:border-primary/50 transition-colors">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-primary text-black text-[10px] font-bold tracking-widest uppercase rounded-sm">
                    {pillar.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
