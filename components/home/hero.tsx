"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Sparkles, ChevronDown, Play } from "lucide-react";

interface HeroProps {
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Full Screen Cinematic Background Video / Fallback Simulation */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-105 transition-all duration-1000"
        >
          {/* Using high quality royalty free luxury salon/spa video streams */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-massage-in-a-spa-39841-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Warm Luxury Gold & Obsidian Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* Floating Gold Particles / Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-light/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-6 pt-16"
      >
        {/* Subtle Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-black/50 backdrop-blur-md text-gold text-xs font-medium tracking-[0.24em] uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Naraingarh’s Premier Luxury Sanctuary</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-[0.08em] uppercase drop-shadow-2xl leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          MAISON <span className="gold-gradient-text">DEVAM</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-sans text-sm sm:text-lg lg:text-xl font-light text-[#E8DFD4] tracking-[0.45em] uppercase max-w-3xl leading-relaxed"
        >
          Luxury • Beauty • Serenity
        </motion.p>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-sans text-xs sm:text-sm text-zinc-300 max-w-xl tracking-wider leading-relaxed opacity-90"
        >
          An architectural masterpiece worth ₹50+ lakh dedicated to haute coiffure, cellular aesthetic dermatology, and holistic Balinese wellness rituals.
        </motion.p>


        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
        >
          <Link
            href="/book"
            className="w-full sm:w-auto px-8 py-4 rounded-full shimmer-gold text-charcoal font-bold text-xs tracking-[0.22em] uppercase transition-all duration-300 gold-glow hover:scale-105 flex items-center justify-center gap-2.5 shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/60 bg-black/40 hover:bg-gold/15 text-white font-medium text-xs tracking-[0.22em] uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5"
          >
            <span>Explore Services</span>
          </Link>
          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-white/30 bg-white/10 hover:border-gold hover:text-gold text-white font-medium text-xs tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Sanctuary Tour</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold opacity-80 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-light">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};
