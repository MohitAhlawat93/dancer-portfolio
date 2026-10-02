import {
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

export function DanceBookings() {
  return (
    <section id="rates" className="relative overflow-hidden bg-[#101010] px-6 py-28 text-white lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-br from-neutral-700/15 to-transparent blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">
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
              className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.01] p-8 shadow-2xl shadow-black/80 backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-6">
                  <p className="font-display text-4xl font-light text-white/20">
                    0{index + 1}
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Dance
                  </span>
                </div>

                <h3 className="mt-8 font-display text-3xl font-light leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.note}
                </p>
              </div>

              <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
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
                  className="luxury-light-button relative mt-7 inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent opacity-20 transition-opacity duration-300 group-hover:opacity-35"
                  />
                  <span className="relative z-10">Inquire on WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
