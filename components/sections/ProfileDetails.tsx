import { siteContent } from "@/content/site-content";

const statLabels = ["Height", "Hair", "Age"] as const;

export function ProfileDetails() {
  const stats = statLabels.map(
    (label) => siteContent.facts.find((fact) => fact.label === label)!,
  );

  const language = siteContent.facts.find((fact) => fact.label === "Languages")!;
  const city = siteContent.facts.find((fact) => fact.label === "City")!;

  return (
    <section id="profile" className="relative overflow-hidden bg-[#090809] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5f3047]/[0.08] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="max-w-4xl">
          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-600">
            Profile
          </p>
          <h2 className="mt-5 font-display text-5xl font-light leading-[.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Details, <span className="italic text-[#cdb6aa]">refined.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          <article className="glass-3d relative overflow-hidden rounded-3xl border border-white/10 p-6 md:col-span-2 md:p-8">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#e7cbbb]/[0.045] blur-[70px]" />
            <p className="relative text-[9px] font-medium uppercase tracking-[0.22em] text-zinc-600">
              Presence
            </p>
            <blockquote className="relative mt-8 max-w-2xl font-display text-3xl font-light italic leading-[1.2] text-zinc-200 sm:text-4xl">
              “{siteContent.profile.quote}”
            </blockquote>
          </article>

          <article className="glass-3d rounded-3xl border border-white/10 p-6">
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-zinc-600">
              Key stats
            </p>
            <dl className="mt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-white/[0.08] py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl font-light text-zinc-100">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="glass-3d rounded-3xl border border-white/10 p-6">
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-zinc-600">
              Location & language
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] uppercase tracking-[0.17em] text-zinc-300">
                {language.value}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] uppercase tracking-[0.17em] text-zinc-300">
                {city.value}
              </span>
            </div>
            <p className="mt-8 text-sm leading-7 text-zinc-500">
              Currently based in Bangalore and available for direct enquiries.
            </p>
          </article>

          <article className="glass-3d relative overflow-hidden rounded-3xl border border-white/10 p-6 md:col-span-4 md:p-8">
            <div className="absolute right-[-5%] top-[-45%] h-72 w-72 rounded-full bg-emerald-400/[0.07] blur-[90px]" />
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-zinc-600">
                  Availability
                </p>
                <p className="mt-3 font-display text-3xl font-light text-white sm:text-4xl">
                  Active in Bangalore
                </p>
                <p className="mt-2 text-sm text-zinc-500">Open for current engagements and enquiries.</p>
              </div>

              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
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
