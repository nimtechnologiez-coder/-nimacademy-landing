"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    info: "+91 97782 50570",
    link: "tel:+919778250570",
    color: "#A7DF58"
  },
  {
    icon: <MessageCircle size={24} />,
    title: "WhatsApp",
    info: "Chat with Experts",
    link: "https://wa.me/919778250570",
    color: "#25D366"
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    info: "support@nimacademy.com",
    link: "mailto:support@nimacademy.com",
    color: "#0299B6"
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Campus",
    info: "Kozhikode, Kerala",
    link: "#map",
    color: "#FFFFFF"
  }
];

export default function ContactCards() {
  return (
    <section className="bg-black py-20 px-6 md:px-[60px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-[2px] transition-all hover:bg-white/[0.04] overflow-hidden"
            >
              {/* Animated Background Highlight */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: contact.color }}
              />
              
              <div className="relative z-10">
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-[2px] mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${contact.color}20`, color: contact.color }}
                >
                  {contact.icon}
                </div>
                <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  {contact.title}
                </h3>
                <p className="text-white text-xl font-bold tracking-tight">
                  {contact.info}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Action Required <span className="text-lg">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
