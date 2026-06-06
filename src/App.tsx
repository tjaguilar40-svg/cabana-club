/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Features from "./components/Features";
import EventsList from "./components/EventsList";
import Sponsorships from "./components/Sponsorships";
import MerchantZone from "./components/MerchantZone";
import MetricsAndGallery from "./components/MetricsAndGallery";
import CaseStudy from "./components/CaseStudy";
import AboutAndTeam from "./components/AboutAndTeam";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import FooterView from "./components/FooterView";
import StickyCTA from "./components/StickyCTA";
import { Sparkles, Calendar, Heart } from "lucide-react";
import { motion } from "motion/react";

type InquiryType = "Sponsorship" | "Merchant application" | "Collaboration" | "Media/Press" | "General inquiry";

export default function App() {
  const [preSelectedType, setPreSelectedType] = useState<InquiryType>("Sponsorship");
  const [preSelectedMessage, setPreSelectedMessage] = useState("");

  const handlePreSelectInquiry = (type: InquiryType, message?: string) => {
    setPreSelectedType(type);
    if (message) {
      setPreSelectedMessage(message);
    }
  };

  const handleScrollTo = (id: string, selectType?: InquiryType, selectMessage?: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if (selectType) {
      setPreSelectedType(selectType);
    }
    if (selectMessage) {
      setPreSelectedMessage(selectMessage);
    }
  };

  const handleClearPreSelect = () => {
    setPreSelectedMessage("");
  };

  return (
    <div className="min-h-screen bg-cabana-bg selection:bg-cabana-clay/20 selection:text-cabana-rust-dark">
      {/* 
        The top-level container/card wrap described in the PDF Visual direction:
        "Rounded website container/card feel" and "White main canvas with very soft pastel gradient"
      */}
      <div className="relative min-h-screen flex flex-col font-sans">
        
        {/* Navigation Bar */}
        <Navbar onPreSelectInquiry={(type) => handlePreSelectInquiry(type, "")} />

        {/* Outer Visual Frame that builds that 'paper card' feel inside desktop views */}
        <main className="flex-1 w-full bg-white relative">
          
          {/* Section 1: Hero Block */}
          <Hero onScrollTo={(id, type) => handleScrollTo(id, type, "")} />

          {/* Section 2: Partners/Grayscale Marquee */}
          <LogoMarquee />

          {/* Section 2.5: Platform Pillars & 3-Column Features showcase */}
          <Features 
            onScrollToInquiry={(target, type, message) => 
              handleScrollTo(target, type, message)
            } 
          />

          {/* Section 3: Upcoming pop-ups roster */}
          <EventsList 
            onScrollToInquiry={(target, type, message) => 
              handleScrollTo(target, type, message)
            } 
          />

          {/* Section 4: Brand Sponsorships */}
          <Sponsorships 
            onScrollToInquiry={(target, type, message) => 
              handleScrollTo(target, type, message)
            } 
          />

          {/* Section 5: Merchant Application Benefits */}
          <MerchantZone 
            onScrollToInquiry={(target, type, message) => 
              handleScrollTo(target, type, message)
            } 
          />

          {/* Section 6: Retrospective Gallery & Counters */}
          <MetricsAndGallery />

          {/* Section 7: Immersive Case Study (Matcha Social) */}
          <CaseStudy 
            onScrollToInquiry={(target, type, message) => 
              handleScrollTo(target, type, message)
            } 
          />

          {/* Section 8: Founder Profiles & Philosophy */}
          <AboutAndTeam />

          {/* Section 9: Partner testimonials */}
          <Testimonials />

          {/* Section 10: Interactive Inquiry Form */}
          <InquiryForm 
            preSelectedType={preSelectedType}
            preSelectedMessage={preSelectedMessage}
            onClearPreSelect={handleClearPreSelect}
          />

        </main>

        {/* Footer Area */}
        <FooterView onScrollTo={(id) => handleScrollTo(id)} />

        {/* Floating/Sticky Dynamic CTA Bar */}
        <StickyCTA onScrollTo={(id, type, message) => handleScrollTo(id, type, message)} />
        
      </div>
    </div>
  );
}
