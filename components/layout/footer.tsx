"use client";

import React from "react";
import Link from "next/link";
import { MaisonDevamLogo } from "@/components/ui/logo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-[#e8dfd4] border-t border-gold/30 pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand & Story */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <MaisonDevamLogo variant="horizontal" theme="gold" />
            </Link>
            <p className="font-sans text-sm leading-relaxed text-zinc-400 max-w-sm">
              Maison Devam is Naraingarh’s premier architectural sanctuary of haute coiffure, cellular aesthetic therapies, and Balinese wellness rituals. Designed for the discerning patron seeking absolute serenity.
            </p>
            <div className="flex items-center gap-4 text-gold">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-gold text-lg tracking-wider uppercase font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-[0.14em] text-zinc-300">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Luxury Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-gold transition-colors">
                  Imperial Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  Masonry Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gold transition-colors">
                  Compare Menu
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gold font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> AI & Virtual Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sanctuary Hours & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-gold text-lg tracking-wider uppercase font-semibold">
              Sanctuary
            </h4>
            <div className="flex flex-col gap-3 text-xs text-zinc-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Ambala Road, Naraingarh, Haryana 134203, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>hello@maisondevam.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Daily: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 5: VIP Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-gold text-lg tracking-wider uppercase font-semibold">
              VIP Sanctuary List
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to receive private invitations to seasonal champagne evenings, bespoke beauty tips, and exclusive privileges.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for joining the Maison Devam VIP Sanctuary List.");
              }}
              className="flex flex-col gap-2.5"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-black/60 border border-gold/40 rounded-xl py-3 pl-4 pr-10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gold hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-gold" /> Strict privacy guaranteed.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider text-[11px]">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-gold transition-colors">
              Refund Policy
            </Link>
            <Link href="/cancellation" className="hover:text-gold transition-colors">
              Cancellation
            </Link>
            <Link href="/careers" className="hover:text-gold transition-colors">
              Careers
            </Link>
            <Link href="/admin" className="text-gold/80 hover:text-gold transition-colors font-semibold">
              Admin CMS
            </Link>
          </div>
          <p className="flex items-center gap-1 text-[11px]">
            © {currentYear} Maison Devam. Crafted with <Heart className="w-3 h-3 text-gold fill-gold" /> in Naraingarh.
          </p>
        </div>
      </div>
    </footer>
  );
};
