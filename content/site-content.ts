export const siteContent = {
  dancer: {
    name: "Anney Zangma",
    role: "Professional Dancer & Performer",
    location: "Bangalore, India",
    tagline: "Movement with presence, precision, and personality.",
    bio: "Demo biography — Anney Zangma is presented here as a professional performer available for selected events, creative collaborations, and appearances. Replace this text with her approved biography before launch.",
  },
  contact: {
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/",
      isPlaceholder: true,
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/",
      isPlaceholder: true,
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/",
      isPlaceholder: true,
    },
  },
  services: [
    {
      name: "Private Performance",
      description: "Demo service — a polished performance concept for private celebrations and curated events.",
      price: "Starting from ₹15,000",
      isPlaceholder: true,
    },
    {
      name: "Corporate & Brand Event",
      description: "Demo service — stage appearances and performance concepts for professional events and brand-led experiences.",
      price: "Starting from ₹25,000",
      isPlaceholder: true,
    },
    {
      name: "Creative Collaboration",
      description: "Demo service — photography, campaign, choreography, and artist collaboration enquiries.",
      price: "Contact for pricing",
      isPlaceholder: true,
    },
  ],
  seo: {
    title: "Anney Zangma | Professional Dancer & Performer",
    description: "Official portfolio of Anney Zangma, a professional dancer and performer based in Bangalore. Explore her work, services, gallery, and contact options.",
  },
} as const;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return configuredUrl ? configuredUrl.replace(/\/$/, "") : "https://example.com";
}
