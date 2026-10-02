import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteContent.contact.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Anora on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 sm:bottom-6 sm:right-6"
    >
      WhatsApp
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}
