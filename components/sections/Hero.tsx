import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="editorial-noise relative min-h-screen overflow-hidden bg-[#0b0b0b] px-6 pb-16 pt-28 text-white lg:px-16 lg:pb-24 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1600px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="fade-up order-2 lg:order-1">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
              Bangalore, IN
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
              Available for bookings
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[clamp(5.5rem,12vw,10.5rem)] font-light leading-[0.72] tracking-[-0.055em]"
          >
            Anora
          </h1>

          <p className="mt-8 max-w-xl font-display text-3xl font-light italic leading-[1.05] text-zinc-200 sm:text-4xl lg:text-5xl">
            {siteContent.profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
            {siteContent.profile.intro}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              href="#contact"
              aria-label="Message Anora"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-black shadow-lg shadow-white/5 transition-all duration-200 hover:bg-neutral-200 active:scale-95"
            >
              Message Anora
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-95"
            >
              View Gallery
            </a>
          </div>
        </div>

        <div className="fade-up-delay order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[760px] overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_40px_100px_rgba(0,0,0,0.5)]">
            <Image
              src={siteContent.images.hero.src}
              alt={siteContent.images.hero.alt}
              fill
              priority
              quality={94}
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
