"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PACKAGES_DATA } from "@/lib/data";
import { Sparkles, Calendar, Check, Clock, ShieldCheck } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Imperial Sanctuary Entitlements</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Luxury <span className="gold-gradient-text">Packages</span> & Memberships
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Curated Day Rituals, Bridal Couture & Exclusive Annual Passes
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-3xl overflow-hidden flex flex-col justify-between border transition-all duration-500 ${
                pkg.recommended
                  ? "bg-charcoal text-ivory border-gold shadow-2xl scale-[1.02]"
                  : "bg-white dark:bg-[#161616] text-foreground border-gold/30 hover:border-gold shadow-lg hover:shadow-xl"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Most Coveted
                  </span>
                </div>
              )}

              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="flex items-center gap-1.5 text-xs font-light tracking-wide bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-gold/30">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {pkg.duration}
                  </span>
                  <span className="font-serif font-bold text-2xl gold-gradient-text drop-shadow-md">
                    {pkg.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3
                    className="font-serif font-bold text-2xl mb-3 leading-tight group-hover:text-gold transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 leading-relaxed font-light mb-6">
                    {pkg.description}
                  </p>

                  <div className="border-t border-gold/20 pt-4">
                    <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block mb-3">
                      Included Sanctuary Privileges:
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs font-light text-zinc-300 dark:text-zinc-300"
                        >
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/15 flex items-center justify-between gap-4">
                  <Link
                    href={`/book?package=${pkg.id}`}
                    className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] text-center hover:bg-gold-light transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Package</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIP Membership Perks */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212] border-t border-gold/20">
        <div className="max-w-5xl mx-auto rounded-3xl bg-charcoal text-ivory p-8 sm:p-14 border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Elite Club Benefits
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Become a <span className="gold-gradient-text">Maison Devam</span> Member?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Our Monthly and Annual Elite Memberships guarantee priority suite scheduling, complimentary birthday spa rituals, private valet parking, and 15% savings across our retail boutique.
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.22em] hover:bg-gold-light transition-all flex-shrink-0 gold-glow"
            >
              Compare Membership Perks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
