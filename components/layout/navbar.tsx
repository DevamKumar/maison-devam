"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MaisonDevamLogo } from "@/components/ui/logo";
import {
  Menu,
  X,
  Sun,
  Moon,
  Calendar,
  Sparkles,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Gallery", href: "/gallery" },
    { label: "Pricing", href: "/pricing" },
    { label: "AI Suite", href: "/experience", highlight: true },
    { label: "Offers", href: "/offers" },
    { label: "Team", href: "/team" },
    { label: "Products", href: "/products" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ivory/85 dark:bg-[#0d0d0d]/85 backdrop-blur-xl border-b border-gold/20 py-3 shadow-md"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 dark:from-black/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <MaisonDevamLogo
            variant="horizontal"
            theme={isScrolled ? "auto" : "white"}
            className="hidden sm:flex scale-90 md:scale-100"
          />
          <MaisonDevamLogo
            variant="icon"
            theme={isScrolled ? "auto" : "white"}
            className="flex sm:hidden"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.16em] font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 flex items-center gap-1 ${
                  isActive
                    ? "text-gold font-semibold"
                    : isScrolled
                    ? "text-foreground hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.highlight && (
                  <Sparkles className="w-3 h-3 text-gold animate-pulse" />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-full transition-all duration-300 border ${
                isScrolled
                  ? "border-gold/30 hover:border-gold bg-ivory dark:bg-zinc-900 text-foreground"
                  : "border-white/30 hover:border-gold bg-black/40 text-white backdrop-blur-md"
              }`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-gold animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-gold" />
              )}
            </button>
          )}

          {/* Book Now Button */}
          <Link
            href="/book"
            className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full overflow-hidden font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 group bg-gold text-charcoal hover:bg-gold-light gold-glow hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`xl:hidden p-2.5 rounded-full transition-colors border ${
              isScrolled
                ? "border-gold/30 text-foreground hover:border-gold"
                : "border-white/30 text-white hover:border-gold bg-black/40 backdrop-blur-md"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gold" />
            ) : (
              <Menu className="w-5 h-5 text-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[65px] bg-ivory/95 dark:bg-[#0d0d0d]/95 backdrop-blur-2xl z-50 overflow-y-auto px-6 py-8 border-t border-gold/20 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="pb-4 border-b border-gold/20 text-center">
              <span className="font-serif text-lg tracking-[0.14em] text-gold uppercase">
                Sanctuary Navigation
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      isActive
                        ? "border-gold bg-gold/10 text-gold font-semibold"
                        : "border-zinc-200 dark:border-zinc-800 text-foreground hover:border-gold/50"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.12em]">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gold/20 flex flex-col gap-3">
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gold text-charcoal font-semibold text-center uppercase tracking-[0.18em] text-xs shadow-lg shadow-gold/20"
              >
                Schedule Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="w-full py-3.5 rounded-xl border border-gold/40 text-foreground font-medium text-center uppercase tracking-[0.14em] text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
