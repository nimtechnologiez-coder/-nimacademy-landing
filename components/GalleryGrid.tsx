"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Search } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  size: "small" | "medium" | "large";
}

const galleryData: GalleryItem[] = [
  { id: 1, title: "Classroom Collaboration", description: "Students working together on complex problem sets.", category: "Classroom", size: "large", image: "/images/IMG_1412.JPG.jpeg" },
  { id: 2, title: "Tech Workshop", description: "Hands-on session with the latest building tools.", category: "Workshops", size: "small", image: "/images/IMG_1414.JPG.jpeg" },
  { id: 3, title: "Team Building", description: "Collaborative growth and peer learning moments.", category: "Internships", size: "medium", image: "/images/IMG_1415.JPG.jpeg" },
  { id: 4, title: "Project Showcase", description: "Displaying innovative creations to the cohort.", category: "Projects", size: "large", image: "/images/IMG_1470.JPG.jpeg" },
  { id: 5, title: "Learning in Action", description: "Deep focus during an intensive coding sprint.", category: "Classroom", size: "small", image: "/images/IMG_1949.JPG.jpeg" },
  { id: 6, title: "Placement Success", description: "Celebrating the journey to professional excellence.", category: "Placements", size: "medium", image: "/images/IMG_1976.JPG.jpeg" },
  { id: 7, title: "Collaborative Coding", description: "Breaking down complex system architectures.", category: "Workshops", size: "medium", image: "/images/IMG_2269.JPG.jpeg" },
  { id: 8, title: "Academy Life", description: "Daily interactions and networking in the hub.", category: "Events", size: "small", image: "/images/IMG_3199.JPG.jpeg" },
  { id: 9, title: "Future Builders", description: "Ready to scale projects for real-world impact.", category: "Projects", size: "large", image: "/images/IMG_3201.JPG.jpeg" },
];

interface GalleryGridProps {
  activeCategory: string;
  onOpenLightbox: (image: string) => void;
}

export default function GalleryGrid({ activeCategory, onOpenLightbox }: GalleryGridProps) {
  const filteredItems = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section className="w-full bg-[#F8FAFC] py-24 md:py-32 overflow-hidden px-4">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-[#080910]/5 min-h-[800px]">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 md:px-[60px] px-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative break-inside-avoid overflow-hidden rounded-[20px] cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-black/5"
                onClick={() => onOpenLightbox(item.image)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-[0px] group-hover:backdrop-blur-[4px] transition-all duration-700 flex flex-col justify-end p-8">
                     <div className="translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                        <div className="inline-flex px-3 py-1 bg-[#A7DF58] text-black text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full">
                           {item.category}
                        </div>
                        <h3 className="text-white text-2xl font-bold uppercase tracking-tighter leading-none mb-2">
                           {item.title}
                        </h3>
                        <p className="text-white/80 text-sm font-medium leading-tight">
                           {item.description}
                        </p>
                        
                        <div className="mt-6 flex items-center gap-4 text-[#A7DF58]">
                           <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#A7DF58] hover:text-black transition-colors bg-white/10 backdrop-blur-md">
                              <Search className="w-4 h-4" />
                           </div>
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">View Impact</span>
                        </div>
                     </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 flex items-center justify-center rounded-full">
                     <Maximize2 className="text-white w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
