"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-[#141414] border border-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Quote Icon */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-gold/10 -rotate-12 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* Client Avatar */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-gold shadow-lg">
              <img
                src={current.clientImage}
                alt={current.clientName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                “{current.review}”
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gold/20 pt-4 gap-2">
                <div>
                  <h4 className="font-serif font-bold text-base text-foreground tracking-wider">
                    {current.clientName}
                  </h4>
                  <p className="text-xs text-gold uppercase tracking-[0.16em] font-medium">
                    {current.serviceUsed}
                  </p>
                </div>
                <span className="text-[11px] text-zinc-400 font-light">
                  {current.date}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full border border-gold/40 hover:border-gold bg-ivory dark:bg-zinc-900 text-foreground hover:bg-gold hover:text-charcoal transition-all flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-serif text-xs uppercase tracking-widest text-zinc-400">
          {currentIndex + 1} / {TESTIMONIALS_DATA.length}
        </span>
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full border border-gold/40 hover:border-gold bg-ivory dark:bg-zinc-900 text-foreground hover:bg-gold hover:text-charcoal transition-all flex items-center justify-center shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
