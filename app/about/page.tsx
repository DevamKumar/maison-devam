"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US_DATA, TEAM_DATA } from "@/lib/data";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Calendar,
  Building2,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Sanctuary Heritage</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The <span className="gold-gradient-text">Maison Devam</span> Story
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Where Parisian Haute Coiffure Meets Holistic Balinese Serenity
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000"
              alt="Maison Devam Luxury Interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs uppercase text-gold font-semibold tracking-widest block mb-1">
                MG Road, Bengaluru
              </span>
              <h3
                className="font-serif font-bold text-2xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ₹50+ Lakh Architectural Sanctuary
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
              Our Genesis
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Crafting a Haven of Absolute Serenity
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Founded by master architect and international couturier **Devam Kumar**, Maison Devam was born from a singular philosophy: true luxury occurs when cutting-edge aesthetic science meets the healing tranquility of an Eastern sanctuary.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              After spending over a decade studying precision sculpting across Milan and Paris alongside traditional Ayurvedic and Balinese therapeutic bodywork, Devam returned to Bengaluru to establish a ₹50+ lakh flagship destination. Every detail—from our custom Italian hair wash spa chairs to hospital-grade sterilization autoclaves—is engineered to ensure your time with us is restorative and deeply transformative.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gold/20">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-bold text-gold">
                  100%
                </span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  Imported Italian Machines
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-bold text-gold">
                  50+
                </span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  Certified Artisans
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131313] border-y border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
              Our Pillars
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-ivory dark:bg-[#181818] border border-gold/30 flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-gold/10 text-gold w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-foreground">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                To elevate self-care from a routine appointment into an unforgettable sensory journey, combining world-class artistic mastery with personalized, ethical hospitality.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory dark:bg-[#181818] border border-gold/30 flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-gold/10 text-gold w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-foreground">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                To remain India’s premier benchmark for high-fashion salon couture and non-invasive cellular dermatology, inspiring confidence and inner equilibrium in every guest.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory dark:bg-[#181818] border border-gold/30 flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-gold/10 text-gold w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-foreground">
                Core Values
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-light mt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Absolute Hospital-Grade Hygiene</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Uncompromised Botanical & Organic Products</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Continuous Global Training of Artisans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Private Soundproof Sanctuary Suites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Equipment Protocol */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
              Uncompromising Safety
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hospital-Grade Hygiene & Medical Equipment
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              At Maison Devam, cleanliness is not a checklist—it is an obsession. We utilize multi-stage sterilization protocols that mirror surgical operating theaters.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#161616] border border-gold/20 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-base text-foreground">
                    Medical Autoclave Sterilization
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">
                    Every metallic tool, scissor, and extractor undergoes high-pressure steam sterilization in hospital autoclaves before each patron.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#161616] border border-gold/20 flex items-start gap-4">
                <Building2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-base text-foreground">
                    Genuine HydraFacial MD & Ozone Steaming
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">
                    We never use imitation devices. All aesthetic equipment is imported directly from the USA and Europe for precise vortex extraction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden border border-gold/40 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1000"
              alt="Sanitation & Equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leadership Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center border-t border-gold/30">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
            The Artisans
          </span>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our Master Artisans
          </h2>
          <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed font-light">
            Behind every flawless haircut, glowing facial, and tranquil spa ritual is our team of 50+ internationally accredited specialists led by Founder Devam Kumar.
          </p>
          <Link
            href="/team"
            className="mt-4 px-8 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-[0.22em] uppercase hover:bg-gold-light transition-all gold-glow"
          >
            Explore Team Profiles & Book Direct
          </Link>
        </div>
      </section>
    </div>
  );
}
