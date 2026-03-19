"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Calendar, Code } from "lucide-react";

interface CounterProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const Counter = ({ value, label, icon, suffix = "+" }: CounterProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-8 border-x border-white/5 first:border-l-0 last:border-r-0 group">
      <div className="w-16 h-16 rounded-[2px] bg-white/5 border border-white/10 flex items-center justify-center text-[#A7DF58] mb-8 group-hover:bg-[#A7DF58] group-hover:text-black group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <div className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 tabular-nums ring-offset-black">
        {count}{suffix}
      </div>
      <div className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">
        {label}
      </div>
    </div>
  );
};

const stats = [
  { value: 500, label: "Students Trained", icon: <Users className="w-8 h-8" /> },
  { value: 120, label: "Success Placements", icon: <Briefcase className="w-8 h-8" /> },
  { value: 50, label: "Workshops & Events", icon: <Calendar className="w-8 h-8" /> },
  { value: 100, label: "Production Projects", icon: <Code className="w-8 h-8" /> },
];

export default function GalleryStats() {
  return (
    <section className="w-full bg-[#08090A] border-y border-white/10 overflow-hidden">
      <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Counter 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              icon={stat.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
