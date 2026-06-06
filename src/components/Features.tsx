/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Compass, Sparkles, HelpCircle, ArrowUpRight, Flame, ShieldCheck, Heart } from "lucide-react";
import { motion } from "motion/react";

interface FeaturesProps {
  onScrollToInquiry: (target: string, inquiryType: any, customMessage: string) => void;
}

export default function Features({ onScrollToInquiry }: FeaturesProps) {
  const featuresList = [
    {
      id: "curated-environments",
      title: "Highly Curated Themes",
      subtitle: "Aesthetic Discovery",
      description: "We don't host generic flea markets. Every Cabana Club volume is localized under a strict visual theme (from matcha-green tea lounges to modern neutral wellness spaces), attracting hyper-targeted, high-spending crowds.",
      icon: Compass,
      badge: "Visual Identity",
      bgClass: "bg-[#FAFAF7]",
      accentColor: "text-cabana-rust",
      tagLine: "Premium D2C Matching"
    },
    {
      id: "creator-discovery",
      title: "Creator Discovery & Seeding",
      subtitle: "UGC Content Machine",
      description: "With over 100+ Metro Manila micro-influencers and lifestyle creators personally RSVP'd to each weekend, your retail boutique gets instant organic online exposure, product seeding, and real-time social proof.",
      icon: Sparkles,
      badge: "Organic Word-of-Mouth",
      bgClass: "bg-white",
      accentColor: "text-[#DE8F80]",
      tagLine: "Seeded PR Pipelines"
    },
    {
      id: "audience-funnel",
      title: "Passport Traffic Funnels",
      subtitle: "Guaranteed Table Discovery",
      description: "Our proprietary stamp passport passport program funnels incoming attendees to stop at all merchant stands. No more quiet corners: every homegrown brand gets front-row engagement and verified buyer interactions.",
      icon: Flame,
      badge: "High-integrity Engagement",
      bgClass: "bg-[#FAFAF7]",
      accentColor: "text-cabana-rust",
      tagLine: "No Merchant Left Behind"
    }
  ];

  const handlePartnerCTA = () => {
    onScrollToInquiry(
      "contact",
      "Sponsorship",
      "Hi Cabana Club! We'd love to learn more about sponsoring an upcoming curated volume. Please send us your sponsorship packages, creator metrics, and stall layout guide."
    );
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-cabana-border font-sans relative overflow-hidden">
      {/* Decorative vector background lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-r border-b border-cabana-rust/5 rounded-br-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-l border-t border-cabana-rust/5 rounded-tl-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Title & Supertitle Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-cabana-rust font-bold bg-cabana-peach px-3 py-1.5 rounded-full">
              Platform Pillars
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[52px] tracking-tighter text-cabana-dark leading-[0.95] mt-4 uppercase">
              Curated Retail, <br className="hidden sm:inline" />
              Amplified by Community.
            </h2>
            <p className="text-cabana-muted text-xs md:text-sm font-semibold max-w-lg mt-4 leading-relaxed">
              We design physical pop-ups that double as social pipelines. We bypass expensive digital ad-spend by placing local homegrown brands directly in high-density crowd pockets.
            </p>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={handlePartnerCTA}
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-cabana-dark rounded-full text-[10px] font-bold uppercase tracking-widest text-cabana-dark hover:bg-cabana-dark hover:text-white transition-all duration-300"
            >
              <span>Explore Partnership</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3-Column Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {featuresList.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col justify-between border border-cabana-border rounded-[40px] p-8 md:p-10 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(166,43,43,0.06)] hover:-translate-y-1 ${feature.bgClass}`}
                id={`feature-card-${feature.id}`}
              >
                <div>
                  {/* Badge & Decorative Anchor */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-cabana-muted">
                      {feature.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-full ${feature.id === "creator-discovery" ? "bg-cabana-peach text-cabana-rust" : "bg-cabana-peach/60 text-cabana-rust"} flex items-center justify-center border border-cabana-border/50`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Sub */}
                  <span className="text-[10px] uppercase tracking-widest font-black text-cabana-rust/70 leading-none">
                    {feature.subtitle}
                  </span>
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-cabana-dark tracking-tight mt-2 mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cabana-muted text-xs leading-relaxed font-semibold">
                    {feature.description}
                  </p>
                </div>

                {/* Footer annotation styled with JetBrains Mono / clean caps representation */}
                <div className="border-t border-cabana-border mt-8 pt-4 flex items-center justify-between text-[10px] font-bold">
                  <span className="text-cabana-muted uppercase tracking-wider">Pillar #{idx + 1}</span>
                  <span className={`${feature.accentColor} uppercase tracking-widest bg-cabana-peach px-2.5 py-0.5 rounded-full text-[9px]`}>
                    {feature.tagLine}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick horizontal banner combining features with trust alignment */}
        <div className="mt-12 p-6 md:p-8 rounded-[40px] border border-cabana-border bg-[#FFFCEF] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-cabana-rust flex items-center justify-center text-white shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-xs text-cabana-dark uppercase tracking-wider block">
                Zero Commission Split model
              </span>
              <p className="text-[10px] text-cabana-muted font-bold mt-1 max-w-xl">
                We believe retail pioneers deserve to keep 100% of physical weekend turnover. We charge simple, flat boutique rates without unrequested percentage cuts or margin shares.
              </p>
            </div>
          </div>
          <button 
            onClick={handlePartnerCTA}
            className="w-full md:w-auto px-6 py-3 bg-cabana-rust text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-cabana-rust-dark transition-colors inline-flex justify-center items-center gap-2"
          >
            <span>Learn rates &amp; specs</span>
            <span className="text-sm">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
