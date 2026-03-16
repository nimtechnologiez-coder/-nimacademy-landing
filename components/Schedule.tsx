"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const scheduleItems = [
  {
    id: "01",
    title: "PROGRAM FOUNDATIONS",
    time: "MODULE 1 • FOUNDATIONS",
    heading: "Program Foundations",
    description: "Build a strong foundation in programming, problem solving, and modern development tools.",
    image: "/images/hero2.png",
    points: [
      "Understand programming fundamentals and development workflows",
      "Learn Git, version control, and collaboration tools",
      "Introduction to web technologies and system architecture",
      "Learn how software applications work from front to back",
      "Understand modern developer tools and environments",
      "Build your first simple application"
    ]
  },
  {
    id: "02",
    title: "FRONTEND DEVELOPMENT",
    time: "MODULE 2 • FRONTEND",
    heading: "Frontend Development",
    description: "Learn how to build modern responsive user interfaces and interactive web applications.",
    image: "/images/project1.png",
    points: [
      "Master HTML5, CSS3, and modern layout systems",
      "Build responsive interfaces using modern frameworks",
      "Learn JavaScript fundamentals and ES6 concepts",
      "Understand DOM manipulation and UI logic",
      "Work with modern frontend frameworks like React",
      "Build dynamic and interactive user interfaces"
    ]
  },
  {
    id: "03",
    title: "BACKEND & DATABASE SYSTEMS",
    time: "MODULE 3 • BACKEND",
    heading: "Backend Development & Databases",
    description: "Build the backend systems that power modern web applications and APIs.",
    image: "/images/project2.png",
    points: [
      "Understand server-side development concepts",
      "Build APIs using Node.js or modern backend frameworks",
      "Learn database design and data management",
      "Work with SQL and NoSQL databases",
      "Handle authentication and secure APIs",
      "Deploy backend services to cloud platforms"
    ]
  },
  {
    id: "04",
    title: "AI & DATA TECHNOLOGIES",
    time: "MODULE 4 • AI & DATA",
    heading: "Artificial Intelligence & Data Technologies",
    description: "Learn modern AI tools and data technologies used in today's tech industry.",
    image: "/images/hero3.png",
    points: [
      "Introduction to Artificial Intelligence and Machine Learning",
      "Use modern AI tools and automation workflows",
      "Work with Python for data analysis and AI applications",
      "Learn data visualization and insights generation",
      "Understand how AI integrates into modern applications",
      "Build simple AI-powered tools and workflows"
    ]
  },
  {
    id: "05",
    title: "PROJECTS & CAREER PREPARATION",
    time: "MODULE 5 • CAREER PREP",
    heading: "Industry Projects & Career Preparation",
    description: "Apply your skills through real-world projects and prepare for tech careers.",
    image: "/images/hero1.png",
    points: [
      "Build complete real-world projects from start to finish",
      "Create a professional developer portfolio",
      "Learn software development best practices",
      "Prepare for technical interviews and coding assessments",
      "Understand industry workflows and team collaboration",
      "Get career guidance and placement preparation support"
    ]
  }
];

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when the item is roughly in the upper-middle of the screen
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveTab(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const target = itemRefs.current[index];
    if (target) {
      const offset = 100; // Offset for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="curriculum" className="w-full bg-white font-sans border-y border-black/10">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/10">
        <div className="z-10 bg-white px-4 md:px-0 md:pl-[60px] pt-14 pb-8 border-b border-black/10">
          <p className="text-primary text-[14px] tracking-[2px] font-bold uppercase mb-4">
            LEARNING JOURNEY
          </p>
          <h2 className="text-black text-[30px] md:text-[42px] leading-[1.1] font-bold">
            Industry-Focused Curriculum That Builds Real Skills
          </h2>
          <p className="text-black/60 text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
            Our programs are designed to take you from fundamentals to advanced industry projects. Learn step-by-step with practical training, mentorship, and real-world applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-0">
          {/* Sidebar Tabs - Fixed on Desktop */}
          <div className="md:w-[35%] py-8 hidden md:block px-[60px]">
            <div className="sticky top-[150px] space-y-6">
              {scheduleItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(index)}
                  className={cn(
                    "flex gap-4 transition-all duration-500 text-left group w-full relative py-2",
                    activeTab === index 
                      ? "text-black translate-x-2" 
                      : "text-black/20 hover:text-black/40"
                  )}
                >
                  {activeTab === index && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full transition-all duration-300"
                    />
                  )}
                  <span className={cn(
                    "text-sm font-bold transition-all duration-500",
                    activeTab === index ? "text-primary" : ""
                  )}>{item.id}</span>
                  <p className="text-[13px] font-bold uppercase tracking-widest leading-tight">
                    {item.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="md:w-[65%] border-l border-black/10">
            <div className="p-0">
              {scheduleItems.map((item, index) => (
                <div 
                  key={item.id} 
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={cn(
                    "curriculum-card border-b border-black/10 last:border-b-0 transition-all duration-700",
                    activeTab === index ? "bg-black/[0.01]" : ""
                  )}
                >
                  <div className="relative h-[240px] md:h-[320px] overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-1000",
                        activeTab === index ? "scale-105" : "grayscale opacity-50"
                      )}
                    />
                    <div className={cn(
                      "absolute inset-0 transition-colors duration-700",
                      activeTab === index ? "bg-black/40" : "bg-black/80"
                    )} />
                    <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-white">
                      <p className="text-[10px] md:text-xs font-bold tracking-[2.5px] uppercase mb-3 text-primary">
                        {item.time}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {item.heading}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="py-10 px-6 md:px-12 space-y-6">
                    {item.points.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4 group/point">
                        <div className={cn(
                          "mt-1.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500",
                          activeTab === index ? "border-primary bg-primary/10" : "border-black/10"
                        )}>
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full transition-all duration-500",
                            activeTab === index ? "bg-primary" : "bg-black/10"
                          )} />
                        </div>
                        <p className={cn(
                          "text-sm md:text-base leading-relaxed transition-all duration-500",
                          activeTab === index ? "text-black font-medium" : "text-black/50"
                        )}>
                          {point}
                        </p>
                      </div>
                    ))}
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
