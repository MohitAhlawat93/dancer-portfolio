import {
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppHref()}
      target={siteContent.contact.whatsapp.configured ? "_blank" : undefined}
      rel={siteContent.contact.whatsapp.configured ? "noreferrer" : undefined}
      aria-label="Contact Anora on WhatsApp"
      className="luxury-light-button fixed bottom-3 right-3 z-50 inline-flex min-h-11 items-center rounded-full px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] shadow-2xl sm:bottom-6 sm:right-6 sm:px-5"
    >
      WhatsApp
    </a>
  );
}
