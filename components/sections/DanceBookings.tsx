import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

export function DanceBookings() {
  return (
    <section id="rates" className="bg-[#101010] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Dance bookings"
          title="Simple booking options."
          description="For dance sessions and appearance bookings."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {siteContent.danceBookings.map((item, index) => (
            <article
              key={item.title}
              className="group flex min-h-[300px] flex-col justify-between bg-[#141414] p-7 transition duration-500 hover:bg-[#181818] sm:p-8"
            >
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">
                  0{index + 1}
                </p>
                <h3 className="mt-6 max-w-xs font-display text-3xl font-light leading-tight text-white sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
                  {item.note}
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-display text-5xl font-light tracking-[-0.04em] text-white">
                  {item.price}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  {item.suffix}
                </p>
                <a
                  href={siteContent.contact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white"
                >
                  Ask on WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
