"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Full Stack Development",
    description: "Learn to build complete web applications using modern technologies like React, Node.js, and databases.",
    image: "/images/prog_full_stack.png",
    width: "md:w-[60%]",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Build intelligent applications using Python, machine learning models, and modern AI tools.",
    image: "/images/prog_ai_ml.png",
    width: "md:w-[40%]",
  },
  {
    title: "Data Analytics & Visualization",
    description: "Analyze data and create powerful insights using Python, Power BI, and modern analytics tools.",
    image: "/images/prog_data_analytics.png",
    width: "md:w-1/3",
  },
  {
    title: "Digital Marketing & Growth",
    description: "Master SEO, social media marketing, paid advertising, and AI marketing tools used by modern businesses.",
    image: "/images/prog_marketing.png",
    width: "md:w-1/3",
  },
  {
    title: "Real-World Projects & Portfolio",
    description: "Work on real industry projects and build a strong portfolio that helps you stand out in tech interviews.",
    image: "/images/prog_portfolio.png",
    width: "md:w-1/3",
  },
];

export default function ProgramSkills() {
  return (
    <section className="w-full bg-[#08090A] font-sans border-y border-white/20">
      <style jsx>{`
        @media (max-width: 767px) {
          .skill-card {
            filter: grayscale(0%) !important;
          }
        }
        @media (min-width: 1450px) {
          .skill-card {
            height: 570px !important;
          }
        }
      `}</style>

      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] py-20">
          <div className="mb-14">
            <p className="text-primary text-[14px] tracking-[2px] leading-[160%] font-bold uppercase mb-4">
              OUR PROGRAMS
            </p>
            <h2 className="text-white text-[32px] md:text-[48px] leading-[1.1] font-bold max-w-4xl">
              Programs Designed for the Future of Technology
            </h2>
            <p className="text-white/50 text-base md:text-xl mt-6 max-w-3xl leading-relaxed">
              Learn cutting-edge technologies with hands-on training, real industry projects, and expert mentorship designed to launch your career in the modern tech ecosystem.
            </p>
          </div>

          <div className="space-y-8">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {skills.slice(0, 2).map((skill, index) => (
                <div
                  key={index}
                  className={`skill-card group relative ${skill.width} h-[416px] rounded-[4px] overflow-hidden cursor-pointer transition-all duration-700 hover:grayscale-0 md:grayscale`}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    backgroundImage: `url('${skill.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700" />
                  <div className="relative h-full flex flex-col justify-end p-8 z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-[24px] md:text-[28px] font-bold leading-tight group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-white/60 text-[15px] md:text-lg leading-relaxed max-w-md">
                        {skill.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Learn More <span className="text-lg">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {skills.slice(2).map((skill, index) => (
                <div
                  key={index}
                  className={`skill-card group relative ${skill.width} h-[416px] rounded-[4px] overflow-hidden cursor-pointer transition-all duration-700 hover:grayscale-0 md:grayscale`}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    backgroundImage: `url('${skill.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700" />
                  <div className="relative h-full flex flex-col justify-end p-8 z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-tight group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-white/60 text-[14px] md:text-base leading-relaxed">
                        {skill.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Details <span className="text-lg">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
