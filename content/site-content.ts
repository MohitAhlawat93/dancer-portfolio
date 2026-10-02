export const siteContent = {
  profile: {
    name: "Anora",
    location: "Bangalore, IN",
    status: "Available in Bangalore",
    eyebrow: "ANORA · BANGALORE, IN",
    tagline: "Elegant presence. Quiet confidence.",
    intro:
      "Warm, discreet, and easy to talk to. I value privacy, cleanliness, respectful communication, and a relaxed atmosphere.",
    bio:
      "I’m Anora, 27, currently in Bangalore. I like things to feel natural, comfortable, and uncomplicated. Good manners, discretion, and clear communication matter to me. If you would like to know more or verify my profile, WhatsApp or Telegram is the easiest way to reach me.",
    quote:
      "I prefer simple things done beautifully — good conversation, good energy, and mutual respect.",
  },
  images: {
    hero: {
      src: "/images/profile/gallery-02.jpg",
      alt: "Anora portrait",
    },
    about: {
      src: "/images/profile/gallery-03.jpg",
      alt: "Anora portrait",
    },
    gallery: [
      { src: "/images/profile/gallery-04.jpg", alt: "Anora gallery portrait 1" },
      { src: "/images/profile/hero.jpeg", alt: "Anora gallery portrait 2" },
      { src: "/images/profile/about.jpeg", alt: "Anora gallery portrait 3" },
      { src: "/images/profile/gallery-01.jpeg", alt: "Anora gallery portrait 4" },
      { src: "/images/profile/gallery-05.jpeg", alt: "Anora gallery portrait 5" },
      { src: "/images/profile/gallery-06.jpeg", alt: "Anora gallery portrait 6" },
    ],
  },
  facts: [
    { label: "Age", value: "27" },
    { label: "Height", value: "158 cm / 5′2″" },
    { label: "Languages", value: "English · Fluent" },
    { label: "Hair", value: "Black" },
    { label: "Ethnicity", value: "Asian" },
    { label: "Nationality", value: "Indian" },
    { label: "Gender", value: "Female" },
    { label: "City", value: "Bangalore" },
  ],
  danceBookings: [
    {
      title: "Private studio dance session",
      price: "₹17,000",
      suffix: "per hour",
      note: "One-to-one private studio booking.",
    },
    {
      title: "On-location dance session",
      price: "₹20,000",
      suffix: "per hour",
      note: "Travel-based dance session within Bangalore.",
    },
    {
      title: "Full-day dance booking",
      price: "₹50,000",
      suffix: "full day",
      note: "Extended dance / appearance booking.",
    },
  ],
  contact: {
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/?text=Hello%20Anora%2C%20I%20found%20your%20profile%20and%20would%20like%20to%20say%20hello.",
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/share/url?url=https%3A%2F%2Fdancerportfolio.vercel.app&text=Hello%20Anora%2C%20I%20found%20your%20profile.",
    },
  },
  seo: {
    title: "Anora | Bangalore",
    description:
      "Anora in Bangalore. View her profile, gallery, dance booking options, and direct contact details.",
  },
} as const;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelDeploymentUrl = process.env.VERCEL_URL?.trim();
  const candidate = configuredUrl || vercelProductionUrl || vercelDeploymentUrl;

  if (!candidate) return "https://dancerportfolio.vercel.app";

  const withProtocol = /^https?:\/\//.test(candidate) ? candidate : "https://" + candidate;
  return withProtocol.replace(/\/$/, "");
}
