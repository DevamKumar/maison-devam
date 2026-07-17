"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA } from "@/lib/data";
import {
  Sparkles,
  Cpu,
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Calendar,
  Layers,
  ShieldAlert,
} from "lucide-react";

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<"skin" | "hair">("skin");

  // AI Skin Analysis State
  const [skinType, setSkinType] = useState("Dry/Dehydrated");
  const [concern, setConcern] = useState("Fine Lines & Loss of Glow");
  const [exposure, setExposure] = useState("Urban Pollution & AC Exposure");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Hair Try-On State
  const [selectedShade, setSelectedShade] = useState<{
    id: string;
    name: string;
    tone: string;
    beforeImg: string;
    afterImg: string;
    description: string;
  }>({
    id: "champagne-blonde",
    name: "Champagne Gold Balayage",
    tone: "Cool/Warm Gold Hybrid",
    beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    description: "Multidimensional hand-painted ribbons of champagne gold over rich walnut roots. Perfect for brightening warm Indian skin undertones.",
  });

  const [sliderPosition, setSliderPosition] = useState(50);

  const shades = [
    {
      id: "champagne-blonde",
      name: "Champagne Gold Balayage",
      tone: "Cool/Warm Gold Hybrid",
      beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
      description: "Multidimensional hand-painted ribbons of champagne gold over rich walnut roots. Perfect for brightening warm Indian skin undertones.",
    },
    {
      id: "obsidian-brunette",
      name: "Obsidian Espresso Gloss",
      tone: "Deep Cool Brunette",
      beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
      description: "Ultra-high shine glass hair finish infused with keratin peptides and cool obsidian reflections for maximum light reflection.",
    },
    {
      id: "honey-caramel",
      name: "Honey Caramel Melt",
      tone: "Warm Golden Amber",
      beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
      description: "Seamlessly melted warm honey and amber highlights designed to add volume and texture without harsh demarcation lines.",
    },
    {
      id: "rose-gold",
      name: "Metallic Rose Gold Aura",
      tone: "Soft Pastel Metallic",
      beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
      description: "A daring yet refined rose gold glaze formulated with Italian bond-building technology to preserve hair fiber elasticity.",
    },
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getRecommendedServices = () => {
    if (skinType.includes("Dry")) {
      return SERVICES_DATA.filter((s) => s.id === "24k-gold-facial" || s.id === "hydra-cellular-infusion");
    }
    return SERVICES_DATA.filter((s) => s.category === "Skin").slice(0, 2);
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Next-Gen Diagnostic Suite</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            AI Skin & <span className="gold-gradient-text">Virtual Suite</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            Test Interactive Skin Biomarkers & Preview Haute Coiffure Transformations
          </p>

          {/* Dual Suite Selector */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab("skin")}
              className={`px-8 py-3.5 rounded-full font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-2 shadow-xl ${
                activeTab === "skin"
                  ? "bg-gold text-charcoal scale-105 gold-glow"
                  : "bg-black/60 border border-gold/40 text-white hover:bg-gold/15"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>AI Skin Diagnostic Scanner</span>
            </button>
            <button
              onClick={() => setActiveTab("hair")}
              className={`px-8 py-3.5 rounded-full font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-2 shadow-xl ${
                activeTab === "hair"
                  ? "bg-gold text-charcoal scale-105 gold-glow"
                  : "bg-black/60 border border-gold/40 text-white hover:bg-gold/15"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Virtual Hair Transformation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab 1: AI Skin Diagnostics */}
      <AnimatePresence mode="wait">
        {activeTab === "skin" && (
          <motion.section
            key="skin-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Config Panel */}
              <div className="lg:col-span-5 bg-white dark:bg-[#161616] p-8 rounded-3xl border border-gold/30 shadow-xl flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                  <span className="font-serif text-xl font-bold uppercase tracking-wider text-foreground">
                    Patient Profile Configuration
                  </span>
                  <span className="text-[10px] bg-gold/15 text-gold px-2.5 py-1 rounded-md uppercase font-semibold">
                    Step 1
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Primary Skin Undertone / Type
                  </label>
                  <select
                    value={skinType}
                    onChange={(e) => {
                      setSkinType(e.target.value);
                      setScanComplete(false);
                    }}
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="Dry/Dehydrated">Dry & Chronically Dehydrated</option>
                    <option value="Normal/Combination">Normal to T-Zone Combination</option>
                    <option value="Oily/Acne-Prone">Oily & Congestion-Prone</option>
                    <option value="Sensitive/Rosacea">Sensitive & Reactive / Erythema</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Primary Dermatological Concern
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => {
                      setConcern(e.target.value);
                      setScanComplete(false);
                    }}
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="Fine Lines & Loss of Glow">Fine Lines & Loss of Cellular Luminance</option>
                    <option value="Hyperpigmentation & Sun Spots">Uneven Pigmentation & Melasma</option>
                    <option value="Enlarged Pores & Texture">Enlarged Pores & Rough Epidermal Texture</option>
                    <option value="Loss of Elasticity">Sub-Dermal Laxity & Sagging</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Environmental Exposure
                  </label>
                  <select
                    value={exposure}
                    onChange={(e) => {
                      setExposure(e.target.value);
                      setScanComplete(false);
                    }}
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="Urban Pollution & AC Exposure">Heavy Urban Air Pollution & AC Dryness</option>
                    <option value="Direct Sun Exposure">High Daily UV & Solar Heat Exposure</option>
                    <option value="Indoor/Minimal Exposure">Controlled Indoor Environment</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-gold/20">
                  <button
                    onClick={handleStartScan}
                    disabled={isScanning}
                    className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.22em] text-center hover:bg-gold-light transition-all shadow-lg flex items-center justify-center gap-2 gold-glow disabled:opacity-50"
                  >
                    {isScanning ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Analyzing Biomarkers ({scanProgress}%)...</span>
                      </>
                    ) : (
                      <>
                        <Cpu className="w-4 h-4" />
                        <span>Execute Cellular Biomarker Scan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Diagnostic Scanner / Results */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {/* Visual Scanner Box */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-charcoal border-2 border-gold/40 shadow-2xl flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000"
                    alt="Facial Diagnostic Target"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isScanning ? "filter brightness-50 contrast-150 scale-105" : "filter brightness-75"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Scanning Laser Animation */}
                  {isScanning && (
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-gold shadow-[0_0_20px_#C9A227] z-20"
                    />
                  )}

                  {/* Overlay HUD */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold/30 text-[10px] uppercase font-mono text-gold">
                      <span className={`w-2 h-2 rounded-full ${isScanning ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
                      <span>{isScanning ? "Scanning Epidermal Layers" : scanComplete ? "Diagnostic Ready" : "Sensors Active"}</span>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      ID: #MD-BIO-882
                    </span>
                  </div>

                  {/* Center Progress or Prompt */}
                  {!scanComplete && !isScanning && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <Cpu className="w-12 h-12 text-gold mb-3 animate-pulse" />
                      <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                        Ready for Biomarker Analysis
                      </h3>
                      <p className="text-xs text-zinc-300 max-w-md mt-1">
                        Select your parameters on the left and click "Execute Cellular Biomarker Scan" to simulate custom dermatological recommendations.
                      </p>
                    </div>
                  )}

                  {isScanning && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-black/40 backdrop-blur-sm">
                      <span className="font-serif text-5xl font-bold gold-gradient-text">
                        {scanProgress}%
                      </span>
                      <span className="text-xs uppercase tracking-widest text-white mt-2 font-mono">
                        Calculating Hydration & Collagen Indices...
                      </span>
                    </div>
                  )}
                </div>

                {/* Scan Results Card */}
                {scanComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-white dark:bg-[#161616] border border-gold shadow-2xl flex flex-col gap-6"
                  >
                    <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                      <div>
                        <span className="text-xs uppercase font-bold text-gold tracking-widest">
                          Biomarker Report Card
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-foreground mt-0.5">
                          Personalized Cellular Diagnosis
                        </h3>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-3xl font-serif font-bold text-gold">88/100</span>
                        <span className="text-[10px] uppercase text-zinc-400">Epidermal Vitality Score</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 rounded-2xl bg-ivory dark:bg-zinc-900 border border-gold/20">
                        <span className="text-[10px] uppercase font-semibold text-zinc-400 block mb-1">
                          Hydration Deficit
                        </span>
                        <span className="font-serif text-xl font-bold text-amber-500">-18% Sub-Optimal</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-ivory dark:bg-zinc-900 border border-gold/20">
                        <span className="text-[10px] uppercase font-semibold text-zinc-400 block mb-1">
                          Collagen Density
                        </span>
                        <span className="font-serif text-xl font-bold text-emerald-500">Normal / Stable</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-ivory dark:bg-zinc-900 border border-gold/20">
                        <span className="text-[10px] uppercase font-semibold text-zinc-400 block mb-1">
                          UV Oxidative Stress
                        </span>
                        <span className="font-serif text-xl font-bold text-gold">Moderate</span>
                      </div>
                    </div>

                    <div className="border-t border-gold/20 pt-4">
                      <span className="text-xs uppercase font-bold text-foreground tracking-widest block mb-3">
                        Prescribed Signature Treatments:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {getRecommendedServices().map((s) => (
                          <div
                            key={s.id}
                            className="p-4 rounded-2xl bg-ivory dark:bg-zinc-900 border border-gold/30 flex flex-col justify-between gap-3"
                          >
                            <div>
                              <h4 className="font-serif font-bold text-base text-foreground">
                                {s.name}
                              </h4>
                              <p className="text-[11px] text-zinc-500 line-clamp-2 mt-1 font-light">
                                {s.description}
                              </p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-gold/15">
                              <span className="font-serif font-bold text-gold text-sm">
                                {s.priceDisplay}
                              </span>
                              <Link
                                href={`/book?service=${s.id}`}
                                className="px-4 py-1.5 rounded-full bg-gold text-charcoal font-semibold text-[11px] uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-1"
                              >
                                <span>Book Ritual</span>
                                <Calendar className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Tab 2: Virtual Hair Color Try-On */}
        {activeTab === "hair" && (
          <motion.section
            key="hair-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]"
          >
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
                  Interactive Simulation
                </span>
                <h2
                  className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Before & After Shade Preview
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-light">
                  Drag the center gold slider to inspect multi-dimensional reflections and root transitions before booking your master colorist.
                </p>
              </div>

              {/* Shade Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {shades.map((shade) => (
                  <button
                    key={shade.id}
                    onClick={() => setSelectedShade(shade)}
                    className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 ${
                      selectedShade.id === shade.id
                        ? "bg-gold text-charcoal shadow-xl scale-105 gold-glow"
                        : "bg-white dark:bg-zinc-900 border border-gold/30 text-zinc-600 dark:text-zinc-400 hover:text-gold"
                    }`}
                  >
                    {shade.name}
                  </button>
                ))}
              </div>

              {/* Interactive Before / After Slider Box */}
              <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-gold shadow-2xl select-none group">
                {/* After Image (Full background) */}
                <img
                  src={selectedShade.afterImg}
                  alt="After Transformation"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-95"
                />

                {/* Before Image (Clipped by slider position) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r border-gold/80"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedShade.beforeImg}
                    alt="Before State"
                    className="absolute inset-0 w-[100vw] max-w-5xl h-full object-cover filter brightness-75 contrast-110"
                    style={{ width: "100%" }}
                  />
                  <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/70 text-white font-serif text-xs font-bold uppercase tracking-widest border border-white/20">
                    Before: Natural Base
                  </div>
                </div>

                {/* After Badge */}
                <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-gold text-charcoal font-serif text-xs font-bold uppercase tracking-widest shadow-lg">
                  After: {selectedShade.name}
                </div>

                {/* Interactive Slider Bar */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

                {/* Visual Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-gold pointer-events-none z-20 flex items-center justify-center shadow-[0_0_15px_#C9A227]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-xl border-2 border-white -translate-x-1/2">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Shade Details & CTA */}
              <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white dark:bg-[#161616] border border-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-gold uppercase tracking-widest font-bold">
                    Tone Profile: {selectedShade.tone}
                  </span>
                  <h3
                    className="font-serif font-bold text-2xl text-foreground mt-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {selectedShade.name}
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-xl mt-1 font-light leading-relaxed">
                    {selectedShade.description}
                  </p>
                </div>
                <Link
                  href={`/book?service=hair-color-balayage`}
                  className="px-8 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all flex-shrink-0 shadow-lg gold-glow"
                >
                  Reserve Colorist Session
                </Link>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
