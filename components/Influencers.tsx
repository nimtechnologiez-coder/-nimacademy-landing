"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Mock data for industry experts since we don't have the specific images
const INFLUENCERS = [
  { id: 1, name: "Senior AI Engineer", image: "/images/hero1.png" },
  { id: 2, name: "Lead Full Stack Developer", image: "/images/hero2.png" },
  { id: 3, name: "Data Science Director", image: "/images/hero3.png" },
];

export default function Influencers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate background images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % INFLUENCERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full text-white font-sans relative overflow-hidden bg-[#08090A] border-y border-white/20">
      <div className="relative z-10 w-[90%] md:w-auto mx-auto md:mx-[153px] md:overflow-hidden min-h-[500px] md:min-h-[600px] border-x border-white/20">
        
        {/* Background Image Container with Crossfade */}
        {INFLUENCERS.map((influencer, index) => (
          <div
            key={influencer.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            style={{
              backgroundImage: `url('${influencer.image}')`,
            }}
          >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090A] via-[#08090A]/80 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 py-16 md:py-24 h-full flex flex-col justify-between">
          <div className="relative md:pl-[60px] md:pr-[60px] px-4">
            <p className="text-primary text-[14px] tracking-[2px] font-bold uppercase mb-4">
              TRUSTED BY STUDENTS & INDUSTRY EXPERTS
            </p>
            <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-bold text-white max-w-2xl">
              Recognized by Industry Experts and Technology Professionals
            </h2>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
              NIM Academy delivers practical, industry-focused training that prepares students for real careers in technology.
            </p>
            
            {/* Trust Points */}
            <div className="mt-8 space-y-3">
              {[
                "Industry-Oriented Curriculum",
                "Hands-on Project Based Learning",
                "Mentorship from Experienced Professionals",
                "Career Guidance & Placement Support"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Indicators */}
          <div className="relative md:pl-[60px] px-4 mt-12 md:mt-16 flex gap-3">
            {INFLUENCERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  index === currentIndex 
                    ? "w-12 bg-primary" 
                    : "w-4 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Show influencer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
