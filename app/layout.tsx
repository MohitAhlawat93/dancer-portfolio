import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { getSiteUrl, siteContent } from "@/content/site-content";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: siteContent.profile.name,
    images: [
      {
        url: siteContent.images.hero.src,
        alt: siteContent.images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.images.hero.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={displayFont.variable + " " + sansFont.variable}>
        {children}
      </body>
    </html>
  );
}
