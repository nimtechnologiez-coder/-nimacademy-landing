"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aryan Sharma",
    role: "Full Stack Intern",
    feedback: "The level of scale they work on is insane. I went from building simple CRUD apps to architecting distributed SaaS systems with AI agents in just 2 months.",
    photo: "https://i.pravatar.cc/150?u=aryan",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Intern",
    feedback: "NIM Academy taught me that design isn't just about looks—it's about systems. The mentorship here is unmatched.",
    photo: "https://i.pravatar.cc/150?u=sneha",
    rating: 5
  },
  {
    name: "Rohan V.",
    role: "AI/ML Intern",
    feedback: "Foundational LLM research and deployment on real production data. Best internship for anyone serious about AI.",
    photo: "https://i.pravatar.cc/150?u=rohan",
    rating: 5
  },
  {
    name: "Ishita P.",
    role: "Frontend Intern",
    feedback: "Mastered Next.js 14 and Framer Motion here. The projects are challenging but deeply rewarding.",
    photo: "https://i.pravatar.cc/150?u=ishita",
    rating: 5
  },
  {
    name: "Vikram K.",
    role: "Backend Intern",
    feedback: "Scalability and security were the focus. Built a robust medical API architecture under high-end mentorship.",
    photo: "https://i.pravatar.cc/150?u=vikram",
    rating: 5
  }
];

export default function InternshipTestimonials() {
  return (
    <section className="w-full bg-white font-sans border-y border-black/5 overflow-hidden">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-24 md:py-40 border-x border-[#080910]/20">
        <div className="md:px-[60px] px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#080910] text-[#B8EF43] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px]"
              >
                Success Stories
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-bold text-[#080910] tracking-tighter leading-[0.9] uppercase"
              >
                WALL OF <br />
                <span className="text-black/20 italic">IMPACT</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#080910]/50 text-base md:text-xl max-w-sm leading-relaxed font-medium"
            >
              Don't just take our word for it—hear it from the interns who built the future with us.
            </motion.p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid bg-white border border-[#080910]/10 rounded-[2px] p-10 hover:border-[#080910] transition-all duration-500 group relative"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-[#080910]/[0.03] group-hover:text-[#B8EF43]/20 transition-colors duration-500" />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#080910] text-[#080910]" />
                  ))}
                </div>

                <p className="text-[#080910] text-lg font-medium leading-relaxed mb-10 italic">
                  "{testimonial.feedback}"
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-[#080910]/5 group-hover:border-[#080910]/20 transition-colors">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#080910]/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#080910] text-lg tracking-tight uppercase">{testimonial.name}</h4>
                    <p className="text-[#080910]/40 text-[10px] font-bold uppercase tracking-widest mt-0.5">{testimonial.role}</p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-10 right-10 flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#B8EF43]" />
                   <span className="text-[8px] font-bold uppercase text-[#080910] tracking-widest">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
