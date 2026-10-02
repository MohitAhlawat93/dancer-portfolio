import Image from "next/image";
import { siteContent } from "@/content/site-content";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white"
      aria-labelledby="hero-title"
    >
      <Image
        src={siteContent.images.hero.src}
        alt={siteContent.images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[52%_center] sm:object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_32%,rgba(0,0,0,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,transparent_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <div className="grid w-full gap-9 border-t border-white/25 pt-6 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75 sm:mb-5 sm:text-[11px]">
              {siteContent.profile.role}
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl font-display text-[clamp(5.5rem,15vw,11rem)] font-medium leading-[0.72] tracking-[-0.055em]"
            >
              {siteContent.profile.name}
            </h1>
            <p className="mt-7 inline-flex rounded-full border border-white/25 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              {siteContent.profile.status}
            </p>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="font-display text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
              {siteContent.profile.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75 sm:text-[15px]">
              {siteContent.profile.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/85"
              >
                Contact Anora
                <ArrowUpRight />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white"
              >
                View gallery
              </a>
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-white/50">
              Preview photography · replace with approved genuine photos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
