import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="editorial-grid relative isolate overflow-hidden bg-[#090809] px-4 pb-16 pt-24 text-white sm:px-6 sm:pt-28 lg:min-h-screen lg:px-16 lg:pb-24 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(231,203,187,.17),rgba(95,48,71,.08)_38%,transparent_70%)] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(95,48,71,.18),transparent_68%)] blur-[100px]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-8 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
        <div className="order-2 fade-up lg:order-1">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-xl sm:text-[10px]">
              Bangalore, IN
            </span>
            <span className="rounded-full border border-[#e7cbbb]/15 bg-[#e7cbbb]/[0.05] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#d8c0b2] backdrop-blur-xl sm:text-[10px]">
              Available now
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(5.1rem,14vw,11rem)] font-light leading-[0.72] tracking-[-0.06em]"
          >
            Anora
          </h1>

          <p className="mt-7 max-w-xl font-display text-3xl font-light italic leading-[1.02] text-[#eee5df] sm:text-4xl lg:text-5xl">
            {siteContent.profile.tagline}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
            {siteContent.profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              aria-label="Message Anora"
              className="luxury-light-button shine-sweep inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.17em] sm:px-8"
            >
              Message Anora
            </a>

            <a
              href="#gallery"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.17em] text-white backdrop-blur-xl transition duration-300 hover:border-white/30 hover:bg-white/[0.08] sm:px-8"
            >
              View Gallery
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-4">
            <div className="pr-3">
              <p className="font-display text-2xl font-light">27</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-600">Age</p>
            </div>
            <div className="px-3">
              <p className="font-display text-2xl font-light">5′2″</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-600">Height</p>
            </div>
            <div className="pl-3">
              <p className="font-display text-2xl font-light">EN</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-600">Fluent</p>
            </div>
          </div>
        </div>

        <div className="order-1 fade-up-delay lg:order-2">
          <div className="relative mx-auto max-w-[760px] pb-7 pl-3 pr-3 pt-2 sm:pb-12 sm:pl-10 sm:pr-7 lg:pb-14">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[78%] w-[72%] rotate-[-4deg] rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-[#2b1823] to-[#120f12] shadow-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-[8%] h-[68%] w-[42%] rotate-[5deg] rounded-[2rem] border border-[#e7cbbb]/10 bg-gradient-to-b from-[#2a2023] to-[#100d10] shadow-2xl"
            />

            <div className="luxury-frame float-slow group relative z-10 aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#141114]">
              <Image
                src={siteContent.images.hero.src}
                alt={siteContent.images.hero.alt}
                fill
                priority
                quality={94}
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/15"
              />
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:px-4">
                <span className="availability-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Bangalore · Active
              </div>
              <div className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-xl">
                Profile 01
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
