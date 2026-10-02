import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { About } from "@/components/sections/About";
import { Highlights } from "@/components/sections/Highlights";
import { ProfileDetails } from "@/components/sections/ProfileDetails";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Highlights />
        <ProfileDetails />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
