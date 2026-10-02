import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] px-6 pb-24 pt-12 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px] border-t border-white/10 pt-8">
        <p className="font-display text-[clamp(5rem,14vw,13rem)] font-light leading-none tracking-[-0.06em] text-white/[0.08]">
          ANORA
        </p>

        <div className="mt-8 grid gap-8 border-t border-white/10 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">
              Bangalore, India
            </p>
            <p className="mt-3 text-xs text-zinc-600">© {year} Anora</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[siteContent.contact.whatsapp, siteContent.contact.telegram].map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                {channel.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
