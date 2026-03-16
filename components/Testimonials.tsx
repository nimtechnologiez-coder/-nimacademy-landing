"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Software Engineer",
    company: "Google",
    text: "The mentor support at NIM Academy is unmatched. I went from zero coding knowledge to landing my dream job in just 6 months. Truly life-changing experience!",
    rating: 5,
  },
  {
    name: "Rohan Das",
    role: "AI Developer",
    company: "Meta",
    text: "The project-based curriculum helped me build a portfolio that stood out to recruiters. The deep dive into AI and Agentic workflows was exactly what I needed.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Data Scientist",
    company: "Zoho",
    text: "Practical, intensive, and incredibly rewarding. The community here is so supportive, and the live sessions are pure gold for anyone looking to break into tech.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-bg opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-16">
          Success Stories from <span className="gradient-text">NIM Graduates</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="glass p-12 md:p-16 rounded-[40px] bg-white border-transparent shadow-2xl relative"
            >
              <Quote size={60} className="text-primary opacity-20 absolute top-10 left-10" />
              
              <div className="relative pt-8">
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-text-main leading-relaxed mb-10 italic">
                  "{testimonials[current].text}"
                </p>
                
                <div className="pt-8 border-t border-gray-100">
                  <div className="font-bold text-xl text-text-main">{testimonials[current].name}</div>
                  <p className="text-text-main/50 font-medium">
                    {testimonials[current].role} @ <span className="text-primary">{testimonials[current].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full glass border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full glass border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
