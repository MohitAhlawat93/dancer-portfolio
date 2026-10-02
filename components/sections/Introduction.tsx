import { siteContent } from "@/content/site-content";

export function Introduction() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36" aria-label="Introduction">
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
        <div className="flex items-start justify-between gap-6 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
            Hello
          </p>
          <p className="text-right text-[11px] uppercase tracking-[0.18em] text-muted lg:mt-8 lg:text-left">
            {siteContent.profile.location}
          </p>
        </div>

        <div>
          <p className="max-w-6xl font-display text-[clamp(3rem,6.3vw,6.6rem)] font-medium leading-[0.93] tracking-[-0.045em]">
            I’m Anora. <span className="text-accent">Nice to meet you.</span>
          </p>

          <div className="mt-10 grid gap-8 border-t border-line pt-7 sm:grid-cols-2">
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Currently in Bangalore, I like to keep things warm, comfortable, and uncomplicated.
            </p>
            <p className="max-w-lg text-sm leading-7 text-muted sm:justify-self-end">
              If you would like to know more or verify my profile, WhatsApp or Telegram is the easiest way to reach me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
