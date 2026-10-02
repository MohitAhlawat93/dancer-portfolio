import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Highlights() {
  return (
    <section className="bg-foreground px-5 py-20 text-background sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Good to know"
          title="Simple details before you get in touch."
          description="Direct communication, privacy, and clear expectations are the focus of this public profile."
          light
        />

        <div className="mt-16 divide-y divide-white/15 border-y border-white/15">
          {siteContent.highlights.map((item) => (
            <article
              key={item.number}
              className="grid gap-4 py-8 sm:grid-cols-[0.18fr_0.42fr_1fr] sm:items-start sm:gap-8 lg:py-10"
            >
              <span className="text-xs tracking-[0.2em] text-white/40">{item.number}</span>
              <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">{item.title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/55 sm:justify-self-end">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
