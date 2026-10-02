export const siteContent = {
  dancer: {
    name: "Anney Zangma",
    role: "Professional Dancer & Performer",
    location: "Bangalore, India",
    tagline: "Movement with presence, precision, and personality.",
    intro:
      "A premium portfolio for performances, private events, brand moments, and creative collaborations.",
    bio:
      "Demo biography — Anney Zangma is presented here as a professional performer based in Bangalore. Replace this paragraph with her approved story, background, experience, and artistic point of view before the public launch.",
    note:
      "Demo content is used throughout this preview and is intentionally easy to replace.",
  },
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1530234332485-f2c7355bd1ef?auto=format&fit=crop&fm=jpg&q=88&w=2200",
      alt: "Temporary placeholder photograph of a dancer in dramatic stage lighting",
      credit: "Leon JL / Unsplash",
      isPlaceholder: true,
    },
    about: {
      src: "https://images.unsplash.com/photo-1783864424950-ccca6d6d52aa?auto=format&fit=crop&fm=jpg&q=86&w=1400",
      alt: "Temporary placeholder photograph of a classical dancer in a red costume",
      credit: "Jayanth Muppaneni / Unsplash",
      isPlaceholder: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1769651409831-3f3d8677782a?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary gallery photograph of ballet dancers performing on stage",
        credit: "Kazuo ota / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1783864424950-ccca6d6d52aa?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary gallery photograph of a classical dancer",
        credit: "Jayanth Muppaneni / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1758529224718-a5c4cfa795ab?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary gallery photograph of a ballerina on stage",
        credit: "Kazuo ota / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1624250561671-9e6916e49f49?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary gallery photograph of an Indian dancer",
        credit: "Natural light Bhupathi / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1635013289238-3d3da984b521?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary gallery photograph from a traditional dance performance",
        credit: "Culture Trip / Unsplash",
      },
    ],
  },
  highlights: [
    {
      number: "01",
      title: "Stage presence",
      text: "Demo highlight — replace with a verified note about performance experience, training, or stage work.",
    },
    {
      number: "02",
      title: "Professional approach",
      text: "Demo highlight — replace with approved information about preparation, reliability, or client experience.",
    },
    {
      number: "03",
      title: "Creative collaboration",
      text: "Demo highlight — replace with a verified note about shoots, campaigns, choreography, or collaborations.",
    },
  ],
  services: [
    {
      name: "Private Performance",
      description:
        "Demo service — a polished performance concept for private celebrations and curated events.",
      price: "Starting from ₹15,000",
      isPlaceholder: true,
    },
    {
      name: "Corporate & Brand Event",
      description:
        "Demo service — stage appearances and performance concepts for professional events and brand-led experiences.",
      price: "Starting from ₹25,000",
      isPlaceholder: true,
    },
    {
      name: "Creative Collaboration",
      description:
        "Demo service — photography, campaigns, choreography, and artist collaboration enquiries.",
      price: "Contact for pricing",
      isPlaceholder: true,
    },
  ],
  contact: {
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/?text=Hi%20Anney%2C%20I%27d%20like%20to%20enquire%20about%20a%20performance.",
      isPlaceholder: true,
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/share/url?url=https%3A%2F%2Fexample.com&text=Hi%20Anney%2C%20I%27d%20like%20to%20enquire%20about%20working%20together.",
      isPlaceholder: true,
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/",
      isPlaceholder: true,
    },
  },
  seo: {
    title: "Anney Zangma | Professional Dancer & Performer",
    description:
      "Portfolio of Anney Zangma, a professional dancer and performer based in Bangalore. Explore photography, services, pricing, and direct contact options.",
  },
} as const;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelDeploymentUrl = process.env.VERCEL_URL?.trim();
  const candidate = configuredUrl || vercelProductionUrl || vercelDeploymentUrl;

  if (!candidate) {
    return "https://example.com";
  }

  const withProtocol = /^https?:\/\//.test(candidate)
    ? candidate
    : "https://" + candidate;

  return withProtocol.replace(/\/$/, "");
}
