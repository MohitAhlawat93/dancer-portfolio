import { siteContent } from "@/content/site-content";

export function Introduction() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36" aria-label="Introduction">
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
        <div className="flex items-start justify-between gap-6 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
            Welcome
          </p>
          <p className="text-right text-[11px] uppercase tracking-[0.18em] text-muted lg:mt-8 lg:text-left">
            {siteContent.profile.location}
          </p>
        </div>

        <div>
          <p className="max-w-6xl font-display text-[clamp(2.7rem,6.3vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.045em]">
            A private profile with a <span className="text-accent">calm, premium</span> presentation.
          </p>

          <div className="mt-10 grid gap-8 border-t border-line pt-7 sm:grid-cols-2">
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              {siteContent.profile.intro}
            </p>
            <p className="max-w-lg text-sm leading-7 text-muted sm:justify-self-end">
              This site focuses on genuine profile information, tasteful photography, and direct communication. It intentionally keeps the experience simple, discreet, and easy to use on mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
