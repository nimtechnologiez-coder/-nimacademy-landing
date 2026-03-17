"use client";

import React from "react";
import { motion } from "framer-motion";

const row1 = [
  "/images/project1.png",
  "/images/project2.png",
  "/images/project3.png",
  "/images/hero1.png",
  "/images/hero2.png"
];

const row2 = [
  "/images/hero2.png",
  "/images/hero1.png",
  "/images/student1.png",
  "/images/prog_ai_ml.png",
  "/images/prog_full_stack.png"
];

// Double the arrays for seamless scrolling
const marqueeRow1 = [...row1, ...row1];
const marqueeRow2 = [...row2, ...row2];

export default function InternshipFeatures() {
  return (
    <section className="w-full bg-white font-sans border-y border-white/20">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-10 sm:py-24 border-x border-[#080910]/20">
        <div className="w-full">
          <div className="md:px-[60px] px-4 mb-10">
            <p className="font-bold text-sm md:text-base mb-2 text-black/40 uppercase tracking-[0.2em]">
              DON'T MISS OUT
            </p>
            <h2 className="text-[28px] md:text-[48px] font-bold text-[#080910] leading-tight tracking-tight uppercase max-w-2xl">
              Real-World Experience <br />
              <span className="text-black/20 italic">Will Define Your Career</span>
            </h2>
          </div>

          {/* Marquee Row 1 (Right to Left) */}
          <div className="relative w-full overflow-hidden mb-8">
            <motion.div 
              className="flex w-fit"
              animate={{ x: [0, -1535] }} // Adjust based on card width + gap
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {marqueeRow1.map((img, i) => (
                <div key={i} className="mx-2 md:mx-4 flex-shrink-0">
                  <div className="w-[300px] h-[100px] md:w-[574px] md:h-[167px] relative border border-black/40 rounded-[2px] overflow-hidden bg-gray-100">
                    <img src={img} alt={`Participant ${i}`} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 2 (Left to Right) */}
          <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex w-fit"
              animate={{ x: [-1535, 0] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {marqueeRow2.map((img, i) => (
                <div key={i} className="mx-2 md:mx-4 flex-shrink-0">
                  <div className="w-[300px] h-[100px] md:w-[574px] md:h-[167px] relative border border-black/40 rounded-[2px] overflow-hidden bg-gray-100">
                    <img src={img} alt={`Participant ${i}`} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
