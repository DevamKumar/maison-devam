"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM_DATA } from "@/lib/data";
import { Sparkles, Calendar, Award } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Master Artisanship</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our <span className="gold-gradient-text">Artisans</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Internationally Accredited Couturiers, Dermatologists & Holistic Therapists
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161616] border transition-all duration-500 flex flex-col justify-between ${
                member.id === "devam-kumar"
                  ? "md:col-span-2 lg:col-span-3 border-gold shadow-2xl bg-gradient-to-b from-charcoal to-[#141414] text-ivory"
                  : "border-gold/30 hover:border-gold shadow-lg hover:shadow-xl text-foreground"
              }`}
            >
              <div
                className={`flex flex-col ${
                  member.id === "devam-kumar"
                    ? "lg:flex-row items-center gap-8 p-8 sm:p-12"
                    : ""
                }`}
              >
                {/* Avatar Banner */}
                <div
                  className={`relative overflow-hidden flex-shrink-0 ${
                    member.id === "devam-kumar"
                      ? "w-full lg:w-[420px] aspect-[4/5] rounded-2xl border-2 border-gold shadow-xl"
                      : "aspect-[4/4.5] w-full"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="px-3 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {member.experience}
                    </span>
                    {member.social?.instagram && (
                      <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-gold/30 flex items-center justify-center text-gold">
                        <FaInstagram className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Profile Details */}
                <div
                  className={`flex flex-col justify-between flex-grow ${
                    member.id === "devam-kumar" ? "" : "p-6 sm:p-8"
                  }`}
                >
                  <div>
                    <span className="text-xs text-gold uppercase tracking-[0.25em] font-semibold block mb-1">
                      {member.role}
                    </span>
                    <h3
                      className={`font-serif font-bold leading-tight mb-4 ${
                        member.id === "devam-kumar"
                          ? "text-3xl sm:text-5xl text-white"
                          : "text-2xl text-foreground"
                      }`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-light mb-6 ${
                        member.id === "devam-kumar"
                          ? "text-zinc-300 max-w-2xl"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {member.bio}
                    </p>

                    <div className="border-t border-gold/20 pt-4 mb-6">
                      <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block mb-2.5">
                        Specialized Mastery:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {((member as any).specialties || (member.specialization ? member.specialization.split(" & ") : [])).map((spec: string) => (
                          <span
                            key={spec}
                            className={`px-3 py-1 rounded-full text-[11px] tracking-wide ${
                              member.id === "devam-kumar"
                                ? "bg-gold/15 border border-gold/40 text-gold font-medium"
                                : "bg-ivory dark:bg-zinc-900 border border-gold/30 text-zinc-700 dark:text-zinc-300"
                            }`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/book?stylist=${member.id}`}
                      className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] text-center hover:bg-gold-light transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book With {member.name.split(" ")[0]}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
