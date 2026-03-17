"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is this internship paid?",
    answer: "Yes, we offer performance-based stipends for top performers who hit their technical milestones and contribute meaningfully to live projects."
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Absolutely. You will receive a formal Experience Letter and a verified Digital Certificate that details your technical contributions and project impact."
  },
  {
    question: "What is the duration of the program?",
    answer: "Standard tracks are 1–3 months, but we offer flexibility based on your academic schedule and the complexity of the project you're assigned to."
  },
  {
    question: "Can I work remotely?",
    answer: "Yes, we follow a hybrid-first model. Most of our interns work remotely, while those near our campus can opt for an immersive in-person experience."
  },
  {
    question: "Will I work on real client projects?",
    answer: "Every NIM Academy intern works on production-grade code. You will build modules for actual SaaS products, AI tools, or high-scale web platforms."
  }
];

export default function InternshipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white font-sans border-y border-black/5 overflow-hidden">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-24 md:py-40 border-x border-[#080910]/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#080910] text-[#B8EF43] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px]"
            >
              Support Center
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold text-[#080910] tracking-tighter leading-[0.9] uppercase"
            >
              COMMON <br />
              <span className="text-black/20 italic">QUESTIONS</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-[2px] transition-all duration-500 ${openIndex === idx ? 'bg-[#080910] border-[#080910] shadow-2xl' : 'bg-white border-[#080910]/10 hover:border-[#080910]/30'}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-8 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-8 h-8 flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'text-[#B8EF43]' : 'text-[#080910]/20 group-hover:text-[#080910]'}`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className={`text-xl font-bold tracking-tight uppercase ${openIndex === idx ? 'text-white' : 'text-[#080910]'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transition-all duration-500 ${openIndex === idx ? 'text-[#B8EF43] rotate-45' : 'text-[#080910]/10 group-hover:text-[#080910]'}`}>
                    <Plus className="w-6 h-6" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-10 pt-0">
                        <div className="pl-14 border-t border-white/10 pt-6 text-white/50 text-base leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-[#080910]/30 font-bold uppercase tracking-widest text-[10px]">
              Still have queries? <a href="#" className="text-[#080910] underline underline-offset-8 hover:text-[#B8EF43] transition-colors">Talk to a Placement Mentor</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
