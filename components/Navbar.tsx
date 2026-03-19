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
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-medium tracking-widest uppercase hover:text-[#A7DF58] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#A7DF58] text-black px-10 py-4 rounded-[2px] text-xl font-bold tracking-widest uppercase mt-4"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
