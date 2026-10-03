import { siteContent } from "@/content/site-content";

export function Introduction() {
  return (
    <section className="relative overflow-hidden bg-[#090809] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#5f3047]/10 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-600">
          Introduction
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.72fr] lg:gap-20">
          <p className="font-display text-[clamp(3.3rem,6.6vw,6.8rem)] font-light leading-[0.9] tracking-[-0.045em]">
            Quiet confidence,
            <span className="block italic text-[#cdb6aa]">beautifully understated.</span>
          </p>

          <div className="self-end border-l border-white/10 pl-6 sm:pl-8">
            <p className="text-sm leading-8 text-zinc-400 sm:text-base">
              {siteContent.profile.bio}
            </p>
            <p className="mt-7 font-display text-2xl font-light italic leading-relaxed text-zinc-300">
              “{siteContent.profile.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
