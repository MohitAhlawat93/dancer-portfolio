import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const statLabels = ["Height", "Hair", "Age"] as const;

export function ProfileDetails() {
  const stats = statLabels.map(
    (label) => siteContent.facts.find((fact) => fact.label === label)!,
  );

  const language = siteContent.facts.find((fact) => fact.label === "Languages")!;
  const city = siteContent.facts.find((fact) => fact.label === "City")!;

  return (
    <section id="profile" className="bg-[#0b0b0b] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Profile"
          title="A few details."
          description="A compact view of the essentials."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:col-span-2 md:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Presence
            </p>
            <blockquote className="mt-8 max-w-2xl font-display text-3xl font-light italic leading-relaxed text-zinc-300 sm:text-4xl">
              “{siteContent.profile.quote}”
            </blockquote>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Key stats
            </p>
            <dl className="mt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl font-light text-zinc-100">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Location & language
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                {language.value}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                {city.value}
              </span>
            </div>
            <p className="mt-8 text-sm leading-7 text-zinc-500">
              Currently based in Bangalore and available for direct enquiries.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:col-span-4 md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/[0.06] blur-[70px]"
            />
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Availability
                </p>
                <p className="mt-3 font-display text-3xl font-light text-white sm:text-4xl">
                  Active in Bangalore for engagements
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <span className="availability-pulse h-2 w-2 rounded-full bg-emerald-400" />
                Active now
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
