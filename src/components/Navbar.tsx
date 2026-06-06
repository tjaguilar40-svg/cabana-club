/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CabanaLogo from "./CabanaLogo";

interface NavbarProps {
  onPreSelectInquiry: (type: "Sponsorship" | "Merchant application" | "Collaboration" | "Media/Press" | "General inquiry") => void;
}

export default function Navbar({ onPreSelectInquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, selectType?: any) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Calculate header offset
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if (selectType) {
      onPreSelectInquiry(selectType);
    }
  };

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Events", target: "events" },
    { name: "Sponsors", target: "sponsors" },
    { name: "Merchants", target: "merchants" },
    { name: "About", target: "about" },
    { name: "Contact", target: "contact" }
  ];

  return (
    <>
      <header
        id="cabana-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-cabana-bg/95 backdrop-blur-md border-b border-cabana-border py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with high-fashion Editorial design */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center group cursor-pointer animate-fade-in"
            id="btn-nav-logo"
          >
            <CabanaLogo className="hover:scale-[1.02] transition-transform duration-300" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-cabana-dark hover:text-cabana-dark/60 transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cabana-dark after:transition-all hover:after:w-full"
                id={`btn-nav-link-${link.target}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Sidebar CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact", "Collaboration")}
              className="bg-white border border-cabana-rust text-cabana-rust px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-cabana-rust hover:text-white transition-all cursor-pointer font-sans"
              id="btn-nav-inquire"
            >
              Have a Brand?
            </button>
            <button
              onClick={() => scrollToSection("contact", "Sponsorship")}
              className="bg-cabana-rust text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-cabana-rust-dark active:scale-95 transition-all cursor-pointer shadow-sm font-sans"
              id="btn-nav-cta"
            >
              Partner With Us
              <span className="text-sm leading-none">→</span>
            </button>
          </div>

          {/* Mobile Hamburguer toggler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cabana-dark hover:bg-cabana-neutral/60 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            id="btn-nav-hamburger"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer with smooth fallbacks */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[76px] left-0 right-0 z-40 bg-cabana-bg border-b border-cabana-border shadow-xl px-6 py-8 flex flex-col gap-6 lg:hidden font-sans"
            id="drawer-mobile-navbar"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left font-display font-semibold text-lg text-cabana-dark/90 hover:text-cabana-dark py-2 border-b border-cabana-neutral cursor-pointer"
                  id={`btn-mob-link-${link.target}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => scrollToSection("contact", "Merchant application")}
                className="w-full py-3.5 rounded-full border border-cabana-rust/30 text-cabana-rust text-center text-sm font-semibold hover:bg-cabana-peach transition-all cursor-pointer"
                id="btn-mob-merchant-cta"
              >
                Apply as a Merchant
              </button>
              <button
                onClick={() => scrollToSection("contact", "Sponsorship")}
                className="w-full py-3.5 rounded-full bg-cabana-rust text-white text-center text-sm font-semibold flex items-center justify-center gap-2 hover:bg-cabana-rust-dark cursor-pointer shadow-md"
                id="btn-mob-partner-cta"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex justify-center items-center gap-2 text-[10px] text-cabana-muted font-medium uppercase tracking-wider mt-4">
              <Sparkles className="w-3 h-3 text-cabana-matcha-dark" />
              <span>Curated Community Experiences</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
