import { getWhatsAppHref, siteContent } from "@/content/site-content";

export function DanceBookings() {
  return (
    <section id="rates" className="section-wine relative overflow-hidden px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] uppercase tracking-[.28em] text-zinc-600">Bookings</p>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl font-display text-5xl font-light leading-[.94] tracking-[-.045em] sm:text-6xl lg:text-7xl">
            Choose your <span className="italic text-[#d8bcae]">format.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-zinc-500">Three dance booking options with direct inquiry.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {siteContent.danceBookings.map((item, index) => (
            <article
              key={item.title}
              className="depth-card glass-panel shine-sweep group relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] p-6 sm:min-h-[390px] sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#e8c9b6]/[.035] blur-[60px] transition duration-700 group-hover:bg-[#e8c9b6]/[.075]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <p className="font-display text-5xl font-light text-white/[.11]">0{index + 1}</p>
                  <span className="rounded-full border border-white/[.08] bg-black/15 px-3 py-1.5 text-[8px] uppercase tracking-[.22em] text-zinc-500">Dance</span>
                </div>

                <h3 className="mt-8 max-w-xs font-display text-3xl font-light leading-[1.02] text-white sm:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">{item.note}</p>
              </div>

              <div className="relative z-10 mt-10 border-t border-white/[.07] pt-6">
                <div className="flex items-end justify-between gap-4">
                  <p className="font-display text-4xl font-light tracking-[-.035em] text-white sm:text-5xl">{item.price}</p>
                  <p className="pb-1 text-[8px] uppercase tracking-[.2em] text-zinc-600">{item.suffix}</p>
                </div>

                <a
                  href={getWhatsAppHref(item.inquiry)}
                  target={siteContent.contact.whatsapp.configured ? "_blank" : undefined}
                  rel={siteContent.contact.whatsapp.configured ? "noreferrer" : undefined}
                  className="luxury-light-button mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[.17em]"
                >
                  Inquire
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
