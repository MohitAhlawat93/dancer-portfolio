import { siteContent } from "@/content/site-content";

export function Introduction() {
  return (
    <section className="section-wine relative overflow-hidden px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] font-medium uppercase tracking-[.28em] text-zinc-600">
          Introduction
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.72fr] lg:gap-20">
          <p className="font-display text-[clamp(3.3rem,6.6vw,6.8rem)] font-light leading-[.9] tracking-[-.045em]">
            Quiet confidence,
            <span className="block italic text-[#d7bbaa]">beautifully understated.</span>
          </p>

          <div className="self-end border-l border-[#e8c9b6]/10 pl-6 sm:pl-8">
            <p className="text-sm leading-8 text-zinc-400 sm:text-base">
              {siteContent.profile.bio}
            </p>
            <p className="mt-7 font-display text-2xl font-light italic leading-relaxed text-[#d7c8c0]">
              “{siteContent.profile.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
