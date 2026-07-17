"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES_DATA, type ServiceItem } from "@/lib/data";
import {
  Sparkles,
  Clock,
  Calendar,
  Search,
  Filter,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Hair" | "Skin" | "Spa" | "Nails" | "Makeup"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesTab = activeTab === "All" || service.category === activeTab;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Curated Sanctuary Treatments</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="gold-gradient-text">Service Menu</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Bespoke Haute Coiffure, Cellular Aesthetics & Balinese Bodywork
          </p>
        </div>
      </section>

      {/* Interactive Filter & Search Bar */}
      <section className="sticky top-[72px] z-30 bg-ivory/95 dark:bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-gold/20 py-6 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white dark:bg-zinc-900 rounded-full border border-gold/30">
            {(["All", "Hair", "Skin", "Spa", "Nails", "Makeup"] as const).map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 ${
                    activeTab === category
                      ? "bg-gold text-charcoal shadow-md"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Botox, Facial)..."
              className="w-full bg-white dark:bg-zinc-900 border border-gold/30 rounded-full pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0f0f0f] min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center gap-4">
              <Filter className="w-12 h-12 text-gold opacity-50" />
              <h3 className="font-serif text-2xl font-bold">
                No services found matching "{searchQuery}"
              </h3>
              <button
                onClick={() => {
                  setActiveTab("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-full bg-gold text-charcoal text-xs font-semibold uppercase tracking-widest"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group relative rounded-3xl overflow-hidden glass-panel shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Top Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold text-[10px] font-semibold uppercase tracking-widest border border-gold/30">
                        {service.category}
                      </span>
                    </div>
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest shadow-md">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="flex items-center gap-1.5 text-xs font-light tracking-wide bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        {service.duration}
                      </span>
                      <span className="font-serif font-bold text-xl gold-gradient-text drop-shadow-md">
                        {service.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Content & Seniority Breakdown */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <h3
                        className="font-serif font-bold text-xl text-foreground mb-2 group-hover:text-gold transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {service.name}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-4">
                        {service.description}
                      </p>

                      {/* If Seniority Options Exist */}
                      {service.seniorityOptions && (
                        <div className="p-3 rounded-2xl bg-ivory dark:bg-zinc-900 border border-gold/20 flex flex-col gap-1.5 mb-4">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                            Seniority Options:
                          </span>
                          {service.seniorityOptions.map((opt) => (
                            <div
                              key={opt.title}
                              className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-300"
                            >
                              <span>{opt.title}</span>
                              <span className="font-serif font-semibold text-foreground">
                                {opt.priceDisplay}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                        <CheckCircle className="w-3.5 h-3.5 text-gold" />
                        <span>Free Consultation Included</span>
                      </div>
                      <Link
                        href={`/book?service=${service.id}`}
                        className="px-6 py-2.5 rounded-full shimmer-gold text-charcoal font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5 gold-glow hover:scale-105"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Now</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Booking Guarantee */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-white text-center border-t border-gold/30">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Can't Decide Which Treatment Is Right For You?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl font-light">
            Every session at Maison Devam includes a complimentary 15-minute diagnostic consultation with our master stylists and aesthetic dermatologists.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/experience"
              className="px-8 py-3.5 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-all"
            >
              Try AI Skin Analysis
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-full border border-gold/50 text-white font-medium text-xs tracking-widest uppercase hover:bg-gold/15 transition-all"
            >
              Compare Pricing Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
