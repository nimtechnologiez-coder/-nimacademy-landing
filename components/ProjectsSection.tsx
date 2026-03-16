"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    category: "Artificial Intelligence",
    image: "/images/project1.png",
    description: "A customer support automation platform built with LLMs and real-time streaming.",
  },
  {
    title: "EcoMark E-commerce",
    category: "Full Stack Development",
    image: "/images/project2.png",
    description: "A premium sustainable marketplace with integrated payment gateways and AI recommendations.",
  },
  {
    title: "Horizon SaaS Dashboard",
    category: "Data Analytics",
    image: "/images/project3.png",
    description: "Enterprise-grade analytics dashboard with complex data visualization and real-time updates.",
  },
  {
    title: "Smart Automation System",
    category: "Artificial Intelligence",
    image: "/images/project1.png",
    description: "Automating workflow management using autonomous agents and predictive modeling.",
  },
  {
    title: "HealthTrack Mobile UI",
    category: "Mobile Development",
    image: "/images/project2.png",
    description: "Modern health monitoring app with sleek interactive elements and personalized tracking.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Built by Our <span className="gradient-text">Scholars</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto"
          >
            We don't just learn theory. We build production-ready products that solve real-world problems.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid relative group rounded-[32px] overflow-hidden shadow-xl"
            >
              <div className="relative aspect-video lg:aspect-square">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4 mb-6">
                    <button className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:text-primary transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:text-primary transition-colors">
                      <Eye size={20} />
                    </button>
                  </div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
