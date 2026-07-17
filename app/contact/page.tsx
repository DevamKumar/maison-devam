"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Car,
} from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required (min 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  subject: z.string().min(3, "Please select or specify a subject"),
  message: z.string().min(10, "Message must contain at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "Private Suite Inquiry",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Private Concierge</span>
          </div>
          <h1
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sanctuary <span className="gold-gradient-text">Contact</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#E8DFD4] tracking-[0.2em] uppercase max-w-2xl font-light">
            We Invite You to Inquire Regarding VIP Soundproof Suites & Bridal Entitlements
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory dark:bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Col 1: Contact Details & Valet Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
                Sanctuary Address
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl font-bold uppercase text-foreground leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Naraingarh Flagship
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Situated in the heart of Naraingarh’s luxury avenue on Ambala Road, Maison Devam offers private elevator entry and bespoke valet assistance for total confidentiality.
              </p>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white dark:bg-[#161616] border border-gold/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold/10 text-gold flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">
                    Address
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light leading-relaxed">
                    Maison Devam, Civil Hospital Road, Ambala Road, Naraingarh, Haryana 134203, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold/10 text-gold flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">
                    Private Telephone
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">
                    +91 98765 43210 (Direct Concierge)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold/10 text-gold flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">
                    Email Correspondence
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">
                    concierge@maisondevam.com • bridal@maisondevam.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gold/10 text-gold flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">
                    Sanctuary Hours
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">
                    Monday – Sunday: 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-gold/20 pt-4">
                <div className="p-3 rounded-2xl bg-gold/10 text-gold flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">
                    Complimentary Valet Parking
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-light">
                    Available directly in front of the private lobby entrance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161616] p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-2xl relative">
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-30 bg-charcoal/98 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-4 border border-gold shadow-xl animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-light">
                    Thank you for contacting the Maison Devam Concierge. Our senior guest relations officer will reach out to your telephone within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3.5 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-widest hover:bg-gold-light transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold block mb-2">
              Correspondence Form
            </span>
            <h3
              className="font-serif text-2xl sm:text-3xl font-bold uppercase text-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send Us a Confidential Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="e.g. Maharani Devika"
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 font-medium">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="devika@luxury.com"
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Telephone Number *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 font-medium">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Inquiry Subject *
                  </label>
                  <select
                    {...register("subject")}
                    className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Private Suite Inquiry">Private VIP Suite Booking</option>
                    <option value="Bridal & Wedding Couture">Bridal & Wedding Couture</option>
                    <option value="Cellular Skincare Consultation">Cellular Skincare Consultation</option>
                    <option value="Annual Membership Enrollment">Annual Membership Enrollment</option>
                    <option value="General Sanctuary Feedback">General Feedback / Other</option>
                  </select>
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 font-medium">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                  Your Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Please specify any preferred dates, private room acoustic requirements, or specific treatments..."
                  className="w-full bg-ivory dark:bg-zinc-900 border border-gold/30 rounded-xl px-4 py-3 text-xs text-foreground placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-zinc-400 flex items-center gap-1 font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Confidentiality assured.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-gold text-charcoal font-semibold text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all shadow-lg flex items-center gap-2 gold-glow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Simulation Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white border-t border-gold/30">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden aspect-video max-h-[450px] relative border border-gold/40 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600"
            alt="Naraingarh Ambala Road Map Simulation"
            className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <div className="p-4 rounded-full bg-gold text-charcoal mb-4 shadow-2xl animate-bounce">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-wider">
              Ambala Road, Naraingarh, Haryana
            </h3>
            <p className="text-xs text-gold uppercase tracking-[0.3em] font-semibold mt-2">
              Coordinates: 30.4820° N, 77.1265° E • Private Valet Available
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 px-8 py-3.5 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal border border-white/30 hover:border-gold text-white font-semibold text-xs uppercase tracking-widest transition-all backdrop-blur-md"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
