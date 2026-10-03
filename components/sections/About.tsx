import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function About() {
  return (
    <section id="about" className="section-bronze relative overflow-hidden px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-[620px] pb-10 pl-1 pr-5 pt-2 sm:pl-9">
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[72%] w-[62%] rotate-[5deg] rounded-[2rem] border border-white/[.07] bg-gradient-to-br from-[#351926] to-[#0c090c] shadow-2xl"
            />

            <div className="luxury-frame prism-edge group relative z-10 aspect-[9/14] overflow-hidden rounded-[2rem] border border-white/15 bg-[#151116]">
              <Image
                src={siteContent.images.about.src}
                alt={siteContent.images.about.alt}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/15" />
              <div className="absolute bottom-4 left-4 z-20 glass-panel rounded-full px-4 py-2 text-[8px] uppercase tracking-[.18em] text-white/85">
                Bangalore · Portrait 02
              </div>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[.28em] text-zinc-600">About</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[.94] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              A closer <span className="italic text-[#d8bcae]">portrait.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-display text-3xl font-light italic leading-[1.15] text-zinc-200 sm:text-4xl">
              “Good energy, good manners, and mutual respect.”
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="depth-card glass-panel relative rounded-3xl p-5">
                <p className="text-[8px] uppercase tracking-[.2em] text-zinc-600">Location</p>
                <p className="mt-3 font-display text-2xl font-light">Bangalore</p>
              </article>
              <article className="depth-card glass-panel relative rounded-3xl p-5">
                <p className="text-[8px] uppercase tracking-[.2em] text-zinc-600">Verification</p>
                <p className="mt-3 font-display text-2xl font-light">WhatsApp / Telegram</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
