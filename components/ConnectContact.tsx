"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Globe, Instagram, MapPin, ArrowRight } from "lucide-react";

const contactItems = [
  { icon: <Phone size={20} />, label: "Call Us", val: "+91 99443 37777" },
  { icon: <Mail size={20} />, label: "Email", val: "connect@nimacademy.com" },
  { icon: <MessageSquare size={20} />, label: "Live Chat", val: "Available 24/7" },
  { icon: <Globe size={20} />, label: "Website", val: "www.nimacademy.com" },
  { icon: <Instagram size={20} />, label: "Instagram", val: "@nim_academy" },
  { icon: <MapPin size={20} />, label: "Location", val: "South India" }
];

export default function ConnectContact() {
  return (
    <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Column: Content & CTA */}
          <div className="lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-[80px] font-display font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                Let&apos;s Build the <br />
                <span className="text-primary italic">Future Together</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                If you&apos;re a college or university looking to prepare your students for the next era of technology, 
                partner with NIM Academy — the most trusted EdTech collaborator in South India.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <button className="group flex items-center gap-3 bg-white text-black font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm hover:bg-primary transition-all active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                  Partner With Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-white/10 overflow-hidden ring-2 ring-white/5 relative">
                      <img src="/images/student1.png" alt="Partner" className="w-full h-full object-cover grayscale" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-black bg-primary flex items-center justify-center text-[10px] font-bold text-black relative z-10 shadow-lg">
                    50+
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all group flex flex-col items-start rounded-sm"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-white group-hover:text-primary transition-colors border border-white/5">
                    {item.icon}
                  </div>
                  <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-lg font-bold tracking-tight">
                    {item.val}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
