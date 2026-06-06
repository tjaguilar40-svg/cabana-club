/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Mail, Instagram, ArrowRight, CheckCircle2, AlertCircle, RefreshCw, Send } from "lucide-react";
import { InquiryFormData } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface InquiryFormProps {
  preSelectedType: "Sponsorship" | "Merchant application" | "Collaboration" | "Media/Press" | "General inquiry";
  preSelectedMessage: string;
  onClearPreSelect: () => void;
}

export default function InquiryForm({ preSelectedType, preSelectedMessage, onClearPreSelect }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    brand: "",
    email: "",
    instagram: "",
    inquiryType: "Sponsorship",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Listen to changes in preSelected indicators
  useEffect(() => {
    if (preSelectedType) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: preSelectedType
      }));
    }
    if (preSelectedMessage) {
      setFormData((prev) => ({
        ...prev,
        message: preSelectedMessage
      }));
    }
  }, [preSelectedType, preSelectedMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear alerts on active change
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple frontend validations
    if (!formData.name.trim()) {
      setErrorMessage("Please share your name.");
      return;
    }
    if (!formData.brand.trim()) {
      setErrorMessage("Please share your Brand or Company name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please share your email address.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please input a valid email address.");
      return;
    }
    if (!formData.instagram.trim()) {
      setErrorMessage("Please share your Instagram handle (e.g., @brand.name).");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please share a brief message telling us about your brand vision.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Mimic offline/backend transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onClearPreSelect(); // Clear global callbacks
    }, 1800);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      brand: "",
      email: "",
      instagram: "",
      inquiryType: "Sponsorship",
      message: ""
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-cabana-border font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Narrative Contact info & branding details */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
              Inquire Now
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-cabana-dark mt-2 leading-tight">
              Let’s build your next brand moment.
            </h2>
            <p className="text-cabana-muted mt-4 text-sm font-medium leading-relaxed">
              We look forward to curating physical memories with you. Share your details, select your inquiry pipeline, and our Event Directors will follow up with pricing decks, stall diagrams, and schedule listings within 24-48 business hours.
            </p>

            {/* Structured Contact Block */}
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-cabana-muted block">
                Direct Channels
              </span>
              
              <a
                href="mailto:hello@cabanaclub.ph"
                className="flex items-center gap-3.5 bg-cabana-bg hover:bg-cabana-neutral/50 border border-cabana-border rounded-2xl p-4 transition-colors group cursor-pointer"
                id="contact-email-link"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-cabana-border flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4 text-cabana-dark" />
                </div>
                <div>
                  <span className="text-[10px] text-cabana-muted uppercase tracking-wider block font-bold leading-none">Email Us</span>
                  <span className="text-sm font-semibold text-cabana-dark mt-1 block">hello@cabanaclub.ph</span>
                </div>
              </a>

              <a
                href="https://instagram.com/cabanaclub.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-cabana-bg hover:bg-cabana-neutral/50 border border-cabana-border rounded-2xl p-4 transition-colors group cursor-pointer"
                id="contact-ig-link"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-cabana-border flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <Instagram className="w-4 h-4 text-cabana-dark" />
                </div>
                <div>
                  <span className="text-[10px] text-cabana-muted uppercase tracking-wider block font-bold leading-none">Main Social</span>
                  <span className="text-sm font-semibold text-cabana-dark mt-1 block">@cabanaclub.ph</span>
                </div>
              </a>
            </div>

            {/* Quick RSVP terms note */}
            <div className="mt-8 bg-cabana-neutral border border-cabana-border rounded-2xl p-5 select-none text-[10px] text-cabana-muted leading-relaxed font-semibold">
              <span className="text-cabana-dark block uppercase tracking-wider font-extrabold mb-1">
                Note on Applications:
              </span>
              By submitting this inquiry, your brand is registered in our official vendor and sponsor waitlist database. We coordinate and review merchant categories to maintain high spatial aesthetics and eliminate product redundancy inside pop-up zones.
            </div>
          </div>

          {/* Right Block: Complex Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-cabana-bg border border-cabana-border rounded-[40px] p-6 md:p-8 relative">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                // THE FORM
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-sm font-semibold"
                  id="inquiry-form-element"
                >
                  <div className="flex items-center justify-between border-b border-cabana-border pb-4 mb-2">
                    <span className="font-display font-bold text-lg text-cabana-dark">Inquiry Dossier</span>
                    <span className="text-[10px] uppercase font-bold text-cabana-muted bg-white border border-cabana-border px-2.5 py-1 rounded-sm">
                      Secure Entry
                    </span>
                  </div>

                  {/* Form Alerts & Errors */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl flex items-start gap-2.5 text-xs font-medium"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-extrabold text-cabana-dark/95">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Jenelle Sy"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-white border border-cabana-border rounded-xl px-4 py-3.5 text-sm text-cabana-dark outline-none focus:border-cabana-dark/30 transition-all font-medium placeholder-cabana-dark/30 shadow-2xs"
                    />
                  </div>

                  {/* Dual Grid: Brand and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Brand filed */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="brand" className="text-xs uppercase tracking-wider font-extrabold text-cabana-dark/95">
                        Brand / Company Name *
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="e.g. Earthy Brews"
                        value={formData.brand}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-cabana-border rounded-xl px-4 py-3.5 text-sm text-cabana-dark outline-none focus:border-cabana-dark/30 transition-all font-medium placeholder-cabana-dark/30 shadow-2xs"
                      />
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider font-extrabold text-cabana-dark/95">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. partner@merchant.ph"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-cabana-border rounded-xl px-4 py-3.5 text-sm text-cabana-dark outline-none focus:border-cabana-dark/30 transition-all font-medium placeholder-cabana-dark/30 shadow-2xs"
                      />
                    </div>

                  </div>

                  {/* Dual Grid: IG Handle and Inquiry Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* IG username */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="instagram" className="text-xs uppercase tracking-wider font-extrabold text-cabana-dark/95">
                        Instagram Handle *
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        placeholder="e.g. @brand.ph"
                        value={formData.instagram}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-cabana-border rounded-xl px-4 py-3.5 text-sm text-cabana-dark outline-none focus:border-cabana-dark/30 transition-all font-medium placeholder-cabana-dark/30 shadow-2xs"
                      />
                    </div>

                    {/* Inquiry Type Select Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inquiryType" className="text-xs uppercase tracking-wider font-extrabold text-cabana-dark/95">
                        Inquiry Type *
                      </label>
                      <div className="relative">
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white border border-cabana-border rounded-xl px-4 py-3.5 text-sm text-cabana-dark outline-none focus:border-cabana-dark/30 transition-all font-medium shadow-2xs appearance-none"
                        >
                          <option value="Sponsorship">Sponsorship</option>
                          <option value="Merchant application">Merchant application</option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="Media/Press">Media/Press</option>
                          <option value="General inquiry">General inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cabana-muted">
                          ▼
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-extrabold text-cabana-dark/95">
                      Message / Brand Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hi! Tell us about your brand vision, key items you offer, and how you see your brand merging with Cabana Club Manila pop-ups..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-white border border-cabana-border rounded-xl px-4 py-3.5 text-sm text-cabana-dark outline-none focus:border-cabana-dark/30 transition-all font-medium placeholder-cabana-dark/30 shadow-2xs resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-cabana-rust text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-cabana-rust-dark cursor-pointer active:scale-98 transition-all shadow-md select-none group"
                      id="btn-inquiry-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Streaming Dossier...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                // SUCCESS STAGE
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center p-6 md:p-10 select-none font-sans"
                  id="inquiry-success-view"
                >
                  <div className="w-16 h-16 rounded-full bg-cabana-mint border border-cabana-matcha flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-cabana-matcha-dark stroke-[2.5]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-cabana-matcha-dark block mb-1">
                    Receipt Acknowledged
                  </span>
                  <h3 className="font-display font-medium text-2xl text-cabana-dark tracking-tight leading-normal">
                    Thank you, {formData.name}!
                  </h3>
                  
                  <div className="my-6 bg-white border border-cabana-border rounded-2xl p-5 text-left w-full text-xs text-cabana-muted font-semibold leading-relaxed">
                    <span className="text-cabana-dark block uppercase tracking-wider text-[9px] mb-2">
                      Inquiry Snapshot:
                    </span>
                    <div><strong>Inquiry Type:</strong> {formData.inquiryType}</div>
                    <div className="mt-1"><strong>Brand / Company:</strong> {formData.brand}</div>
                    <div className="mt-1"><strong>Instagram:</strong> {formData.instagram}</div>
                    <div className="mt-1"><strong>Email:</strong> {formData.email}</div>
                  </div>

                  <p className="text-xs text-cabana-muted font-medium leading-relaxed max-w-sm">
                    Your inquiry dossier has been safely added to the waitlist pipeline. Event Directors Jenelle, Yatson, or Anika will follow up with pricing decks to your inbox soon.
                  </p>

                  <div className="mt-8 flex gap-4 w-full">
                    <button
                      onClick={handleResetForm}
                      className="w-full py-3.5 rounded-full bg-cabana-dark text-white font-semibold text-xs tracking-wider uppercase hover:bg-cabana-dark/95 cursor-pointer active:scale-98 transition-all shadow-xs"
                      id="btn-success-reset"
                    >
                      Inquire for another brand
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
