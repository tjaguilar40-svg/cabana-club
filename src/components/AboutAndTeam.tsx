/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Mail, Globe, CheckCircle } from "lucide-react";
import { TEAM_MEMBERS } from "../data";
import { TeamMember } from "../types";
import { motion } from "motion/react";

export default function AboutAndTeam() {
  const getFounderGradients = (id: string) => {
    switch (id) {
      case "founder-1":
        return {
          gradient: "gradient-pink",
          border: "border-cabana-pink",
          initials: "JS"
        };
      case "founder-2":
        return {
          gradient: "gradient-mint",
          border: "border-cabana-matcha",
          initials: "YT"
        };
      default:
        return {
          gradient: "gradient-warm",
          border: "border-cabana-cream",
          initials: "AS"
        };
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-cabana-border font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid Division */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Narrative Block */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
              Curated Spaces
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-cabana-dark mt-2 leading-tight">
              About <br className="hidden lg:inline" />Cabana Club
            </h2>
            <div className="h-1.5 w-12 bg-cabana-matcha-dark my-6 rounded-full" />
            
            <p className="text-cabana-dark/90 text-sm font-semibold leading-relaxed mb-6">
              Cabana Club is a curated lifestyle pop-up platform creating memorable spaces for brands, creators, and communities to connect. From matcha socials to wellness weekends and lifestyle markets, we design events that help brands show up in real life and stay memorable online.
            </p>
            <p className="text-cabana-muted text-xs font-semibold leading-relaxed mb-8">
              Born from a mutual love for aesthetic discovery and slow homegrown craftsmanship, we build weekend-long platforms to let rising brands meets target demographics directly. By providing end-to-end event logistics, curated graphic backdrops, and active creator directories, we turn pop-ups into memorable social momentum.
            </p>

            {/* Core Values List */}
            <div className="border border-cabana-border rounded-[24px] bg-cabana-bg p-5 flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-widest font-extrabold text-cabana-muted leading-none">
                Club Manifesto
              </span>
              <ul className="flex flex-col gap-3 font-semibold text-xs text-cabana-dark/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cabana-matcha-dark shrink-0" />
                  <span>Aesthetics first — detail is absolute.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cabana-matcha-dark shrink-0" />
                  <span>Always merchant-centric and collaborative.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cabana-matcha-dark shrink-0" />
                  <span>Creator engagement integrated directly at the root.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Block: Team Profile Boards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#B2B2B2] block border-b border-cabana-border pb-3">
              Event Directors &amp; Leadership
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((founder) => {
                const style = getFounderGradients(founder.id);
                return (
                  <div
                    key={founder.id}
                    className="bg-[#FAFAF7] border border-cabana-border rounded-3xl p-5 flex flex-col justify-between h-[360px] group hover:border-cabana-dark/20 transition-all duration-300"
                    id={`team-member-${founder.id}`}
                  >
                    <div>
                      {/* Avatar design aligning with the PDF paper feel */}
                      <div className={`w-16 h-16 rounded-2xl ${style.gradient} border ${style.border} flex items-center justify-center font-display font-extrabold text-lg text-cabana-dark shadow-2xs group-hover:scale-105 transition-transform`}>
                        {style.initials}
                      </div>

                      <div className="mt-4">
                        <span className="text-[10px] font-bold text-cabana-matcha-dark uppercase tracking-widest block font-sans">
                          Director
                        </span>
                        <h4 className="font-display font-bold text-lg text-cabana-dark tracking-tight leading-normal mt-0.5">
                          {founder.name}
                        </h4>
                        <span className="text-[10px] text-cabana-muted font-bold block mt-1 leading-snug">
                          {founder.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-cabana-muted text-[11px] leading-relaxed font-semibold my-4">
                      {founder.description}
                    </p>

                    {/* Social connection options */}
                    <div className="border-t border-cabana-border pt-4 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-white hover:bg-cabana-neutral border border-cabana-border flex items-center justify-center transition-colors cursor-pointer">
                        <Mail className="w-3.5 h-3.5 text-cabana-muted" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white hover:bg-cabana-neutral border border-cabana-border flex items-center justify-center transition-colors cursor-pointer">
                        <Globe className="w-3.5 h-3.5 text-cabana-muted" />
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-cabana-muted ml-auto font-semibold">
                        active rsvp
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* General Contact Notice */}
            <div className="bg-[#FFF4DA]/30 border border-cabana-cream rounded-3xl p-5 flex items-center gap-4">
              <div className="p-3 bg-white border border-cabana-cream rounded-xl">
                <Users className="w-5 h-5 text-cabana-dark" />
              </div>
              <p className="text-xs text-cabana-dark/85 font-medium leading-relaxed">
                Looking to collab as a designer, photographer, florist, or sound operator? We're always seeking Metro Manila creatives to merge visions with us. Drop a general inquiry below.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
