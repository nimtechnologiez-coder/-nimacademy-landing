"use client";

import React, { useState } from "react";
import GalleryHero from "@/components/GalleryHero";
import GalleryFilter from "@/components/GalleryFilter";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryVideos from "@/components/GalleryVideos";
import GalleryStats from "@/components/GalleryStats";
import GalleryCTA from "@/components/GalleryCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxMedia, setLightboxMedia] = useState<{ type: "image" | "video", src: string } | null>(null);

  const categories = ["All", "Classroom", "Workshops", "Internships", "Events", "Projects", "Placements"];

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-[#A7DF58]/30 selection:text-black">
      <Navbar />

      <GalleryHero />

      <GalleryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <GalleryGrid
        activeCategory={activeCategory}
        onOpenLightbox={(src) => setLightboxMedia({ type: "image", src })}
      />

      <GalleryVideos
        onOpenLightbox={(src) => setLightboxMedia({ type: "video", src })}
      />

      <GalleryStats />

      <GalleryCTA />


      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
            onClick={() => setLightboxMedia(null)}
          >
            <button
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-[210]"
              onClick={() => setLightboxMedia(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-fit flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxMedia.type === "image" ? (
                <img
                  src={lightboxMedia.src}
                  alt="Enlarged View"
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-[20px] border border-white/10"
                />
              ) : (
                <video
                  src={lightboxMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-[20px] border border-white/10"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] contrast-150 brightness-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </main>
  );
}
