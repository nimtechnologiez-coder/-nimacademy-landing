"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseHero from "@/components/CourseHero";
import CoursePrograms from "@/components/CoursePrograms";
import WhyChooseNIM from "@/components/WhyChooseNIM";
import LearningModes from "@/components/LearningModes";
import Prepare2026 from "@/components/Prepare2026";
import FinalCTA from "@/components/FinalCTA";
import PageLoader from "@/components/PageLoader";

export default function CoursesPage() {
  return (
    <main className="bg-black min-h-screen">
      <PageLoader />
      <Navbar />
      <CourseHero />
      <CoursePrograms />
      <Prepare2026 />
      <WhyChooseNIM />
      <LearningModes />
      <FinalCTA />
      <Footer />
    </main>
  );
}
