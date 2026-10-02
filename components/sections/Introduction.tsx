import { siteContent } from "@/content/site-content";

export function Introduction() {
  return (
    <section className="bg-[#0b0b0b] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Introduction
        </p>
        <div>
          <p className="max-w-6xl font-display text-[clamp(3rem,6vw,6.4rem)] font-light leading-[0.95] tracking-[-0.04em] text-white">
            A quiet kind of <span className="italic text-zinc-400">confidence.</span>
          </p>
          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
            <p className="max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
              {siteContent.profile.bio}
            </p>
            <p className="max-w-lg font-display text-2xl font-light italic leading-relaxed text-zinc-400 sm:justify-self-end sm:text-3xl">
              “{siteContent.profile.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
