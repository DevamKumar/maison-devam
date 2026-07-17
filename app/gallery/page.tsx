"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA, type GalleryItem } from "@/lib/data";
import { Sparkles, ZoomIn, X, Filter } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Hair Styling",
    "Luxury Spa",
    "Massage",
    "Bridal Makeup",
    "Reception",
    "Luxury Interiors",
    "Facials",
    "Beauty Products",
    "Customers",
    "Team",
  ];

  const filteredGallery =
    activeCategory === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Visual Splendor</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sanctuary <span className="gold-gradient-text">Masonry Gallery</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            A Glimpse Into Our Architectural Splendor & Master Artisanship
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="sticky top-[72px] z-30 bg-ivory/95 dark:bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-gold/20 py-5 px-4 sm:px-6 lg:px-8 shadow-md overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                activeCategory === cat
                  ? "bg-gold text-charcoal shadow-md scale-105"
                  : "bg-white dark:bg-zinc-900 border border-gold/30 text-zinc-600 dark:text-zinc-400 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e] min-h-[700px]">
        <div className="max-w-7xl mx-auto">
          {filteredGallery.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-12 h-12 text-gold opacity-50 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold">No items in this category</h3>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setLightboxItem(item)}
                  className="group relative rounded-3xl overflow-hidden bg-charcoal cursor-pointer border border-gold/25 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-gold uppercase font-semibold tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h4
                      className="font-serif font-bold text-lg text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h4>
                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-gold/90 text-charcoal shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-gold/50 shadow-2xl bg-charcoal flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="w-full p-6 bg-black/90 border-t border-gold/30 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs text-gold uppercase tracking-widest font-semibold">
                    {lightboxItem.category}
                  </span>
                  <h3
                    className="font-serif text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {lightboxItem.title}
                  </h3>
                </div>
                <span className="text-xs text-zinc-400 font-light">
                  Maison Devam Sanctuary Archives
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
