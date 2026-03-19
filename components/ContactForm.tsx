"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

const courses = [
  "Select a Course",
  "AI & Machine Learning",
  "Full Stack Development",
  "Data Analytics",
  "Digital Marketing",
  "Others"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Select a Course",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full bg-white/[0.02] border border-white/10 p-12 md:p-20 text-center rounded-[2px]"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-primary animate-bounce" />
        </div>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">Transmission Received</h3>
        <p className="text-white/40 text-lg md:text-xl font-medium max-w-md mx-auto">
          Your inquiry has been logged into our core systems. A lead engineer will reach out within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-10 px-10 py-4 bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-white/[0.02] border border-white/10 p-8 md:p-12 lg:p-16 rounded-[2px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent" />
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputGroup 
            label="FULL NAME" 
            placeholder="John Doe" 
            value={formData.name}
            onChange={(v: string) => setFormData({...formData, name: v})}
          />
          <InputGroup 
            label="EMAIL ADDRESS" 
            type="email"
            placeholder="john@example.com" 
            value={formData.email}
            onChange={(v: string) => setFormData({...formData, email: v})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputGroup 
            label="PHONE NUMBER" 
            placeholder="+91 XXXXX XXXXX" 
            value={formData.phone}
            onChange={(v: string) => setFormData({...formData, phone: v})}
          />
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">COURSE INTEREST</label>
            <div className="relative group">
              <select
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full bg-black border border-white/10 px-6 py-4 appearance-none text-white focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm font-medium"
              >
                {courses.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 group-hover:text-primary transition-colors">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">MESSAGE</label>
          <textarea
            placeholder="How can we help architect your career?"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full bg-black border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none text-sm font-medium"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full md:w-auto px-12 py-5 bg-primary text-black font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:pr-16 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">{isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300">
            <span className="text-xl">→</span>
          </div>
        </button>
      </form>
    </div>
  );
}

interface InputGroupProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

function InputGroup({ label, placeholder, type = "text", value, onChange }: InputGroupProps) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black border border-white/10 px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary transition-colors text-sm font-medium"
        required
      />
    </div>
  );
}
