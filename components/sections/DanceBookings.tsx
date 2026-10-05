import { TrackedLink } from "@/components/growth/TrackedLink";
import { getWhatsAppHref, siteContent } from "@/content/site-content";

export function DanceBookings() {
  return (
    <section id="rates" className="section-soft relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] font-semibold uppercase tracking-[.28em] text-accent">
          {siteContent.seo.serviceLabel} · {siteContent.profile.city}
        </p>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl font-display text-5xl font-light leading-[.94] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
            Simple, clear <span className="italic text-accent">bookings.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-muted">{siteContent.seo.serviceDescription}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {siteContent.danceBookings.map((item, index) => {
            const featured = index === 1;
            return (
              <article key={item.title} className={featured
                ? "depth-card flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-deep bg-deep p-6 text-[#fffdf9] shadow-[0_28px_70px_rgba(18,51,56,.18)] sm:p-8"
                : "soft-card depth-card flex min-h-[360px] flex-col justify-between rounded-[2rem] p-6 sm:p-8"}>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <p className={featured ? "font-display text-5xl font-light text-white/20" : "font-display text-5xl font-light text-accent/25"}>0{index + 1}</p>
                    <span className={featured ? "rounded-full border border-white/15 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[.2em] text-white/65" : "rounded-full border border-line bg-surface-soft px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[.2em] text-muted"}>Dance</span>
                  </div>
                  <h3 className={featured ? "mt-8 max-w-xs font-display text-3xl font-light leading-[1.02] sm:text-4xl" : "mt-8 max-w-xs font-display text-3xl font-light leading-[1.02] text-foreground sm:text-4xl"}>{item.title}</h3>
                  <p className={featured ? "mt-4 max-w-sm text-sm leading-7 text-white/60" : "mt-4 max-w-sm text-sm leading-7 text-muted"}>{item.note}</p>
                </div>
                <div className={featured ? "mt-10 border-t border-white/12 pt-6" : "mt-10 border-t border-line pt-6"}>
                  <div className="flex items-end justify-between gap-4">
                    <p className={featured ? "font-display text-4xl font-light tracking-[-.035em] sm:text-5xl" : "font-display text-4xl font-light tracking-[-.035em] text-deep sm:text-5xl"}>{item.price}</p>
                    <p className={featured ? "pb-1 text-[8px] font-semibold uppercase tracking-[.2em] text-white/50" : "pb-1 text-[8px] font-semibold uppercase tracking-[.2em] text-muted"}>{item.suffix}</p>
                  </div>
                  <TrackedLink
                    href={getWhatsAppHref(item.inquiry)}
                    target={siteContent.contact.whatsapp.configured ? "_blank" : undefined}
                    rel={siteContent.contact.whatsapp.configured ? "noreferrer" : undefined}
                    eventName="booking_inquiry_click"
                    eventParams={{ package: item.title, channel: "whatsapp" }}
                    className={featured
                      ? "mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#fffdf9] px-5 py-3 text-[9px] font-bold uppercase tracking-[.17em] text-deep transition hover:bg-[#efe7dc]"
                      : "primary-button mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[.17em]"}
                  >
                    Inquire
                  </TrackedLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
