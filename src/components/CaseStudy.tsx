/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, ArrowRight, Play, Eye, Users, FileText, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudyProps {
  onScrollToInquiry: (target: string, inquiryType: any, customMessage: string) => void;
}

export default function CaseStudy({ onScrollToInquiry }: CaseStudyProps) {
  const [showRecapModal, setShowRecapModal] = useState(false);

  const sponsorIntegrationExamples = [
    { brand: "Vaseline", station: "Skin hydration matching desk", result: "300+ custom skin profiles matched" },
    { brand: "Hada Labo", station: "Matcha-infused water mist bars", result: "1,200+ samples claimed via QR scans" },
    { brand: "Teviant", station: "Cosmetics swatch table & creator setups", result: "150+ user stories uploaded live" }
  ];

  const handleInquireFromStudy = () => {
    onScrollToInquiry("contact", "Sponsorship", "Hi! I just read the 'Matcha Social' case study. I'm highly intrigued by the activation stations built for Vaseline, Hada Labo, and Teviant. We'd love to examine parameters for co-sharing spaces matching this criteria for future events.");
  };

  return (
    <section className="py-20 md:py-28 bg-[#EEF7F0]/30 border-b border-cabana-border font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Soft floating glow circle */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-radial from-cabana-matcha/10 to-transparent pointer-events-none blur-2xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Visual Case Study Spotlight Poster */}
          <div className="lg:col-span-6 relative">
            
            {/* Playful mini badge */}
            <div className="absolute -top-3 -left-3 bg-cabana-pink text-cabana-dark text-[9px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full shadow-md z-10 animate-bounce">
              Spotlight Study
            </div>

            <div className="bg-white border border-cabana-border rounded-[40px] p-6 lg:p-8 shadow-md relative overflow-hidden">
              
              {/* Card Title Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] font-extrabold text-cabana-muted uppercase tracking-wider block">Signature Activation</span>
                  <h3 className="font-display font-bold text-2xl text-cabana-dark tracking-tight mt-1">
                    Matcha Social Vol. 4
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-cabana-mint flex items-center justify-center border border-cabana-matcha">
                  <Sparkles className="w-5 h-5 text-cabana-matcha-dark" />
                </div>
              </div>

              {/* Styled Mock Video Overlay / Creative Showcase */}
              <div className="relative w-full h-64 md:h-80 bg-cabana-mint rounded-2xl overflow-hidden border border-cabana-border flex flex-col justify-between p-6 select-none group">
                <div className="absolute inset-0 bg-radial from-white/30 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

                <div className="flex justify-between items-start z-10">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white text-cabana-dark rounded-full shadow-xs">
                    San Juan · June Archives
                  </span>
                  <div className="flex items-center gap-1.5 bg-[#EB3B5A]/10 text-[#EB3B5A] text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#EB3B5A]/25 shadow-xs">
                    <span>Recap Ready</span>
                  </div>
                </div>

                {/* Simulated Videography Center Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <button 
                    onClick={() => setShowRecapModal(true)}
                    className="w-16 h-16 rounded-full bg-cabana-dark text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg hover:bg-cabana-dark/90 cursor-pointer"
                    aria-label="View Event Recap Video Spotlight"
                    id="btn-case-study-play"
                  >
                    <Play className="w-6 h-6 text-cabana-matcha fill-cabana-matcha stroke-[2.5] ml-1" />
                  </button>
                  <span className="text-[9px] font-bold text-cabana-dark tracking-widest uppercase mt-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-sm shadow-xs border border-cabana-border">
                    Click to Open Recap
                  </span>
                </div>

                <div className="z-10 bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-cabana-border flex items-center justify-between shadow-xs">
                  <div>
                    <span className="font-display font-medium text-xs text-cabana-dark tracking-tight block">
                      Organic UGC Highlights Reel
                    </span>
                    <span className="text-[10px] text-cabana-muted block mt-0.5">
                      250,000+ views across Reels + TikTok tags
                    </span>
                  </div>
                  <Eye className="w-4 h-4 text-cabana-muted shrink-0" />
                </div>
              </div>

              {/* Snapshot Stats summary block */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-center select-none font-sans font-semibold">
                <div className="bg-cabana-neutral/50 border border-cabana-border rounded-xl py-3 px-1">
                  <span className="text-xl md:text-2xl font-bold font-display text-cabana-dark block">3,000+</span>
                  <span className="text-[9px] uppercase tracking-wider text-cabana-muted mt-0.5 block">Attendees</span>
                </div>
                <div className="bg-cabana-neutral/50 border border-cabana-border rounded-xl py-3 px-1">
                  <span className="text-xl md:text-2xl font-bold font-display text-cabana-dark block">18+</span>
                  <span className="text-[9px] uppercase tracking-wider text-cabana-muted mt-0.5 block">Local Brands</span>
                </div>
                <div className="bg-cabana-neutral/50 border border-cabana-border rounded-xl py-3 px-1">
                  <span className="text-xl md:text-2xl font-bold font-display text-cabana-dark block">100+</span>
                  <span className="text-[9px] uppercase tracking-wider text-cabana-muted mt-0.5 block">UGC Influencers</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Explanatory Content */}
          <div className="lg:col-span-6 font-sans">
            <span className="text-xs font-bold text-cabana-matcha-dark uppercase tracking-widest block font-sans">
              Case Study Feature
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-cabana-dark tracking-tight mt-1 leading-snug">
              Unpacking the Matcha Social's viral weekend
            </h3>
            <p className="text-cabana-muted text-sm mt-4 font-semibold leading-relaxed">
              Our recent Matcha Social brought together thousands of matcha lovers, curated drink brands, lifestyle sponsors, creators, and community members for a high-energy weekend of discovery and collaboration.
            </p>

            <div className="h-px bg-cabana-border my-6" />

            <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-[#B2B2B2] mb-4">
              Highlighted Sponsor Stations (Vol. 4 Highlights)
            </h4>
            <div className="flex flex-col gap-4">
              {sponsorIntegrationExamples.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white border border-cabana-border rounded-2xl p-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-cabana-mint border border-cabana-border flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-cabana-matcha-dark stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-cabana-dark">
                      {item.brand} Station
                    </span>
                    <span className="text-xs text-cabana-muted block mt-0.5 font-medium">
                      Deliverable: <strong>{item.station}</strong> · Result: {item.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowRecapModal(true)}
                className="px-6 py-3.5 rounded-full bg-cabana-dark text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-cabana-dark/95 cursor-pointer shadow-md hover:scale-[1.01]"
                id="btn-study-recap"
              >
                <FileText className="w-4 h-4 text-cabana-matcha" />
                <span>View Event Recap</span>
              </button>
              <button
                onClick={handleInquireFromStudy}
                className="px-6 py-3.5 rounded-full border border-cabana-border bg-white text-cabana-dark font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-cabana-neutral transition-all cursor-pointer shadow-2xs"
                id="btn-study-contact-recap"
              >
                <span>Inquire for Similar Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Full Immersion Storyboard Recap Modal */}
      <AnimatePresence>
        {showRecapModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-cabana-dark/70 backdrop-blur-sm flex items-center justify-center p-4 font-sans select-none"
            onClick={() => setShowRecapModal(false)}
            id="modal-case-study-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-cabana-bg w-full max-w-2xl rounded-[32px] overflow-hidden border border-cabana-border shadow-2xl relative p-6 md:p-8"
              onClick={(e) => e.stopPropagation()} // Prevent closing
              id="modal-case-study-box"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest font-extrabold text-cabana-matcha-dark block">
                    Cabana Club Archives
                  </span>
                  <h4 className="font-display font-bold text-2xl text-cabana-dark tracking-tight mt-0.5">
                    Matcha Social Recap Book
                  </h4>
                </div>
                <button
                  onClick={() => setShowRecapModal(false)}
                  className="p-2 border border-cabana-border hover:bg-cabana-neutral rounded-full transition-colors cursor-pointer"
                  aria-label="Close Case Study Recap Modal"
                  id="btn-modal-close"
                >
                  <X className="w-5 h-5 text-cabana-dark" />
                </button>
              </div>

              {/* Scrollable Timeline Vignette list */}
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2 pb-4 scrollbar-thin">
                
                {/* Frame 1 */}
                <div className="bg-white border border-cabana-border rounded-2xl p-4 flex gap-4">
                  <span className="font-display font-semibold text-lg text-cabana-muted shrink-0 w-8">01</span>
                  <div>
                    <span className="text-xs font-bold text-cabana-dark block uppercase tracking-wider text-[9px] mb-1">
                      Saturday 09:00 AM — Setup &amp; Ingress
                    </span>
                    <p className="text-xs text-cabana-muted font-medium leading-relaxed">
                      18 specialty matcha merchants complete their bespoke wood-bamboo stand designs. Floral arches and matcha swatch lounges finished. Traditional green matcha banners hoisted across Center Gate.
                    </p>
                  </div>
                </div>

                {/* Frame 2 */}
                <div className="bg-white border border-cabana-border rounded-2xl p-4 flex gap-4">
                  <span className="font-display font-semibold text-lg text-cabana-muted shrink-0 w-8">02</span>
                  <div>
                    <span className="text-xs font-bold text-cabana-dark block uppercase tracking-wider text-[9px] mb-1">
                      Saturday 11:30 AM — Passport Rush
                    </span>
                    <p className="text-xs text-cabana-muted font-medium leading-relaxed">
                      Lines stretch around the corner inside San Juan. The first 500 Matcha Passports containing custom partner stamps are successfully distributed. Customers begin tasting loops to obtain checks.
                    </p>
                  </div>
                </div>

                {/* Frame 3 */}
                <div className="bg-white border border-cabana-border rounded-2xl p-4 flex gap-4">
                  <span className="font-display font-semibold text-lg text-cabana-muted shrink-0 w-8">03</span>
                  <div>
                    <span className="text-xs font-bold text-cabana-dark block uppercase tracking-wider text-[9px] mb-1">
                      Saturday 03:00 PM — Influencer Seeding Hour
                    </span>
                    <p className="text-xs text-cabana-muted font-medium leading-relaxed">
                      Our official creator reception kicks off. 100+ micro- and macro-influencers unbox their CC PR Kits on camera. Vaseline and Teviant swatch counters record peak active content creation on Instagram Stories.
                    </p>
                  </div>
                </div>

                {/* Frame 4 */}
                <div className="bg-white border border-cabana-border rounded-2xl p-4 flex gap-4">
                  <span className="font-display font-semibold text-lg text-cabana-muted shrink-0 w-8">04</span>
                  <div>
                    <span className="text-xs font-bold text-cabana-dark block uppercase tracking-wider text-[9px] mb-1">
                      Sunday 06:00 PM — Sell Outs &amp; Recaps
                    </span>
                    <p className="text-xs text-cabana-muted font-medium leading-relaxed">
                      80% of merchants report complete sell-out status of featured ceremonial and home accessories list. Post-event surveys reveal 94% merchant satisfaction rate with transparent flat stall fee model.
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer CTA inside Modal */}
              <div className="mt-6 border-t border-cabana-border pt-5 flex items-center justify-between gap-4 flex-col sm:flex-row">
                <span className="text-[10px] text-cabana-muted font-medium uppercase tracking-wider">
                  Official Vol. 4 Consumer Report available
                </span>
                <button
                  onClick={() => {
                    setShowRecapModal(false);
                    onScrollToInquiry("contact", "Sponsorship", "Hi! I just finished reading the Matcha Social Vol.4 timeline. Please send us the physical post-event consumer report/deck for our review.");
                  }}
                  className="px-5 py-2.5 rounded-full bg-cabana-dark text-white text-xs font-semibold hover:bg-cabana-dark/95 cursor-pointer shadow-xs whitespace-nowrap"
                  id="btn-modal-action-inquire"
                >
                  Request Full Deck (PDF)
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
