import Image from "next/image";
import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="About Anora"
          title="Friendly, private, and straightforward."
          description="The copy below is based on the profile details you provided, while keeping the public page tasteful and non-explicit."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-end lg:gap-20">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
              <Image
                src={siteContent.images.about.src}
                alt={siteContent.images.about.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition duration-700 hover:scale-[1.015]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>Temporary placeholder image</span>
              <span>{siteContent.images.about.credit}</span>
            </figcaption>
          </figure>

          <div className="lg:pb-12">
            <p className="font-display text-3xl leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              {siteContent.profile.bio}
            </p>
            <div className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Currently in</p>
                <p className="mt-2 text-sm">{siteContent.profile.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Verification</p>
                <p className="mt-2 text-sm">Ask directly via WhatsApp or Telegram</p>
              </div>
            </div>
            <p className="mt-8 max-w-lg text-xs leading-6 text-muted">
              {siteContent.profile.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
