"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, TrendingUp } from "lucide-react";

const popularPosts = [
  { slug: "ai-career-roadmap-2026", title: "AI Career Roadmap 2026", views: "18.4k" },
  { slug: "full-stack-engineering-mastery", title: "Beyond CRUD: Full Stack Mastery", views: "14.2k" },
  { slug: "data-analytics-predictive-modeling", title: "Predictive Intelligence Guide", views: "9.8k" },
];

const tags = ["React", "AI", "Python", "Full Stack", "Careers", "Internships", "Data Science", "Marketing", "UI/UX"];

export default function BlogSidebar() {
  return (
    <aside className="space-y-12 sticky top-32">
      {/* Newsletter Widget */}
      <div className="bg-black p-8 rounded-[2px] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7DF58]/10 blur-3xl pointer-events-none group-hover:bg-[#A7DF58]/20 transition-all" />
        <div className="relative z-10 space-y-4">
          <Mail className="text-[#A7DF58] w-10 h-10 mb-4" />
          <h3 className="text-white text-xl font-bold uppercase tracking-tight">Stay Updated</h3>
          <p className="text-white/40 text-xs leading-relaxed">
            Get weekly tech insights, career tips, and tutorials directly in your inbox.
          </p>
          <form className="space-y-3 pt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#A7DF58] rounded-[2px]"
            />
            <button className="w-full bg-[#A7DF58] hover:bg-white text-black py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
              Subscribe
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-black uppercase tracking-[0.3em]">Most Viewed</h3>
          <TrendingUp className="text-[#A7DF58] w-4 h-4" />
        </div>
        <div className="space-y-6">
          {popularPosts.map((post, idx) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block space-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="text-[24px] font-bold text-black/5 leading-none group-hover:text-[#A7DF58]/20 transition-colors">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-black group-hover:text-[#A7DF58] transition-colors leading-snug line-clamp-2 uppercase">
                    {post.title}
                  </h4>
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">
                    {post.views} Readers
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-black uppercase tracking-[0.3em]">Explore Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link 
              key={tag} 
              href={`/blog?tag=${tag.toLowerCase()}`}
              className="px-4 py-2 border border-black/5 bg-white text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black hover:border-black/20 hover:bg-black/[0.02] transition-all rounded-[2px]"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="pt-12 border-t border-black/5 text-center">
          <img src="/images/nim_logo.png" alt="NIM Academy" className="h-6 w-auto mx-auto mb-4 opacity-20 grayscale" />
          <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.5em]">Future of Learning</p>
      </div>
    </aside>
  );
}
