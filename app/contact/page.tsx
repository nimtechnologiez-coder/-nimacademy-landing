"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />

      {/* 1️⃣ HERO SECTION */}
      <ContactHero />

      {/* 2️⃣ QUICK CONTACT OPTIONS */}
      <ContactCards />

      {/* 3️⃣ FOCUSED FORM SECTION */}
      <section className="py-20 px-6 md:px-[60px] bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Transmission Hub</h2>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
              Send Us a <span className="text-white/40 italic">Direct Message.</span>
            </h3>
            <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
              Complete the specialized architect inquiry form below. Our response protocols ensure a lead engineer reviews every transmission.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* 4️⃣ GOOGLE MAP */}
      <ContactMap />

      {/* 5️⃣ FINAL CTA */}
      <ContactCTA />

      {/* STICKY WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/917418855108"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.943-.708-1.799 0-.856.448-1.277.607-1.45.159-.172.346-.215.461-.215.115 0 .23 0 .331.005.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.115-.087.188-.173.289l-.26.303c-.087.101-.177.211-.077.382.1.172.443.731.95 1.183.654.583 1.203.764 1.375.85s.269.058.369-.058c.1-.115.433-.505.549-.678.115-.172.231-.144.389-.087.158.058 1.011.477 1.184.563.173.087.288.13.332.202s.1.419-.044.825z" />
        </svg>
        <span className="absolute right-full mr-4 px-4 py-2 bg-black/80 backdrop-blur shadow-xl border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded-[2px] pointer-events-none">
          Click to chat with advisor
        </span>
      </motion.a>
    </main>
  );
}
