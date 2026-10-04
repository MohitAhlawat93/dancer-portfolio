import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function About() {
  return (
    <section id="about" className="section-soft relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute -bottom-5 -right-5 h-[76%] w-[72%] rounded-[3rem] bg-[#d9ccb9]" aria-hidden="true" />
            <div className="photo-frame group relative z-10 aspect-[4/5] overflow-hidden rounded-[3rem] bg-surface">
              <Image
                src={siteContent.images.about.src}
                alt={siteContent.images.about.alt}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
              />
            </div>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.28em] text-accent">About</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[.94] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
              A closer <span className="italic text-accent">portrait.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-display text-3xl font-light italic leading-[1.15] text-deep sm:text-4xl">
              “Good energy, good manners, and mutual respect.”
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
              {siteContent.profile.bio}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <article className="soft-card depth-card rounded-2xl p-5">
                <p className="text-[8px] font-semibold uppercase tracking-[.2em] text-muted">Location</p>
                <p className="mt-3 font-display text-2xl font-light text-deep">{siteContent.profile.city}</p>
              </article>
              <article className="soft-card depth-card rounded-2xl p-5">
                <p className="text-[8px] font-semibold uppercase tracking-[.2em] text-muted">Direct contact</p>
                <p className="mt-3 font-display text-2xl font-light text-deep">WhatsApp / Telegram</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
