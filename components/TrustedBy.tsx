"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  "TCS", "Infosys", "Zoho", "HCL", "Cognizant", "Capgemini", "Amazon", "Wipro"
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm mb-12"
        >
          Our Students Work At Leading Tech Companies
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="text-3xl font-black text-gray-300 group-hover:text-secondary group-hover:grayscale-0 grayscale transition-all duration-300 font-sans tracking-tighter">
                {name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
