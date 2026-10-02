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
      className="fixed bottom-4 right-4 z-50 inline-flex items-center rounded-full border border-white/10 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 sm:bottom-6 sm:right-6"
    >
      WhatsApp
    </a>
  );
}
