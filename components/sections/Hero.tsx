import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="editorial-grid relative isolate overflow-hidden bg-[#070607] px-4 pb-14 pt-24 text-white sm:px-6 sm:pt-28 lg:min-h-screen lg:px-16 lg:pb-20 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(232,201,182,.18),rgba(143,77,104,.10)_36%,transparent_70%)] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 bottom-[-180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(81,39,60,.24),transparent_68%)] blur-[110px]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1580px] items-center gap-9 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div className="order-2 fade-up lg:order-1">
          <div className="flex flex-wrap gap-2">
            <span className="glass-panel rounded-full px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-300">
              Bangalore, IN
            </span>
            <span className="rounded-full border border-[#e8c9b6]/15 bg-[#e8c9b6]/[0.05] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#dec5b7] backdrop-blur-xl">
              Available now
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(5rem,14vw,10.8rem)] font-light leading-[.72] tracking-[-.065em]"
          >
            Anora
          </h1>

          <p className="mt-7 max-w-xl font-display text-3xl font-light italic leading-[1.02] text-[#f0e7e1] sm:text-4xl lg:text-5xl">
            {siteContent.profile.tagline}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
            {siteContent.profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              aria-label="Message Anora"
              className="luxury-light-button shine-sweep inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-[.17em]"
            >
              Message Anora
            </a>
            <a
              href="#gallery"
              className="glass-panel inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-[10px] font-medium uppercase tracking-[.17em] text-white transition hover:border-white/20"
            >
              View Gallery
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.02] backdrop-blur-xl">
            {[
              ["27", "Age"],
              ["5′2″", "Height"],
              ["EN", "Fluent"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/[.07] px-4 py-4 last:border-r-0">
                <p className="font-display text-2xl font-light">{value}</p>
                <p className="mt-1 text-[8px] uppercase tracking-[.18em] text-zinc-600">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 fade-up-delay lg:order-2">
          <div className="relative mx-auto max-w-[800px] px-1 pb-8 pt-2 sm:px-9 sm:pb-14">
            <div
              aria-hidden="true"
              className="float-slower absolute bottom-[2%] left-[2%] h-[72%] w-[67%] rounded-[2.2rem] border border-white/[.07] bg-gradient-to-br from-[#2a1722] via-[#160f15] to-[#0b090b] shadow-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute right-[1%] top-[9%] h-[66%] w-[43%] rotate-[5deg] rounded-[2.2rem] border border-[#e8c9b6]/10 bg-gradient-to-b from-[#2a2023] to-[#0c090c] shadow-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute left-[8%] top-[4%] h-[58%] w-[38%] -rotate-[7deg] rounded-[2rem] border border-white/[.05] bg-gradient-to-b from-white/[.035] to-transparent backdrop-blur-xl"
            />

            <div className="luxury-frame prism-edge float-slow group relative z-10 aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#151116]">
              <Image
                src={siteContent.images.hero.src}
                alt={siteContent.images.hero.alt}
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 57vw"
                className="object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/15" />

              <div className="absolute bottom-4 left-4 right-4 z-20 glass-panel rounded-2xl px-4 py-3 sm:bottom-5 sm:left-5 sm:right-auto sm:min-w-[300px]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[8px] uppercase tracking-[.18em] text-zinc-500">Status</p>
                    <p className="mt-1 font-display text-xl font-light text-white">Active in Bangalore</p>
                  </div>
                  <span className="availability-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[8px] uppercase tracking-[.16em] text-white/60 backdrop-blur-xl">
                Portrait 01
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
