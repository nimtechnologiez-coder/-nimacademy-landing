"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const TOOLS = [
  // AI & Machine Learning
  { id: "tool-1", name: "ChatGPT", caption: "AI Assisted Development", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", isDark: true, bgColor: "bg-white" },
  { id: "tool-2", name: "TensorFlow", caption: "Machine Learning", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", isDark: false, bgColor: "bg-orange-50" },
  { id: "tool-3", name: "PyTorch", caption: "Deep Learning", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", isDark: false, bgColor: "bg-red-50" },
  { id: "tool-4", name: "Hugging Face", caption: "AI Models & Datasets", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", isDark: false, bgColor: "bg-yellow-50" },
  
  // Development Tools & Cloud
  { id: "tool-5", name: "VS Code", caption: "Code Editor", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", isDark: false, bgColor: "bg-blue-50" },
  { id: "tool-6", name: "GitHub", caption: "Version Control", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", isDark: true, bgColor: "bg-slate-100" },
  { id: "tool-7", name: "Docker", caption: "Containerized Applications", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", isDark: false, bgColor: "bg-sky-50" },
  { id: "tool-8", name: "Postman", caption: "API Testing", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png", isDark: false, bgColor: "bg-orange-50" },
  { id: "tool-9", name: "AWS", caption: "Cloud Deployment", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", isDark: false, bgColor: "bg-amber-50" },
  { id: "tool-10", name: "Vercel", caption: "Frontend Deployment", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg", isDark: true, bgColor: "bg-white" },

  // Frontend & Data Analytics
  { id: "tool-11", name: "React", caption: "Modern UI Development", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", isDark: false, bgColor: "bg-cyan-50" },
  { id: "tool-12", name: "Next.js", caption: "Full Stack Framework", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", isDark: true, bgColor: "bg-white" },
  { id: "tool-13", name: "Tailwind CSS", caption: "Modern CSS Framework", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", isDark: false, bgColor: "bg-teal-50" },
  { id: "tool-14", name: "Python", caption: "Data & AI Development", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", isDark: false, bgColor: "bg-blue-50" },
  { id: "tool-15", name: "Power BI", caption: "Data Visualization", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", isDark: false, bgColor: "bg-yellow-50" },
];

export default function ToolsGrid() {
  const [cards, setCards] = useState(TOOLS);

  // Swipe logic for the top card
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // If swiped far enough left or right
    if (Math.abs(info.offset.x) > 100) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const swipedCard = newCards.shift();
        if (swipedCard) {
          // Send it to the back of the queue
          newCards.push(swipedCard);
        }
        return newCards;
      });
    }
  };

  return (
    <section 
      data-section-theme="dark" 
      className="w-full bg-black font-sans relative border-y border-white/10 py-16 md:py-24 overflow-hidden"
    >
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] relative md:border-x border-white/10">
        <div className="px-4 md:px-0 md:pl-[60px] md:pr-[60px] relative z-10">
          
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <p className="text-primary text-[14px] tracking-[2px] font-bold uppercase mb-4">
              TECHNOLOGIES YOU WILL MASTER
            </p>
            <h2 className="text-white text-[30px] md:text-[48px] leading-[1.1] font-bold max-w-4xl">
              Master the Tools Powering the Future of Technology
            </h2>
            <p className="hidden md:block text-white/60 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
              At NIM Academy, you don't just learn theory. You work with the same tools used by professional developers, data analysts, and AI engineers in real-world projects.
            </p>
          </div>

          {/* ========================================= */}
          {/* MOBILE VIEW: SWIPEABLE CARDS              */}
          {/* ========================================= */}
          <div className="block md:hidden relative w-[85%] max-w-[280px] mx-auto h-[350px] mt-8 mb-8">
            <AnimatePresence>
              {cards.slice(0, 6).reverse().map((tool, idx) => {
                // Reverse calculation: idx 5 is the top card (idx 0 of slice)
                const isTopCard = idx === 5;
                const offset = 5 - idx; // 0 for top, 1 for second, etc.
                
                return (
                  <motion.div
                    key={tool.id}
                    className={`absolute w-full h-full rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 border border-white/5 ${tool.bgColor}`}
                    style={{
                      transformOrigin: "bottom center",
                      zIndex: isTopCard ? 10 : 9 - offset,
                    }}
                    initial={{ scale: 0.95, y: 30, opacity: 0 }}
                    animate={{ 
                      scale: 1 - offset * 0.05,
                      y: offset * 18,
                      // Staggered tilt like in the user's HTML request (translateX/Y, rotate)
                      x: offset % 2 === 0 ? offset * 6 : -offset * 6,
                      rotate: offset % 2 === 0 ? offset * 2.5 : -offset * 2.5,
                      opacity: 1 
                    }}
                    exit={{ x: 300, opacity: 0, transition: { duration: 0.2 } }}
                    drag={isTopCard ? "x" : false}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    onDragEnd={isTopCard ? handleDragEnd : undefined}
                    whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                  >
                    <div className="w-24 h-24 mb-6 relative">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className={`object-contain w-full h-full drop-shadow-sm pointer-events-none ${tool.isDark ? 'opacity-90' : ''}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2 pointer-events-none text-center">{tool.name}</h3>
                    <p className="text-primary font-bold uppercase tracking-wide text-xs text-center pointer-events-none">
                      {tool.caption}
                    </p>
                    
                    {isTopCard && (
                      <div className="absolute bottom-4 text-black/30 text-[10px] font-bold animate-pulse uppercase tracking-[0.2em] pointer-events-none flex items-center gap-2">
                        ← Swipe →
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ========================================= */}
          {/* DESKTOP VIEW: 15-ITEM GRID                */}
          {/* ========================================= */}
          <div className="hidden md:block space-y-6">
            
            {/* Grid Generation */}
            {[0, 1, 2].map((rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-6">
                {TOOLS.slice(rowIndex * 5, (rowIndex + 1) * 5).map((tool) => (
                  <div 
                    key={tool.id} 
                    className="relative h-[140px] bg-white/[0.03] hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden cursor-pointer flex flex-col items-center justify-center p-4 group"
                  >
                    <div className="w-14 h-14 mb-2 group-hover:-translate-y-2 transition-transform duration-300 relative">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className={`object-contain w-full h-full ${tool.isDark ? 'invert grayscale brightness-200' : ''}`}
                      />
                    </div>
                    <div className="text-white/60 font-medium text-sm transition-opacity duration-300 group-hover:opacity-0">
                      {tool.name}
                    </div>
                    
                    {/* Hover Caption Overlay */}
                    <div className="absolute bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider text-center block max-w-[100px] leading-tight">
                        {tool.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Empty Spacer Row (Design Requirement) */}
            <div className="grid grid-cols-5 gap-6 h-[80px] opacity-20 mt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={`spacer-${i}`} className="bg-transparent border border-white/20 border-dashed rounded-2xl"></div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}


