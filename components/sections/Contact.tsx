import { getTelegramHref, getWhatsAppHref, siteContent } from "@/content/site-content";

export function Contact() {
  const channels = [
    {
      label: "WhatsApp",
      href: getWhatsAppHref("Hi Anora, I would like to inquire about a booking."),
      configured: siteContent.contact.whatsapp.configured,
    },
    {
      label: "Telegram",
      href: getTelegramHref(),
      configured: siteContent.contact.telegram.configured,
    },
  ];

  return (
    <section id="contact" className="section-slate relative overflow-hidden px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="depth-card glass-panel prism-edge rounded-[2rem] p-6 sm:p-10 lg:p-14">
          <p className="text-[9px] uppercase tracking-[.28em] text-muted">Contact</p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <h2 className="font-display text-[clamp(4rem,9vw,8rem)] font-light leading-[.82] tracking-[-.055em]">
                Say <span className="italic text-accent-soft">hello.</span>
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-muted">
                For questions, availability, or verification, message directly.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.configured ? "_blank" : undefined}
                  rel={channel.configured ? "noreferrer" : undefined}
                  className="depth-card relative flex min-h-28 items-end justify-between rounded-2xl border border-white/[.09] bg-black/20 p-5 backdrop-blur-xl"
                >
                  <div>
                    <p className="text-[8px] uppercase tracking-[.18em] text-muted">Direct message</p>
                    <p className="mt-2 font-display text-3xl font-light">{channel.label}</p>
                  </div>
                  <span className="mb-1 text-xl text-accent-soft">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
