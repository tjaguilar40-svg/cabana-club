/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Users, Sparkles, CheckSquare, Video, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import { MERCHANT_BENEFITS } from "../data";
import { MerchantBenefit } from "../types";

const iconsMap: Record<string, any> = {
  Compass: Compass,
  Users: Users,
  Sparkles: Sparkles,
  CheckSquare: CheckSquare,
  Video: Video
};

interface MerchantZoneProps {
  onScrollToInquiry: (target: string, inquiryType: any, customMessage: string) => void;
}

export default function MerchantZone({ onScrollToInquiry }: MerchantZoneProps) {
  const handleApply = () => {
    const message = "Hi! I am interested in applying as a merchant for upcoming Cabana Club activations. Please let me know space options, tables layout, rates, and timeline specifications. Brand details attached below.";
    onScrollToInquiry("contact", "Merchant application", message);
  };

  return (
    <section id="merchants" className="py-20 md:py-28 bg-[#FAFAF7] border-b border-cabana-border overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Side-by-Side Flex Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Editorial Media Postcard Flyer */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-[11px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
              Merchants Area
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-cabana-dark mt-2 leading-tight">
              For merchants who want to meet their next loyal customers.
            </h2>
            <p className="text-cabana-muted mt-4 text-sm font-medium leading-relaxed">
              Cabana Club acts as a real-life launching pad. We help small, indie, and established D2C brands bypass expensive digital ad-spend by placing them directly in high-foot-traffic community pockets filled with high-intent buyers.
            </p>

            {/* Editorial Flyer box of merchant zone */}
            <div className="mt-8 rounded-[40px] bg-[#FFFCEF] border border-cabana-cream p-6 relative overflow-hidden select-none">
              
              {/* Inner subtle vintage overlay */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-cabana-dark/10 flex items-center justify-center rotate-12">
                <Flame className="w-5 h-5 text-cabana-dark/20 animate-pulse" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] uppercase tracking-widest font-extrabold bg-cabana-dark text-white px-2.5 py-1 rounded-sm">
                  Merchant Deck
                </span>
                <span className="text-xs text-cabana-dark/80 font-bold">
                  Next Wave D2C
                </span>
              </div>

              <blockquote className="font-serif italic text-lg text-cabana-dark/95 leading-snug mb-6">
                "We sold out of our entire Ceremonial grade Matcha catalog in the first four hours of Saturday. Cabana Club's stamp passport actually funnels everyone to your table."
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-cabana-cream flex items-center justify-center text-xs font-bold font-display text-cabana-dark">
                  M
                </div>
                <div>
                  <span className="text-xs font-bold text-cabana-dark block">Matcha Avenue Team</span>
                  <span className="text-[10px] text-cabana-muted block">Partner Merchant · Manila</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleApply}
                className="w-full py-4 rounded-full bg-cabana-dark text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-cabana-dark/95 active:scale-98 transition-all shadow-md hover:shadow-lg cursor-pointer"
                id="btn-merchants-apply"
              >
                <span>Apply as a Merchant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Block: Structured List of Benefits */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#B2B2B2] block border-b border-cabana-border pb-3">
              Why Homegrown Brands Choose Cabana Club
            </span>

            <div className="flex flex-col gap-6">
              {MERCHANT_BENEFITS.map((benefit) => {
                const IconComp = iconsMap[benefit.iconName] || CheckSquare;
                return (
                  <div
                    key={benefit.id}
                    className="bg-white border border-cabana-border rounded-[24px] p-6 flex flex-col md:flex-row gap-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                    id={`benefit-item-${benefit.id}`}
                  >
                    {/* Icon card */}
                    <div className="w-12 h-12 rounded-2xl bg-cabana-mint flex items-center justify-center border border-cabana-border shrink-0 shadow-xs">
                      <IconComp className="w-5 h-5 text-cabana-dark" />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-display font-bold text-lg text-cabana-dark tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-cabana-muted text-xs leading-relaxed font-semibold mt-1.5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick compliance note */}
            <div className="mt-4 p-5 rounded-2xl border border-cabana-border bg-white flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cabana-matcha-dark shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs text-cabana-dark block leading-tight">
                  No Commission Splits &amp; Transparent Stall Structures
                </span>
                <p className="text-[10px] text-cabana-muted font-semibold mt-1 leading-normal">
                  Unlike traditional department stores, we believe homegrown merchants deserve to pocket 100% of their event-day sales. We charge simple flat stall fees without unrequested percentages.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
