/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowUp, Instagram } from "lucide-react";
import CabanaLogo from "./CabanaLogo";

interface FooterViewProps {
  onScrollTo: (id: string) => void;
}

export default function FooterView({ onScrollTo }: FooterViewProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#111111] text-[#FAFAF7] py-16 md:py-24 relative overflow-hidden font-sans select-none">
      {/* Editorial Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Logo Brand Frame */}
          <div className="md:col-span-5 flex flex-col gap-4 text-left items-start justify-start">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={handleScrollToTop}>
              <CabanaLogo className="transform scale-95 origin-left" />
            </div>
            
            <p className="text-[13px] text-[#8A8A8A] font-semibold max-w-sm leading-relaxed">
              We design physical intersections where high-energy homegrown merchandise meets active metropolitan shoppers. We turn weekend pop-ups into lifelong digital relationships.
            </p>

            <span className="text-[10px] uppercase tracking-widest text-cabana-matcha font-extrabold flex items-center gap-1.5 mt-2">
              <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Metro Manila Vol. 4 Archives · 2026</span>
            </span>
          </div>

          {/* Quick links columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:col-span-5 md:col-start-7 text-sm font-semibold">
            
            {/* Quick Jumps */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-[#555] font-extrabold block">
                Quick Jumps
              </span>
              <ul className="flex flex-col gap-3 font-medium text-xs text-[#8A8A8A]">
                <li>
                  <button onClick={() => onScrollTo("home")} className="hover:text-white cursor-pointer transition-colors">
                    Home / Identity
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("events")} className="hover:text-white cursor-pointer transition-colors">
                    Events Calendar
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("sponsors")} className="hover:text-white cursor-pointer transition-colors">
                    Sponsorship Packages
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("merchants")} className="hover:text-white cursor-pointer transition-colors">
                    Merchant Benefits
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("about")} className="hover:text-white cursor-pointer transition-colors">
                    About Event Directors
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("contact")} className="hover:text-white cursor-pointer transition-colors">
                    Request Deck (PDF)
                  </button>
                </li>
              </ul>
            </div>

            {/* Social handles */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-[#555] font-extrabold block">
                Social Hubs
              </span>
              <ul className="flex flex-col gap-3 font-medium text-xs text-[#8A8A8A]">
                <li>
                  <a
                    href="https://instagram.com/cabanaclub.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3 h-3 text-[#8A8A8A]" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@cabanaclub.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pinterest Board
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Vimeo Highlights
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Huge Oversized Typography Container */}
        <div className="border-t border-[#222222] pt-12 mt-12 relative">
          
          {/* Scroll to Top Trigger */}
          <button
            onClick={handleScrollToTop}
            className="absolute -top-5 right-6 w-10 h-10 rounded-full bg-cabana-dark hover:bg-white hover:text-cabana-dark text-white border border-[#222] hover:border-transparent flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Scroll back to top of Cabana Club"
            id="btn-footer-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* Huge "CABANA CLUB" typography */}
          <div className="w-full text-center overflow-hidden mb-6">
            <h1 className="font-display font-extrabold text-[12vw] sm:text-[14vw] md:text-[15vw] leading-none tracking-tighter text-[#1C1C1C] select-none uppercase">
              CABANA CLUB
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-[#555] font-bold uppercase tracking-wider gap-4">
            <span className="text-center md:text-left block leading-relaxed max-w-sm">
              Curated pop-ups, brand moments, and community-led experiences.
            </span>
            <span>
              &copy; Cabana Club Manila 2026. All Rights Reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
