/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UpcomingEvent, SponsorshipPackage, Testimonial, TeamMember, MerchantBenefit } from "./types";

export const PARTNER_BRANDS = [
  { name: "Vaseline", category: "Beauty" },
  { name: "Hada Labo", category: "Skin Care" },
  { name: "Teviant", category: "Cosmetics" },
  { name: "Small Steps Skin", category: "Self Care" },
  { name: "Lemon Square", category: "Food" },
  { name: "Dove", category: "Personal Care" },
  { name: "Forma", category: "Fitness" },
  { name: "Dehusk", category: "Wellness" },
  { name: "Robinsons EasyMart", category: "Merchant" }
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "matcha-fest",
    name: "Matcha Fest 2026",
    date: "June 13–14, 2026",
    vintage: "Vol. 4: The Matcha Social",
    venue: "The Corner House, San Juan",
    description: "Metro Manila's ultimate green-tea social gathering. Bringing together curated local drink brands, lifestyle creators, specialized matcha merchandise, and interactive tasting corridors.",
    imageUrl: "matcha_social", // Placeholder identifier for beautiful custom illustrations
    tags: ["Food", "Matcha", "Creators", "Wellness"],
    ctaText: "Inquire for this event",
    status: "active",
    slug: "matcha-fest-2026"
  },
  {
    id: "her-day-out",
    name: "Her Day Out",
    date: "August 1–2, 2026",
    vintage: "Vol. 5: Wellness & Style",
    venue: "The Corner House, San Juan",
    description: "A refined celebration of premium local female-centric brands. Features active workshops, high creator presence, interactive PR seeding tables, live conversations, clothing racks, and clean beauty hubs.",
    imageUrl: "her_day_out",
    tags: ["Beauty", "Lifestyle", "Wellness", "Creators"],
    ctaText: "Inquire for this event",
    status: "active",
    slug: "her-day-out-2026"
  },
  {
    id: "future-pop",
    name: "Future Lifestyle Pop-Up",
    date: "Q4 2026 (TBA)",
    vintage: "Vol. 6: The Creative Block",
    venue: "To Be Announced, Manila",
    description: "A high-concept street and coffee gathering celebrating Metro Manila's independent creative designers, custom jewelry makers, and artisanal espresso roasters.",
    imageUrl: "streetwear_popup",
    tags: ["Lifestyle", "Streetwear", "Art", "Coffee"],
    ctaText: "Get Notified First",
    status: "coming_soon",
    slug: "future-lifestyle-popup"
  }
];

export const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    id: "package-a",
    letter: "A",
    title: "Product Seeding Partner",
    subtitle: "For brands looking to distribute premium products to Metro Manila's top lifestyle creators and trendconscious attendees.",
    colorTheme: "cream",
    bestFor: "Max ROI through direct consumer touchpoints, product placement, and organic word-of-mouth chatter.",
    deliverables: [
      "Inclusion in curated PR boxes distributed to 50+ RSVP'd creators",
      "Guaranteed sampling/distribution right at the main registration desk",
      "On-website merchant & partner credit with backlink in event materials",
      "Sponsor logo placement in physical photo background cards and menus",
      "1x Instagram Feed Post and 3x Instagram Story mentions in recap content"
    ]
  },
  {
    id: "package-b",
    letter: "B",
    title: "Engagement Partner",
    subtitle: "For brands aiming to double social followers, collect high-integrity market surveys, or spark user-generated content.",
    colorTheme: "pink",
    bestFor: "Actionable lead collection, digital-to-physical metrics, and viral IG interactions.",
    deliverables: [
      "Integration into Cabana Club's signature 'Follow-To-Claim' free rewards pipeline",
      "Custom branded block in the physical 'Matcha Stamp Passport' issued to all attendees",
      "Guaranteed survey answers collection via digital QR code voting mechanism",
      "On-ground physical interactive prompt promoting organic UGC uploads on Instagram/TikTok",
      "Sponsor segment in the post-event highlights newsletter sent to 5,000+ Manila subscribers"
    ]
  },
  {
    id: "package-c",
    letter: "C",
    title: "Major Event Partner",
    subtitle: "For signature brands seeking prominent physical footprints, co-branding rights, and premium curated stages.",
    colorTheme: "matcha",
    bestFor: "Omnichannel presence, maximum brand alignment, and prime digital and physical real-estate.",
    deliverables: [
      "Double-sized premium physical booth/activation corner at the main entrance",
      "Title Sponsor credit (e.g., 'Cabana Club Matcha Social presented by [Your Brand]')",
      "Co-curated event segment (e.g., Live Podcasting Stage or Interactive Beauty Counter)",
      "Premium, dedicated standalone video feature in our official reels and recaps",
      "Pre-event and post-event press release logo feature with full consumer report package"
    ]
  }
];

