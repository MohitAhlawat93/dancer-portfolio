import { siteContent } from "@/content/site-content";

export function Introduction() {
  return (
    <section className="section-paper relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] font-semibold uppercase tracking-[.28em] text-accent">
          Introduction
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_.72fr] lg:gap-24">
          <p className="max-w-5xl font-display text-[clamp(3.1rem,6.2vw,6.3rem)] font-light leading-[.92] tracking-[-.045em] text-foreground">
            Quiet confidence,
            <span className="block italic text-accent">beautifully understated.</span>
          </p>

          <div className="self-end border-l border-line pl-6 sm:pl-8">
            <p className="text-sm leading-8 text-muted sm:text-base">
              {siteContent.profile.bio}
            </p>
            <p className="mt-7 font-display text-2xl font-light italic leading-relaxed text-deep">
              “{siteContent.profile.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
