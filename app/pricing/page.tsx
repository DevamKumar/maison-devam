"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, PACKAGES_DATA } from "@/lib/data";
import { Sparkles, Calendar, Check, ShieldCheck, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<
    "Hair" | "Skin" | "Spa" | "Nails" | "Makeup"
  >("Hair");

  const categoryServices = SERVICES_DATA.filter(
    (s) => s.category === activeCategory
  );

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Transparent Menu</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Seniority & <span className="gold-gradient-text">Pricing Menu</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Compare Standard, Senior Stylist, and Creative Director Tariffs
          </p>
        </div>
      </section>

      {/* Category Tabs & Pricing Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white dark:bg-zinc-900 rounded-full border border-gold/30 max-w-fit mx-auto shadow-md">
            {(["Hair", "Skin", "Spa", "Nails", "Makeup"] as const).map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gold text-charcoal shadow-md"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-gold"
                  }`}
                >
                  {category} Menu
                </button>
              )
            )}
          </div>

          {/* Table Box */}
          <div className="bg-white dark:bg-[#161616] rounded-3xl border border-gold/30 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white border-b border-gold/30">
                    <th className="py-5 px-6 font-serif text-sm tracking-wider uppercase">
                      Treatment / Service
                    </th>
                    <th className="py-5 px-6 font-serif text-sm tracking-wider uppercase text-center">
                      Duration
                    </th>
                    <th className="py-5 px-6 font-serif text-sm tracking-wider uppercase text-center text-zinc-300">
                      Standard / Junior
                    </th>
                    <th className="py-5 px-6 font-serif text-sm tracking-wider uppercase text-center text-gold">
                      Senior Specialist
                    </th>
                    <th className="py-5 px-6 font-serif text-sm tracking-wider uppercase text-center text-white font-bold">
                      Creative Director
                    </th>
                    <th className="py-5 px-6 font-serif text-sm tracking-wider uppercase text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/15 text-xs">
                  {categoryServices.map((service) => (
                    <tr
                      key={service.id}
                      className="hover:bg-gold/[0.04] transition-colors"
                    >
                      <td className="py-5 px-6 font-medium text-foreground">
                        <div className="font-serif text-sm font-bold">
                          {service.name}
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5 font-light">
                          {service.description}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center font-mono text-zinc-500">
                        {service.duration}
                      </td>
                      <td className="py-5 px-6 text-center font-serif text-sm">
                        {service.seniorityOptions?.[0]?.priceDisplay ||
                          service.priceDisplay}
                      </td>
                      <td className="py-5 px-6 text-center font-serif text-sm text-gold font-semibold">
                        {service.seniorityOptions?.[1]?.priceDisplay ||
                          `₹${Math.round(service.price * 1.35)}`}
                      </td>
                      <td className="py-5 px-6 text-center font-serif text-sm font-bold text-foreground">
                        {service.seniorityOptions?.[2]?.priceDisplay ||
                          `₹${Math.round(service.price * 1.8)}`}
                      </td>
                      <td className="py-5 px-6 text-right">
                        <Link
                          href={`/book?service=${service.id}`}
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-charcoal font-semibold text-[11px] tracking-wider uppercase transition-colors"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships Comparison Table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212] border-t border-gold/20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
              Sanctuary Passes
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              VIP Membership Entitlements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {PACKAGES_DATA.filter((p) =>
              p.name.toLowerCase().includes("membership")
            ).map((membership) => (
              <div
                key={membership.id}
                className="p-8 rounded-3xl bg-charcoal text-ivory border border-gold shadow-2xl flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gold uppercase tracking-widest font-semibold">
                      {membership.duration}
                    </span>
                    <span className="font-serif font-bold text-3xl gold-gradient-text">
                      {membership.priceDisplay}
                    </span>
                  </div>
                  <h3
                    className="font-serif font-bold text-2xl text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {membership.name}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                    {membership.description}
                  </p>

                  <ul className="flex flex-col gap-3 border-t border-gold/30 pt-6">
                    {membership.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs text-zinc-200 font-light"
                      >
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/book?package=${membership.id}`}
                  className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] text-center hover:bg-gold-light transition-all shadow-lg mt-4"
                >
                  Enroll in Membership
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
