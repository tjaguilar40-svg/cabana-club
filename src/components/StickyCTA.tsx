/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, HelpCircle, UserPlus, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CabanaLogo from "./CabanaLogo";

interface StickyCTAProps {
  onScrollTo: (id: string, selectType?: any, selectMessage?: string) => void;
}

export default function StickyCTA({ onScrollTo }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled past the hero section (> 510px)
      if (window.scrollY > 510) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAction = (type: "Sponsorship" | "Merchant application") => {
    const message = type === "Sponsorship" 
      ? "Hi Cabana Club! We organic lifestyle brands are super interested in upcoming sponsorship packages, creator alignments, and sampling tiers. Please get in touch with us."
      : "Hi Cabana Club! We homegrown local creators would love to join your upcoming activations. Please let us know table dimensions, pricing cards, and waitlist details.";
    onScrollTo("contact", type, message);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-[50%] z-50 w-[92%] max-w-2xl bg-cabana-dark/95 backdrop-blur-md border border-white/10 rounded-[28px] py-3.5 px-6 shadow-[0_25px_60px_-15px_rgba(17,17,17,0.4)] md:flex md:items-center md:justify-between gap-4 select-none"
          id="sticky-interactive-cta-bar"
        >
          {/* Left info segment */}
          <div className="flex items-center gap-3 justify-center md:justify-start mb-3 md:mb-0">
            {/* Minimal logo mark */}
            <div className="w-8 h-8 rounded-full bg-cabana-rust/95 flex items-center justify-center border border-white/10 text-white shrink-0 shadow-xs">
              <span className="font-serif italic font-black text-sm select-none">C</span>
            </div>
            <div className="text-left leading-tight">
              <span className="text-[10px] uppercase tracking-widest text-[#B2B2B2] font-black block">
                Cabana Club Vol. 4
              </span>
              <span className="text-xs font-semibold text-white tracking-tight">
                Now open for partners
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 justify-center">
            <button
              onClick={() => handleAction("Merchant application")}
              className="text-[9px] uppercase tracking-widest font-black text-white hover:text-cabana-rust bg-white/5 hover:bg-white border border-white/10 hover:border-white px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1"
              id="sticky-btn-merchant"
            >
              <span>Join Merch List</span>
            </button>
            
            <button
              onClick={() => handleAction("Sponsorship")}
              className="text-[9px] uppercase tracking-widest font-black text-white bg-cabana-rust hover:bg-cabana-rust-dark px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-md flex items-center gap-1.5"
              id="sticky-btn-sponsor"
            >
              <span>Sponsor Inquiry</span>
              <ArrowRight className="w-3 h-3 text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
