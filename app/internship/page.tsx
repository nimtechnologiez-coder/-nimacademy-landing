"use client";

import React from "react";
import InternshipHero from "@/components/InternshipHero";
import InternshipDomains from "@/components/InternshipDomains";
import InternshipShowcase from "@/components/InternshipShowcase";
import InternshipProcess from "@/components/InternshipProcess";
import InternshipDetails from "@/components/InternshipDetails";
import InternshipFAQ from "@/components/InternshipFAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden">
      {/* Global Premium Noise Texture Overlay */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <Navbar />
      <InternshipHero />
      <InternshipDomains />
      <InternshipShowcase />
      <InternshipProcess />
      <InternshipDetails />
      <InternshipFAQ />
    </main>
  );
}
