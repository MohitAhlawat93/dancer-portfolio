import { siteContent } from "@/content/site-content";

const statLabels = ["Height", "Hair", "Age"] as const;

export function ProfileDetails() {
  const stats = statLabels.map(
    (label) => siteContent.facts.find((fact) => fact.label === label)!,
  );
  const language = siteContent.facts.find((fact) => fact.label === "Languages")!;
  const city = siteContent.facts.find((fact) => fact.label === "City")!;

  return (
    <section id="profile" className="section-paper relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] font-semibold uppercase tracking-[.28em] text-accent">Profile</p>
        <h2 className="mt-5 max-w-4xl font-display text-5xl font-light leading-[.94] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
          Details, <span className="italic text-accent">refined.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          <article className="soft-card depth-card relative overflow-hidden rounded-[1.75rem] p-6 md:col-span-2 md:p-8">
            <p className="text-[8px] font-semibold uppercase tracking-[.22em] text-muted">Presence</p>
            <blockquote className="mt-8 max-w-2xl font-display text-3xl font-light italic leading-[1.18] text-deep sm:text-4xl">
              “{siteContent.profile.quote}”
            </blockquote>
          </article>

          <article className="soft-card depth-card rounded-[1.75rem] p-6">
            <p className="text-[8px] font-semibold uppercase tracking-[.22em] text-muted">Key stats</p>
            <dl className="mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-line py-4 first:pt-0 last:border-b-0 last:pb-0">
                  <dt className="text-[8px] font-semibold uppercase tracking-[.18em] text-muted">{stat.label}</dt>
                  <dd className="mt-1.5 font-display text-2xl font-light text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="soft-card depth-card rounded-[1.75rem] p-6">
            <p className="text-[8px] font-semibold uppercase tracking-[.22em] text-muted">Location & language</p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-line bg-surface-soft px-3 py-2 text-[8px] font-semibold uppercase tracking-[.17em] text-muted-strong">{language.value}</span>
              <span className="rounded-full border border-line bg-surface-soft px-3 py-2 text-[8px] font-semibold uppercase tracking-[.17em] text-muted-strong">{city.value}</span>
            </div>
            <p className="mt-8 text-sm leading-7 text-muted">Currently based in {siteContent.profile.city} and available for direct enquiries.</p>
          </article>

          <article className="rounded-[1.75rem] bg-deep p-6 text-[#fffdf9] shadow-[0_24px_60px_rgba(18,51,56,.16)] md:col-span-4 md:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[.22em] text-[#d7b58d]">Availability</p>
                <p className="mt-3 font-display text-3xl font-light sm:text-4xl">{siteContent.profile.status}</p>
                <p className="mt-2 text-sm text-white/65">Open for current engagements and enquiries.</p>
              </div>
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[8px] font-semibold uppercase tracking-[.2em] text-white/85">
                <span className="availability-pulse h-2 w-2 rounded-full bg-[#61c69a]" />
                Active now
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
