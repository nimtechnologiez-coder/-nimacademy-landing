"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  Rocket, 
  Zap,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const steps = [
  {
    title: "Apply Online",
    description: "Submit your application with your portfolio and experience through our simplified form.",
    icon: <UserPlus className="w-6 h-6" />,
    color: "#B8EF43"
  },
  {
    title: "Screening",
    description: "Our mentors review your background and technical proficiency to find the best fit.",
    icon: <Search className="w-6 h-6" />,
    color: "#B8EF43"
  },
  {
    title: "The Interview",
    description: "A quick technical discussion or task to understand your logical approach and goals.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "#B8EF43"
  },
  {
    title: "Onboarding",
    description: "Get access to our tools, community discord, and meet your dedicated project mentors.",
    icon: <Zap className="w-6 h-6" />,
    color: "#B8EF43"
  },
  {
    title: "Start Building",
    description: "Begin working on live production code and start your journey as a pro developer.",
    icon: <Rocket className="w-6 h-6" />,
    color: "#B8EF43"
  }
];

export default function InternshipProcess() {
  return (
    <section className="w-full bg-white font-sans border-y border-black/5 overflow-hidden">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-24 md:py-40 border-x border-[#080910]/20">
        <div className="md:px-[60px] px-6">
          <div className="mb-24 space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#080910] text-[#B8EF43] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px]"
            >
              The Master Roadmap
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold text-[#080910] tracking-tighter leading-[0.9] uppercase"
            >
              YOUR <br />
              <span className="text-black/20 italic">JOURNEY</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#080910]/50 text-base md:text-xl max-w-2xl font-medium"
            >
              From your first click to your first production deployment. A seamless, mentored path to career transformation.
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#080910]/10" />

            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Plate */}
                  <div className={`flex-1 w-full md:w-auto ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-[#080910]/10 p-8 rounded-[2px] hover:border-[#080910] transition-all duration-500 group">
                      <h3 className="text-xl md:text-2xl font-bold text-[#080910] mb-3 uppercase tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#080910]/50 text-sm md:text-base leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#080910] flex items-center justify-center text-[#B8EF43] font-bold text-xl border-4 border-white shadow-xl group-hover:bg-[#B8EF43] group-hover:text-[#080910] transition-all duration-500">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-6 px-12 py-10 bg-[#080910] text-white rounded-[2px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8EF43]/10 blur-[60px]" />
              <CheckCircle2 className="w-12 h-12 text-[#B8EF43]" />
              <div className="text-left">
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter block mb-1">Are You Ready?</span>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Applications close in 4 days.</span>
              </div>
              <button className="md:ml-10 px-10 py-4 bg-[#B8EF43] text-[#080910] font-bold uppercase tracking-widest text-xs rounded-[2px] hover:bg-white transition-all">
                Submit Application
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
