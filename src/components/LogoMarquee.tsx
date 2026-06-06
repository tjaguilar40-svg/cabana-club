/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck } from "lucide-react";
import { PARTNER_BRANDS } from "../data";

export default function LogoMarquee() {
  // Duplicate the list of brands to guarantee seamless looping
  const duplicatedBrands = [...PARTNER_BRANDS, ...PARTNER_BRANDS, ...PARTNER_BRANDS];

  return (
    <section className="bg-white border-y border-cabana-border py-12 md:py-16 relative overflow-hidden select-none font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
            Partner Ecosystem
          </span>
          <h2 className="font-display font-medium text-lg md:text-xl text-cabana-dark mt-1">
            Brands we've worked with
          </h2>
        </div>
        
        {/* Subtle note about replacement as requested */}
        <div className="flex items-center gap-2 text-xs text-cabana-muted bg-cabana-neutral/60 px-4 py-2 rounded-full border border-cabana-border">
          <ShieldCheck className="w-3.5 h-3.5 text-cabana-matcha-dark" />
          <span>Placeholder grayscale strip. Replace with official partner SVGs.</span>
        </div>
      </div>

      {/* Endless Horizontal Marquee Banner */}
      <div className="relative w-full flex items-center overflow-hidden py-4">
        {/* Gradients to mask edges for seamless premium fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-12 md:gap-16 items-center animate-marquee cursor-default hover:[animation-play-state:paused]">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-4 text-cabana-muted hover:text-cabana-dark transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] flex-shrink-0" />
                <span className="font-display font-bold text-lg md:text-2xl tracking-tighter uppercase text-cabana-muted">
                  {brand.name}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-semibold bg-cabana-neutral text-cabana-muted/80 px-2 py-0.5 rounded-sm">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
