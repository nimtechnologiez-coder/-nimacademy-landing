"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Trophy, ChevronRight } from "lucide-react";

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Learn from Industry Experts",
    description: "Gain practical insights and skills directly from experienced professionals who lead the field.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Work on Real Client Projects",
    description: "Apply your learning through hands-on projects that build real-world experience and a strong portfolio.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Internship + Live Mentorship",
    description: "Get guided by mentors while interning on live industry tasks, bridging the gap between theory and practice.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Placement Support 100%",
    description: "Receive complete assistance and career coaching to kickstart your journey with top global tech companies.",
  },
];

export default function WhyChooseNIM() {
  return (
    <section className="bg-[#08090A] py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-white/40 text-sm uppercase tracking-widest mb-4 font-bold">Why Choose NIM</h2>
            <h3 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 leading-tight">
              Ready to Start <br />
              <span className="text-primary">Your Journey?</span>
            </h3>
            <p className="text-white/60 text-lg max-w-md mb-12 leading-relaxed">
              Your future in tech starts today. Choose your path, we&apos;ll guide your every step with a curriculum designed for the 2026 industry landscape.
            </p>
            
            <button className="group relative flex items-center gap-3 bg-white text-black font-bold px-10 py-5 rounded-[4px] transition-all hover:bg-primary">
              Begin Your Application
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-4">{benefit.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
