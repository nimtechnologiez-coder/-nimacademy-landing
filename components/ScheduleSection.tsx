"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sessions = [
  {
    id: "01",
    day: "DAY 1",
    session: "SESSION 1",
    time: "12 PM - 2 PM IST",
    title: "Getting Started with Generative AI",
    description: "Understand where you stand in the AI landscape and learn how AI really works — the foundation for everything that follows.",
    topics: [
      "Identify whether you're a specialist (20%) or generalist (80%)",
      "Learn what Large Language Models actually are",
      "Understand the 5-step LLM pipeline",
      "Demystify the AI 'magic trick'",
    ],
    image: "/images/hero1.png",
  },
  {
    id: "02",
    day: "DAY 1",
    session: "SESSION 2",
    time: "4 PM - 6 PM IST",
    title: "Building Personalised AI Agents",
    description: "Create custom AI assistants tailored to your exact needs — master prompt engineering and Custom GPTs.",
    topics: [
      "Master prompt engineering fundamentals",
      "Build Custom GPTs & Google Gems",
      "Deploy Voice Agents for conversational AI",
      "Write effective system prompts",
    ],
    image: "/images/hero2.png",
  },
  {
    id: "03",
    day: "DAY 2",
    session: "SESSION 3",
    time: "10 AM - 1 PM IST",
    title: "Building Products Using AI",
    description: "Transform ideas into functional AI-powered products without writing code — master rapid prototyping.",
    topics: [
      "Turning concepts into functional products",
      "Understand Vibe Coding (No-code)",
      "Explore Replit & No-code platforms",
      "Combine AI with real-world applications",
    ],
    image: "/images/project1.png",
  },
];

export default function ScheduleSection() {
  const [activeSession, setActiveSession] = useState(0);

  return (
    <section className="bg-white py-20 font-sans border-b border-black/20">
      <div className="max-w-7xl mx-auto md:mx-auto border-l border-r border-black/10">
        <div className="px-6 md:px-12 py-16 border-b border-black/10">
          <p className="text-black/50 text-sm tracking-[2px] uppercase mb-4">WEEKEND SCHEDULE</p>
          <h2 className="text-black text-3xl md:text-5xl font-medium leading-tight">
            48 hours will change everything
          </h2>
          <p className="text-black/60 text-lg mt-4">Two days. Five expert sessions. One transformed you.</p>
        </div>

        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Sticky Sidebar Navigation */}
          <div className="md:w-1/3 p-6 md:p-12 md:sticky md:top-32 h-fit">
            <div className="space-y-8">
              {sessions.map((session, i) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSession(i)}
                  className={cn(
                    "flex items-start gap-6 text-left transition-all duration-300 group",
                    activeSession === i ? "opacity-100 scale-105" : "opacity-30 hover:opacity-100"
                  )}
                >
                  <span className="text-lg font-medium mt-0.5">{session.id}</span>
                  <p className="text-sm font-medium uppercase tracking-wider leading-tight">
                    {session.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Content */}
          <div className="md:w-2/3 border-l border-black/10">
            <div className="p-6 md:p-12 space-y-16">
              {sessions.map((session, i) => (
                <div 
                  key={session.id} 
                  className={cn(
                    "transition-all duration-500",
                    activeSession === i ? "opacity-100 translate-y-0" : "opacity-50 blur-sm pointer-events-none"
                  )}
                >
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-8 border border-black/10">
                    <Image
                      src={session.image}
                      alt={session.title}
                      fill
                      className="object-cover grayscale"
                    />
                    <div className="absolute top-6 left-6 text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-sm border border-white/20">
                        <p className="text-[10px] uppercase tracking-widest font-bold">
                            {session.day} • {session.session} • {session.time}
                        </p>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-medium mb-4">{session.title}</h3>
                  <p className="text-black/60 text-lg mb-8 max-w-2xl">{session.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-black/5">
                    {session.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-black/5 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <p className="text-black/80 text-sm leading-snug">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
