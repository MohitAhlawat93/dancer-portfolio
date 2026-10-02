import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

const channels = [
  siteContent.contact.whatsapp,
  siteContent.contact.telegram,
  siteContent.contact.instagram,
];

export function Contact() {
  return (
    <section id="contact" className="bg-accent px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-t border-white/25 pt-6 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Direct contact
            </p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/75">
              If you would like to say hello, ask a question, or request profile verification, message Anora directly.
            </p>
          </div>

          <div>
            <h2 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.055em]">
              Prefer to talk
              <span className="ml-[8vw] block sm:ml-[12vw]">directly?</span>
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-36 flex-col justify-between border border-white/30 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-accent"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                    Contact
                  </span>
                  <span className="flex items-center justify-between gap-4 font-display text-3xl tracking-[-0.03em]">
                    {channel.label}
                    <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-white/70">
              The current links are working demo placeholders. Replace them with Anora’s real WhatsApp number, Telegram username, and social profile before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
