"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users2, Trophy, Video, MessageSquare, ArrowUpRight } from "lucide-react";

const communityFeatures = [
  {
    title: "Peer Learning",
    description: "Connect with thousands of students worldwide. Learn, collaborate, and grow together.",
    icon: Users2,
    color: "bg-blue-500",
  },
  {
    title: "Coding Challenges",
    description: "Weekly hackathons and coding marathons to test your skills and win rewards.",
    icon: Trophy,
    color: "bg-yellow-500",
  },
  {
    title: "Live Sessions",
    description: "Ask questions directly to industry experts in our weekly Ask-Me-Anything sessions.",
    icon: Video,
    color: "bg-red-500",
  },
  {
    title: "Career Mentorship",
    description: "Get personalized career advice and mock interviews from senior leaders.",
    icon: MessageSquare,
    color: "bg-primary",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Join the NIM <span className="gradient-text">Developer Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto"
          >
            Education is better when it's shared. Be a part of a global movement redefining tech learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[40px] group hover:bg-white transition-all duration-300 relative overflow-hidden h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{feature.description}</p>
              
              <button className="flex items-center gap-1 text-secondary font-bold group-hover:gap-2 transition-all">
                Learn More <ArrowUpRight size={18} />
              </button>

              {/* Decorative Circle */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="apply" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto gradient-bg rounded-[60px] p-12 md:p-24 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(167,223,88,0.4)]"
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Start Your Tech <br className="hidden md:block" /> Career <span className="text-gray-900">Today</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
            Don't let the future pass you by. Master AI and development with NIM Academy and join the next generation of industry leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
              Apply Now 
            </button>
            <button className="px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 justify-center border border-white/10">
              Book Free Career Call
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 glass rounded-[32px] opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-24 h-24 glass rounded-[24px] opacity-20 hidden lg:block"
        />
      </motion.div>
    </section>
  );
}
