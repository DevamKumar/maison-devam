"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MaisonDevamLogo } from "@/components/ui/logo";
import {
  Menu,
  X,
  Sparkles,
  PhoneCall,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (theme !== "system") {
      setTheme("system");
    }
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme, setTheme]);

  const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "AI Suite", href: "/experience", highlight: true },
    { label: "Offers", href: "/offers" },
    { label: "Contact", href: "/contact" },
  ];

  const moreLinks = [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Products", href: "/products" },
    { label: "Blogs", href: "/blogs" },
  ];

  const allNavLinks = [
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-3.5 ${
        isScrolled
          ? "bg-ivory/90 dark:bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-gold/20 shadow-md"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent dark:from-black/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Column: Brand Logo */}
        <div className="flex-1 flex items-center justify-start">
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
        </div>

        {/* Center Column: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 text-xs uppercase tracking-[0.15em] font-medium">
          {primaryLinks.map((link) => {
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

          {/* Explore / More Dropdown */}
          <div
            className="relative py-1"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className={`flex items-center gap-1 py-1 transition-colors duration-300 ${
                moreLinks.some((l) => pathname === l.href) || exploreOpen
                  ? "text-gold font-semibold"
                  : isScrolled
                  ? "text-foreground hover:text-gold"
                  : "text-white/90 hover:text-gold"
              }`}
            >
              <span>Explore</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  exploreOpen ? "rotate-180 text-gold" : ""
                }`}
              />
            </button>

            {exploreOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 py-3 rounded-2xl glass-panel shadow-2xl border border-gold/40 flex flex-col gap-1.5 animate-in fade-in zoom-in-95 duration-200 z-50">
                {moreLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setExploreOpen(false)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors flex items-center justify-between ${
                        isActive
                          ? "text-gold font-bold bg-gold/10"
                          : "text-foreground/90 hover:text-gold hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-3 h-3 text-gold/60" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Column: Action Controls */}
        <div className="flex-1 flex items-center justify-end gap-3">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`lg:hidden p-2.5 rounded-xl border transition-colors ${
              isScrolled
                ? "border-gold/30 text-foreground hover:border-gold"
                : "border-white/30 text-white hover:border-gold bg-black/40 backdrop-blur-md"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gold" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-ivory/95 dark:bg-[#0d0d0d]/95 backdrop-blur-2xl z-50 overflow-y-auto px-6 py-8 border-t border-gold/20 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="pb-4 border-b border-gold/20 text-center">
              <span className="font-serif text-lg tracking-[0.14em] text-gold uppercase">
                Sanctuary Navigation
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {allNavLinks.map((link) => {
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
