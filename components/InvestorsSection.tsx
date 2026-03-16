"use client";

import React from "react";
import { motion } from "framer-motion";

const investors = [
  { name: "Justin Caldbeck", role: "Investor at SpaceX, Uber", image: "/home/ni7.webp" },
  { name: "Kunal Shah", role: "Founder at Cred", image: "/home/ni6.webp" },
  { name: "Eric Siu", role: "Founder at SingleGrain", image: "/home/ni5.webp" },
  { name: "Ankit Jain", role: "GenAI Leader, Meta", image: "/home/ni2.webp" },
  { name: "Austen Alred", role: "Founder at Gauntlet AI", image: "/home/ni4.webp" },
  { name: "Shaan Puri", role: "Entrepreneur & Investor", image: "/home/ni3.webp" },
  { name: "Tanmay Bhat", role: "Creator & Investor", image: "/home/ni1.webp" },
];

export default function InvestorsSection() {
  return (
    <section className="bg-black py-20 font-sans border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-l border-r border-white/20 py-16">
        <div className="md:pl-12">
          <div className="mb-12">
            <h2 className="text-white text-xl md:text-2xl font-medium leading-tight mb-4">
              With the trust of 80+ Angel Investors, we're building futures together
            </h2>
            <p className="text-white/50 text-base md:text-lg">
              Backed by the founders behind the world's leading companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {investors.map((investor, i) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[2px] border border-white/20 p-3 bg-[#141414] hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 aspect-square bg-[#08090A] rounded overflow-hidden">
                  <div className="w-full h-full bg-white/5 animate-pulse group-hover:bg-primary/10" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{investor.name}</h3>
                <p className="text-white/40 text-[10px] leading-snug">{investor.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-white text-base font-medium mb-4">Elevate your Professional Network</h3>
            <p className="text-white/50 text-sm mb-8">Discover Your Place Among Professionals from Leading Brands</p>
            <div className="flex flex-wrap gap-12 items-center opacity-50 grayscale">
              <div className="text-white font-bold text-xl">UBER</div>
              <div className="text-white font-bold text-xl">META</div>
              <div className="text-white font-bold text-xl">GOOGLE</div>
              <div className="text-white font-bold text-xl">TATA</div>
              <div className="text-white font-bold text-xl">CRED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
