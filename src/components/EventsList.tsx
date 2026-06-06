/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, MapPin, Tag, ArrowUpRight, Plus, Sparkles, CheckCircle2 } from "lucide-react";
import { UPCOMING_EVENTS } from "../data";
import { UpcomingEvent } from "../types";
import { motion } from "motion/react";

interface EventsListProps {
  onScrollToInquiry: (target: string, inquiryType: any, customMessage: string) => void;
}

export default function EventsList({ onScrollToInquiry }: EventsListProps) {
  const getIllustrationDetails = (id: string) => {
    switch (id) {
      case "matcha-fest":
        return {
          bg: "bg-cabana-mint",
          themeTextClass: "text-cabana-matcha-dark",
          title: "Matcha Social",
          desc: "Ceremonial Bar Stalls & Food",
          accentColor: "#BFD8B8"
        };
      case "her-day-out":
        return {
          bg: "bg-cabana-peach",
          themeTextClass: "text-cabana-rust",
          title: "Style & Wellness Market",
          desc: "Aesthetic Lounges & Active Racks",
          accentColor: "#DE8F80"
        };
      default:
        return {
          bg: "bg-[#FFFCEF]",
          themeTextClass: "text-[#DCA95C]",
          title: "The Creative Blocks",
          desc: "Indie streetwear & Specialty Espresso",
          accentColor: "#FFF4DA"
        };
    }
  };

  const handleInquiry = (event: UpcomingEvent) => {
    const isComingSoon = event.status === "coming_soon";
    const type = isComingSoon ? "General inquiry" : "Merchant application";
    const message = isComingSoon
      ? `Hi! Please notify me when merchant applications and updates drop for the upcoming "${event.name}". I would love to follow the details.`
      : `Hi! I would love to check out pricing and space parameters for joining "${event.name}" at ${event.venue} on ${event.date} as a merchant/brand partner.`;
    
    onScrollToInquiry("contact", type, message);
  };

  return (
    <section id="events" className="py-20 md:py-28 bg-cabana-bg border-b border-cabana-border font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
            Pop-up Rosters
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-cabana-dark mt-2">
            Upcoming Cabana Club events
          </h2>
          <p className="text-cabana-muted mt-4 text-base font-medium max-w-xl">
            Sponsors and merchants get front-row seats to premium Metro Manila foot traffic. Save the dates and check out curated themes built specifically for customer discovery.
          </p>
        </div>

        {/* Dynamic Card Assembly Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => {
            const isComingSoon = event.status === "coming_soon";
            const design = getIllustrationDetails(event.id);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col justify-between bg-white border border-cabana-border rounded-[40px] overflow-hidden p-5 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
                id={`event-card-${event.id}`}
              >
                <div>
                  {/* Image-led Top Illustration with Premium Rounded Corners */}
                  <div className={`relative w-full h-56 rounded-2xl ${design.bg} overflow-hidden flex flex-col justify-between p-5 mb-5`}>
                    
                    {/* Header bar of top segment */}
                    <div className="flex justify-between items-center z-10">
                      <span className="text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 bg-white/95 text-cabana-dark rounded-full shadow-xs">
                        {event.vintage}
                      </span>
                      
                      {isComingSoon ? (
                        <span className="text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 bg-white/95 text-cabana-muted rounded-full border border-cabana-border shadow-xs">
                          Coming Soon
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5 bg-cabana-rust text-white text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full shadow-xs">
                          <CheckCircle2 className="w-2.5 h-2.5 text-cabana-cream" />
                          <span>Open for Application</span>
                        </div>
                      )}
                    </div>

                    {/* Styled Vector Graphics inside the card top to mimic high-end magazine cutouts */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 scale-95 group-hover:scale-100 transition-all duration-700">
                      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="30" fill={design.accentColor} fillOpacity="0.4" />
                        <rect x="35" y="35" width="30" height="30" rx="6" stroke="#111111" strokeWidth="1.2" strokeDasharray="3 3" />
                        <path d="M50 20 L55 35 L70 35 L58 45 L63 60 L50 50 L37 60 L42 45 L30 35 L45 35 Z" fill="#111111" fillOpacity="0.1" />
                      </svg>
                    </div>

                    {/* Description details overlapping bottom */}
                    <div className="z-10 bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-cabana-border flex items-center justify-between shadow-xs">
                      <div className="truncate">
                        <span className="font-display font-medium text-xs text-cabana-dark tracking-tight block truncate">
                          {design.title}
                        </span>
                        <span className="text-[10px] text-cabana-muted block truncate mt-0.5">
                          {design.desc}
                        </span>
                      </div>
                      <Sparkles className={`w-4 h-4 shrink-0 ${design.themeTextClass}`} />
                    </div>
                  </div>

                  {/* Metadata and Description segment */}
                  <div className="px-1.5">
                    {/* Tags matching requested list */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-cabana-dark/70 uppercase tracking-widest bg-cabana-neutral px-2.5 py-1 rounded-full border border-cabana-border"
                        >
                          <Tag className="w-2.5 h-2.5 text-cabana-muted" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-bold text-xl md:text-2xl text-cabana-dark tracking-tight leading-snug">
                      {event.name}
                    </h3>

                    {/* Date and Location Segment */}
                    <div className="flex flex-col gap-2 my-4 text-xs font-semibold text-cabana-dark/85">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cabana-rust" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cabana-terracotta" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <p className="text-cabana-muted text-xs leading-relaxed font-semibold">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Footer and Interactive trigger */}
                <div className="pt-6 px-1.5">
                  <button
                    onClick={() => handleInquiry(event)}
                    className={`w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-xs font-bold font-sans tracking-wide transition-all duration-300 cursor-pointer ${
                      isComingSoon
                        ? "bg-transparent border border-cabana-border text-cabana-dark hover:bg-cabana-peach hover:border-cabana-rust/30 hover:text-cabana-rust"
                        : "bg-cabana-rust text-white hover:bg-cabana-rust-dark shadow-sm hover:shadow-md active:scale-98"
                    }`}
                  >
                    <span>{event.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