export const MERCHANT_BENEFITS: MerchantBenefit[] = [
  {
    id: "benefit-theme",
    title: "Highly Curated Event Themes",
    description: "We design highly specific aesthetic contexts. Whether it's green-tea pastel matcha or modern wellness chic, our themes guarantee deeply targeted niche shoppers who love your precise offerings.",
    iconName: "Compass"
  },
  {
    id: "benefit-traffic",
    title: "Strong Active Foot Traffic",
    description: "Located in high-access pockets like San Juan's premium spots (e.g. The Corner House), our pop-ups secure thousands of highly active shoppers, assuring exposure that pays off.",
    iconName: "Users"
  },
  {
    id: "benefit-creators",
    title: "Creator Discovery & Seeding",
    description: "With 100+ Metro Manila influencers personally invited, your products get seen by a highly digital audience. Many micro-creators organically discover and buy from local creators at our stalls.",
    iconName: "Sparkles"
  },
  {
    id: "benefit-collab",
    title: "Collaborative Stamp mechanics",
    description: "Through our interactive passports, attendees must stop by diverse local stalls. We funnel event-goers directly to your booths so no merchant gets overlooked.",
    iconName: "CheckSquare"
  },
  {
    id: "benefit-recap",
    title: "Post-Event Content Machine",
    description: "Our professional production teams capture high-definition media files over the weekend. Merchants get access to curated photography and video files to support their post-event online marketing.",
    iconName: "Video"
  }
];

export const RETROSPECTIVE_METRICS = [
  { value: "3,000+", label: "Attendees at our recent Matcha Social" },
  { value: "18", label: "Metro Manila Matcha Brands Featured" },
  { value: "100+", label: "Top Lifestyle Influencers Invited" },
  { value: "40+", label: "Integrated Sponsor Collaborations" },
  { value: "600+", label: "Unique Merchant & Community Partners" },
  { value: "#1", label: "Trending Pop-Up Topic in local lifestyle media" }
];

export const PORTFOLIO_GALLERY = [
  {
    id: "p1",
    subtitle: "Beverages",
    title: "Matcha Social Drink Corners",
    bgClass: "gradient-mint",
    description: "Drip bars, matcha lattes, and ceremonial teas."
  },
  {
    id: "p2",
    subtitle: "PR Kits",
    title: "Custom Curated Influencer PR Kits",
    bgClass: "gradient-pink",
    description: "Seeded to Metro Manila trend leaders."
  },
  {
    id: "p3",
    subtitle: "Merchants",
    title: "Homegrown Local Ceramic Boutiques",
    bgClass: "gradient-warm",
    description: "Matching the aesthetic green tea mood."
  },
  {
    id: "p4",
    subtitle: "Community",
    title: "Packed weekend queue at The Corner House",
    bgClass: "gradient-mint",
    description: "Spillover foot traffic with lively energy."
  },
  {
    id: "p5",
    subtitle: "Style",
    title: "Fashion Clothing Racks & Hangers",
    bgClass: "gradient-pink",
    description: "Interactive fits for creator try-ons."
  },
  {
    id: "p6",
    subtitle: "Passport",
    title: "Custom Matcha Passport Stamps",
    bgClass: "gradient-warm",
    description: "Unlocking free treats with partner actions."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Partnering with Cabana Club as a Matcha sponsor yielded phenomenal feedback. We saw a solid 85% growth in our Instagram channels over one weekend and directly connected with 3,000+ target premium buyers.",
    author: "Denise G.",
    role: "Marketing Director, Clean Brews",
    avatarInitials: "DG"
  },
  {
    id: "t2",
    quote: "The foot traffic is very real and incredibly intentional. Shoppers come with a mindset of discovery and are excited to support homegrown clothing and beauty businesses. The creator presence was unparalleled.",
    author: "Katrina S.",
    role: "Founder, Earthy Thread Craft",
    avatarInitials: "KS"
  },
  {
    id: "t3",
    quote: "What separates Cabana Club from standard lifestyle markets is the absolute focus on visual aesthetics and community cohesion. The passport mechanics actually funneled active shoppers directly to our booth.",
    author: "Marcus T.",
    role: "Director of Operations, Matcha Avenue",
    avatarInitials: "MT"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "founder-1",
    name: "Jenelle Sy",
    role: "Event Director, Marketing & Communications",
    description: "Specializes in modern lifestyle brand strategy, creator engagement, and crafting the distinct editorial narrative of each pop-up concept.",
    imageUrl: "js"
  },
  {
    id: "founder-2",
    name: "Yatson Tan",
    role: "Event Director, Operations",
    description: "Oversees physical space design, merchant mapping, permits, and on-ground floor crowd optimization for high-density traffic flow.",
    imageUrl: "yt"
  },
  {
    id: "founder-3",
    name: "Anika Sy",
    role: "Operations Head",
    description: "Manages day-to-day logistics, merchant registration pipelines, support staff coordination, and registration desk passport distribution.",
    imageUrl: "as"
  }
];
