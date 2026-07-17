"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, TEAM_DATA, type ServiceItem } from "@/lib/data";
import {
  Sparkles,
  Lock,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Plus,
  Trash2,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";

interface BookingRecord {
  id: string;
  createdAt: string;
  clientName: string;
  email: string;
  phone: string;
  serviceName: string;
  servicePrice: number;
  stylistName: string;
  date: string;
  time: string;
  suiteType: string;
  beverage: string;
  status: "Confirmed" | "Completed" | "Cancelled";
}

const DEFAULT_BOOKINGS: BookingRecord[] = [
  {
    id: "MD-892104",
    createdAt: "2026-07-17T08:30:00Z",
    clientName: "Maharani Devika Singh",
    email: "devika@royal.in",
    phone: "+91 98111 22233",
    serviceName: "24K Gold Cellular Luminance Facial",
    servicePrice: 4500,
    stylistName: "Dr. Priya Nair",
    date: "2026-07-18",
    time: "11:30 AM",
    suiteType: "Private VIP Soundproof Suite (+₹1,500)",
    beverage: "Complimentary French Champagne",
    status: "Confirmed",
  },
  {
    id: "MD-554109",
    createdAt: "2026-07-16T14:15:00Z",
    clientName: "Vikramaditya Birla",
    email: "v.birla@invest.com",
    phone: "+91 98222 33344",
    serviceName: "Executive Scalp Detox & Structural Sculpture",
    servicePrice: 3800,
    stylistName: "Devam Kumar",
    date: "2026-07-18",
    time: "02:00 PM",
    suiteType: "Standard Luxury Suite",
    beverage: "Artisanal Espresso",
    status: "Confirmed",
  },
  {
    id: "MD-331902",
    createdAt: "2026-07-16T10:00:00Z",
    clientName: "Ananya Panday",
    email: "ananya@cinema.in",
    phone: "+91 98333 44455",
    serviceName: "Haute Couture Hair Balayage & Gloss",
    servicePrice: 12500,
    stylistName: "Elena Rostova",
    date: "2026-07-17",
    time: "03:30 PM",
    suiteType: "Private VIP Soundproof Suite (+₹1,500)",
    beverage: "Fresh Balinese Coconut Water",
    status: "Completed",
  },
  {
    id: "MD-118490",
    createdAt: "2026-07-15T16:45:00Z",
    clientName: "Rohan Kapoor",
    email: "rohan@tech.co",
    phone: "+91 98444 55566",
    serviceName: "Balinese Deep Tissue Reflexology Ritual",
    servicePrice: 4500,
    stylistName: "Meera Kapoor",
    date: "2026-07-17",
    time: "05:00 PM",
    suiteType: "Couples Royal Spa Suite (+₹2,500)",
    beverage: "Organic Sencha Green Tea",
    status: "Completed",
  },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"bookings" | "services" | "analytics">("bookings");
  const [bookings, setBookings] = useState<BookingRecord[]>(DEFAULT_BOOKINGS);
  const [servicesList, setServicesList] = useState<ServiceItem[]>(SERVICES_DATA);

  // Load from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("maison_devam_bookings");
      if (stored) {
        const parsed: BookingRecord[] = JSON.parse(stored);
        setBookings([...parsed, ...DEFAULT_BOOKINGS.filter((db) => !parsed.some((p) => p.id === db.id))]);
      }
    } catch (e) {
      console.error("Error reading localStorage bookings in admin", e);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "admin" || passwordInput === "devam" || passwordInput === "luxury") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid admin credentials. Hint: click 'Instant Demo Access' or type 'admin'.");
    }
  };

  const handleStatusChange = (id: string, newStatus: "Confirmed" | "Completed" | "Cancelled") => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    try {
      localStorage.setItem("maison_devam_bookings", JSON.stringify(updated.filter((u) => !DEFAULT_BOOKINGS.some((d) => d.id === u.id))));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteBooking = (id: string) => {
    if (confirm("Are you sure you wish to purge this reservation from sanctuary records?")) {
      const filtered = bookings.filter((b) => b.id !== id);
      setBookings(filtered);
      try {
        localStorage.setItem("maison_devam_bookings", JSON.stringify(filtered.filter((u) => !DEFAULT_BOOKINGS.some((d) => d.id === u.id))));
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Calculate metrics
  const totalRevenue = bookings
    .filter((b) => b.status === "Completed" || b.status === "Confirmed")
    .reduce((acc, curr) => acc + curr.servicePrice, 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 bg-charcoal text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#141414] border border-gold/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 flex flex-col items-center text-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center border border-gold shadow-lg">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs text-gold uppercase tracking-[0.25em] font-bold">
              Restricted Sanctuary CMS
            </span>
            <h1
              className="font-serif text-3xl font-bold text-white uppercase mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Maison Devam Admin
            </h1>
            <p className="text-xs text-zinc-400 mt-1 font-light">
              Management Portal for Master Artisans & Executive Concierge
            </p>
          </div>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter Admin Passcode (Hint: 'admin')"
              className="w-full bg-black/60 border border-gold/40 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 font-mono text-center focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-md gold-glow"
            >
              Access Portal
            </button>
          </form>

          <div className="pt-4 border-t border-gold/20 w-full">
            <button
              onClick={() => setIsAuthenticated(true)}
              className="w-full py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-wider transition-all font-medium"
            >
              ⚡ Instant Demo Access (Bypass Login)
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0d0d0d] text-ivory pb-20">
      {/* Top Header */}
      <header className="bg-[#141414] border-b border-gold/30 py-6 px-4 sm:px-6 lg:px-8 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold">
              MD
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-white">
                Executive Management Portal
              </h1>
              <span className="text-[11px] text-gold uppercase tracking-widest font-mono">
                Flagship: MG Road, Bengaluru
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-full border border-gold/30">
              {(["bookings", "services", "analytics"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                    activeTab === t ? "bg-gold text-charcoal" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {t === "bookings" ? "Reservations" : t === "services" ? "Service Menu" : "Financials"}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsAuthenticated(false)}
              aria-label="Exit admin portal"
              className="p-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Metrics Cards Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-[#161616] border border-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest block">
                Total Estimated Volume
              </span>
              <span className="font-serif text-3xl font-bold gold-gradient-text mt-1 block">
                ₹{totalRevenue.toLocaleString()}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                +18.4% vs last month
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-gold/10 text-gold">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#161616] border border-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest block">
                Active Appointments
              </span>
              <span className="font-serif text-3xl font-bold text-white mt-1 block">
                {bookings.length}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono mt-1 block">
                {bookings.filter((b) => b.status === "Confirmed").length} confirmed
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-gold/10 text-gold">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#161616] border border-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest block">
                VIP Sanctuary Patrons
              </span>
              <span className="font-serif text-3xl font-bold text-white mt-1 block">
                1,420
              </span>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                86 Elite Members
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-gold/10 text-gold">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#161616] border border-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest block">
                Suite Occupancy Rate
              </span>
              <span className="font-serif text-3xl font-bold gold-gradient-text mt-1 block">
                94%
              </span>
              <span className="text-[10px] text-zinc-400 font-mono mt-1 block">
                Peak hours: 2PM - 7PM
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-gold/10 text-gold">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab 1: Bookings Management */}
          {activeTab === "bookings" && (
            <div className="bg-[#141414] rounded-3xl border border-gold/30 shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-xl text-white">
                    Live Sanctuary Reservations
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Real-time bookings originating from online customer checkouts and telephone concierge.
                  </p>
                </div>
                <Link
                  href="/book"
                  className="px-5 py-2 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-all flex items-center gap-1.5 w-fit"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Create New Booking</span>
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-black/60 text-zinc-300 border-b border-gold/20 text-xs uppercase font-serif tracking-wider">
                      <th className="py-4 px-6">Reference & Patron</th>
                      <th className="py-4 px-6">Reserved Treatment</th>
                      <th className="py-4 px-6">Assigned Artisan</th>
                      <th className="py-4 px-6">Schedule & Suite</th>
                      <th className="py-4 px-6 text-center">Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/10 text-xs">
                    {bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 font-medium">
                          <span className="font-mono text-gold font-bold block">
                            {b.id}
                          </span>
                          <span className="text-white font-serif text-sm block mt-0.5">
                            {b.clientName}
                          </span>
                          <span className="text-[11px] text-zinc-500 block">
                            {b.phone}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-serif text-sm font-bold text-white block">
                            {b.serviceName}
                          </span>
                          <span className="font-serif text-gold font-bold block mt-0.5">
                            ₹{b.servicePrice.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-zinc-300 font-serif">
                          {b.stylistName}
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-white block font-medium">
                            {b.date} • {b.time}
                          </span>
                          <span className="text-[10px] text-gold uppercase tracking-widest block mt-0.5 line-clamp-1">
                            {b.suiteType}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                              b.status === "Confirmed"
                                ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                                : b.status === "Completed"
                                ? "bg-blue-500/15 border-blue-500/40 text-blue-400"
                                : "bg-red-500/15 border-red-500/40 text-red-400"
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {b.status === "Confirmed" && (
                              <button
                                onClick={() => handleStatusChange(b.id, "Completed")}
                                title="Mark completed"
                                className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            )}
                            {b.status !== "Cancelled" && (
                              <button
                                onClick={() => handleStatusChange(b.id, "Cancelled")}
                                title="Cancel reservation"
                                className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-white transition-all"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteBooking(b.id)}
                              title="Delete record"
                              className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Service Menu Management */}
          {activeTab === "services" && (
            <div className="bg-[#141414] rounded-3xl border border-gold/30 shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gold/20 flex items-center justify-between">
                <div>
                  <h2 className="font-serif font-bold text-xl text-white">
                    Service & Pricing Catalog ({servicesList.length} Items)
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Toggle popular badge highlights and adjust tariffs across all 5 categories.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-black/60 text-zinc-300 border-b border-gold/20 text-xs uppercase font-serif tracking-wider">
                      <th className="py-4 px-6">Service Name & Category</th>
                      <th className="py-4 px-6 text-center">Duration</th>
                      <th className="py-4 px-6 text-center">Standard Tariff</th>
                      <th className="py-4 px-6 text-center">Popular Badge</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/10 text-xs">
                    {servicesList.map((service) => (
                      <tr key={service.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 font-medium">
                          <span className="font-serif text-sm font-bold text-white block">
                            {service.name}
                          </span>
                          <span className="text-[10px] text-gold uppercase tracking-widest">
                            {service.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center font-mono text-zinc-400">
                          {service.duration}
                        </td>
                        <td className="py-4 px-6 text-center font-serif text-sm font-bold text-gold">
                          {service.priceDisplay}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <button
                            onClick={() => {
                              const updated = servicesList.map((s) =>
                                s.id === service.id ? { ...s, popular: !s.popular } : s
                              );
                              setServicesList(updated);
                            }}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                              service.popular
                                ? "bg-gold text-charcoal border-gold font-bold"
                                : "bg-black/40 border-white/20 text-zinc-500 hover:text-white"
                            }`}
                          >
                            {service.popular ? "Popular ★" : "Standard"}
                          </button>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => {
                              const newPrice = prompt(`Enter new tariff for ${service.name}:`, service.price.toString());
                              if (newPrice && !isNaN(Number(newPrice))) {
                                const val = Number(newPrice);
                                const updated = servicesList.map((s) =>
                                  s.id === service.id ? { ...s, price: val, priceDisplay: `₹${val.toLocaleString()}` } : s
                                );
                                setServicesList(updated);
                              }
                            }}
                            className="px-4 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all text-[11px] uppercase tracking-wider font-semibold"
                          >
                            Edit Tariff
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Analytics & Financials */}
          {activeTab === "analytics" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#141414] p-8 rounded-3xl border border-gold/30 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                  <h3 className="font-serif font-bold text-xl text-white">
                    Revenue Distribution by Department
                  </h3>
                  <span className="text-xs text-gold uppercase tracking-widest font-semibold">
                    Q3 FY2026
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { dept: "Haute Coiffure & Balayage", percent: 42, amount: "₹7,72,800", color: "bg-gold" },
                    { dept: "Cellular Aesthetics & HydraFacials", percent: 35, amount: "₹6,44,000", color: "bg-amber-400" },
                    { dept: "Balinese Spa & Couples Rituals", percent: 18, amount: "₹3,31,200", color: "bg-emerald-400" },
                    { dept: "Luxury Retail Boutique Products", percent: 5, amount: "₹92,000", color: "bg-blue-400" },
                  ].map((item) => (
                    <div key={item.dept} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs font-serif">
                        <span className="text-white">{item.dept}</span>
                        <span className="font-bold text-gold">{item.amount} ({item.percent}%)</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-black/60 overflow-hidden border border-white/10">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#141414] p-8 rounded-3xl border border-gold/30 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2">
                    Executive Sanctuary Insights
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Your ₹50+ lakh architectural upgrade on MG Road has generated significant brand appreciation among Bangalore’s elite demographic. Private VIP Soundproof Suite bookings account for 68% of total weekend reservations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/60 border border-gold/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold tracking-widest block">
                      Next Scheduled Audit
                    </span>
                    <span className="font-serif text-lg font-bold text-white block mt-0.5">
                      August 1, 2026
                    </span>
                  </div>
                  <button
                    onClick={() => alert("Downloading comprehensive financial breakdown (PDF/CSV)...")}
                    className="px-6 py-2.5 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-all"
                  >
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
