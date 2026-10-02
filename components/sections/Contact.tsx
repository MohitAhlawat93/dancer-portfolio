import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

const channels = [
  siteContent.contact.whatsapp,
  siteContent.contact.telegram,
];

export function Contact() {
  return (
    <section id="contact" className="bg-accent px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-t border-white/25 pt-6 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Contact
            </p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/80">
              Questions or verification? Message me directly and I’ll reply when I’m available.
            </p>
          </div>

          <div>
            <h2 className="max-w-6xl font-display text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.055em]">
              Say hello.
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-40 flex-col justify-between border border-white/35 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-accent sm:p-6"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                    Message me
                  </span>
                  <span className="flex items-center justify-between gap-4 font-display text-4xl tracking-[-0.03em]">
                    {channel.label}
                    <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
