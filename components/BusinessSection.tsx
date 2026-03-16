"use client";

import React from "react";

export default function BusinessSection() {
  return (
    <div className="w-full bg-[#08090A] font-sans" id="business" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}>
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.15)", borderRight: "1px solid rgba(255, 255, 255, 0.15)" }}>
        <div className="px-4 md:px-[60px] py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
            <div className="md:w-3/4">
              <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white mb-4">CORPORATE TRAINING</p>
              <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-4 md:mb-6">Empower Your Team with Future Tech Skills</h2>
              <p className="text-[#CFCFCFE5]/90 text-sm md:text-base max-w-2xl">
                NIM Academy helps organizations train their teams in modern technologies like AI, Full Stack Development, Data Analytics, and Digital Tools to improve productivity, innovation, and technical capabilities.
              </p>
            </div>
            <div className="hidden md:flex md:w-1/4 justify-end">
              <button className="px-8 py-4 text-black border bg-[#b8ef43] border-white/30 rounded-[2px] hover:bg-white hover:text-black transition font-bold">Request Corporate Training</button>
            </div>
          </div>
          
          <p className="text-base font-medium text-white mb-6">Why Choose NIM Academy for Corporate Training?</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 md:p-4 hover:bg-white/5 transition-colors rounded-lg">
              <div className="w-[52px] h-[52px] min-w-[52px] flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/osbn1.svg" alt="Tech Training" className="w-[52px] h-[52px] md:w-12 md:h-12 object-contain grayscale invert" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-base font-medium mb-2 leading-tight">Industry-Relevant Tech Training</h3>
                <p className="text-[#CFCFCFE5]/90 text-[14px] md:text-base leading-snug">Train your team in modern technologies including Artificial Intelligence, Full Stack Development, Data Analytics, and cloud-based tools.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:p-4 hover:bg-white/5 transition-colors rounded-lg">
              <div className="w-[52px] h-[52px] min-w-[52px] flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/osbn2.svg" alt="Customized" className="w-[52px] h-[52px] md:w-12 md:h-12 object-contain grayscale invert" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-base font-medium mb-2 leading-tight">Customized Learning Programs</h3>
                <p className="text-[#CFCFCFE5]/90 text-[14px] md:text-base leading-snug">Training programs designed specifically for your organization’s goals, delivered through flexible online, offline, or hybrid formats.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:p-4 hover:bg-white/5 transition-colors rounded-lg">
              <div className="w-[52px] h-[52px] min-w-[52px] flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/osbn3.svg" alt="Expert Trainers" className="w-[52px] h-[52px] md:w-12 md:h-12 object-contain grayscale invert" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-base font-medium mb-2 leading-tight">Expert Trainers & Industry Mentors</h3>
                <p className="text-[#CFCFCFE5]/90 text-[14px] md:text-base leading-snug">Learn from experienced professionals and technology experts who bring real-world industry knowledge to every training session.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:p-4 hover:bg-white/5 transition-colors rounded-lg">
              <div className="w-[52px] h-[52px] min-w-[52px] flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/osbn4.svg" alt="Partnership" className="w-[52px] h-[52px] md:w-12 md:h-12 object-contain grayscale invert" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-base font-medium mb-2 leading-tight">Long-Term Learning Partnership</h3>
                <p className="text-[#CFCFCFE5]/90 text-[14px] md:text-base leading-snug">NIM Academy works as a long-term learning partner to help organizations continuously upskill their teams and stay competitive in the digital era.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-14 pt-10 border-t border-white/5">
            <h3 className="text-base font-medium text-white mb-8 uppercase tracking-widest opacity-40">College in Collaboration</h3>
            
            {/* Mobile View logos */}
            <div className="md:hidden flex flex-wrap gap-8 justify-center items-center opacity-70 grayscale invert">
              <img src="/home/coll-1.png" alt="DMI" className="h-10 object-contain" />
              <img src="/home/coll-2.png" alt="NICHE" className="h-10 object-contain" />
              <img src="/home/coll-3.png" alt="Satyam" className="h-10 object-contain" />
              <img src="/home/coll-4.png" alt="St. Xaviers" className="h-10 object-contain" />
              <img src="/home/coll-5.png" alt="Arunachala" className="h-10 object-contain" />
            </div>

            {/* Desktop View logos */}
            <div className="hidden md:flex flex-wrap gap-12 justify-center items-center opacity-50 grayscale invert">
              <img src="/home/coll-1.png" alt="DMI" className="h-16 object-contain" />
              <img src="/home/coll-2.png" alt="NICHE" className="h-16 object-contain" />
              <img src="/home/coll-3.png" alt="Satyam" className="h-16 object-contain" />
              <img src="/home/coll-4.png" alt="St. Xaviers" className="h-16 object-contain" />
              <img src="/home/coll-5.png" alt="Arunachala" className="h-16 object-contain" />
            </div>
          </div>
          
          <div className="mt-10 flex justify-center md:hidden">
            <button className="w-full text-black border bg-[#b8ef43] border-white/60 rounded-[2px] px-6 py-4 font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
