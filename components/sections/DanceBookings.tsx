import {
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

export function DanceBookings() {
  return (
    <section id="rates" className="bg-[#101010] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[0.25fr_1fr] md:gap-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Dance bookings
          </p>
          <div>
            <h2 className="font-display text-5xl font-light leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Booking <span className="italic text-zinc-400">roster.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Three simple options for dance sessions and appearance bookings.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteContent.danceBookings.map((item, index) => (
            <article
              key={item.title}
              className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <div>
                <p className="font-display text-3xl font-light text-white/20">
                  0{index + 1}
                </p>
                <h3 className="mt-7 text-xl font-medium leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {item.note}
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-display text-4xl font-light tracking-[-0.03em] text-white">
                  {item.price}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {item.suffix}
                </p>

                <a
                  href={getWhatsAppHref(item.inquiry)}
                  target={siteContent.contact.whatsapp.configured ? "_blank" : undefined}
                  rel={siteContent.contact.whatsapp.configured ? "noreferrer" : undefined}
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-neutral-200"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
