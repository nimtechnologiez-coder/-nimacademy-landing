"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Layers, 
  BrainCircuit, 
  Megaphone, 
  PenTool, 
  BarChart3, 
  Cpu, 
  ShieldCheck, 
  Cloud,
  ArrowRight
} from "lucide-react";

const domains = [
  {
    name: "Frontend Development",
    description: "Build high-performance, responsive user interfaces using Next.js, React, and Tailwind CSS.",
    icon: <Code2 className="w-6 h-6" />,
    tag: "UI/UX Focus",
    color: "#B8EF43"
  },
  {
    name: "AI & Data Science",
    description: "Develop intelligent agents, LLM integrations, and predictive models for real-world data.",
    icon: <BrainCircuit className="w-6 h-6" />,
    tag: "Future Tech",
    color: "#B8EF43"
  },
  {
    name: "Full Stack Development",
    description: "End-to-end application development from database architecture to frontend deployment.",
    icon: <Layers className="w-6 h-6" />,
    tag: "Power Developer",
    color: "#B8EF43"
  },
  {
    name: "Backend & APIs",
    description: "Architect scalable server-side systems, secure APIs, and robust database schemas.",
    icon: <Terminal className="w-6 h-6" />,
    tag: "Core Logic",
    color: "#B8EF43"
  },
  {
    name: "UI/UX & Product Design",
    description: "Create stunning visual languages and intuitive user journeys for modern SaaS products.",
    icon: <PenTool className="w-6 h-6" />,
    tag: "Creative",
    color: "#B8EF43"
  },
  {
    name: "Cloud & DevOps",
    description: "Master AWS infrastructure, CI/CD pipelines, and high-availability deployment.",
    icon: <Cloud className="w-6 h-6" />,
    tag: "Infrastructure",
    color: "#B8EF43"
  },
  {
    name: "Cyber Security",
    description: "Implement SOC, vulnerability assessment, and robust security protocols for enterprise apps.",
    icon: <ShieldCheck className="w-6 h-6" />,
    tag: "Security",
    color: "#B8EF43"
  },
  {
    name: "Digital Marketing",
    description: "Execute data-driven growth strategies, SEO optimization, and social media campaigns.",
    icon: <Megaphone className="w-6 h-6" />,
    tag: "Growth",
    color: "#B8EF43"
  },
  {
    name: "Data Analytics",
    description: "Transform raw data into actionable business intelligence using advanced visualization tools.",
    icon: <BarChart3 className="w-6 h-6" />,
    tag: "Insights",
    color: "#B8EF43"
  }
];

export default function InternshipDomains() {
  return (
    <section className="w-full bg-white font-sans border-y border-black/5">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-20 md:py-32 border-x border-[#080910]/20">
        <div className="md:px-[60px] px-6">
          <div className="mb-20 space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#080910] text-[#B8EF43] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px]"
            >
              Master Your Craft
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-[#080910] tracking-tight leading-tight uppercase"
            >
              CHOOSE YOUR <br />
              <span className="text-black/20 italic">DOMAIN</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#080910]/50 text-base md:text-xl max-w-2xl font-medium"
            >
              We don't do generalist training. Pick a track, master the tools, and build specialized expertise in a vertical that matters.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-[#080910]/10 rounded-[2px] p-8 hover:border-[#080910] transition-all duration-500 relative flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 bg-[#080910]/5 flex items-center justify-center text-[#080910] group-hover:bg-[#080910] group-hover:text-[#B8EF43] transition-all duration-500">
                    {domain.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#080910]/30 group-hover:text-[#080910] transition-colors">
                    {domain.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#080910] mb-4 tracking-tight uppercase">
                  {domain.name}
                </h3>
                <p className="text-[#080910]/50 text-sm leading-relaxed mb-8 font-medium">
                  {domain.description}
                </p>

                <div className="mt-auto pt-6 border-t border-[#080910]/5 group-hover:border-[#080910]/20">
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#080910] group-hover:text-[#B8EF43] transition-colors">
                    Register Interest <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-transparent border-l-transparent group-hover:border-t-[#B8EF43] transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-[#080910]/10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <p className="text-[#080910]/40 text-sm font-bold uppercase tracking-widest">
              Need advice on which track to choose?
            </p>
            <button className="px-10 py-4 bg-[#080910] text-white rounded-[2px] font-bold uppercase tracking-widest text-xs hover:bg-[#B8EF43] hover:text-[#080910] transition-all">
              Talk to a Placement Mentor
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
