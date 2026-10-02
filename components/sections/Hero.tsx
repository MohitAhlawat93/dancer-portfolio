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
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.04)_32%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,transparent_46%,rgba(0,0,0,0.12)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <div className="grid w-full gap-9 border-t border-white/25 pt-6 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75 sm:mb-5 sm:text-[11px]">
              {siteContent.profile.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl font-display text-[clamp(5.6rem,15vw,11rem)] font-medium leading-[0.72] tracking-[-0.055em]"
            >
              {siteContent.profile.name}
            </h1>
            <p className="mt-7 inline-flex rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {siteContent.profile.status}
            </p>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="font-display text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl">
              {siteContent.profile.tagline}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75 sm:text-[15px]">
              {siteContent.profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                aria-label="Message Anora"
                className="hero-primary-cta inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5"
              >
                Message Anora
                <ArrowUpRight />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-black/10 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                View gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
