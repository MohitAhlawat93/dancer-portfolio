import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Services & pricing"
          title="Clear starting points. Direct conversation when the details matter."
          description="Service names, descriptions, and prices are demo placeholders for V1 and can be replaced from one content file."
        />

        <div className="mt-16 border-y border-line">
          {siteContent.services.map((service, index) => (
            <article
              key={service.name}
              className="grid gap-6 border-b border-line py-8 last:border-b-0 md:grid-cols-[0.12fr_0.45fr_0.8fr_0.45fr_auto] md:items-center md:gap-8 lg:py-10"
            >
              <span className="text-xs tracking-[0.18em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {service.name}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-muted">{service.description}</p>
              <p className="text-sm font-semibold">{service.price}</p>
              <a
                href={siteContent.contact.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Enquire
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-muted">
          Demo pricing only. Final rates may depend on scope, duration, travel, preparation, and event requirements.
        </p>
      </div>
    </section>
  );
}
