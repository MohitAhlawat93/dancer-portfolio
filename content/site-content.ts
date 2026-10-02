export const siteContent = {
  profile: {
    name: "Anora",
    location: "Bangalore",
    status: "Currently in Bangalore",
    eyebrow: "Anora · Bangalore",
    tagline: "Elegant, warm, and effortlessly herself.",
    intro:
      "Welcome. I’m Anora, 27, currently in Bangalore. I’m easy to talk to, attentive, and I value privacy, cleanliness, and respectful communication.",
    bio:
      "I’m a sweet, pleasant person who enjoys keeping things relaxed and comfortable. Good manners, discretion, and clear communication matter to me. I use my own current photographs on this profile, and if you would ever like verification or simply want to know more, you can ask me directly on WhatsApp or Telegram.",
  },
  images: {
    hero: {
      src: "/images/profile/hero.jpeg",
      alt: "Anora portrait",
    },
    about: {
      src: "/images/profile/about.jpeg",
      alt: "Anora portrait",
    },
    gallery: [
      { src: "/images/profile/gallery-01.jpeg", alt: "Anora gallery portrait 1" },
      { src: "/images/profile/gallery-02.jpg", alt: "Anora gallery portrait 2" },
      { src: "/images/profile/gallery-03.jpg", alt: "Anora gallery portrait 3" },
      { src: "/images/profile/gallery-04.jpg", alt: "Anora gallery portrait 4" },
      { src: "/images/profile/gallery-05.jpeg", alt: "Anora gallery portrait 5" },
      { src: "/images/profile/gallery-06.jpeg", alt: "Anora gallery portrait 6" },
    ],
  },
  highlights: [
    {
      number: "01",
      title: "Discreet",
      text: "Privacy and respectful communication matter to me.",
    },
    {
      number: "02",
      title: "Genuine",
      text: "I keep my profile current and use my own photographs.",
    },
    {
      number: "03",
      title: "Easy to reach",
      text: "WhatsApp and Telegram are the best ways to contact me.",
    },
  ],
  facts: [
    { label: "Age", value: "27" },
    { label: "Languages", value: "English · Fluent" },
    { label: "Height", value: "158 cm / 5′2″" },
    { label: "Hair", value: "Black" },
    { label: "Ethnicity", value: "Asian" },
    { label: "Nationality", value: "Indian" },
    { label: "Gender", value: "Female" },
    { label: "City", value: "Bangalore" },
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
      "Anora in Bangalore. View her personal profile, photographs, profile details, and direct contact options.",
  },
} as const;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelDeploymentUrl = process.env.VERCEL_URL?.trim();
  const candidate = configuredUrl || vercelProductionUrl || vercelDeploymentUrl;

  if (!candidate) {
    return "https://dancerportfolio.vercel.app";
  }

  const withProtocol = /^https?:\/\//.test(candidate)
    ? candidate
    : "https://" + candidate;

  return withProtocol.replace(/\/$/, "");
}
