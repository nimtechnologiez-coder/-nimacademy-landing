"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "What programs are offered at NIM Academy?",
    answer: "NIM Academy offers career-focused programs in Full Stack Development, Artificial Intelligence, Data Analytics, and Digital Marketing. Each program includes hands-on training, real-world projects, and industry-relevant tools to prepare students for modern technology careers.",
  },
  {
    question: "Do I need prior coding experience to join?",
    answer: "No prior coding experience is required for many of our programs. Our courses are designed to start with the fundamentals and gradually move to advanced topics, making them suitable for beginners as well as learners looking to upgrade their skills.",
  },
  {
    question: "How are the classes conducted?",
    answer: "NIM Academy offers flexible learning options including online, offline, and hybrid classes. Sessions are conducted by experienced trainers and include live lectures, practical exercises, and project-based learning.",
  },
  {
    question: "Will I work on real projects during the program?",
    answer: "Yes. Students work on multiple real-world projects during the training. These projects help build a strong portfolio that demonstrates practical skills to potential employers.",
  },
  {
    question: "Does NIM Academy provide placement support?",
    answer: "Yes. NIM Academy provides career guidance, resume building support, interview preparation, and connections with hiring partners to help students start their careers in the tech industry.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div data-section-theme="light" className="w-full font-sans bg-[#FAF9F6]" id="faq" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)", borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
        <div className="px-4 md:pl-[60px] md:pr-[60px] py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[35%]">
              <p className="text-primary uppercase tracking-[1.75px] mb-4 text-[14px] font-bold">FREQUENTLY ASKED QUESTIONS</p>
              <h2 className="text-black text-[30px] md:text-[38px] font-bold leading-[120%] pr-4 uppercase tracking-tighter">Everything You Need to Know About <span className="text-primary italic">NIM Academy</span></h2>
            </div>
            <div className="md:w-[65%] space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border border-black/10 bg-black/[0.03] rounded-[2px] overflow-hidden group hover:border-black/20 transition-colors">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex justify-between items-center p-6 py-5 text-left font-bold text-[16px] md:text-[18px] transition-colors hover:bg-black/[0.02] text-black"
                    >
                      <span className="pr-8">{faq.question}</span>
                      <span
                        className="text-2xl transition-transform duration-300 flex-shrink-0 font-light text-primary"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="p-6 pt-0 text-black/60 text-base md:text-lg leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center mt-12 md:mt-16">
            <button className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-wider rounded-[2px] transition-all hover:bg-lime-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(184,239,67,0.2)]">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
