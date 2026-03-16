"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, BookOpen, Laptop, Briefcase, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Enroll",
    description: "Start your journey by choosing a program that aligns with your career goals.",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    title: "Learn",
    description: "Immersive learning with live sessions, 1-on-1 mentorship, and 24/7 support.",
    icon: BookOpen,
    color: "bg-primary",
  },
  {
    title: "Build Projects",
    description: "Apply your knowledge to build real-world products using the latest industry tools.",
    icon: Laptop,
    color: "bg-secondary",
  },
  {
    title: "Internship",
    description: "Gain 3 months of hands-on experience working with our partner tech companies.",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    title: "Placement",
    description: "Get hired by top-tier tech firms with our dedicated career transition support.",
    icon: Rocket,
    color: "bg-orange-500",
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Your Path to <span className="gradient-text">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto"
          >
            A structured roadmap designed to take you from a curious learner to a professional engineer in record time.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-full ${step.color} shadow-2xl flex items-center justify-center text-white mb-6 relative group-hover:scale-110 transition-transform duration-300 ring-8 ring-white group-hover:ring-gray-50`}>
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold text-sm shadow-lg border border-gray-100">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
                <div className="mt-6">
                  <CheckCircle2 className="text-gray-200 group-hover:text-primary transition-colors" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
