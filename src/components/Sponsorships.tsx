/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, MailCheck, Gift, Compass, Trophy, FileText, ArrowRight, Stars, BarChart3, HelpCircle } from "lucide-react";
import { SPONSORSHIP_PACKAGES } from "../data";
import { SponsorshipPackage } from "../types";
import { motion } from "motion/react";

interface SponsorshipsProps {
  onScrollToInquiry: (target: string, inquiryType: any, customMessage: string) => void;
}

export default function Sponsorships({ onScrollToInquiry }: SponsorshipsProps) {
  // Brand engagement channels (10 features)
  const channels = [
    { title: "Product Sampling", icon: Gift, desc: "Direct hand-to-hand distribution to premium event-goers." },
    { title: "PR Kits for Creators", icon: Stars, desc: "Inclusion in highly curated unboxing packages for 50+ RSVP'd influencers." },
    { title: "Social Media Features", icon: Compass, desc: "Dedicated stories, feed showcases, and live broadcast features." },
    { title: "On-Ground Activations", icon: MapIcon, desc: "Curated booth structures and bespoke physical experience slots." },
    { title: "Passport Stamp Mechanics", icon: Trophy, desc: "Funnel shoppers to your checkpoint with our famous Matcha Stamp Passport." },
    { title: "Follower-growth Mechanics", icon: ArrowRight, desc: "Require social media follows or interactions to claim exclusive rewards." },
    { title: "Surveys & Consumer Feedback", icon: BarChart3, desc: "Capture high-integrity consumer sentiment and local market reviews." },
    { title: "Giveaway Integrations", icon: Gift, desc: "Strategic branded tie-ins to massive on-stage raffle segments." },
    { title: "Merchant Collaborations", icon: HelpCircle, desc: "Paired custom recipes or special merch with our artisanal stalls." },
    { title: "Event Recap Content", icon: FileText, desc: "Professional videography assets featuring your brand's presence." }
  ];

  function MapIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  const getThemeColors = (theme: "matcha" | "pink" | "cream") => {
    switch (theme) {
      case "matcha":
        return {
          cardBg: "bg-cabana-mint",
          pillBg: "bg-cabana-matcha-dark/30",
          textColor: "text-cabana-dark",
          accentBorder: "border-cabana-matcha",
          badgeBg: "bg-cabana-matcha-dark text-cabana-dark"
        };
      case "pink":
        return {
          cardBg: "bg-[#FDF1F3]",
          pillBg: "bg-cabana-pink/30",
          textColor: "text-cabana-dark",
          accentBorder: "border-cabana-pink",
          badgeBg: "bg-cabana-pink text-cabana-dark"
        };
      default:
        return {
          cardBg: "bg-[#FFFCEF]",
          pillBg: "bg-cabana-cream/40",
          textColor: "text-cabana-dark",
          accentBorder: "border-cabana-cream",
          badgeBg: "bg-cabana-cream text-cabana-dark"
        };
    }
  };

  const handleRequestDeck = (pkg: SponsorshipPackage) => {
    const message = `Hi! I would love to request the comprehensive Sponsorship deck for Cabana Club events. I am specifically interested in checking out the "${pkg.title}" deliverables for our brand. Additionally, please let me know rates and physical constraints if possible. Thank you!`;
    onScrollToInquiry("contact", "Sponsorship", message);
  };

  return (
    <section id="sponsors" className="py-20 md:py-28 bg-white border-b border-cabana-border font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Subheader */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
            Brand Momentum
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-cabana-dark mt-2">
            Sponsorships built for visibility, engagement, and community.
          </h2>
          <p className="text-cabana-muted mt-4 text-base font-medium max-w-xl">
            We don't put logos on banners. We build conversion pipelines. Reach thousands of highly engaged local shoppers and lifestyle creators through custom, organic interactions.
          </p>
        </div>

        {/* Bento Grid: 10 Channels Section */}
        <div className="mb-20">
          <h3 className="font-display font-medium text-xl text-cabana-dark mb-8 border-b border-cabana-border pb-4">
            How we activate your brand
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {channels.map((channel, idx) => {
              const IconComp = channel.icon;
              return (
                <div
                  key={idx}
                  className="bg-cabana-bg p-5 rounded-2xl border border-cabana-border flex flex-col justify-between h-40 transition-all hover:bg-cabana-neutral/50"
                  id={`channel-card-${idx}`}
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-cabana-border shrink-0 shadow-xs">
                    <IconComp className="w-4 h-4 text-cabana-dark" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-cabana-dark block tracking-tight">
                      {channel.title}
                    </span>
                    <span className="text-[10px] text-cabana-muted font-semibold block mt-1 leading-normal">
                      {channel.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The 3 Sponsorship Packages Cards */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <h3 className="font-display font-medium text-xl text-cabana-dark">
              Curated Sponsorship Tiers
            </h3>
            <span className="text-xs font-semibold text-cabana-muted uppercase tracking-wider">
              Choose one or customize co-branding parameters
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {SPONSORSHIP_PACKAGES.map((pkg) => {
              const style = getThemeColors(pkg.colorTheme);
              return (
                <div
                  key={pkg.id}
                  className={`flex flex-col justify-between ${style.cardBg} border border-cabana-border rounded-[40px] p-8 transition-all hover:-translate-y-1.5 hover:shadow-lg`}
                  id={`pkg-card-${pkg.id}`}
                >
                  <div>
                    {/* Badge identifier */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`w-8 h-8 rounded-full ${style.badgeBg} flex items-center justify-center font-display font-bold text-sm`}>
                        {pkg.letter}
                      </span>
                      <span className={`text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 bg-white border ${style.accentBorder} rounded-full`}>
                        Curated Package
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-2xl text-cabana-dark tracking-tight mb-2">
                      {pkg.title}
                    </h4>
                    <p className="text-cabana-dark/80 text-xs leading-relaxed font-semibold mb-6">
                      {pkg.subtitle}
                    </p>

                    <div className="h-px bg-cabana-dark/10 mb-6" />

                    {/* Deliverables List */}
                    <h5 className="text-[10px] uppercase tracking-widest font-extrabold text-[#B2B2B2] mb-4">
                      Sponsor Deliverables
                    </h5>
                    <ul className="flex flex-col gap-3.5 mb-8">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-cabana-dark/90 font-medium leading-relaxed">
                          <Check className="w-4 h-4 text-cabana-matcha-dark shrink-0 mt-0.5 stroke-[3]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best for and Button Trigger */}
                  <div>
                    <div className={`${style.pillBg} rounded-2xl p-4 border border-cabana-dark/5 text-xs mb-6`}>
                      <span className="font-bold text-cabana-dark block uppercase tracking-wider text-[9px] mb-1">
                        Best For:
                      </span>
                      <span className="text-cabana-dark/85 font-medium leading-normal block">
                        {pkg.bestFor}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRequestDeck(pkg)}
                      className="w-full py-4 rounded-full bg-cabana-dark text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-cabana-dark/95 cursor-pointer active:scale-98 transition-all shadow-md hover:shadow-lg"
                      id={`btn-sp-deck-${pkg.id}`}
                    >
                      <MailCheck className="w-3.5 h-3.5" />
                      <span>Request Sponsorship Deck</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Customization Callout */}
          <div className="mt-12 rounded-[24px] bg-cabana-neutral border border-cabana-border p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[9px] uppercase tracking-widest font-extrabold text-cabana-muted block">Custom Activations</span>
              <h4 className="font-display font-bold text-lg text-cabana-dark tracking-tight mt-1">
                Have an artisanal food product or a custom makeup line that needs a bespoke display?
              </h4>
              <p className="text-xs text-cabana-muted mt-2 font-medium">
                Our team regularly coordinates customized brand corners (e.g. coffee carts, photo swings, physical matching contests). Let's craft an unforgettable activation specifically designed around your merchant criteria.
              </p>
            </div>
            <button
              onClick={() => onScrollToInquiry("contact", "Collaboration", "Hi! I am looking for custom branding integration parameters that are co-developed for our brand. I would love to meet to discuss custom activation spaces.")}
              className="px-6 py-3 rounded-full bg-transparent border border-cabana-dark text-cabana-dark hover:bg-cabana-dark hover:text-white transition-all text-xs font-semibold tracking-wider flex items-center gap-2 self-start md:self-auto cursor-pointer"
              id="btn-custom-collab"
            >
              <span>Co-Develop Concept</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
