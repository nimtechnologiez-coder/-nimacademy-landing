"use client";

import React from "react";

export default function AdvancedPrograms() {
  return (
    <section data-section-theme="light" className="w-full font-sans bg-[#FAF9F6]" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)", borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] py-8 md:py-16">
          <div className="mb-8 md:mb-12">
            <p className="text-primary text-xs md:text-[16px] tracking-[1.75px] leading-[160%] font-bold uppercase mb-2 md:mb-4">
              EXPLORE OUR PROGRAMS
            </p>
            <h2 className="text-black text-[24px] md:text-[38px] leading-[120%] font-bold uppercase tracking-tighter">
              Choose the Right <span className="text-primary italic">Program</span> to Start Your Tech Career
            </h2>
          </div>



          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Course Card 1 */}
              <div className="course-card group relative w-full md:w-[50%] overflow-hidden cursor-pointer" style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "2px" }}>
                <img
                  src="/images/images.jpg"
                  alt="Full Stack Development Program"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white z-10">
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">Full Stack Development Program</h3>
                  <p className="text-xs md:text-base max-w-[85%] md:max-w-[80%] font-normal text-white/60 mb-4 md:mb-6 leading-relaxed">
                    Learn to build modern web applications using HTML, CSS, JavaScript, React, Node.js, and databases through real-world projects.
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-6">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/Clock.svg" alt="Duration" className="w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-[10px] md:text-base font-normal text-white/70">6 Months</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/Monitor.svg" alt="Mode" className="w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-[10px] md:text-base font-normal text-white/70">Online / Offline</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/country.svg" alt="Level" className="w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-[10px] md:text-base font-normal text-white/70">Beginner to Advanced</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="course-card group relative w-full md:w-[50%] overflow-hidden cursor-pointer" style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "2px" }}>
                <img
                  src="/images/how-artificial-intelligence-is-shaping-data-analytics.jpg"
                  alt="Artificial Intelligence & Data Analytics"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white z-10">
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">Artificial Intelligence & Data Analytics</h3>
                  <p className="text-xs md:text-base max-w-[85%] md:max-w-[80%] font-normal text-white/60 mb-4 md:mb-6 leading-relaxed">
                    Master Python, Machine Learning, AI tools, and data analytics technologies used by modern companies.
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-6">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/Clock.svg" alt="Duration" className="w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-[10px] md:text-base font-normal text-white/70">4–6 Months</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/Monitor.svg" alt="Mode" className="w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-[10px] md:text-base font-normal text-white/70">Hybrid Learning</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/country.svg" alt="Level" className="w-4 h-4 md:w-6 md:h-6" />
                      <span className="text-[10px] md:text-base font-normal text-white/70">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Banner Card */}
            <div>
              <div className="course-card relative w-full overflow-hidden md:h-[250px] bg-black group cursor-pointer" style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "2px" }}>
                <img src="/images/images (1).jpg" alt="Not Sure Which Program to Choose?" className="hidden md:block w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <img src="/images/images (1).jpg" alt="Not Sure Which Program to Choose?" width={768} height={512} className="block md:hidden w-full h-auto object-cover opacity-50" />

                <div className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-1/2 flex flex-col justify-end md:justify-center px-4 md:px-12 pb-4 md:pb-4 z-10">
                  <h3 className="text-white text-xl md:text-3xl font-bold mb-2 md:mb-3">Not Sure Which Program to Choose?</h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6">
                    Talk to our mentors and discover the best learning path for your career.
                  </p>
                  <button className="px-6 py-3 bg-primary hover:bg-lime-300 text-black font-bold uppercase tracking-wider rounded transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(184,239,67,0.2)] w-fit text-sm md:text-base">
                    Book Free Career Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
