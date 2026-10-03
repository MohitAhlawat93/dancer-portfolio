import {
  getTelegramHref,
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

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
    <footer className="bg-[#090809] px-5 pb-24 pt-10 text-white sm:px-6 lg:px-16">
      <div className="mx-auto max-w-[1500px] border-t border-white/[0.08] pt-8">
        <p className="font-display text-[clamp(5.5rem,17vw,15rem)] font-light leading-[.75] tracking-[-0.07em] text-white/[0.045]">
          ANORA
        </p>

        <div className="mt-10 grid gap-6 border-t border-white/[0.08] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">Bangalore, India</p>
            <p className="mt-2 text-[10px] text-zinc-700">© {year} Anora</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {links.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.configured ? "_blank" : undefined}
                rel={channel.configured ? "noreferrer" : undefined}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-400 transition hover:border-white/20 hover:text-white"
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
