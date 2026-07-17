"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl aspect-video bg-[#141414] rounded-3xl overflow-hidden border border-gold/40 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif text-sm tracking-[0.2em] uppercase font-semibold text-white">
                Maison Devam • Cinematic Sanctuary Tour
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close video"
              className="pointer-events-auto p-2.5 rounded-full bg-black/60 border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player */}
          <video
            autoPlay
            controls
            playsInline
            className="w-full h-full object-cover"
            src="https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-massage-in-a-spa-39841-large.mp4"
          />

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
            <p className="text-xs text-zinc-300 max-w-2xl font-light tracking-wide">
              Step inside our ₹50+ lakh luxury sanctuary on MG Road, Bengaluru. Featuring private acoustic suites, genuine Italian hair washing spas, and medical-grade aesthetic technology.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
