"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Full Stack Engineer at Amazon",
    review: "NIM Academy completely changed the trajectory of my career. The AI-first curriculum gave me an edge that traditional degrees simply couldn't provide.",
    image: "/images/student1.png",
  },
  {
    name: "Sarah Chen",
    role: "AI Researcher at Google",
    review: "The mentorship here is world-class. I didn't just learn to code; I learned how to build products that solve real-world problems using advanced AI.",
    image: "/images/hero1.png",
  },
  {
    name: "Michael Smith",
    role: "Senior Developer at Stripe",
    review: "The community and networking opportunities at NIM are unparalleled. I secured my role at Stripe through a connection I made during my internship.",
    image: "/images/hero2.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our <span className="gradient-text">Scholars Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto"
          >
            Join thousands of successful graduates who have launched high-impact careers in technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[40px] flex flex-col h-full hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
              </div>

              <Quote className="text-primary/20 w-12 h-12 mb-4 group-hover:text-primary transition-colors" />
              
              <p className="text-gray-600 text-lg italic leading-relaxed mb-8 flex-grow">
                "{t.review}"
              </p>

              <div className="mt-auto">
                <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
                <p className="text-secondary font-semibold text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
