import { getTelegramHref, getWhatsAppHref, siteContent } from "@/content/site-content";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    {
      label: "WhatsApp",
      href: getWhatsAppHref(),
      configured: siteContent.contact.whatsapp.configured,
    },
    {
      label: "Telegram",
      href: getTelegramHref(),
      configured: siteContent.contact.telegram.configured,
    },
  ];

  return (
    <footer className="section-ink px-5 pb-24 pt-10 text-white sm:px-6 lg:px-16">
      <div className="mx-auto max-w-[1500px] border-t border-white/[.08] pt-8">
        <p className="font-display text-[clamp(5.5rem,17vw,15rem)] font-light leading-[.75] tracking-[-.07em] text-[#c7a76a]/[.08]">
          ANORA
        </p>

        <div className="mt-10 grid gap-6 border-t border-white/[.08] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[.22em] text-muted">Bangalore, India</p>
            <p className="mt-2 text-[10px] text-muted">© {year} Anora</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {links.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.configured ? "_blank" : undefined}
                rel={channel.configured ? "noreferrer" : undefined}
                className="rounded-full border border-white/[.08] bg-white/[.025] px-4 py-2 text-[9px] font-medium uppercase tracking-[.16em] text-muted-strong transition hover:border-accent/30 hover:text-white"
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
