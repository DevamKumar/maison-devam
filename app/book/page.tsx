"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  SERVICES_DATA,
  PACKAGES_DATA,
  TEAM_DATA,
  OFFERS_DATA,
  type ServiceItem,
  type PackageItem,
} from "@/lib/data";
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Tag,
  Coffee,
  ShieldCheck,
  Printer,
  Plus,
} from "lucide-react";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must have at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  suiteType: z.enum(["Standard Luxury Suite", "Private VIP Soundproof Suite (+₹1,500)", "Couples Royal Spa Suite (+₹2,500)"]),
  beverage: z.enum(["Complimentary French Champagne", "Organic Sencha Green Tea", "Artisanal Espresso", "Fresh Balinese Coconut Water"]),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

function BookingWizardContent() {
  const searchParams = useSearchParams();
  const initialServiceId = searchParams?.get("service");
  const initialPackageId = searchParams?.get("package");
  const initialStylistId = searchParams?.get("stylist");
  const initialCoupon = searchParams?.get("coupon");

  const [step, setStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("Services");
  const [serviceFilter, setServiceFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    name: string;
    price: number;
    duration: string;
    type: "service" | "package";
  } | null>(null);

  const [selectedStylist, setSelectedStylist] = useState<{
    id: string;
    name: string;
    role: string;
    surcharge: number;
  }>({
    id: "any-senior",
    name: "First Available Master Artisan",
    role: "Senior Stylist / Dermatologist",
    surcharge: 0,
  });

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>("11:30 AM");
  const [couponInput, setCouponInput] = useState<string>(initialCoupon || "");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState<string | null>(null);
  const [bookingReference, setBookingReference] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      suiteType: "Standard Luxury Suite",
      beverage: "Complimentary French Champagne",
      specialRequests: "",
    },
  });

  const watchSuiteType = watch("suiteType");

  // Preselect from URL parameters
  useEffect(() => {
    if (initialServiceId) {
      const found = SERVICES_DATA.find((s) => s.id === initialServiceId);
      if (found) {
        setSelectedCategory("Services");
        setSelectedItem({
          id: found.id,
          name: found.name,
          price: found.price,
          duration: found.duration,
          type: "service",
        });
      }
    } else if (initialPackageId) {
      const found = PACKAGES_DATA.find((p) => p.id === initialPackageId);
      if (found) {
        setSelectedCategory("Packages");
        setSelectedItem({
          id: found.id,
          name: found.name,
          price: found.price,
          duration: found.duration,
          type: "package",
        });
      }
    }

    if (initialStylistId) {
      const foundStylist = TEAM_DATA.find((t) => t.id === initialStylistId);
      if (foundStylist) {
        const surcharge =
          foundStylist.id === "devam-kumar"
            ? 1500
            : foundStylist.id === "elena-rostova" || foundStylist.id === "aarav-sharma"
            ? 500
            : 0;
        setSelectedStylist({
          id: foundStylist.id,
          name: foundStylist.name,
          role: foundStylist.role,
          surcharge,
        });
      }
    }

    if (initialCoupon) {
      applyCoupon(initialCoupon);
    }
  }, [initialServiceId, initialPackageId, initialStylistId, initialCoupon]);

  const applyCoupon = (codeToApply?: string) => {
    const code = (codeToApply || couponInput).trim().toUpperCase();
    const offer = OFFERS_DATA.find((o) => o.code === code);
    if (offer || code === "WELCOME20" || code === "ROYAL25") {
      const percent = code === "ROYAL25" ? 25 : 20;
      setAppliedDiscount(percent);
      setAppliedCouponCode(code);
    } else {
      alert("Invalid coupon code. Please try WELCOME20 or check our Offers page.");
    }
  };

  // Calculate costs
  const basePrice = selectedItem ? selectedItem.price : 0;
  const stylistFee = selectedStylist.surcharge;
  const suiteUpgradeFee =
    watchSuiteType === "Private VIP Soundproof Suite (+₹1,500)"
      ? 1500
      : watchSuiteType === "Couples Royal Spa Suite (+₹2,500)"
      ? 2500
      : 0;
  const subtotal = basePrice + stylistFee + suiteUpgradeFee;
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const totalAmount = Math.max(0, subtotal - discountAmount);

  const onSubmit = (data: BookingFormValues) => {
    const refNum = `MD-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingReference(refNum);

    // Save to local storage for Admin page demo
    const newBooking = {
      id: refNum,
      createdAt: new Date().toISOString(),
      clientName: data.fullName,
      email: data.email,
      phone: data.phone,
      serviceName: selectedItem?.name || "Bespoke Sanctuary Session",
      servicePrice: totalAmount,
      stylistName: selectedStylist.name,
      date: selectedDate,
      time: selectedTime,
      suiteType: data.suiteType,
      beverage: data.beverage,
      status: "Confirmed",
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("maison_devam_bookings") || "[]"
      );
      localStorage.setItem(
        "maison_devam_bookings",
        JSON.stringify([newBooking, ...existing])
      );
    } catch (e) {
      console.error("Failed saving to localStorage", e);
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C9A227", "#E6C565", "#F8F6F2", "#1A1A1A"],
    });

    setStep(5);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Progress Wizard Bar */}
      {step < 5 && (
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gold/20 -z-0" />
            {[
              { num: 1, label: "Treatment" },
              { num: 2, label: "Artisan" },
              { num: 3, label: "Schedule" },
              { num: 4, label: "Privileges" },
            ].map((s) => (
              <div
                key={s.num}
                onClick={() => {
                  if (s.num < step || (selectedItem && s.num <= step)) {
                    setStep(s.num);
                  }
                }}
                className={`relative z-10 flex flex-col items-center gap-2 cursor-pointer transition-transform ${
                  step === s.num ? "scale-110" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-all shadow-md ${
                    step === s.num
                      ? "bg-gold text-charcoal gold-glow"
                      : step > s.num
                      ? "bg-charcoal text-gold border border-gold"
                      : "bg-white dark:bg-zinc-900 text-zinc-400 border border-zinc-300 dark:border-zinc-800"
                  }`}
                >
                  {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                </div>
                <span
                  className={`text-[11px] uppercase tracking-wider font-semibold ${
                    step === s.num ? "text-gold" : "text-zinc-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Select Treatment */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="text-center">
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
                Step 1 of 4
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Select Your Sanctuary Treatment
              </h2>
            </div>

            {/* Category Switcher */}
            <div className="flex items-center justify-center gap-4">
              {(["Services", "Packages"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-full font-serif text-sm tracking-wider uppercase transition-all shadow-md ${
                    selectedCategory === cat
                      ? "bg-gold text-charcoal font-bold"
                      : "bg-white dark:bg-zinc-900 border border-gold/30 text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  {cat} ({cat === "Services" ? SERVICES_DATA.length : PACKAGES_DATA.length})
                </button>
              ))}
            </div>

            {/* If Services, sub-filter tabs */}
            {selectedCategory === "Services" && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {(["All", "Hair", "Skin", "Spa", "Nails", "Makeup"] as const).map(
                  (f) => (
                    <button
                      key={f}
                      onClick={() => setServiceFilter(f)}
                      className={`px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                        serviceFilter === f
                          ? "bg-charcoal text-gold border border-gold"
                          : "bg-ivory dark:bg-[#161616] text-zinc-500 hover:text-foreground"
                      }`}
                    >
                      {f}
                    </button>
                  )
                )}
              </div>
            )}

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === "Services"
                ? SERVICES_DATA.filter(
                    (s) => serviceFilter === "All" || s.category === serviceFilter
                  )
                : PACKAGES_DATA
              ).map((item) => {
                const isSelected = selectedItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      setSelectedItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        duration: item.duration,
                        type: selectedCategory === "Services" ? "service" : "package",
                      })
                    }
                    className={`p-6 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between gap-4 relative ${
                      isSelected
                        ? "bg-charcoal text-white border-gold shadow-2xl scale-[1.02]"
                        : "bg-white dark:bg-[#161616] text-foreground border-gold/30 hover:border-gold"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4 text-gold">
                        <CheckCircle2 className="w-6 h-6 fill-gold text-charcoal" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase text-gold tracking-widest font-semibold">
                          {item.duration}
                        </span>
                        <span className="font-serif font-bold text-xl gold-gradient-text">
                          {item.priceDisplay}
                        </span>
                      </div>
                      <h3
                        className="font-serif font-bold text-lg mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gold/20 flex items-center justify-between text-xs">
                      <span className="text-gold uppercase tracking-wider font-semibold">
                        {isSelected ? "Selected" : "Click to Select"}
                      </span>
                      <span className="text-zinc-500 font-light">
                        {selectedCategory === "Services" ? "Single Session" : "Multi-Ritual"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Next Button */}
            <div className="flex justify-end pt-6">
              <button
                disabled={!selectedItem}
                onClick={() => setStep(2)}
                className="px-10 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-[0.22em] uppercase hover:bg-gold-light transition-all disabled:opacity-50 flex items-center gap-2 gold-glow"
              >
                <span>Continue to Artisan Selection</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Select Stylist */}
        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="text-center">
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
                Step 2 of 4
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Choose Your Master Artisan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
              {/* Option 0: First Available */}
              <div
                onClick={() =>
                  setSelectedStylist({
                    id: "any-senior",
                    name: "First Available Master Artisan",
                    role: "Senior Stylist / Dermatologist",
                    surcharge: 0,
                  })
                }
                className={`p-6 rounded-3xl border cursor-pointer transition-all flex items-center gap-6 ${
                  selectedStylist.id === "any-senior"
                    ? "bg-charcoal text-white border-gold shadow-2xl"
                    : "bg-white dark:bg-[#161616] text-foreground border-gold/30 hover:border-gold"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center border border-gold flex-shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif font-bold text-lg">
                    First Available Master Artisan
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Assigned to one of our accredited senior specialists based on exact slot timing.
                  </p>
                  <span className="text-[11px] font-semibold text-gold tracking-widest uppercase block mt-2">
                    Standard Tariff (+₹0)
                  </span>
                </div>
              </div>

              {/* Devam Kumar & Senior Stylists */}
              {TEAM_DATA.map((stylist) => {
                const surcharge =
                  stylist.id === "devam-kumar"
                    ? 1500
                    : stylist.id === "elena-rostova" || stylist.id === "aarav-sharma"
                    ? 500
                    : 0;
                const isSelected = selectedStylist.id === stylist.id;
                return (
                  <div
                    key={stylist.id}
                    onClick={() =>
                      setSelectedStylist({
                        id: stylist.id,
                        name: stylist.name,
                        role: stylist.role,
                        surcharge,
                      })
                    }
                    className={`p-6 rounded-3xl border cursor-pointer transition-all flex items-center gap-6 relative ${
                      isSelected
                        ? "bg-charcoal text-white border-gold shadow-2xl"
                        : "bg-white dark:bg-[#161616] text-foreground border-gold/30 hover:border-gold"
                    }`}
                  >
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      className="w-16 h-16 rounded-full object-cover border border-gold flex-shrink-0 shadow-md"
                    />
                    <div className="flex-grow">
                      <span className="text-[10px] text-gold uppercase tracking-widest font-semibold block">
                        {stylist.role}
                      </span>
                      <h3 className="font-serif font-bold text-lg mt-0.5">
                        {stylist.name}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-1 font-light mt-1">
                        {stylist.bio}
                      </p>
                      <span className="text-[11px] font-semibold text-gold tracking-widest uppercase block mt-2">
                        {surcharge > 0 ? `Seniority Premium (+₹${surcharge.toLocaleString()})` : "Standard Tariff (+₹0)"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-6 max-w-4xl mx-auto w-full">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-4 rounded-full border border-gold/40 text-foreground font-medium text-xs tracking-widest uppercase hover:bg-gold/10 transition-all flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-10 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-[0.22em] uppercase hover:bg-gold-light transition-all flex items-center gap-2 gold-glow"
              >
                <span>Continue to Schedule</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Select Date & Time */}
        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-8 max-w-3xl mx-auto w-full"
          >
            <div className="text-center">
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
                Step 3 of 4
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Select Date & Time Slot
              </h2>
            </div>

            <div className="bg-white dark:bg-[#161616] p-8 rounded-3xl border border-gold/30 shadow-xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Select Preferred Sanctuary Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-ivory dark:bg-zinc-900 border border-gold/40 rounded-xl px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:border-gold"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Available Acoustic Suite Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "09:30 AM",
                    "10:30 AM",
                    "11:30 AM",
                    "02:00 PM",
                    "03:30 PM",
                    "05:00 PM",
                    "06:30 PM",
                    "07:30 PM",
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        selectedTime === slot
                          ? "bg-gold text-charcoal shadow-md scale-105"
                          : "bg-ivory dark:bg-zinc-900 border border-gold/30 text-zinc-600 dark:text-zinc-300 hover:border-gold"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-4 rounded-full border border-gold/40 text-foreground font-medium text-xs tracking-widest uppercase hover:bg-gold/10 transition-all flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-10 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-[0.22em] uppercase hover:bg-gold-light transition-all flex items-center gap-2 gold-glow"
              >
                <span>Continue to Privileges</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Guest Details & Customizations */}
        {step === 4 && (
          <motion.div
            key="step-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-8 max-w-4xl mx-auto w-full"
          >
            <div className="text-center">
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold">
                Step 4 of 4
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wide mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Guest Privileges & Finalization
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="lg:col-span-7 bg-white dark:bg-[#161616] p-8 rounded-3xl border border-gold/30 shadow-xl flex flex-col gap-6"
              >
                <h3 className="font-serif font-bold text-xl uppercase text-foreground border-b border-gold/20 pb-3">
                  1. Patron Contact Information
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="Maharani Devika Singh"
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 font-medium">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="devika@luxury.com"
                      className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 font-medium">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                      Telephone Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 font-medium">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl uppercase text-foreground border-b border-gold/20 pb-3 pt-4">
                  2. Sanctuary Suite & Beverage Upgrade
                </h3>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Select Suite Experience
                  </label>
                  <select
                    {...register("suiteType")}
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="Standard Luxury Suite">Standard Luxury Suite (No Upgrade Fee)</option>
                    <option value="Private VIP Soundproof Suite (+₹1,500)">Private VIP Soundproof Suite (+₹1,500)</option>
                    <option value="Couples Royal Spa Suite (+₹2,500)">Couples Royal Spa Suite (+₹2,500)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Complimentary Beverage Entitlement
                  </label>
                  <select
                    {...register("beverage")}
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="Complimentary French Champagne">Complimentary French Champagne (Chilled)</option>
                    <option value="Organic Sencha Green Tea">Organic Japanese Sencha Green Tea</option>
                    <option value="Artisanal Espresso">Artisanal Single-Origin Espresso</option>
                    <option value="Fresh Balinese Coconut Water">Fresh Balinese Coconut Water</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Special Instructions (Optional)
                  </label>
                  <input
                    {...register("specialRequests")}
                    type="text"
                    placeholder="e.g. Please use sulfate-free organic shampoo only..."
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-full border border-gold/40 text-xs tracking-widest uppercase hover:bg-gold/10"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-[0.22em] uppercase hover:bg-gold-light shadow-xl gold-glow"
                  >
                    Confirm & Reserve Suite
                  </button>
                </div>
              </form>

              {/* Right Order Summary Card */}
              <div className="lg:col-span-5 bg-charcoal text-ivory p-8 rounded-3xl border border-gold shadow-2xl flex flex-col gap-6">
                <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Reservation Voucher
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">
                  {selectedItem?.name}
                </h3>

                <div className="flex flex-col gap-3 text-xs border-y border-gold/20 py-4 font-light text-zinc-300">
                  <div className="flex justify-between">
                    <span>Treatment Base Price:</span>
                    <span className="font-serif font-bold text-white">
                      ₹{basePrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Artisan ({selectedStylist.name.split(" ")[0]}):</span>
                    <span className="font-serif font-bold text-gold">
                      {stylistFee > 0 ? `+₹${stylistFee.toLocaleString()}` : "Included"}
                    </span>
                  </div>
                  {suiteUpgradeFee > 0 && (
                    <div className="flex justify-between text-gold font-semibold">
                      <span>VIP Suite Upgrade:</span>
                      <span className="font-serif">
                        +₹{suiteUpgradeFee.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Promotional Privilege ({appliedCouponCode}):</span>
                      <span className="font-serif">
                        -₹{discountAmount.toLocaleString()} ({appliedDiscount}%)
                      </span>
                    </div>
                  )}
                </div>

                {/* Coupon Code Input */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                    Have a Privilege Coupon?
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="e.g. WELCOME20"
                      className="bg-black/60 border border-gold/40 rounded-xl px-3 py-2 text-xs text-white font-mono uppercase flex-grow focus:outline-none focus:border-gold"
                    />
                    <button
                      type="button"
                      onClick={() => applyCoupon()}
                      className="px-4 py-2 rounded-xl bg-gold text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gold/30">
                  <span className="font-serif text-sm uppercase tracking-widest text-zinc-300">
                    Total Estimated Tariff:
                  </span>
                  <span className="font-serif font-bold text-3xl gold-gradient-text">
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-zinc-400 leading-relaxed font-light">
                  <p className="flex items-center gap-1.5 text-gold font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> No Online Pre-Payment Required
                  </p>
                  You may settle your tariff via American Express, Visa, Mastercard, or UPI directly at our Ambala Road reception desk following your treatment.
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 5: Confirmed Voucher View */}
        {step === 5 && (
          <motion.div
            key="step-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-charcoal text-ivory rounded-3xl border-2 border-gold p-8 sm:p-14 shadow-2xl text-center flex flex-col items-center gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-20 h-20 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold text-3xl shadow-2xl gold-glow animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Reservation Confirmed
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Maison Devam Sanctuary Voucher
              </h2>
              <p className="font-mono text-sm sm:text-base text-gold mt-1">
                Booking Reference: <span className="font-bold">{bookingReference}</span>
              </p>
            </div>

            {/* Itemized Printable Summary Box */}
            <div className="w-full p-6 rounded-2xl bg-black/60 border border-gold/40 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-zinc-300">
              <div>
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest block">
                  Reserved Treatment
                </span>
                <span className="font-serif font-bold text-base text-white block mt-0.5">
                  {selectedItem?.name}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest block">
                  Assigned Master Artisan
                </span>
                <span className="font-serif font-bold text-base text-white block mt-0.5">
                  {selectedStylist.name}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest block">
                  Sanctuary Date & Time Slot
                </span>
                <span className="font-serif font-bold text-base text-white block mt-0.5">
                  {selectedDate} at {selectedTime}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest block">
                  Total Tariff
                </span>
                <span className="font-serif font-bold text-lg gold-gradient-text block mt-0.5">
                  ₹{totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-xl leading-relaxed font-light">
              We look forward to welcoming you to our Naraingarh sanctuary. Please present this reference number upon entry for valet clearance and complimentary champagne service.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => window.print()}
                className="px-8 py-3.5 rounded-full border border-gold/60 text-white font-medium text-xs tracking-widest uppercase hover:bg-gold/15 transition-all flex items-center gap-2"
              >
                <Printer className="w-4 h-4 text-gold" />
                <span>Print Voucher</span>
              </button>
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedItem(null);
                }}
                className="px-8 py-3.5 rounded-full bg-gold text-charcoal font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-all flex items-center gap-2 gold-glow"
              >
                <Plus className="w-4 h-4" />
                <span>Book Another Treatment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Private Suite Reservations</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Schedule Your <span className="gold-gradient-text">Sanctuary Ritual</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E8DFD4] tracking-[0.2em] uppercase max-w-xl font-light">
            No Pre-Payment Required • Settle Tariff Post-Treatment
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-20 text-center font-serif text-xl">
            Loading Sanctuary Booking Wizard...
          </div>
        }
      >
        <BookingWizardContent />
      </Suspense>
    </div>
  );
}
