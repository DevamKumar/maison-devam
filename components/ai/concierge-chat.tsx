"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Award,
  ChevronRight,
  RefreshCw,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Tag,
} from "lucide-react";
import {
  SERVICES_DATA,
  PACKAGES_DATA,
  TEAM_DATA,
  type ServiceItem,
  type TeamMember,
} from "@/lib/data";

interface ChatMessage {
  id: string;
  sender: "aurelia" | "user";
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    actionType: "book_service" | "select_category" | "select_service" | "select_stylist" | "ask_question" | "external_link";
    payload?: string;
  }[];
  serviceCard?: ServiceItem;
  stylistCard?: TeamMember;
  bookingSummary?: {
    serviceId: string;
    serviceName: string;
    price: string;
    duration: string;
    stylistId?: string;
    stylistName?: string;
  };
}

export const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Guided booking state inside chat
  const [guidedBooking, setGuidedBooking] = useState<{
    active: boolean;
    step: "category" | "service" | "stylist" | "confirm";
    selectedCategory?: string;
    selectedService?: ServiceItem;
    selectedStylist?: TeamMember | "any";
  }>({
    active: false,
    step: "category",
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init-1",
      sender: "aurelia",
      text: "Bonjour and welcome to Maison Devam. I am Aurelia, your personal AI Luxury Concierge. Whether you wish to explore our cellular aesthetic therapies, book a private acoustic salon suite, or consult on custom hair transformations, how may I delight you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestedActions: [
        { label: "✨ Start Interactive Booking", actionType: "select_category" },
        { label: "💎 Explore 24K Gold Facial", actionType: "ask_question", payload: "Tell me about the 24K Gold Facial and pricing" },
        { label: "💇‍♀️ Hair Botox vs Keratin", actionType: "ask_question", payload: "What is the difference between Hair Botox and Keratin?" },
        { label: "👑 VIP Memberships", actionType: "ask_question", payload: "What are your monthly and annual VIP membership benefits?" },
        { label: "📍 Salon Location & Valet", actionType: "ask_question", payload: "Where is the salon located and do you have valet parking?" },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = processQuery(text);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 650);
  };

  // Smart Query Processor & NLP Engine
  const processQuery = (query: string): ChatMessage => {
    const q = query.toLowerCase();
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // 1. Check if user wants to book or start guided booking
    if (
      q.includes("book") ||
      q.includes("appointment") ||
      q.includes("reserve") ||
      q.includes("schedule") ||
      q.includes("start interactive booking")
    ) {
      setGuidedBooking({ active: true, step: "category" });
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: "It is my absolute pleasure to curate your reservation. First, which category of treatment calls to you today?",
        timestamp,
        suggestedActions: [
          { label: "💇‍♀️ Haute Coiffure (Hair)", actionType: "select_category", payload: "Hair" },
          { label: "✨ Cellular Aesthetics (Skin)", actionType: "select_category", payload: "Skin" },
          { label: "💆‍♀️ Balinese Wellness (Spa)", actionType: "select_category", payload: "Spa" },
          { label: "💅 Imperial Nails", actionType: "select_category", payload: "Nails" },
          { label: "👑 Royal Bridal & Makeup", actionType: "select_category", payload: "Makeup" },
        ],
      };
    }

    // 2. Check for specific service queries
    const matchedService = SERVICES_DATA.find(
      (s) =>
        q.includes(s.name.toLowerCase()) ||
        (q.includes("facial") && s.category === "Skin") ||
        (q.includes("balayage") && s.id === "highlights") ||
        (q.includes("color") && s.id === "hair-color-global") ||
        (q.includes("botox") && s.id === "hair-botox") ||
        (q.includes("cleanup") && s.id === "cleanup") ||
        (q.includes("massage") && s.category === "Spa") ||
        (q.includes("beard") && s.id === "beard-styling")
    );

    if (matchedService) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `Our **${matchedService.name}** (${matchedService.priceDisplay} • ${matchedService.duration}) is an exceptional choice. ${matchedService.description}`,
        timestamp,
        serviceCard: matchedService,
        suggestedActions: [
          { label: `✨ Book ${matchedService.name} Now`, actionType: "book_service", payload: matchedService.id },
          { label: "💇‍♀️ View Stylists & Artisans", actionType: "ask_question", payload: "Who are the master artisans for this treatment?" },
          { label: "📋 Explore All Menu Tariffs", actionType: "external_link", payload: "/pricing" },
        ],
      };
    }

    // 3. Check for specific artisan/team queries
    const matchedTeam = TEAM_DATA.find(
      (t) =>
        q.includes(t.name.toLowerCase().split(" ")[0]) ||
        (q.includes("devam") && t.id === "devam-kumar") ||
        (q.includes("elena") && t.id === "elena-rostova") ||
        (q.includes("meera") && t.id === "dr-meera-kapoor") ||
        (q.includes("aarav") && t.id === "aarav-singh") ||
        (q.includes("putu") && t.id === "putu-saraswati") ||
        (q.includes("zara") && t.id === "zara-khan") ||
        q.includes("stylist") ||
        q.includes("dermatologist") ||
        q.includes("therapist") ||
        q.includes("artisan")
    );

    if (matchedTeam) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `Allow me to introduce **${matchedTeam.name}**, our **${matchedTeam.role}** (${matchedTeam.experience} experience). \n\n*Specialization:* ${matchedTeam.specialization}\n\n${matchedTeam.bio}`,
        timestamp,
        stylistCard: matchedTeam,
        suggestedActions: [
          { label: `📅 Book Session with ${matchedTeam.name.split(" ")[0]}`, actionType: "external_link", payload: `/book?stylist=${matchedTeam.id}` },
          { label: "✨ Start Service Selection", actionType: "select_category" },
        ],
      };
    }

    // 4. Check for Memberships & Packages
    if (q.includes("membership") || q.includes("package") || q.includes("vip") || q.includes("annual")) {
      const vipMonthly = PACKAGES_DATA.find((p) => p.id === "monthly-membership");
      const annualElite = PACKAGES_DATA.find((p) => p.id === "annual-membership");
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `We offer two prestigious membership tiers designed for discerning patrons demanding unlimited beauty and serenity:\n\n1. **${vipMonthly?.name || "VIP Monthly Membership"} (${vipMonthly?.priceDisplay || "₹9,999"} / 30 Days)**: Includes 2 Luxury Hair Spas/Haircuts, 1 Signature Hydra or Gold Facial, 1 Balinese Massage, and 15% off retail products.\n\n2. **${annualElite?.name || "Annual Elite Luxury Membership"} (${annualElite?.priceDisplay || "₹69,999"} / 365 Days)**: Includes unlimited hair washes/blow-dries, 12 Signature Facials, 12 Luxury Massages, free birthday spa rituals, and priority lounge access.`,
        timestamp,
        suggestedActions: [
          { label: "👑 View All Packages & Tiers", actionType: "external_link", payload: "/packages" },
          { label: "📅 Reserve Membership Session", actionType: "external_link", payload: "/book?service=annual-membership" },
        ],
      };
    }

    // 5. Check for Location, Valet, Parking
    if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("park") || q.includes("valet") || q.includes("naraingarh") || q.includes("ambala road")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `**Sanctuary Address:** Ambala Road, Civil Hospital Road, Naraingarh, Haryana 134203.\n\n**Valet & Arrival:** We provide complimentary private valet parking at our grand portico. Upon arrival, you will be escorted to your private soundproof suite with a welcome selection of Japanese Sencha Green Tea or chilled French Champagne.`,
        timestamp,
        suggestedActions: [
          { label: "🗺️ Get Directions & Contact info", actionType: "external_link", payload: "/contact" },
          { label: "📅 Book Your Sanctuary Visit", actionType: "select_category" },
        ],
      };
    }

    // 6. Check for Hair Botox vs Keratin FAQ
    if (q.includes("botox") || q.includes("keratin") || q.includes("straight") || q.includes("frizz") || q.includes("mirror shine")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `Here is our expert distinction from Devam Kumar and Elena Rostova:\n\n• **Hair Botox (₹6,500 • 90 min):** A deep plumping, formaldehyde-free restoration treatment infused with caviar oil and hyaluronic acid. It repairs damaged fibers, eliminates frizz, and adds mirror-like reflection while maintaining natural curl structure.\n\n• **Brazilian Keratin Treatment (₹8,500 • 150 min):** A thermal straightening coating that permanently reduces unruly volume and delivers ultra-sleek, pin-straight hair for up to 5–6 months.`,
        timestamp,
        suggestedActions: [
          { label: "✨ Book Hair Botox (₹6,500)", actionType: "book_service", payload: "hair-botox" },
          { label: "💇‍♀️ Book Global Hair Color", actionType: "book_service", payload: "hair-color-global" },
          { label: "📖 Read Full Editorial Guide", actionType: "external_link", payload: "/blogs/the-secret-to-mirror-shine-hair-botox-vs-keratin" },
        ],
      };
    }

    // 7. Check for Hygiene, Autoclave, Sanitation
    if (q.includes("hygiene") || q.includes("clean") || q.includes("sanit") || q.includes("autoclave") || q.includes("safe")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `Your safety and peace of mind are our paramount luxury. Maison Devam operates strictly under hospital-grade clinical sanitation protocols:\n\n• Every stainless tool is sterilized inside medical-grade steam autoclaves at 134°C.\n• We exclusively use single-use Egyptian cotton linens and biodegradable robes.\n• All private treatment suites feature continuous HEPA-14 medical air filtration and ozone sanitization between sessions.`,
        timestamp,
        suggestedActions: [
          { label: "🏛️ Read Our Heritage & Hygiene", actionType: "external_link", payload: "/about" },
          { label: "✨ Book Private Suite Now", actionType: "select_category" },
        ],
      };
    }

    // 8. Check for Offers & Coupons
    if (q.includes("offer") || q.includes("coupon") || q.includes("discount") || q.includes("price") || q.includes("cost") || q.includes("promo")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `We are pleased to extend exclusive seasonal privileges to our patrons:\n\n• **WELCOME20**: Enjoy flat 20% off your inaugural visit across any hair or skin therapy.\n• **ROYAL25**: Flat 25% off when booking our Royal Couple Spa or Bridal Transformation Suite.\n\nSimply apply these codes during your online checkout or present them to your concierge at reception.`,
        timestamp,
        suggestedActions: [
          { label: "🎁 Explore All Seasonal Privileges", actionType: "external_link", payload: "/offers" },
          { label: "📅 Redeem WELCOME20 Now", actionType: "external_link", payload: "/book?coupon=WELCOME20" },
        ],
      };
    }

    // 9. Check for AI Skin Scanner / Try-on
    if (q.includes("ai") || q.includes("scan") || q.includes("diagnostic") || q.includes("virtual") || q.includes("try")) {
      return {
        id: `bot-${Date.now()}`,
        sender: "aurelia",
        text: `Our **AI & Virtual Suite** features two cutting-edge tools:\n\n1. **AI Skin Diagnostic Scanner:** Analyzes epidermal elasticity, hydration levels, and pigmentation to calculate your exact cellular vitality score.\n2. **Virtual Hair Try-On Simulator:** Test champagne gold balayage, rose gold glazes, or obsidian hues on your live portrait before committing.`,
        timestamp,
        suggestedActions: [
          { label: "✨ Launch AI Skin Scanner", actionType: "external_link", payload: "/experience" },
          { label: "🎨 Try Virtual Hair Simulator", actionType: "external_link", payload: "/experience" },
        ],
      };
    }

    // Fallback response with helpful links
    return {
      id: `bot-${Date.now()}`,
      sender: "aurelia",
      text: `Thank you for consulting with me. As your luxury concierge, I can assist you with:\n\n• Bespoke appointment reservations across our 24 specialized treatments\n• Assigning specific master artisans like Devam Kumar or Elena Rostova\n• Details on pricing, duration, and VIP membership entitlements\n• Valet parking, private soundproof suites, and Ambala Road, Naraingarh directions\n\nHow may I arrange your visit today?`,
      timestamp,
      suggestedActions: [
        { label: "✨ Start Interactive Booking", actionType: "select_category" },
        { label: "📋 View Full Pricing Menu", actionType: "external_link", payload: "/pricing" },
        { label: "💬 Connect on WhatsApp Concierge", actionType: "external_link", payload: "https://wa.me/919876543210?text=Hello%20Maison%20Devam" },
      ],
    };
  };

  // Handle Action Clicks
  const handleActionClick = (action: {
    label: string;
    actionType: "book_service" | "select_category" | "select_service" | "select_stylist" | "ask_question" | "external_link";
    payload?: string;
  }) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (action.actionType === "external_link" && action.payload) {
      if (action.payload.startsWith("http")) {
        window.open(action.payload, "_blank");
      } else {
        setIsOpen(false);
      }
      return;
    }

    if (action.actionType === "ask_question" && action.payload) {
      handleSendMessage(action.payload);
      return;
    }

    if (action.actionType === "book_service" && action.payload) {
      const s = SERVICES_DATA.find((item) => item.id === action.payload);
      if (s) {
        setGuidedBooking({
          active: true,
          step: "stylist",
          selectedService: s,
          selectedCategory: s.category,
        });

        const userMsg: ChatMessage = {
          id: `user-${Date.now()}`,
          sender: "user",
          text: `I would like to book: ${s.name}`,
          timestamp,
        };
        const botMsg: ChatMessage = {
          id: `bot-${Date.now() + 1}`,
          sender: "aurelia",
          text: `Magnifique! You have selected **${s.name}** (${s.priceDisplay} • ${s.duration}). Which master artisan would you prefer to conduct your session?`,
          timestamp,
          suggestedActions: [
            { label: "👑 Devam Kumar (Founder +₹1,500)", actionType: "select_stylist", payload: "devam-kumar" },
            { label: "✨ Elena Rostova (Color Director)", actionType: "select_stylist", payload: "elena-rostova" },
            { label: "👩‍⚕️ Dr. Meera Kapoor (Chief Skin Specialist)", actionType: "select_stylist", payload: "dr-meera-kapoor" },
            { label: "💎 Aarav Singh (Senior Stylist)", actionType: "select_stylist", payload: "aarav-singh" },
            { label: "🌟 First Available Specialist (Complimentary)", actionType: "select_stylist", payload: "any" },
          ],
        };
        setMessages((prev) => [...prev, userMsg, botMsg]);
        return;
      }
    }

    if (action.actionType === "select_category" && action.payload) {
      const cat = action.payload;
      const catServices = SERVICES_DATA.filter((s) => s.category === cat).slice(0, 5);
      setGuidedBooking((prev) => ({ ...prev, active: true, step: "service", selectedCategory: cat }));

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: `Category: ${cat}`,
        timestamp,
      };
      const botMsg: ChatMessage = {
        id: `bot-${Date.now() + 1}`,
        sender: "aurelia",
        text: `Exquisite choice. Here are our premier **${cat}** treatments. Please select the ritual you wish to experience:`,
        timestamp,
        suggestedActions: catServices.map((s) => ({
          label: `${s.name} (${s.priceDisplay})`,
          actionType: "book_service" as const,
          payload: s.id,
        })),
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
      return;
    }

    if (action.actionType === "select_stylist" && action.payload) {
      const stylistId = action.payload;
      const stylist = TEAM_DATA.find((t) => t.id === stylistId);
      const stylistName = stylist ? stylist.name : "First Available Master Artisan";
      const s = guidedBooking.selectedService;

      setGuidedBooking((prev) => ({
        ...prev,
        step: "confirm",
        selectedStylist: stylist || "any",
      }));

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: `Artisan: ${stylistName}`,
        timestamp,
      };

      const bookingUrl = `/book?service=${s?.id || "hair-botox"}${stylist ? `&stylist=${stylist.id}` : ""}`;

      const botMsg: ChatMessage = {
        id: `bot-${Date.now() + 1}`,
        sender: "aurelia",
        text: `Your reservation details have been perfectly assembled. Please click below to select your encrypted suite slot in our booking lounge!`,
        timestamp,
        bookingSummary: {
          serviceId: s?.id || "hair-botox",
          serviceName: s?.name || "Luxury Treatment",
          price: s?.priceDisplay || "₹4,500",
          duration: s?.duration || "60 min",
          stylistId: stylist?.id,
          stylistName: stylistName,
        },
        suggestedActions: [
          { label: `🔒 Complete Reservation Now`, actionType: "external_link", payload: bookingUrl },
          { label: "🔄 Start Over with Different Service", actionType: "select_category" },
        ],
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
      return;
    }
  };

  return (
    <>
      {/* Floating Concierge Trigger Button (Left Bottom or next to right actions) */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#161616] dark:bg-[#0c0c0c] text-gold border border-gold/60 shadow-2xl hover:bg-gold hover:text-charcoal transition-all duration-300 group"
          style={{
            boxShadow: isOpen ? "0 0 35px rgba(201, 162, 39, 0.4)" : "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Pulsing Status indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-[#161616]"></span>
          </span>

          <div className="w-8 h-8 rounded-full bg-gold/20 group-hover:bg-charcoal flex items-center justify-center text-gold transition-colors">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>

          <div className="flex flex-col items-start text-left">
            <span className="font-serif text-xs font-bold uppercase tracking-[0.18em] leading-none">
              AI Concierge
            </span>
            <span className="text-[10px] text-zinc-400 group-hover:text-charcoal/80 tracking-wide font-sans">
              Book & Inquire • Aurelia
            </span>
          </div>

          {unreadCount > 0 && !isOpen && (
            <span className="ml-1 px-2 py-0.5 rounded-full bg-gold text-charcoal text-[10px] font-bold">
              {unreadCount}
            </span>
          )}
        </motion.button>
      </div>

      {/* AI Chat Glassmorphism Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 left-6 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[80vh] bg-[#121212]/95 backdrop-blur-2xl border border-gold/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-4 px-5 bg-gradient-to-r from-[#1b1915] via-[#221d12] to-[#1b1915] border-b border-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Aurelia AI Concierge"
                    className="w-10 h-10 rounded-full object-cover border border-gold/60"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#121212]"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3
                      className="font-serif text-sm font-bold text-white tracking-wide"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Aurelia
                    </h3>
                    <span className="px-2 py-0.2 rounded bg-gold/20 border border-gold/40 text-gold text-[9px] uppercase tracking-widest font-semibold">
                      AI Specialist
                    </span>
                  </div>
                  <p className="text-[10px] text-gold-light tracking-wider uppercase font-sans">
                    Maison Devam • Online 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMessages([
                      {
                        id: `reset-${Date.now()}`,
                        sender: "aurelia",
                        text: "Bonjour once again! How may I assist you with your booking or inquiries today?",
                        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                        suggestedActions: [
                          { label: "✨ Start Interactive Booking", actionType: "select_category" },
                          { label: "📋 View Pricing Tariffs", actionType: "external_link", payload: "/pricing" },
                          { label: "📍 Salon Location", actionType: "ask_question", payload: "Where is the salon located?" },
                        ],
                      },
                    ]);
                    setGuidedBooking({ active: false, step: "category" });
                  }}
                  title="Reset Conversation"
                  className="p-1.5 rounded-full text-zinc-400 hover:text-gold hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Concierge"
                  className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 font-sans text-xs scrollbar-thin scrollbar-thumb-gold/30">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-lg leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gold text-charcoal font-medium rounded-br-none"
                        : "bg-[#1c1b18] text-zinc-200 border border-gold/20 rounded-bl-none"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>

                    {/* Service Preview Card if applicable */}
                    {msg.serviceCard && (
                      <div className="mt-3 p-3 rounded-xl bg-black/40 border border-gold/30 flex items-center gap-3">
                        <img
                          src={msg.serviceCard.image}
                          alt={msg.serviceCard.name}
                          className="w-12 h-12 rounded-lg object-cover border border-gold/30 shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-white font-bold text-xs truncate">
                            {msg.serviceCard.name}
                          </span>
                          <span className="text-gold font-semibold text-[11px]">
                            {msg.serviceCard.priceDisplay} • {msg.serviceCard.duration}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Stylist Preview Card if applicable */}
                    {msg.stylistCard && (
                      <div className="mt-3 p-3 rounded-xl bg-black/40 border border-gold/30 flex items-center gap-3">
                        <img
                          src={msg.stylistCard.image}
                          alt={msg.stylistCard.name}
                          className="w-12 h-12 rounded-full object-cover border border-gold/50 shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-white font-bold text-xs truncate">
                            {msg.stylistCard.name}
                          </span>
                          <span className="text-gold text-[10px] uppercase tracking-wider">
                            {msg.stylistCard.role}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Booking Summary Voucher inside chat */}
                    {msg.bookingSummary && (
                      <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-br from-gold/20 via-black/60 to-gold/10 border border-gold text-white space-y-2">
                        <div className="flex items-center justify-between border-b border-gold/30 pb-1.5">
                          <span className="text-[10px] uppercase font-bold text-gold tracking-widest flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Booking Assembly
                          </span>
                          <span className="px-2 py-0.5 rounded bg-gold text-charcoal font-bold text-[9px]">
                            Ready for Slot
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-400">Treatment:</span>
                          <span className="font-semibold text-white">{msg.bookingSummary.serviceName}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-400">Tariff & Duration:</span>
                          <span className="font-semibold text-gold">{msg.bookingSummary.price} ({msg.bookingSummary.duration})</span>
                        </div>
                        {msg.bookingSummary.stylistName && (
                          <div className="flex justify-between text-xs">
                            <span className="text-zinc-400">Master Artisan:</span>
                            <span className="font-semibold text-white">{msg.bookingSummary.stylistName}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div
                      className={`text-[9px] mt-1 text-right ${
                        msg.sender === "user" ? "text-charcoal/70" : "text-zinc-500"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Suggested Action Buttons below Aurelia reply */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                      {msg.suggestedActions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (action.actionType === "external_link" && action.payload?.startsWith("/")) {
                              setIsOpen(false);
                            }
                            handleActionClick(action);
                          }}
                          className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 shadow-sm ${
                            action.label.includes("🔒") || action.label.includes("Book") || action.label.includes("Complete")
                              ? "bg-gold text-charcoal hover:bg-gold-light font-bold"
                              : "bg-[#25231e] border border-gold/40 text-gold hover:bg-gold hover:text-charcoal"
                          }`}
                        >
                          {action.actionType === "external_link" && action.payload?.startsWith("/") ? (
                            <Link href={action.payload} className="flex items-center gap-1">
                              <span>{action.label}</span>
                              <ChevronRight className="w-3 h-3" />
                            </Link>
                          ) : (
                            <>
                              <span>{action.label}</span>
                              <ChevronRight className="w-3 h-3 opacity-70" />
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-zinc-400 text-xs pl-2">
                  <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Bot className="w-4 h-4 animate-spin-slow" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-[#1c1b18] border border-gold/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer Input Area */}
            <div className="p-3 bg-[#181818] border-t border-gold/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask Aurelia about treatments, stylists, pricing..."
                  className="flex-grow px-4 py-2.5 rounded-full bg-[#242424] text-white placeholder-zinc-500 text-xs border border-gold/20 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2.5 rounded-full bg-gold text-charcoal hover:bg-gold-light disabled:opacity-40 transition-all shrink-0 shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-between px-2 pt-2 text-[9px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-gold" /> Encrypted Luxury AI
                </span>
                <span>Powered by Maison Devam</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
