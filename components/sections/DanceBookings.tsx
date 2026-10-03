import {
  getWhatsAppHref,
  siteContent,
} from "@/content/site-content";

export function DanceBookings() {
  return (
    <section id="rates" className="relative overflow-hidden bg-[#100e10] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[460px] w-[460px] rounded-full bg-[#5f3047]/[0.12] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-[-100px] h-[440px] w-[440px] rounded-full bg-[#e7cbbb]/[0.05] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-600">
          Bookings
        </p>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl font-display text-5xl font-light leading-[.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Choose your <span className="italic text-[#cdb6aa]">format.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-zinc-500">
            Three simple dance booking options with direct inquiry.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {siteContent.danceBookings.map((item, index) => (
            <article
              key={item.title}
              className="glass-3d shine-sweep group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 p-6 sm:min-h-[390px] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e7cbbb]/[0.035] blur-[55px] transition duration-700 group-hover:bg-[#e7cbbb]/[0.065]"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <p className="font-display text-5xl font-light text-white/[0.12]">
                    0{index + 1}
                  </p>
                  <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Dance
                  </span>
                </div>

                <h3 className="mt-8 max-w-xs font-display text-3xl font-light leading-[1.02] text-white sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                  {item.note}
                </p>
              </div>

              <div className="relative z-10 mt-10">
                <div className="border-t border-white/[0.08] pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-display text-4xl font-light tracking-[-0.035em] text-white sm:text-5xl">
                      {item.price}
                    </p>
                    <p className="pb-1 text-[8px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                      {item.suffix}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppHref(item.inquiry)}
                    target={siteContent.contact.whatsapp.configured ? "_blank" : undefined}
                    rel={siteContent.contact.whatsapp.configured ? "noreferrer" : undefined}
                    className="luxury-light-button mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.17em]"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
