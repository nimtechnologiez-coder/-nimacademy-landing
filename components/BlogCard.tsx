"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full bg-white border border-black/5 rounded-[2px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#A7DF58] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-[2px] shadow-lg">
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                <ArrowUpRight className="text-black" />
            </div>
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-black/40">
          <div className="flex items-center gap-1.5">
            <User size={12} className="text-[#A7DF58]" />
            {post.author}
          </div>
          <div className="w-1 h-1 bg-black/10 rounded-full" />
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#A7DF58]" />
            {post.readTime}
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-2xl font-bold text-black leading-tight mb-4 group-hover:text-[#A7DF58] transition-colors line-clamp-2 uppercase tracking-tight">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-black/50 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-black/5">
          <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">
            {post.date}
          </span>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-[10px] font-bold text-black uppercase tracking-widest hover:text-[#A7DF58] transition-colors flex items-center gap-1"
          >
            Read Article
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
