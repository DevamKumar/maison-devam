"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { OFFERS_DATA } from "@/lib/data";
import { Sparkles, Calendar, Copy, Check, Tag } from "lucide-react";

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Seasonal Privileges</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Exclusive <span className="gold-gradient-text">Offers</span> & Promotions
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Flat 20% Privileges, Student Savings & Royal Wedding Seasons
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS_DATA.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161616] border border-gold/30 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-gold text-charcoal text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {offer.discount}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase text-gold tracking-widest font-semibold block mb-1">
                    {offer.subtitle}
                  </span>
                  <h3
                    className="font-serif font-bold text-xl leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {offer.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {offer.description}
                </p>

                <div className="flex flex-col gap-4 border-t border-gold/20 pt-4">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-light">
                    <span>Validity:</span>
                    <span className="font-semibold text-foreground">
                      {offer.validUntil}
                    </span>
                  </div>

                  {/* Coupon Code Action */}
                  <div className="flex items-center gap-2">
                    <div className="flex-grow bg-ivory dark:bg-zinc-900 border border-gold/40 rounded-xl py-2.5 px-3 font-mono text-xs font-bold text-gold tracking-widest text-center select-all">
                      {offer.code}
                    </div>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className={`px-4 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        copiedCode === offer.code
                          ? "bg-emerald-600 text-white"
                          : "bg-charcoal dark:bg-white text-ivory dark:text-charcoal hover:bg-gold hover:text-charcoal"
                      }`}
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <Link
                    href={`/book?coupon=${offer.code}`}
                    className="w-full py-3.5 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] text-center hover:bg-gold-light transition-all shadow-md flex items-center justify-center gap-2 mt-1"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Redeem Offer Now</span>
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
