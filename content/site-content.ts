export const siteContent = {
  profile: {
    name: "Anora",
    role: "Private Profile · Bangalore",
    location: "Bangalore, India",
    status: "Currently in Bangalore",
    tagline: "Warm, discreet, and easy to talk to.",
    intro:
      "Welcome to my profile. I’m Anora, 27, and currently in Bangalore. I value respectful communication, privacy, cleanliness, and a calm, comfortable atmosphere.",
    bio:
      "Hello, I’m Anora. I’m a friendly, independent woman currently in Bangalore. I prefer clear and respectful communication and I take privacy, hygiene, and personal boundaries seriously. The photographs on this preview are temporary placeholders; the final gallery should contain only Anora’s approved genuine photographs. If you would like to verify the profile or ask a question, contact me directly on WhatsApp or Telegram.",
    note:
      "For privacy and safety, this public page keeps the profile tasteful and does not publish intimate or sexual details.",
  },
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1562349377-0ff74adf1365?auto=format&fit=crop&fm=jpg&q=88&w=2200",
      alt: "Temporary editorial portrait of a woman in an elegant black dress",
      credit: "Victoria Magneticwear / Unsplash",
      uploadPath: "/images/profile/hero.jpg",
      isPlaceholder: true,
    },
    about: {
      src: "https://images.unsplash.com/photo-1677537946961-7b1ffd75d959?auto=format&fit=crop&fm=jpg&q=86&w=1400",
      alt: "Temporary editorial portrait of a brunette woman in a brown dress",
      credit: "Lance Reis / Unsplash",
      uploadPath: "/images/profile/about.jpg",
      isPlaceholder: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1765229278564-6775d6aec567?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary fashion portrait of a woman in an elegant evening dress",
        credit: "FOTOGRAFÍA EDITORIAL / Unsplash",
        uploadPath: "/images/profile/gallery-01.jpg",
      },
      {
        src: "https://images.unsplash.com/photo-1766193232543-30daf3802aa0?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary night portrait of a woman in a brown dress",
        credit: "FOTOGRAFÍA EDITORIAL / Unsplash",
        uploadPath: "/images/profile/gallery-02.jpg",
      },
      {
        src: "https://images.unsplash.com/photo-1562750271-680f26a95358?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary studio portrait of a brunette woman in a black dress",
        credit: "Anastasia Leonova / Unsplash",
        uploadPath: "/images/profile/gallery-03.jpg",
      },
      {
        src: "https://images.unsplash.com/photo-1554787497-98caae0f95df?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary elegant evening portrait near a glass doorway",
        credit: "raj jariwala / Unsplash",
        uploadPath: "/images/profile/gallery-04.jpg",
      },
      {
        src: "https://images.unsplash.com/photo-1763551229890-64e97d845251?auto=format&fit=crop&fm=jpg&q=85&w=1400",
        alt: "Temporary clean studio fashion portrait in a long dress",
        credit: "sammy swae / Unsplash",
        uploadPath: "/images/profile/gallery-05.jpg",
      },
    ],
  },
  highlights: [
    {
      number: "01",
      title: "Direct communication",
      text: "Questions and profile verification can be handled directly through WhatsApp or Telegram.",
    },
    {
      number: "02",
      title: "Privacy first",
      text: "The profile is intentionally simple and discreet, with only the information needed for a comfortable first conversation.",
    },
    {
      number: "03",
      title: "Clear expectations",
      text: "Respectful communication, personal boundaries, and hygiene are important parts of any meeting or conversation.",
    },
  ],
  facts: [
    { label: "Age", value: "27" },
    { label: "Languages", value: "English · Fluent" },
    { label: "Height", value: "158 cm / 5′2″" },
    { label: "Hair", value: "Black" },
    { label: "Nationality", value: "Indian" },
    { label: "Gender", value: "Female" },
    { label: "Smoking", value: "Yes" },
    { label: "City", value: "Bangalore" },
  ],
  contact: {
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/?text=Hello%20Anora%2C%20I%20found%20your%20profile%20and%20would%20like%20to%20say%20hello.",
      isPlaceholder: true,
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/share/url?url=https%3A%2F%2Fdancerportfolio.vercel.app&text=Hello%20Anora%2C%20I%20found%20your%20profile.",
      isPlaceholder: true,
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/",
      isPlaceholder: true,
    },
  },
  seo: {
    title: "Anora | Private Profile in Bangalore",
    description:
      "Private profile for Anora, currently in Bangalore. View her profile, gallery, personal details, and direct contact options.",
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
