"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA, STATS_DATA } from "@/lib/data";
import { VideoModal } from "@/components/home/video-modal";
import { Star, Sparkles, Play, Quote, Award } from "lucide-react";

export default function TestimonialsPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Patron Experiences</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Client <span className="gold-gradient-text">Testimonials</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            30+ Celebratory Reviews From Celebrities, Brides & Discerning Guests
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-[#111111] text-ivory py-12 px-4 sm:px-6 lg:px-8 border-b border-gold/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-4 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold gold-gradient-text mb-1">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-light">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative aspect-video border-2 border-gold/40 shadow-2xl group cursor-pointer"
             onClick={() => setVideoModalOpen(true)}>
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
            alt="Maison Devam Cinematic Walkthrough"
            className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform gold-glow">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <span className="font-serif text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider">
              Watch Our Sanctuary Cinematic Tour
            </span>
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-medium">
              Click to Launch Walkthrough Video
            </span>
          </div>
        </div>
      </section>
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />

      {/* Testimonials Grid (30+ reviews shown clearly) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212] border-t border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
              Unanimous Acclaim
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stories From Our Patrons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-8 rounded-3xl bg-ivory dark:bg-[#181818] border border-gold/30 hover:border-gold shadow-lg flex flex-col justify-between gap-6 relative group"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors -rotate-12 pointer-events-none" />

                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-serif text-sm sm:text-base italic text-foreground leading-relaxed">
                    “{review.review}”
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gold/20 relative z-10">
                  <img
                    src={review.clientImage}
                    alt={review.clientName}
                    className="w-12 h-12 rounded-full object-cover border border-gold"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-foreground">
                      {review.clientName}
                    </h4>
                    <span className="text-[10px] text-gold uppercase tracking-widest font-medium block">
                      {review.serviceUsed}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-light">
                      {review.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
