"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users2, Trophy, Video, MessageSquareHeart } from "lucide-react";

const features = [
  {
    title: "Peer Learning",
    description: "Connect with thousands of ambitious developers and learn through collaboration.",
    icon: Users2,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Coding Challenges",
    description: "Weekly hackathons and internal competitions to sharpen your problem-solving skills.",
    icon: Trophy,
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    title: "Live Expert Sessions",
    description: "Direct AMA sessions with CTOs and lead engineers from top tech companies.",
    icon: Video,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Career Mentorship",
    description: "1-on-1 sessions to build your personal brand and master technical interviews.",
    icon: MessageSquareHeart,
    color: "bg-pink-500/10 text-pink-600",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Join the <span className="gradient-text">NIM Community</span>
          </h2>
          <p className="text-text-main/50 text-lg max-w-2xl mx-auto">
            You don't just enroll in a course; you join a ecosystem dedicated to your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-8 rounded-[32px] bg-white border-transparent hover:border-primary/20 transition-all card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{feature.title}</h3>
              <p className="text-text-main/60 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
