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
      className="fixed bottom-3 right-3 z-50 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1d6e57] bg-[#22785f] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_36px_rgba(34,120,95,.24)] transition hover:-translate-y-0.5 hover:bg-[#1b6651] sm:bottom-6 sm:right-6 sm:px-5"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path d="M7.6 18.2 4 20l1.1-4A8 8 0 1 1 7.6 18.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8.4c.3 2.8 2 4.5 4.8 5 .5.1 1-.1 1.3-.5l.7-.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      WhatsApp
    </a>
  );
}
