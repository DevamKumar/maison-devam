"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BLOGS_DATA } from "@/lib/data";
import { Sparkles, Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>The Devam Journal</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Haute Couture & <span className="gold-gradient-text">Wellness Journal</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Architectural Insights, 24K Gold Cellular Dermatology & Balinese Rituals
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS_DATA.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161616] border border-gold/30 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Box */}
              <Link href={`/blogs/${article.slug}`} className="relative aspect-[16/10] w-full overflow-hidden block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest shadow-md">
                    {article.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 text-xs text-zinc-400 font-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {article.readTime}
                    </span>
                  </div>
                  <Link href={`/blogs/${article.slug}`}>
                    <h3
                      className="font-serif font-bold text-2xl leading-snug mb-3 group-hover:text-gold transition-colors text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/20 flex items-center justify-between">
                  <span className="text-[11px] font-serif italic text-zinc-500">
                    By {typeof article.author === 'string' ? article.author : article.author.name}
                  </span>
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-light transition-colors group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
