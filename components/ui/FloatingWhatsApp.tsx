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
      className="luxury-light-button fixed bottom-3 right-3 z-50 inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] shadow-2xl sm:bottom-6 sm:right-6 sm:px-5"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path d="M7.6 18.2 4 20l1.1-4A8 8 0 1 1 7.6 18.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8.4c.3 2.8 2 4.5 4.8 5 .5.1 1-.1 1.3-.5l.7-.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      WhatsApp
    </a>
  );
}
