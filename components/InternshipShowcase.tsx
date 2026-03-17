"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Globe, 
  Bot, 
  Smartphone, 
  BarChart2, 
  ShoppingBag,
  Sparkles
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "EcoConnect SaaS",
    category: "Full Stack Web App",
    description: "A production-grade sustainability tracking dashboard for enterprise teams.",
    image: "/images/project1.png",
    icon: <Globe className="w-5 h-5" />,
    color: "#B8EF43"
  },
  {
    title: "AI Legal Assistant",
    category: "AI & Automation",
    description: "Intelligent contract analysis agent powered by LLMs and vector databases.",
    image: "/images/project2.png",
    icon: <Bot className="w-5 h-5" />,
    color: "#B8EF43"
  },
  {
    title: "SwiftStore Mobile",
    category: "Mobile UI Design",
    description: "Ultra-fast e-commerce mobile experience with minimalist high-end aesthetics.",
    image: "/images/project3.png",
    icon: <Smartphone className="w-5 h-5" />,
    color: "#B8EF43"
  },
  {
    title: "FinTrack Pro",
    category: "Data Visualization",
    description: "Real-time market analytics dashboard with complex interactive charting.",
    image: "/images/hero1.png",
    icon: <BarChart2 className="w-5 h-5" />,
    color: "#B8EF43"
  },
  {
    title: "LuxeMarket API",
    category: "Backend Architecture",
    description: "High-performance headless commerce API built for extreme scalability.",
    image: "/images/project1.png", 
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "#B8EF43"
  },
  {
    title: "HealthSphere App",
    category: "Full Stack Development",
    description: "Patient-doctor interaction portal with end-to-end medical record security.",
    image: "/images/hero2.png",
    icon: <Globe className="w-5 h-5" />,
    color: "#B8EF43"
  }
];

export default function InternshipShowcase() {
  return (
    <section className="w-full bg-[#08090A] font-sans border-y border-white/5 overflow-hidden">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-24 md:py-40 border-x border-white/20">
        <div className="md:px-[60px] px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="space-y-6 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#080910] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px]"
              >
                Portfolio Preview
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] uppercase"
              >
                REAL WORK. <br />
                <span className="text-[#B8EF43] italic">NO PLACEHOLDERS.</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/40 text-base md:text-xl max-w-sm leading-relaxed font-medium"
            >
              Explore the caliber of projects conceptualized and built by NIM Academy interns for global clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] md:h-[550px] rounded-[2px] overflow-hidden bg-[#111827] border border-white/5 hover:border-white/20 transition-all duration-700"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent" />
                </div>
                
                {/* Content Layer */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center text-[#B8EF43] rounded-[2px] group-hover:bg-[#B8EF43] group-hover:text-[#080910] transition-all duration-500">
                        {project.icon}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#080910] transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8EF43] mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight uppercase group-hover:text-[#B8EF43] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-white/50 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-auto">
                      {project.description}
                    </p>

                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#080910] py-3 px-8 bg-[#B8EF43] rounded-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                      View Project Case
                    </button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-[0.2em] rounded-[2px]">
                  Production Live
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">
              Join the cohort and build projects that matter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
