import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProfileDetails() {
  return (
    <section id="profile" className="bg-[#0b0b0b] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Profile"
          title="Talent comp card."
          description="A clean view of the essentials."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
          <blockquote className="font-display text-3xl font-light italic leading-relaxed text-zinc-300 sm:text-4xl">
            “I like things to feel natural, comfortable, and uncomplicated.”
          </blockquote>

          <dl className="grid sm:grid-cols-2">
            {siteContent.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-white/10 py-5 sm:odd:pr-8 sm:even:pl-8"
              >
                <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-light text-zinc-100">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
