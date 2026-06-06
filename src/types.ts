/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EventTag {
  id: string;
  name: string;
  color: string;
}

export interface UpcomingEvent {
  id: string;
  name: string;
  date: string;
  vintage: string; // e.g. "Matcha Fest", "Her Day Out"
  venue: string;
  description: string;
  imageUrl: string;
  tags: string[];
  ctaText: string;
  status: "active" | "coming_soon";
  slug: string;
}

export interface SponsorshipPackage {
  id: string;
  letter: string; // 'A', 'B', 'C'
  title: string;
  subtitle: string;
  colorTheme: "matcha" | "pink" | "cream";
  deliverables: string[];
  bestFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string; // e.g. "Founder, Teviant", "Merchant Partner"
  avatarInitials: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface MerchantBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will match are with Lucide icon
}

export interface InquiryFormData {
  name: string;
  brand: string;
  email: string;
  instagram: string;
  inquiryType: "Sponsorship" | "Merchant application" | "Collaboration" | "Media/Press" | "General inquiry";
  message: string;
}
