import {
  getTelegramHref,
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

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
    <section id="contact" className="relative overflow-hidden bg-[#100e10] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[5%] h-96 w-96 rounded-full bg-[#5f3047]/[0.12] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="glass-3d rounded-[2rem] border border-white/10 p-6 sm:p-10 lg:p-14">
          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-600">
            Contact
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <h2 className="font-display text-[clamp(4rem,9vw,8rem)] font-light leading-[.82] tracking-[-0.055em]">
                Say <span className="italic text-[#cdb6aa]">hello.</span>
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">
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
                  className="group flex min-h-28 items-end justify-between rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]"
                >
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-zinc-600">Direct message</p>
                    <p className="mt-2 font-display text-3xl font-light">{channel.label}</p>
                  </div>
                  <span className="mb-1 text-xl text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
