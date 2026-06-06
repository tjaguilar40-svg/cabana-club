/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, Coffee, Heart, ShoppingBag, Stars, Users } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollTo: (id: string, selectType?: any) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Editorial collage items to mimic the reference PDF layout
  const collageItems = [
    {
      id: "collage-1",
      title: "Matcha Social",
      category: "Matcha Crawl Weekends",
      gradient: "gradient-mint",
      icon: Coffee,
      size: "lg:col-span-2 lg:row-span-2",
      height: "h-56 md:h-72 lg:h-96",
      tag: "Vol. 4 Highlights",
      illustration: (
        <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
          <div className="flex justify-between items-start">
            <span className="bg-cabana-dark text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
              Vol. 4
            </span>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cabana-matcha-dark" />
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-2xl md:text-3xl text-cabana-dark tracking-tight leading-tight block">
              Matcha Social
            </span>
            <span className="font-sans text-xs text-cabana-dark/70 font-medium mt-1 block">
              Curated Ceremonial Green Tea Crafts
            </span>
          </div>
        </div>
      )
    },
    {
      id: "collage-2",
      title: "PR Seeding Kits",
      category: "Influencer PR Packages",
      gradient: "gradient-pink",
      icon: Stars,
      size: "lg:col-span-1 lg:row-span-1",
      height: "h-40 md:h-48 lg:h-44",
      tag: "100+ Creators",
      illustration: (
        <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold text-cabana-muted uppercase tracking-wider">Creator Giftbox</span>
            <Heart className="w-4 h-4 text-cabana-pink fill-cabana-pink animate-pulse" />
          </div>
          <div>
            <span className="font-display font-semibold text-lg text-cabana-dark tracking-tight">PR Seeding Kits</span>
            <span className="text-[10px] text-cabana-muted block">Aesthetic unboxing experiences</span>
          </div>
        </div>
      )
    },
    {
      id: "collage-3",
      title: "Community Crowd",
      category: "Metropolian San Juan Foot Traffic",
      gradient: "gradient-warm",
      icon: Users,
      size: "lg:col-span-1 lg:row-span-1",
      height: "h-40 md:h-48 lg:h-44",
      tag: "3,000+ Foot Traffic",
      illustration: (
        <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold text-cabana-muted uppercase tracking-wider">Active Crowd</span>
            <Users className="w-4 h-4 text-cabana-dark" />
          </div>
          <div>
            <span className="font-display font-semibold text-lg text-cabana-dark tracking-tight">3,000+ Manila Shoppers</span>
            <span className="text-[10px] text-cabana-muted block">Engaged buyers making connections</span>
          </div>
        </div>
      )
    },
    {
      id: "collage-4",
      title: "Indie Fashion Racks",
      category: "Slow Fashion & Ceramic Houses",
      gradient: "gradient-pink",
      icon: ShoppingBag,
      size: "lg:col-span-1 lg:row-span-2",
      height: "h-44 md:h-52 lg:h-[240px]",
      tag: "Curated Brands",
      illustration: (
        <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
          <div className="w-8 h-8 rounded-full bg-cabana-pink/80 flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-cabana-dark" />
          </div>
          <div>
            <span className="font-display font-semibold text-lg text-cabana-dark tracking-tight leading-tight block">
              Indie Racks &amp; Ceramics
            </span>
            <span className="text-[10px] text-cabana-muted mt-1 block">
              Slow local fashion &amp; premium home treasures
            </span>
          </div>
        </div>
      )
    },
    {
      id: "collage-5",
      title: "Partner Lounges",
      category: "Immersive Ground Experiences",
      gradient: "gradient-mint",
      icon: Sparkles,
      size: "lg:col-span-3 lg:row-span-1",
      height: "h-44 md:h-52 lg:h-[240px]",
      tag: "On-Ground Sponsors",
      illustration: (
        <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cabana-matcha-dark animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-cabana-dark">Live Activations</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-cabana-dark tracking-tight block">
                Interactive Seeding Lounges
              </span>
              <span className="text-xs text-cabana-dark/70 font-sans block mt-1">
                Custom follow-to-claim beauty bars, sample catalogs, and photo corners.
              </span>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-[10px] font-semibold text-cabana-muted block">REPLACE WITH EVENT PHOTOS</span>
              <span className="text-xs font-mono font-medium text-cabana-dark">The Corner House · San Juan</span>
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <section id="home" className="pt-28 pb-16 md:py-24 relative overflow-hidden gradient-three-tone font-sans">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-cabana-matcha/20 via-transparent to-transparent pointer-events-none blur-3xl z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-radial from-cabana-pink/15 via-transparent to-transparent pointer-events-none blur-3xl z-0" />

      {/* Floating UI Member Badge */}
      <div className="absolute top-[280px] left-[3%] sm:left-[6%] md:left-[10%] bg-cabana-peach border border-cabana-rust/20 text-cabana-rust p-4.5 rounded-[28px] shadow-[0_20px_50px_rgba(166,43,43,0.12)] z-30 transform -rotate-6 flex items-center gap-3 select-none pointer-events-none animate-float-slow hidden md:flex">
        <div className="bg-cabana-rust w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xs">★</div>
        <div className="pr-1 text-left">
          <p className="text-[8px] uppercase font-bold tracking-widest text-cabana-rust/70 leading-none">Member Count</p>
          <p className="text-xs font-black mt-1 text-cabana-rust-dark">1,200+ Active Members</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Floating badge top */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-cabana-peach/95 border border-cabana-clay/20 text-cabana-rust text-[9px] font-bold uppercase tracking-[0.2em] shadow-xs hover:scale-105 transition-all"
          >
            <span className="flex h-2 w-2 rounded-full bg-cabana-rust animate-pulse" />
            <span>Pop-Up &amp; Lifestyle Platform</span>
          </motion.div>
        </div>

        {/* Big Bold Hero Typography */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-cabana-dark tracking-tighter leading-[0.9] mb-6 uppercase"
            id="hero-header-title"
          >
            Curated Pop-ups <br />
            for Brands, Creators, <br />
            &amp; Communities.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-cabana-muted max-w-[420px] mx-auto leading-relaxed mb-8 font-medium"
            id="hero-header-desc"
          >
            Bringing together food, beauty, lifestyle, wellness, and creative brands through high-energy events designed for community discovery and collaboration.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 font-sans"
            id="hero-ctas-container"
          >
            <button
              onClick={() => onScrollTo("contact", "Sponsorship")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-cabana-rust text-white font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cabana-rust-dark active:scale-98 hover:scale-[1.02] transition-all cursor-pointer shadow-sm"
              id="btn-hero-sponsor"
            >
              Partner With Us <span className="text-sm leading-none">→</span>
            </button>
            <button
              onClick={() => onScrollTo("events")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-cabana-rust text-cabana-rust font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cabana-rust hover:text-white active:scale-98 hover:scale-[1.02] transition-all cursor-pointer"
              id="btn-hero-events"
            >
              View Events <span className="text-sm leading-none">→</span>
            </button>
          </motion.div>
        </div>

        {/* Interactive Floating Microbadges */}
        <div className="relative w-full max-w-5xl mx-auto mb-16 h-8 md:h-12 hidden md:block">
          {/* Badge 1 */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 1.5, -1, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-4 top-0 bg-cabana-bg border border-cabana-border px-5 py-2.5 rounded-full shadow-md text-xs font-semibold text-cabana-dark flex items-center gap-2 select-none cursor-default font-sans"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-cabana-matcha-dark" />
            <span><strong>3,000+</strong> attendees at our recent Matcha Social</span>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              rotate: [0, -1, 1.5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute right-4 top-0 bg-cabana-bg border border-cabana-border px-5 py-2.5 rounded-full shadow-md text-xs font-semibold text-cabana-dark flex items-center gap-2 select-none cursor-default font-sans"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-cabana-pink" />
            <span><strong>100+</strong> top lifestyle creators invited</span>
          </motion.div>
        </div>

        {/* Responsive Editorial Photo Collage */}
        <div className="max-w-5xl mx-auto" id="hero-collage">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {collageItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className={`relative ${item.size} ${item.height} rounded-[40px] overflow-hidden border border-cabana-border ${item.gradient} group flex flex-col justify-end transition-all duration-300 editorial-shadow hover:editorial-shadow-hover hover:-translate-y-1`}
                  id={`collage-card-${item.id}`}
                >
                  {/* Subtle background graphics representing pop-up space layout */}
                  <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Bottom overlay grid for editorial texture */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                  {/* Editorial Layout Content */}
                  {item.illustration}

                  {/* Replace Note Overlay on Hover */}
                  <div className="absolute inset-0 bg-cabana-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white z-20">
                    <IconComp className="w-8 h-8 text-cabana-matcha mb-3 stroke-[1.5]" />
                    <span className="font-display font-bold text-lg mb-1">{item.title}</span>
                    <span className="text-xs text-white/70 block mb-4 italic">({item.category})</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-cabana-matcha-dark text-cabana-dark px-3 py-1.5 rounded-full">
                      Replace with Cabana Club photo
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
