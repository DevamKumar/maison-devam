"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, Check, ShieldCheck, MessageCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  priceDisplay: string;
  image: string;
  description: string;
  benefits: string[];
}

const PRODUCTS_DATA: Product[] = [
  {
    id: "24k-gold-serum",
    name: "24K Gold Cellular Luminance Serum",
    brand: "Maison Devam Couture",
    category: "Skincare",
    priceDisplay: "₹6,500",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    description: "Infused with pure 24-karat gold leaf flakes and multi-molecular hyaluronic acid to visibly firm, plump, and restore youthful radiance.",
    benefits: ["Cellular regeneration", "Instant luminous glow", "Sulfate & paraben-free"],
  },
  {
    id: "oribe-imperial-shampoo",
    name: "Royal Imperial Gold Hair Elixir Shampoo",
    brand: "Oribe / Maison Devam Edition",
    category: "Haircare",
    priceDisplay: "₹4,200",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    description: "A decadent, reparative cleanser formulated with bio-restorative complex, Mediterranean cypress, and argan oil to fortify fragile hair fibers.",
    benefits: ["UV color protection", "Deep keratin strengthening", "Signature Côte d’Azur fragrance"],
  },
  {
    id: "balinese-jasmine-oil",
    name: "Balinese Night Jasmine & Sandalwood Body Oil",
    brand: "Maison Devam Wellness",
    category: "Body & Spa",
    priceDisplay: "₹3,800",
    image: "https://images.unsplash.com/photo-1608248597359-0e6d526a6e38?auto=format&fit=crop&q=80&w=800",
    description: "Hand-pressed virgin coconut and sweet almond oils infused for 90 days with organic night-blooming jasmine and aged Mysore sandalwood.",
    benefits: ["Absorbs instantly without residue", "Aromatherapy stress relief", "Sustainably harvested"],
  },
  {
    id: "dyson-supersonic-gold",
    name: "Dyson Supersonic™ 23.75K Gold Edition",
    brand: "Dyson Professional",
    category: "Tools",
    priceDisplay: "₹39,900",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    description: "Engineered for fast drying without extreme heat damage. Gilded with traditional Florentine 23.75-karat gold leaf.",
    benefits: ["Intelligent heat control", "Magnetic professional attachments", "Collector’s presentation case"],
  },
  {
    id: "forest-essentials-mask",
    name: "Soundarya Radiance Cream with 24K Gold",
    brand: "Forest Essentials Luxe",
    category: "Skincare",
    priceDisplay: "₹5,400",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    description: "An exceptionally rich Ayurvedic age-defying cream rich in pure cow’s ghee, saffron, and pure 24K gold bhasma.",
    benefits: ["Tridoshic balance", "Reduces pigmentation", "100% organic herbs"],
  },
  {
    id: "aesop-resurrection-hand",
    name: "Resurrection Aromatique Hand Balm (500ml)",
    brand: "Aesop Sanctuary",
    category: "Body & Spa",
    priceDisplay: "₹7,200",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    description: "A rich blend of fragrant botanicals and skin-softening emollients that delivers rich hydration to labor-wearied hands and cuticles.",
    benefits: ["Mandarin Rind, Rosemary Leaf, Cedar Atlas", "Greaseless finish", "Iconic amber glass dispenser"],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Retail Sanctuary Boutique</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Curated <span className="gold-gradient-text">Luxury Products</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Take the Maison Devam Cellular & Botanical Experience Home With You
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="sticky top-[72px] z-30 bg-ivory/95 dark:bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-gold/20 py-5 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {(["All", "Skincare", "Haircare", "Body & Spa", "Tools"] as const).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gold text-charcoal shadow-md"
                    : "bg-white dark:bg-zinc-900 border border-gold/30 text-zinc-600 dark:text-zinc-400 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#161616] border border-gold/30 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-gold text-[10px] font-semibold uppercase tracking-widest border border-gold/30">
                    {product.brand}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="font-serif font-bold text-2xl bg-charcoal text-gold px-4 py-1.5 rounded-full shadow-lg border border-gold/40">
                    {product.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3
                    className="font-serif font-bold text-xl leading-snug mb-2 group-hover:text-gold transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-4">
                    {product.description}
                  </p>

                  <ul className="flex flex-col gap-1.5 border-t border-gold/15 pt-4">
                    {product.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[11px] text-zinc-500 font-light"
                      >
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/919876543210?text=Hello%20Maison%20Devam,%20I%20would%20like%20to%20reserve%20and%20purchase%20the%20${encodeURIComponent(
                      product.name
                    )}%20from%20your%20boutique.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-full bg-charcoal dark:bg-white text-ivory dark:text-charcoal font-semibold text-xs uppercase tracking-[0.18em] text-center hover:bg-gold hover:text-charcoal transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Reserve via Concierge</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
