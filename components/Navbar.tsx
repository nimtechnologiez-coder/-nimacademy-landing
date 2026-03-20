"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "NIM Connect", href: "/connect" },
  { name: "Internship", href: "/internship" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-[110] flex items-center">
          <Image
            src="/images/nim_logo.png"
            alt="NIM Academy Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-[#A7DF58] transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link
            href="#apply"
            className="bg-[#A7DF58] hover:bg-[#96c94f] text-black px-6 py-2.5 rounded-[2px] text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(167,223,88,0.3)] hover:shadow-[0_0_30px_rgba(167,223,88,0.5)]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white relative z-[110]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      </nav>

      {/* Premium Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] lg:hidden"
          >
            {/* Backdrop Blur Overlay */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85vw] sm:w-[350px] bg-[#050505]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex-1 overflow-y-auto pt-24 pb-8 px-8 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 hover:text-[#A7DF58] text-xl font-bold tracking-widest uppercase transition-colors block py-2 border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 space-y-6"
                >
                  <Link
                    href="#apply"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-[#A7DF58] text-black px-6 py-4 rounded-[2px] text-sm font-black tracking-widest uppercase transition-transform active:scale-95"
                  >
                    Apply Now →
                  </Link>

                  <div className="bg-white/5 p-6 rounded-[2px] border border-white/5 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Direct Contact</p>
                    <a href="tel:+917418855108" className="flex items-center gap-3 text-white/80 hover:text-[#A7DF58]">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">📞</div>
                      <span className="text-sm font-bold tracking-wider">+91 74188 55108</span>
                    </a>
                    <a href="mailto:contactnimacademy@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-[#A7DF58]">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">✉️</div>
                      <span className="text-[11px] font-bold tracking-wider">contactnimacademy@gmail.com</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
