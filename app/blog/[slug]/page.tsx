"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/BlogCTA";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ChevronLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    content: `
        <h2>The AI Revolution of 2026</h2>
        <p>In 2026, Artificial Intelligence has transitioned from a supporting tool to the core engine of global industry. To build a career in this space, one must move beyond basic model prompting into the realm of <strong>Agentic Systems</strong> and <strong>Neural Architecture Design</strong>.</p>
        
        <h3>1. Mathematical Foundations</h3>
        <p>Linear algebra and calculus remain vital, but the focus has shifted toward <em>Topology of High-Dimensional Manifolds</em> and <em>Bayesian Inference for Real-time Learning</em>. Understanding how models converge in non-Euclidean spaces is now a prerequisite for senior roles.</p>

        <blockquote>"The most valuable skill in 2026 isn't just knowing how to use AI, but knowing how to architect the systems that allow AI to think and act autonomously."</blockquote>

        <h3>2. The Modern AI Stack</h3>
        <p>Python remains dominant, but Mojo and Rust are now integral for high-performance inference kernels. Familiarity with distributed training frameworks and on-device optimization is what separates a developer from an engineer.</p>

        <h3>3. From LLMs to LAMs</h3>
        <p>The industry has moved from Large Language Models (LLMs) to Large Action Models (LAMs). Developers must now master the orchestration of agents that can navigate complex digital environments, execute tool-use, and maintain long-term memory across session boundaries.</p>

        <p>At NIM Academy, our AI program is designed to take you through this roadmap, from fundamental theory to deploying autonomous agents in production.</p>
      `
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
    content: `
        <h2>Engineering the Modern Web</h2>
        <p>The era of simple React apps is over. In 2026, Full Stack Engineering is about building resilient, globally distributed systems that offer sub-millisecond latency to users anywhere on the planet.</p>
        
        <h3>The Shift to the Edge</h3>
        <p>Modern applications live at the edge. Understanding edge-first databases like Turso or Cloudflare D1, and managing global state consistency across hundreds of edge locations, is the new gold standard for web engineering.</p>

        <h3>AI-Augmented Development</h3>
        <p>We no longer write every line of code. We architect systems and use AI to generate the boilerplate. The value of an engineer today lies in their ability to perform <strong>Architectural Governance</strong>—ensuring the AI-generated code meets security, scalability, and performance benchmarks.</p>

        <h3>Web3 and Protocol Integration</h3>
        <p>Decentralized identity protocols and zero-knowledge proofs are becoming standard for secure user authentication. Mastering these cryptographic primitives is essential for building the next generation of social and financial platforms.</p>
      `
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
    content: `
        <h2>The Power of Predictive Intelligence</h2>
        <p>Data is the new oil, but predictive modeling is the refinery. In 2026, organizations aren't just looking at what happened; they are using sophisticated Bayesian networks to forecast what will happen next.</p>
        
        <h3>Advanced Statistical Frameworks</h3>
        <p>Moving beyond simple regression, we now utilize probabilistic programming languages to model uncertainty in complex business environments. This allows for more robust decision-making under volatile market conditions.</p>

        <h3>Real-time Data Streams</h3>
        <p>Static reports are a thing of the past. Modern data pipelines process millions of events per second, feeding into live models that adjust business strategies in real-time. Mastering Spark 4.0 and Flink is now essential for every data architect.</p>

        <blockquote>"The goal of data analytics in 2026 is no longer visualization—it's automation of strategic foresight."</blockquote>
      `
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
    content: `
        <h2>The Rise of the Marketing Agent</h2>
        <p>In 2026, marketing is no longer about broadcast messages. It's about deploying a swarm of AI agents that understand individual user intent and deliver hyper-contextual value at precisely the right moment.</p>
        
        <h3>Algorithmic SEO 2.0</h3>
        <p>With AI-first search engines, traditional keyword stuffing is dead. We now optimize for <strong>Semantic Relevance</strong> and <strong>Knowledge Graph Authority</strong>. Content must be structured to be easily digestible by both humans and LLM scrapers.</p>

        <h3>Hyper-Personalization at Scale</h3>
        <p>Generative AI allows us to create thousands of variations of a campaign, each tailored to a specific user persona, without manual intervention. The role of the marketer has shifted toward <em>Strategic Prompting</em> and <em>Brand Governance</em>.</p>

        <p>In our Digital Marketing program, we teach you how to master these agentic tools to dominate the new digital landscape.</p>
      `
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
    content: `
        <h2>Beyond the Degree</h2>
        <p>In the 2026 job market, a degree is just a ticket to enter. To win, you must prove you are a <strong>Builder</strong>. Employers want to see evidence of shipped products, active open-source contributions, and a deep understanding of AI-augmented workflows.</p>
        
        <h3>The Proof of Work</h3>
        <p>Your GitHub is your resume. But don't just show code; show impact. Document your architectural decisions, write technical blogs, and demonstrate how you solved real-world problems using modern stacks.</p>

        <h3>Continuous Learning as a Habit</h3>
        <p>The half-life of tech skills is shorter than ever. We'll show you how to build a "Learning Machine" mindset—staying ahead of the curve by mastering foundational concepts that don't change, even as frameworks evolve every month.</p>

        <h3>Soft Skills in an AI World</h3>
        <p>As AI handles more of the technical execution, human skills like <em>Complex Problem Solving</em>, <em>Strategic Communication</em>, and <em>Ethical Decision Making</em> are becoming the ultimate competitive advantage.</p>
      `
  },
];

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug) || allPosts[0]; // Fallback to first for demo

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      <Navbar />

      {/* Article Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-black/5 bg-white">
        <div className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/5 flex flex-col items-center">
          <div className="px-6 md:px-[100px] max-w-4xl w-full text-center">

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] font-bold text-black/40 hover:text-black uppercase tracking-[0.3em] mb-8 transition-colors group"
            >
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="bg-[#A7DF58] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-[2px] shadow-sm">
                {post.category}
              </span>

              <h1 className="text-4xl md:text-7xl font-bold text-black tracking-tighter leading-none uppercase">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-[11px] font-bold uppercase tracking-widest text-black/40">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-[#A7DF58]" />
                  By {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#A7DF58]" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#A7DF58]" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/5 bg-white">
        <div className="px-6 md:px-[100px]">
          <div className="relative aspect-[21/9] rounded-[2px] overflow-hidden border border-black/5 shadow-2xl overflow-hidden -mt-10 md:-mt-16 z-20">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/5 bg-white py-24">
        <div className="px-6 md:px-[60px] flex flex-col lg:flex-row gap-20">

          {/* Sticky TOC & Share */}
          <aside className="lg:w-[25%] hidden lg:block">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-4">Table of Contents</h4>
                <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
                  <a href="#" className="block text-black hover:text-[#A7DF58] transition-colors">The Evolution of Full Stack</a>
                  <a href="#" className="block text-black/40 hover:text-black transition-colors">The Modern Tech Stack</a>
                  <a href="#" className="block text-black/40 hover:text-black transition-colors">Key Focus Areas</a>
                  <a href="#" className="block text-black/40 hover:text-black transition-colors">Final Thoughts</a>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-4">Share Article</h4>
                <div className="flex items-center gap-6">
                  <button className="text-black/40 hover:text-[#1877F2] transition-colors"><Facebook size={20} /></button>
                  <button className="text-black/40 hover:text-[#1DA1F2] transition-colors"><Twitter size={20} /></button>
                  <button className="text-black/40 hover:text-[#0A66C2] transition-colors"><Linkedin size={20} /></button>
                  <button className="text-black/40 hover:text-[#A7DF58] transition-colors"><Share2 size={20} /></button>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Text */}
          <div className="lg:w-[75%] max-w-3xl">
            <div
              className="prose prose-lg prose-invert !text-black/70 max-w-none
                prose-headings:text-black prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tighter
                prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:border-l-4 prose-h2:border-[#A7DF58] prose-h2:pl-6
                prose-blockquote:border-[#A7DF58] prose-blockquote:bg-black/[0.02] prose-blockquote:p-8 prose-blockquote:text-xl prose-blockquote:font-bold prose-blockquote:rounded-[2px]
                prose-strong:text-black prose-strong:font-bold
                prose-li:marker:text-[#A7DF58]"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            {/* Post Tags */}
            <div className="mt-16 pt-10 border-t border-black/5 flex flex-wrap gap-3">
              {["Full Stack", "Career", "2026", "WebDev", "Tech Trends"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-black/[0.03] text-[10px] font-bold uppercase tracking-widest text-black/50 rounded-[2px]">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-20 p-8 bg-black rounded-[2px] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7DF58]/5 blur-3xl pointer-events-none" />
              <div className="w-20 h-20 rounded-[2px] bg-[#A7DF58]/20 flex items-center justify-center border border-[#A7DF58]/20 flex-shrink-0">
                <User size={40} className="text-[#A7DF58]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-2">{post.author}</h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                  Senior Engineering Lead at NIM Academy. Passionate about building distributed systems and teaching the next generation of full stack builders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-[90%] md:w-auto mx-auto md:mx-[153px] border-x border-black/5 py-24 bg-[#F8FAFC]">
        <div className="px-6 md:px-[60px]">
          <div className="flex items-end justify-between mb-16 px-4">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#A7DF58] uppercase tracking-[0.4em]">Continue Reading</span>
              <h3 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter">Related <span className="italic">Articles</span></h3>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-[10px] font-bold text-black/40 hover:text-[#A7DF58] uppercase tracking-widest transition-all">
              View All Posts <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Simple small cards for related posts */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] mb-6 overflow-hidden rounded-[2px] border border-black/5">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="text-[10px] font-bold text-[#A7DF58] uppercase tracking-[0.2em] mb-2 block">AI Trend</span>
                <h4 className="text-xl font-bold text-black group-hover:text-[#A7DF58] transition-colors leading-tight uppercase">Future of AI in Tech Education 2026</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogCTA />


      {/* Global Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] contrast-150 brightness-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </main>
  );
}
