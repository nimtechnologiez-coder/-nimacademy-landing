"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const courseCategories = [
  {
    title: "Category 1 - Full Stack Development",
    courses: [
      {
        name: "Python Full Stack",
        description: "Build fast, scalable, and dynamic web apps using Python, Django, and modern frontend tools.",
        hours: "180 Hrs",
        timeframe: "3 months",
        image: "/images/prog_full_stack.png",
      },
      {
        name: "Java Full Stack",
        description: "Develop enterprise grade applications from backends to frontends using Java.",
        hours: "180 Hrs",
        timeframe: "3 months",
        image: "/images/hero1.png",
      },
      {
        name: "MERN Full Stack",
        description: "Create dynamic web experiences with Mongo, Express, React & Node.js Build fast and scalable.",
        hours: "230 Hrs",
        timeframe: "4 months",
        image: "/images/hero2.png",
      },
    ],
  },
  {
    title: "Category 2 - Data & Analysis",
    courses: [
      {
        name: "Data Analyst",
        description: "Master Excel, SQL, and Power BI to analyze data and present actionable insights.",
        hours: "180–200 Hrs",
        timeframe: "3.5 months",
        image: "/images/prog_data_analytics.png",
      },
      {
        name: "Business Analyst",
        description: "Connect business goals with data-driven strategies and effective decision-making.",
        hours: "200 Hrs",
        timeframe: "4 months",
        image: "/images/project1.png",
      },
      {
        name: "Digital Marketing",
        description: "Become a 360° marketer with hands-on SEO, advertising, and social media campaigns.",
        hours: "150 Hrs",
        timeframe: "2.5 months",
        image: "/images/prog_marketing.png",
      },
    ],
  },
  {
    title: "Category 3 - Design And Branding",
    courses: [
      {
        name: "Data Science",
        description: "Learn ML, Python, and AI tools to build intelligent, predictive models and apply to business problems.",
        hours: "350–400 Hrs",
        timeframe: "7 months",
        image: "/images/prog_portfolio.png",
      },
      {
        name: "AWS DevOps",
        description: "Learn cloud deployment, automation, and server management with real workflows.",
        hours: "180 Hrs",
        timeframe: "3 months",
        image: "/images/project2.png",
      },
      {
        name: "Product Design",
        description: "Bring ideas to life with research, wireframes, and high-fidelity prototypes.",
        hours: "180 Hrs",
        timeframe: "3 months",
        image: "/images/student1.png",
      },
    ],
  },
  {
    title: "Category 4 - Cloud And Digital",
    courses: [
      {
        name: "AI & ML Engineer",
        description: "Dive into Artificial Intelligence with applied ML models and automation projects.",
        hours: "180 Hrs",
        timeframe: "3 months",
        image: "/images/prog_ai_ml.png",
      },
      {
        name: "Cybersecurity Fundamentals",
        description: "Learn to protect systems, detect threats, and strengthen digital defenses.",
        hours: "180 Hrs",
        timeframe: "3 months",
        image: "/images/project3.png",
      },
      {
        name: "UI/UX Design",
        description: "Design engaging, user-focused interfaces that are both beautiful and functional.",
        hours: "120 Hrs",
        timeframe: "2 months",
        image: "/images/hero1.png",
      },
    ],
  },
];

export default function CoursePrograms() {
  return (
    <section id="courses-list" className="nim-course-programs bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-white/40 text-sm uppercase tracking-widest mb-4 font-bold border-l-2 border-primary pl-4">Our Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
            Explore Our <span className="text-primary italic">Intensive Programs</span>
          </h3>
          <p className="text-white/60 text-lg max-w-xl">
            Architected for the next generation of digital leaders. Choose your specialization and master industry-standard tools.
          </p>
        </div>

        <div className="space-y-24">
          {courseCategories.map((category, idx) => (
            <div key={idx} className="space-y-12">
              <h4 className="text-2xl font-display font-medium text-white border-b border-white/10 pb-4">
                {category.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course, cIdx) => (
                  <motion.div
                    key={cIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: cIdx * 0.1 }}
                    className="glass p-8 group relative overflow-hidden"
                  >
                    {/* Course Image */}
                    <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-[0.2em] mb-4">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Module_Active
                    </div>
                    
                    <h5 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {course.name}
                    </h5>
                    
                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                      {course.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-white/70">
                        <div className="p-2 bg-white/5 rounded-md text-primary">
                          <Clock size={16} />
                        </div>
                        <div className="text-xs">
                          <span className="text-white/40 block uppercase tracking-wider scale-90 -ml-1">Execution</span>
                          <span className="font-medium text-sm text-white">⏱️ {course.hours}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-white/70">
                        <div className="p-2 bg-white/5 rounded-md text-primary">
                          <Calendar size={16} />
                        </div>
                        <div className="text-xs">
                          <span className="text-white/40 block uppercase tracking-wider scale-90 -ml-1">Timeframes</span>
                          <span className="font-medium text-sm text-white">{course.timeframe}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-4 border border-white/10 text-white text-xs font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all flex items-center justify-center gap-2">
                      Initialize Program
                      <ArrowRight size={14} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
