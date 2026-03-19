"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";

const videos = [
  { id: 1, title: "Academy Morning Sync", duration: "0:45", thumbnail: "/images/IMG_1412.JPG.jpeg", src: "/images/IMG_1465.MOV" },
  { id: 2, title: "Workspace Tour", duration: "1:20", thumbnail: "/images/IMG_1414.JPG.jpeg", src: "/images/IMG_1508.MOV" },
  { id: 3, title: "Building in Public", duration: "2:05", thumbnail: "/images/IMG_1415.JPG.jpeg", src: "/images/IMG_1510.MOV" },
  { id: 4, title: "Live Demo Highlights", duration: "1:10", thumbnail: "/images/IMG_1470.JPG.jpeg", src: "/images/IMG_1582.MOV" },
];

interface GalleryVideosProps {
  onOpenLightbox: (src: string) => void;
}

export default function GalleryVideos({ onOpenLightbox }: GalleryVideosProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="w-full bg-[#08090A] py-24 md:py-40 relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A7DF58]/5 blur-[150px] pointer-events-none" />
      
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="md:px-[60px] px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 text-[#A7DF58] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] border border-white/10">
                Motion Highlights
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
                ACADEMY <br />
                <span className="text-white/20 italic">IN MOTION</span>
              </h2>
            </div>
            <p className="text-white/40 text-base md:text-xl max-w-sm leading-relaxed font-medium">
              A cinematic look into our tech events, masterclasses, and student success stories.
            </p>
          </div>

          <div 
             ref={scrollRef}
             className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x"
          >
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative min-w-[320px] md:min-w-[500px] aspect-video rounded-[20px] overflow-hidden group cursor-pointer snap-center border border-white/10"
                onClick={() => onOpenLightbox(video.src)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Visual Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-[#A7DF58] group-hover:border-[#A7DF58] group-hover:scale-110 transition-all duration-500">
                      <Play className="w-8 h-8 text-white group-hover:text-black fill-current" />
                   </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-white font-bold text-xl uppercase tracking-tighter mb-1">{video.title}</h4>
                      <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                         <PlayCircle className="w-3 h-3" />
                         <span>Watch Video • {video.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-8 left-8 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#A7DF58] animate-pulse" />
                   <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">NIM Cinema 4K</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Horizontal Scroll Indicator */}
      <div className="h-[1px] w-full bg-white/10 mt-12 relative overflow-hidden">
         <motion.div 
            style={{ 
               width: "25%", 
               background: "#A7DF58" 
            }}
            whileInView={{ x: ["0%", "300%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="h-full"
         />
      </div>
    </section>
  );
}
