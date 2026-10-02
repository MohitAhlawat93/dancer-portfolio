import {
  getTelegramHref,
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

const contactMessage =
  "Hi Anora, I would like to inquire about a booking.";

export function Contact() {
  const channels = [
    {
      label: "WhatsApp",
      href: getWhatsAppHref(contactMessage),
      configured: siteContent.contact.whatsapp.configured,
    },
    {
      label: "Telegram",
      href: getTelegramHref(),
      configured: siteContent.contact.telegram.configured,
    },
  ];

  return (
    <section id="contact" className="bg-[#101010] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-t border-white/10 pt-8 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Contact
          </p>

          <div>
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] font-light leading-[0.82] tracking-[-0.05em] text-white">
              Say <span className="italic text-zinc-400">hello.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">
              Questions or verification? Message me directly and I’ll reply when I’m available.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.configured ? "_blank" : undefined}
                  rel={channel.configured ? "noreferrer" : undefined}
                  className="group flex min-h-40 flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-[#181818]"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Direct message
                  </span>

                  <span className="font-display text-4xl font-light text-white">
                    {channel.label}
                  </span>
                </a>
              ))}
            </div>

            {(!siteContent.contact.whatsapp.configured ||
              !siteContent.contact.telegram.configured) && (
              <p className="mt-5 text-xs leading-6 text-zinc-600">
                Direct contact details are being connected.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
