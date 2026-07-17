"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Calendar, MessageCircle, X, Sparkles } from "lucide-react";

export const FloatingActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Maison%20Devam,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20salon%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 animate-bounce" />
        <span className="text-xs font-semibold tracking-wider uppercase hidden md:inline">
          WhatsApp Concierge
        </span>
      </a>

      {/* Expandable Quick Bar / Call Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="pointer-events-auto flex flex-col gap-2 bg-ivory dark:bg-zinc-900 border border-gold/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl w-64 mb-1"
          >
            <div className="flex items-center justify-between border-b border-gold/20 pb-2 mb-1">
              <span className="font-serif text-xs text-gold tracking-widest uppercase font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Quick Concierge
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-gold"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
              Immediate assistance for appointments & private suite bookings.
            </p>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-charcoal dark:bg-white text-ivory dark:text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-gold hover:text-charcoal transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gold text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-colors shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Online Booking</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Book / Toggle Button */}
      <div className="pointer-events-auto flex items-center gap-2">
        <Link
          href="/book"
          className="relative flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-charcoal text-gold border border-gold/60 shadow-2xl hover:bg-gold hover:text-charcoal transition-all duration-300 group gold-glow"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
          <Calendar className="w-5 h-5" />
          <span className="font-serif text-xs font-semibold tracking-[0.16em] uppercase">
            Book Appointment
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle quick actions"
          className="p-3.5 rounded-full bg-gold text-charcoal shadow-xl hover:scale-110 transition-transform"
        >
          <PhoneCall className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
