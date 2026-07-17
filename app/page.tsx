"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SERVICES_DATA,
  PACKAGES_DATA,
  WHY_CHOOSE_US_DATA,
  STATS_DATA,
} from "@/lib/data";
import { Hero } from "@/components/home/hero";
import { VideoModal } from "@/components/home/video-modal";
import { TestimonialsSlider } from "@/components/home/testimonials-slider";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  Award,
  ShieldCheck,
  Building2,
  HeartHandshake,
  Cpu,
  Coffee,
  UserCheck,
} from "lucide-react";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "Hair" | "Skin" | "Spa" | "Nails" | "Makeup"
  >("Hair");

  const filteredServices = SERVICES_DATA.filter(
    (s) => s.category === activeCategory && (s.popular || s.price >= 3000)
  ).slice(0, 6);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-6 h-6 text-gold" />;
      case "Award":
        return <Award className="w-6 h-6 text-gold" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-gold" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-gold" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-gold" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-gold" />;
      case "Coffee":
        return <Coffee className="w-6 h-6 text-gold" />;
      case "UserCheck":
      default:
        return <UserCheck className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero onOpenVideo={() => setVideoModalOpen(true)} />
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* 2. Stats Banner */}
      <section className="bg-charcoal text-ivory border-y border-gold/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl glass-panel group transition-all duration-300"
            >
              <span className="font-serif text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Brand Story & Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" /> The Maison Devam Distinction
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase tracking-wide mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Discerning Patrons Choose Our Sanctuary
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              We have redefined what a salon experience should be. From hospital-grade sterilization protocols and genuine Italian wash beds to custom acoustic soundproofing and VIP private suites, every square meter of our ₹50+ lakh facility is crafted for your serenity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US_DATA.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="p-8 rounded-3xl glass-panel shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-start gap-4 group"
              >
                <div className="p-4 rounded-2xl bg-gold/10 group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                  {getIconComponent(pillar.icon)}
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Services Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212] border-y border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
                Curated Excellence
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Signature Treatments
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.2em] text-gold hover:text-gold-light transition-colors group"
            >
              <span>View Full Menu ({SERVICES_DATA.length} Services)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-ivory dark:bg-zinc-900 rounded-full border border-gold/30 max-w-fit mx-auto">
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
                  {category}
                </button>
              )
            )}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-ivory dark:bg-[#181818] border border-gold/25 hover:border-gold shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 left-4">
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
                    <span className="flex items-center gap-1.5 text-xs font-light tracking-wide bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {service.duration}
                    </span>
                    <span className="font-serif font-bold text-xl gold-gradient-text drop-shadow-md">
                      {service.priceDisplay}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3
                      className="font-serif font-bold text-xl text-foreground mb-2 group-hover:text-gold transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                    <Link
                      href={`/services#${service.id}`}
                      className="text-[11px] text-zinc-500 hover:text-foreground tracking-wider uppercase underline underline-offset-4"
                    >
                      View Options
                    </Link>
                    <Link
                      href={`/book?service=${service.id}`}
                      className="px-5 py-2.5 rounded-full shimmer-gold text-charcoal font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5 gold-glow hover:scale-105"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI & Virtual Suite Teaser Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] text-ivory overflow-hidden border-b border-gold/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase max-w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Next-Gen Sanctuary Innovation</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Try Our <span className="gold-gradient-text">AI Skin Diagnostics</span> & Virtual Salon Suite
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl font-light">
              Not sure which facial or hair color suits your undertones? Launch our AI Skin Diagnostics simulation to receive instant hydration and glow scores, or preview hair transformations with our interactive Before & After slider before booking.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/experience"
                className="px-8 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all gold-glow"
              >
                Launch AI Suite Demo
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-full border border-gold/50 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-gold/15 transition-all"
              >
                Compare Menu & Memberships
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-gold/40 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
              alt="AI Skin Analysis Demo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/70 backdrop-blur-xl border border-gold/30">
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-1">
                Live Interactive Diagnostic
              </span>
              <h4 className="font-serif font-bold text-lg text-white">
                Hydra-Cellular Profile Scanner
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Instantly recommends customized treatments tailored to your moisture levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Curated Packages Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#101010]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
                Imperial Entitlements
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Featured Packages & Memberships
              </h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.2em] text-gold hover:text-gold-light transition-colors group"
            >
              <span>Explore All 6 Packages</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES_DATA.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                  pkg.recommended
                    ? "bg-charcoal text-ivory border-gold shadow-2xl scale-[1.02]"
                    : "bg-white dark:bg-[#161616] text-foreground border-gold/30 hover:border-gold"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Most Coveted Ritual
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider uppercase text-gold">
                      {pkg.duration}
                    </span>
                    <span className="font-serif font-bold text-2xl md:text-3xl gold-gradient-text">
                      {pkg.priceDisplay}
                    </span>
                  </div>
                  <h3
                    className="font-serif font-bold text-2xl leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                    {pkg.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 border-t border-gold/20 pt-4 mb-6">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 dark:text-zinc-300 font-light"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/book?package=${pkg.id}`}
                  className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] text-center hover:bg-gold-light transition-all shadow-lg"
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Reviews Slider Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212] border-t border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
          <div>
            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
              Patron Praise
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-foreground uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Words from Our VIP Patrons
            </h2>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-semibold text-gold tracking-[0.3em] uppercase">
            Your Sanctuary Awaits
          </span>
          <h2
            className="font-serif text-4xl sm:text-6xl font-bold tracking-wide uppercase leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready for Your <span className="gold-gradient-text">Maison Devam</span> Transformation?
          </h2>
          <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed font-light">
            Whether preparing for your royal wedding, celebrating an anniversary, or escaping urban fatigue for our 24K gold facial rituals, reserve your private suite today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/book"
              className="px-8 py-4 rounded-full shimmer-gold text-charcoal font-bold text-xs tracking-[0.22em] uppercase transition-all gold-glow hover:scale-105 shadow-xl"
            >
              Schedule Online Appointment
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 rounded-full border border-gold/60 text-white font-medium text-xs tracking-[0.22em] uppercase hover:bg-gold/15 transition-all"
            >
              Call Concierge (+91 98765 43210)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
