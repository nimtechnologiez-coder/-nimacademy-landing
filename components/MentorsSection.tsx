"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";

const mentors = [
  {
    name: "Dr. Elena Vance",
    role: "Senior AI Scientist",
    ex: "Ex-Google, DeepMind",
    image: "/images/hero1.png",
  },
  {
    name: "David Kross",
    role: "Full Stack Architect",
    ex: "Ex-Meta, Netflix",
    image: "/images/hero2.png",
  },
  {
    name: "Marcus Thorne",
    role: "Data Engineering Lead",
    ex: "Ex-Amazon, Uber",
    image: "/images/student1.png",
  },
  {
    name: "Aria Sterling",
    role: "Product Design Directer",
    ex: "Ex-Apple, Airbnb",
    image: "/images/hero3.png",
  },
];

export default function MentorsSection() {
  return (
    <section id="mentors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Learn from the <span className="gradient-text">Best</span>
            </motion.h2>
            <p className="text-xl text-gray-600">
              Our mentors are industry veterans who have built products used by millions. Get direct access to their knowledge.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex -space-x-4 h-fit"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-xl">
                <Image src={i % 2 === 0 ? "/images/student1.png" : "/images/hero1.png"} alt="Student" fill className="object-cover" />
              </div>
            ))}
            <div className="w-14 h-14 rounded-full border-4 border-white bg-secondary flex items-center justify-center text-white font-bold text-xs shadow-xl">
              +2k
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-2xl">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform">
                   <div className="flex gap-2">
                     <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-800 hover:text-secondary transition-colors">
                       <Linkedin size={18} />
                     </button>
                     <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-800 hover:text-secondary transition-colors">
                       <Twitter size={18} />
                     </button>
                   </div>
                   <Globe className="text-white/50 w-6 h-6" />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-secondary transition-colors">{mentor.name}</h4>
              <p className="text-gray-500 font-semibold mb-2">{mentor.role}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest">{mentor.ex}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
