"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function CommunityExperience() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const slider = ref.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeftPos = slider.scrollLeft;
    let isDown = true;

    const handleMouseMove = (em: MouseEvent) => {
      if (!isDown) return;
      em.preventDefault();
      const x = em.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      slider.scrollLeft = scrollLeftPos - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="relative w-full bg-black text-white font-sans" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}>
      {/* Decorative side borders for desktop */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[153px] w-px bg-white/15 z-40 pointer-events-none"></div>
      <div className="hidden md:block absolute top-0 bottom-0 right-[153px] w-px bg-white/15 z-40 pointer-events-none"></div>

      {/* ========================================= */}
      {/* 1. TESTIMONIALS SLIDER SECTION            */}
      {/* ========================================= */}
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <div className="relative z-20 px-4 md:px-[60px] pt-12 md:pt-16 pb-6 md:pb-10">
          <p className="text-xs md:text-[16px] tracking-[1.75px] leading-[160%] font-normal uppercase text-white/70 mb-2 md:mb-3">
            STUDENT SUCCESS STORIES
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6 md:mb-10">
            <div className="flex-1">
              <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-2">
                Real Stories from Our Students
              </h2>
              <p className="text-white/50 text-sm md:text-base max-w-2xl">
                Hear how our students gained real skills, built projects, and started their journey in the tech industry.
              </p>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scrollLeft(testimonialsRef)}
                aria-label="Scroll testimonials left"
                className="w-10 h-10 border border-white/40 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scrollRight(testimonialsRef)}
                aria-label="Scroll testimonials right"
                className="w-10 h-10 bg-white text-black rounded flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed slider container */}
      <div className="relative z-50 w-full md:w-[100vw] md:ml-[calc(50%-50vw)] border-b border-white/15 pb-10">
        <div
          ref={testimonialsRef}
          onMouseDown={(e) => handleMouseDown(e, testimonialsRef)}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pl-4 pr-4 md:pl-[213px] md:pr-[120px] pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Custom CSS to hide scrollbar in WebKit browsers */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {[
            { name: "Arjun Nair", role: "Full Stack Developer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/68a6c89319535c52efc46796/thumbnail-1-0.png?v=1758041021781", url: "https://www.instagram.com/reel/DSuq-zVkV5D/?igsh=MTl3cHlwODZlZGgweQ==" },
            { name: "Priya Sharma", role: "Data Analyst", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/68a6c8e50a8c57042d4ec064/thumbnail-1-0.png?v=1758041056214", url: "https://www.instagram.com/reel/DP36idziA8C/?igsh=eHo2b3Rzajg0Yzln" },
            { name: "Rahul Menon", role: "Software Engineer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/68a6c8e519535c52efc46b0a/thumbnail-1-0.png?v=1758041093155", url: "https://www.instagram.com/reel/DTvNovKERaF/?igsh=c3Vvcjh4bXhnYWsy" },
            { name: "Aisha Khan", role: "AI Developer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f2ea3f1b28845d0e7a/thumbnail-1-0.png?v=1770983866577", url: "https://www.instagram.com/reel/DTdDX4mjd9w/?igsh=MWdha2M3cDAzdGlqcA==" },
            { name: "Vikram Patel", role: "Frontend Developer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f2ea3f1b28845d0e70/thumbnail-1-0.png?v=1770984197301", url: "https://www.instagram.com/reel/DSka48GjZSq/?igsh=MW5waDk1OHRrZXAzZg==" },
            { name: "Sneha Reddy", role: "Digital Marketing Specialist", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f2010c771aa5146131/thumbnail-1-0.png?v=1770984309313", url: "https://www.instagram.com/reel/DSRgoLvkR0U/?igsh=MXVtanpoNGgwcGdtbw==" },
            { name: "Karan Singh", role: "Backend Developer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f2010c771aa514612f/thumbnail-1-0.png?v=1770984354912", url: "https://www.instagram.com/reel/DSNJbLRkRVD/?igsh=MTdvcG1pazJoMDdudQ==" },
            { name: "Ananya Desai", role: "UI/UX Designer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f25b37057513b5fbe3/thumbnail-1-0.png?v=1770984387797", url: "https://www.instagram.com/reel/DR7Qb0kkYvP/?igsh=MWdxazJuYnczZHpmMw==" },
            { name: "Ravi Kumar", role: "Full Stack Developer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f25b37057513b5fbcd/thumbnail-1-0.png?v=1770984418245", url: "https://www.instagram.com/reel/DR4r0ZHEYvu/?igsh=MWc0eTRuMnNmNHFleA==" },
            { name: "Neha Gupta", role: "Data Analyst", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f25b37057513b5fbc9/thumbnail-1-0.png?v=1770984023495", url: "https://www.instagram.com/reel/DRZvZsFkVcM/?igsh=MW1scDk0bzEzMW91Nw==" },
            { name: "Suresh Iyer", role: "Software Engineer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f2ea3f1b28845d0e57/thumbnail-1-0.png?v=1770984218782", url: "https://www.instagram.com/reel/DRKTdZ8DfDd/?igsh=MWhlazllY2gwZWF0ag==" },
            { name: "Pooja Mehta", role: "AI Developer", poster: "https://video.gumlet.io/625c467afd368ceff39e7175/698f10f2ea3f1b28845d0e5a/thumbnail-1-0.png?v=1770984507743", url: "https://www.instagram.com/reel/DRFDlvRDaR8/?igsh=MWVkMXB4NDhxc3Fiaw==" },
          ].map((testimonial, idx) => (
            <a
              href={testimonial.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="w-[200px] md:w-[240px] h-[340px] md:h-[404px] flex-shrink-0 cursor-pointer rounded-[2px] overflow-hidden border border-[#D9D9D9]/40 relative group block"
            >
              <video
                className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0"
                preload="none"
                poster={testimonial.poster}
              ></video>

              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/osvideo.svg" alt="Play icon" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 md:p-4">
                <h3 className="text-white text-xs md:text-sm font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 text-[10px] md:text-xs">{testimonial.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px]" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <div className="relative z-20 pb-12 md:pb-20 space-y-12 md:space-y-24">

          {/* ========================================= */}
          {/* 2. OFFLINE IMMERSION EXPERIENCE           */}
          {/* ========================================= */}
          <div className="w-full py-6 px-4 md:px-[60px] pt-16">
            <div className="w-[100%] mx-auto">
              <div className="mb-8">
                <p className="text-[16px] tracking-[1.75px] leading-[160%] font-normal text-white uppercase mb-2">
                  REAL CLASSROOM EXPERIENCE
                </p>
                <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium text-white mb-4">
                  Experience Hands-On Learning at NIM Academy
                </h2>
                <p className="text-white/50 text-sm md:text-base max-w-2xl">
                  Our programs combine expert-led sessions, real projects, and collaborative learning to help students gain practical industry skills.
                </p>
              </div>

              <div className="relative w-full overflow-hidden rounded-[2px] border border-white/30" style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <div className="relative w-full aspect-video bg-black">
                  <img
                    src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/videothumb.webp"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button className="w-20 h-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none" aria-label="Play video">
                      <img src="https://d31bwppm8yl9g2.cloudfront.net/learner/outskill/osvideo.svg" alt="video play icon" className="w-12 h-12" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* 3. COMMUNITY IMAGE GRID SLIDER            */}
          {/* ========================================= */}
          <div className="w-full bg-black text-white overflow-hidden pb-6">
            <div className="flex justify-between items-center mb-10 px-4 md:px-[60px]">
              <div>
                <p className="uppercase text-white/60 mb-4 text-[16px] tracking-[1.75px] leading-[160%] font-normal">
                  OUR LEARNING COMMUNITY
                </p>
                <h2 className="text-[30px] md:text-[38px] leading-[120%] font-medium mb-5">
                  Learn Together, Grow Together
                </h2>
                <p className="text-white/50 max-w-xl text-sm md:text-base">
                  Connect with fellow learners, mentors, and alumni. Participate in workshops, coding sessions, and community events designed to help you grow together.
                </p>
              </div>
              <div className="hidden md:flex gap-3">
                <button
                  onClick={() => scrollLeft(communityRef)}
                  aria-label="Scroll community images left"
                  className="w-10 h-10 border border-white/40 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollRight(communityRef)}
                  aria-label="Scroll community images right"
                  className="w-10 h-10 bg-white text-black rounded flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="md:mx-0">
                <div
                  ref={communityRef}
                  onMouseDown={(e) => handleMouseDown(e, communityRef)}
                  className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide pl-4 pr-4 md:pl-[60px] md:pr-0 pb-4 cursor-grab active:cursor-grabbing select-none"
                >
                  {/* Rendering the complex masonry-style image blocks dynamically.
                      The user provided 6 repeating blocks of 3 columns of images.
                      We will map through a pattern to recreate the visual masonry. */}

                  {/* Array of actual local images for variety */}
                  {[
                    // Set 1
                    { col1: ['IMG_1412.JPG.jpeg', 'IMG_1414.JPG.jpeg'], col2: ['IMG_1415.JPG.jpeg', 'IMG_1470.JPG.jpeg'], col3: ['IMG_1949.JPG.jpeg', 'IMG_1976.JPG.jpeg'] },
                    // Set 2
                    { col1: ['IMG_2269.JPG.jpeg', 'IMG_3199.JPG.jpeg'], col2: ['IMG_3201.JPG.jpeg', 'IMG_3860.JPG.jpeg'], col3: ['IMG_4074.JPG.jpeg', 'IMG_4079.JPG.jpeg'] },
                    // Set 3
                    { col1: ['IMG_4597.JPG.jpeg', 'IMG_4740.JPG.jpeg'], col2: ['IMG_4984.JPG.jpeg', 'IMG_5002.JPG.jpeg'], col3: ['IMG_5195.JPG.jpeg', 'IMG_5200.JPG.jpeg'] },
                    // Set 4
                    { col1: ['IMG_5316.JPG.jpeg', 'IMG_5344.JPG.jpeg'], col2: ['IMG_5347.JPG.jpeg', 'IMG_5825.JPG.jpeg'], col3: ['IMG_5828.JPG.jpeg', 'IMG_5829.JPG.jpeg'] },
                  ].map((set, setIdx) => (
                    <div key={setIdx} className="flex gap-3 md:gap-6">

                      {/* Column 1: Tall then Short */}
                      <div className="flex flex-col gap-3 md:gap-6 w-[160px] md:w-[260px] flex-shrink-0">
                        <div className="h-[240px] md:h-[400px]">
                          <img src={`/images/${set.col1[0]}`} alt="Community learning" className="w-full h-full object-cover rounded-[2px] border border-white/30" loading="lazy" />
                        </div>
                        <div className="h-[110px] md:h-[180px]">
                          <img src={`/images/${set.col1[1]}`} alt="Community learning" className="w-full h-full object-cover rounded-[2px] border border-white/30" loading="lazy" />
                        </div>
                      </div>

                      {/* Column 2: Short then Tall */}
                      <div className="flex flex-col gap-3 md:gap-6 w-[160px] md:w-[260px] flex-shrink-0">
                        <div className="h-[110px] md:h-[180px]">
                          <img src={`/images/${set.col2[0]}`} alt="Community learning" className="w-full h-full object-cover rounded-[2px] border border-white/30" loading="lazy" />
                        </div>
                        <div className="h-[240px] md:h-[400px]">
                          <img src={`/images/${set.col2[1]}`} alt="Community learning" className="w-full h-full object-cover rounded-[2px] border border-white/30" loading="lazy" />
                        </div>
                      </div>

                      {/* Column 3: Wide Tall then Short */}
                      <div className="flex flex-col gap-3 md:gap-6 w-[200px] md:w-[380px] flex-shrink-0">
                        <div className="h-[240px] md:h-[400px]">
                          <img src={`/images/${set.col3[0]}`} alt="Community learning" className="w-full h-full object-cover rounded-[2px] border border-white/30" loading="lazy" />
                        </div>
                        <div className="h-[110px] md:h-[180px]">
                          <img src={`/images/${set.col3[1]}`} alt="Community learning" className="w-full h-full object-cover rounded-[2px] border border-white/30" loading="lazy" />
                        </div>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </div>
            {/* End of Community Grid */}

          </div>
        </div>
      </div>
    </div>
  );
}
