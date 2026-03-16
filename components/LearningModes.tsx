"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Laptop, Globe, Users, BookOpen, MessageSquare } from "lucide-react";

export default function LearningModes() {
  return (
    <section className="nim-learning-modes bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-white/40 text-sm uppercase tracking-widest mb-4 font-bold">Accessibility</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white">
            Flexible <span className="text-secondary">Learning Modes</span>
          </h3>
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            Whether you&apos;re a student, working professional, or career switcher, NIM Academy gives you the freedom to learn your way—Online or Offline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Online Learning */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform">
               <Globe size={120} />
             </div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-3 text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                 <Monitor size={16} />
                 Remote Access
               </div>
               
               <h4 className="text-3xl font-display font-bold text-white mb-6">Online Learning</h4>
               <p className="text-white/50 mb-10 leading-relaxed max-w-md">
                 Experience interactive live classes with recorded access, guided mentorship, and real-world projects to strengthen your skills from anywhere in the world.
               </p>

               <ul className="grid grid-cols-2 gap-4">
                 {[
                   { icon: <Users size={14} />, text: "Live Classes" },
                   { icon: <BookOpen size={14} />, text: "Recorded Access" },
                   { icon: <Globe size={14} />, text: "Global Community" },
                   { icon: <MessageSquare size={14} />, text: "Digital Mentorship" },
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                     <span className="text-secondary">{item.icon}</span>
                     {item.text}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>

          {/* Offline Learning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-3xl overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform">
               <Laptop size={120} />
             </div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-3 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                 <Laptop size={16} />
                 Campus Experience
               </div>
               
               <h4 className="text-3xl font-display font-bold text-white mb-6">Offline Learning</h4>
               <p className="text-white/50 mb-10 leading-relaxed max-w-md">
                 Engage in live learning in our state-of-the-art labs, access recorded sessions, and enhance skills with direct mentor-led projects and networking.
               </p>

               <ul className="grid grid-cols-2 gap-4">
                 {[
                   { icon: <Users size={14} />, text: "On-Campus" },
                   { icon: <Monitor size={14} />, text: "Lab Access" },
                   { icon: <MessageSquare size={14} />, text: "Personal Mentorship" },
                   { icon: <Users size={14} />, text: "Peer Networking" },
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                     <span className="text-primary">{item.icon}</span>
                     {item.text}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
