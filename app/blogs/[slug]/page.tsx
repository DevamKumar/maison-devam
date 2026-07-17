"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS_DATA } from "@/lib/data";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles,
  User,
} from "lucide-react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const article = BLOGS_DATA.find((b) => b.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-background text-foreground">
        <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-zinc-500 mb-6">The article you requested could not be located in our sanctuary archives.</p>
        <Link
          href="/blogs"
          className="px-6 py-3 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-widest uppercase"
        >
          Return to Journal
        </Link>
      </div>
    );
  }

  const relatedArticles = BLOGS_DATA.filter((b) => b.id !== article.id).slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Article Header Banner */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory border-b border-gold/30">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Devam Journal</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-gold text-charcoal font-bold uppercase tracking-widest shadow-md">
              {article.category}
            </span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              {article.date}
            </span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold" />
              {article.readTime}
            </span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-t border-gold/20 pt-6 mt-2">
            <div className="flex items-center gap-3">
              {typeof article.author === "object" && article.author.image ? (
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold/50"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold font-bold">
                  <User className="w-5 h-5" />
                </div>
              )}
              <div>
                <span className="text-xs font-semibold text-white block">
                  {typeof article.author === "string" ? article.author : article.author.name}
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider block">
                  {typeof article.author === "object" && article.author.role ? article.author.role : "Editorial Specialist"}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Article link copied to clipboard.");
              }}
              aria-label="Share article link"
              className="p-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 relative z-20 w-full">
        <div className="aspect-[16/9] rounded-3xl overflow-hidden border-2 border-gold shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-a:text-gold">
          <div className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 space-y-6 font-light">
            <p className="font-serif text-xl sm:text-2xl italic text-foreground border-l-4 border-gold pl-6 py-2 my-6">
              {article.excerpt}
            </p>

            <p>
              When experiencing true high-fashion couture in our ₹50+ lakh MG Road facility, we often emphasize that architectural tranquility and cellular aesthetics must work in synergy. The balance between botanical purity and high-performance dermatological actives is precisely what distinguishes an ordinary appointment from an unforgettable sensory ritual.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">
              1. The Science of Multi-Molecular Penetration
            </h3>
            <p>
              Whether applying pure 24K gold bhasma or oxygenating serums during our HydraFacial MD sessions, our goal is deep epidermal absorption. Traditional formulations sit on the surface; our custom Italian steam infusion devices dilate pores gently to ensure sustained hydration for up to 14 days post-treatment.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">
              2. Acoustic Isolation & Sensory Calm
            </h3>
            <p>
              Studies conducted by luxury spa institutions show that ambient noise elevates cortisol levels by up to 28%, actively counteracting collagen synthesis and facial relaxation. By installing custom acoustic soundproofing and Balinese water features throughout our suites, we lower nervous system stress within minutes of arrival.
            </p>

            <div className="p-8 rounded-3xl bg-ivory dark:bg-[#161616] border border-gold/40 my-8">
              <span className="text-xs uppercase font-semibold text-gold tracking-widest block mb-2">
                Sanctuary Recommendation
              </span>
              <p className="font-serif italic text-base text-foreground mb-4">
                “For optimal cellular rejuvenation, pair your monthly hair color service with an organic scalp detoxification ritual and our signature 24K Gold Luminance Facial.”
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-all"
              >
                <span>Reserve Your Suite</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e] border-t border-gold/30">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <h3 className="font-serif text-3xl font-bold uppercase tracking-wide text-foreground">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-3xl bg-white dark:bg-[#161616] border border-gold/30 flex items-center gap-6 group hover:border-gold transition-all"
              >
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover flex-shrink-0 border border-gold/20"
                />
                <div className="flex flex-col justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold text-gold tracking-widest">
                    {rel.category}
                  </span>
                  <Link href={`/blogs/${rel.slug}`}>
                    <h4 className="font-serif font-bold text-lg text-foreground group-hover:text-gold transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                  <span className="text-xs text-zinc-400 font-light">
                    {rel.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
