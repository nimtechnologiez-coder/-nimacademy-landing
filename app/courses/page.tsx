"use client";

import React from "react";
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
      <CourseHero />
      <CoursePrograms />
      <Prepare2026 />
      <WhyChooseNIM />
      <LearningModes />
      <FinalCTA />
    </main>
  );
}
