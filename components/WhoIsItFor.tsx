"use client";

import React from "react";
import Image from "next/image";

export default function WhoIsItFor() {
  return (
    <section className="w-full bg-[#08090A] text-white font-sans border-b border-white/20">
      <div 
        className="w-[90%] md:w-auto mx-auto md:mx-[153px] relative overflow-hidden transition-all duration-700 hover:bg-white/[0.02]" 
        style={{ 
          borderLeft: "1px solid rgba(255, 255, 255, 0.2)", 
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          backgroundImage: "url('/images/hero3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Dark Overlay for content readability */}
        <div className="absolute inset-0 bg-black/80 md:bg-black/70" />

        <div className="relative py-12 md:py-28 h-[500px] md:h-[610px] flex flex-col justify-center">
          <div className="relative md:pl-[60px] md:pr-[60px] px-4">
            <p className="text-[14px] md:text-[16px] tracking-[3px] leading-[160%] font-bold uppercase text-primary mb-4">
              AI FOR ALL STAGES
            </p>
            <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-bold text-white mb-8 max-w-2xl">
              Who is NIM Academy for?
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
              Whether you're a student starting your tech journey, a professional looking to upskill, 
              or a business leader aiming to leverage AI, our curriculum is designed to meet your 
              ambitions at every level.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              {['Students', 'Career Switchers', 'Tech Professionals', 'Business Leaders'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-primary hover:text-black transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Architectural Line */}
        <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
