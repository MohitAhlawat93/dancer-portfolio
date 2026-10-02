import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProfileDetails() {
  return (
    <section id="profile" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Profile"
          title="At a glance."
          description="A concise set of non-intimate profile details supplied for this version of the website."
        />

        <dl className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.facts.map((fact) => (
            <div key={fact.label} className="min-h-36 border-b border-r border-line p-5 sm:p-6">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-7 font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
