"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section id="map" className="bg-black py-20 px-6 md:px-[60px] border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/3 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Location Archive</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-none mb-6">
                Visit Our <br /><span className="text-white/40 italic">Innovation Hub.</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                Our Innovation Hub is now centrally located in Nagercoil, designed for deep learning, collaboration, and technical excellence.
              </p>
            </motion.div>

            <div className="space-y-6 pt-6">
              <div className="flex gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-[2px]">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">NIM Academy HQ</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    1st Floor, Rajakkamangalam Rd, <br />
                    opposite to Industry, Nagercoil 629004
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[450px] md:h-[600px] border border-white/10 p-2 rounded-[2px] relative group"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.445!2d77.410!3d8.163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f100351fe747%3A0x5f87825bdaaf104a!2sNim%20Academy!5e0!3m2!1sen!2sin!4v1710845000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="NIM Academy Location"
              className="rounded-[2px]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
