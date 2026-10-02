import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteContent.contact.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Anora on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-background shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-accent sm:bottom-6 sm:right-6"
    >
      WhatsApp
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}
