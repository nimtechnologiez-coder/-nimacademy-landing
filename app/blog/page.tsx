"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import BlogCTA from "@/components/BlogCTA";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["All", "AI", "Full Stack", "Data Analytics", "Digital Marketing", "Career Guidance"];

const allPosts = [
  {
    slug: "ai-career-roadmap-2026",
    title: "The Ultimate AI & Machine Learning Career Roadmap 2026",
    excerpt: "Artificial Intelligence is redefining the global workforce. Discover the specific mathematical foundations, programming paradigms, and agentic frameworks required to lead the next generation of AI innovation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "AI",
    date: "Mar 18, 2026",
    readTime: "12 min read",
    author: "Mithun K",
  },
  {
    slug: "full-stack-engineering-mastery",
    title: "Mastering Full Stack Engineering: Beyond Basic CRUD Operations",
    excerpt: "In 2026, a true Full Stack Engineer must command distributed systems, edge computing, and real-time synchronization. Explore the deep-tech stack powering modern high-scale SaaS platforms.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    category: "Full Stack",
    date: "Mar 15, 2026",
    readTime: "10 min read",
    author: "Dhanush TK",
  },
  {
    slug: "data-analytics-predictive-modeling",
    title: "Predictive Modeling: Transforming Raw Data into Strategic Intelligence",
    excerpt: "Learn how to leverage Bayesian statistics and deep learning to build predictive engines that drive business outcomes. A deep dive into modern BI and data engineering pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Data Analytics",
    date: "Mar 12, 2026",
    readTime: "15 min read",
    author: "Sai Kumar",
  },
  {
    slug: "ai-driven-digital-marketing",
    title: "Agentic Marketing: The Future of AI-Driven Growth Strategies",
    excerpt: "Generative AI is no longer optional in digital marketing. Learn how to deploy AI agents for hyper-personalized customer journeys and algorithmic SEO optimization.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
    category: "Digital Marketing",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    author: "Babisha",
  },
  {
    slug: "career-guidance-student-to-builder",
    title: "From Student to Builder: Navigating the 2026 Tech Job Market",
    excerpt: "Technical skills are just the baseline. Discover how to build a high-impact portfolio, contribute to open-source, and stand out in a world where AI assists every developer.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    category: "Career Guidance",
    date: "Mar 08, 2026",
    readTime: "7 min read",
    author: "Gowri Nandhan",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-[#A7DF58]/30 selection:text-black font-sans">
      <Navbar />

      <BlogHero onSearch={setSearchQuery} />

      {/* Category Filter - Architectural Style */}
      <section className="bg-white border-y border-black/10 sticky top-16 md:top-20 z-40 overflow-x-auto no-scrollbar">
        <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/10 flex items-center justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all relative group flex-shrink-0 ${activeCategory === cat ? "text-black" : "text-black/40 hover:text-black"
                }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeBlogTab"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A7DF58] shadow-[0_-4px_12px_rgba(167,223,88,0.5)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid Section with Sidebar */}
      <section className="w-[90%] md:w-auto mx-auto md:mx-[153px] py-24 border-x border-black/5">
        <div className="md:px-[60px] px-4">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Articles Column */}
            <div className="lg:w-[70%] space-y-20">

              {/* Featured Post (only on 'All' and empty search) */}
              {activeCategory === "All" && !searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group cursor-pointer"
                >
                  <Link href={`/blog/${allPosts[0].slug}`} className="block relative aspect-[21/9] overflow-hidden rounded-[2px] border border-black/5">
                    <img src={allPosts[0].image} alt={allPosts[0].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                      <span className="bg-[#A7DF58] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-[2px] w-fit mb-6">Featured Article</span>
                      <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-4 group-hover:text-[#A7DF58] transition-colors">{allPosts[0].title}</h2>
                      <p className="text-white/60 text-lg max-w-2xl font-medium leading-tight">{allPosts[0].excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Standard Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchQuery}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
                >
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))
                  ) : (
                    <div className="col-span-full py-40 text-center border border-black/5 bg-black/[0.01]">
                      <h3 className="text-2xl font-bold text-black/10 uppercase tracking-[0.4em]">Zero articles discovered</h3>
                      <button
                        onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                        className="mt-8 px-8 py-4 bg-black text-[#A7DF58] font-bold text-[10px] uppercase tracking-widest hover:bg-[#A7DF58] hover:text-black transition-all rounded-[2px]"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Pagination */}
              {filteredPosts.length > 0 && (
                <div className="pt-20 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Showing 1-5 of {allPosts.length} results</span>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-3 border border-black/10 rounded-[2px] text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all disabled:opacity-20" disabled>Prev</button>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-black text-[#A7DF58] font-bold rounded-[2px] text-xs">01</button>
                    </div>
                    <button className="px-6 py-3 border border-black/10 rounded-[2px] text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all">Next</button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Sticky Area */}
            <div className="lg:w-[30%]">
              <BlogSidebar />
            </div>

          </div>
        </div>
      </section>

      <BlogCTA />
      {/* Global Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] contrast-150 brightness-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </main>
  );
}
