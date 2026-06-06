/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const setTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="social-proof" className="py-20 md:py-28 bg-[#FAFAF7] border-b border-cabana-border font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheader */}
        <div className="max-w-3xl mb-12 md:mb-16 text-left">
          <span className="text-[10px] uppercase tracking-[0.25em] text-cabana-rust font-bold bg-cabana-peach px-3 py-1.5 rounded-full inline-block">
            Partner Testimonials
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[52px] tracking-tighter text-cabana-dark mt-4 md:mt-6 leading-[0.95] uppercase">
            Loved by homegrown brands &amp; sponsors alike
          </h2>
          <p className="text-cabana-muted text-xs md:text-sm font-semibold max-w-lg mt-3 leading-relaxed">
            See how boutique culinary artists, designer clothing labels, and skincare innovators grow their real-world brand visibility during our weekends.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Testimonial Card Stage */}
          <div className="min-h-[340px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full bg-white border border-cabana-border rounded-[40px] p-8 md:p-12 shadow-[0_15px_30px_rgba(166,43,43,0.03)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative absolute watermark */}
                <div className="absolute right-8 top-8 opacity-[0.03] pointer-events-none select-none">
                  <Quote className="w-48 h-48 text-cabana-rust" />
                </div>

                <div>
                  {/* Rating Stars & Logo */}
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="flex items-center gap-1 bg-cabana-peach/30 px-3 py-1 rounded-full border border-cabana-rust/5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-cabana-rust text-cabana-rust" />
                      ))}
                      <span className="text-[9px] font-black uppercase text-cabana-rust ml-1.5">5.0 Brand Score</span>
                    </div>

                    <Quote className="w-10 h-10 text-cabana-rust/30 stroke-[1.5]" />
                  </div>

                  {/* Testimonial Quote Statement with Georgia aesthetic font */}
                  <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-cabana-dark/95 leading-normal md:leading-relaxed mb-8 text-left">
                    "{current.quote}"
                  </blockquote>
                </div>

                {/* Profile Signature & Credentials Area */}
                <div className="border-t border-cabana-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-cabana-peach hover:scale-105 transition-transform flex items-center justify-center font-sans font-black text-xs text-cabana-rust border border-cabana-rust/20 select-none shadow-xs shrink-0">
                      {current.avatarInitials}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-cabana-dark block leading-none">
                        {current.author}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-cabana-rust/70 block mt-1.5">
                        {current.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-cabana-peach/40 px-3 py-1.5 rounded-full text-[9px] font-bold text-cabana-rust border border-cabana-clay/10 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-cabana-rust animate-pulse" />
                    <span>Verified Partner Merchant</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Handheld & Desktop Navigation controls */}
          <div className="flex items-center justify-between mt-8 px-2 md:px-0">
            {/* Steps & Direct Nav indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => setTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? "w-8 bg-cabana-rust" 
                      : "w-2 bg-cabana-rust/20 hover:bg-cabana-rust/40"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Direction Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-cabana-border bg-white text-cabana-dark hover:bg-cabana-peach hover:border-cabana-rust/30 hover:text-cabana-rust active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-cabana-border bg-white text-cabana-dark hover:bg-cabana-peach hover:border-cabana-rust/30 hover:text-cabana-rust active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick bottom metrics callout */}
        <div className="mt-16 text-center">
          <span className="text-xs font-semibold text-cabana-muted italic flex items-center justify-center gap-2 bg-white/60 inline-flex px-5 py-2.5 rounded-full border border-cabana-border">
            <MessageSquare className="w-4 h-4 text-cabana-rust shrink-0" />
            <span>Over 600+ brand alignments successfully completed in Manila since Vol. 1</span>
          </span>
        </div>

      </div>
    </section>
  );
}
