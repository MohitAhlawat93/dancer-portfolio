import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="section-light editorial-grid relative isolate overflow-hidden px-5 pb-0 pt-24 sm:px-6 sm:pt-28 lg:px-16 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-10 lg:min-h-[760px] lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
        <div className="fade-up pb-4 lg:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-accent">
            {siteContent.profile.profession} · {siteContent.profile.city}
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-[720px] font-display text-[clamp(4.6rem,10vw,8.7rem)] font-light leading-[.82] tracking-[-.055em] text-foreground"
          >
            Elegance
            <span className="block italic text-accent">in motion.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[15px] font-medium leading-7 text-muted-strong sm:text-base">
            {siteContent.profile.serviceSummary}
          </p>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-[15px]">
            {siteContent.profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#rates"
              className="primary-button inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-[.17em]"
            >
              View bookings
            </a>
            <a
              href="#gallery"
              className="secondary-button inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-[.17em]"
            >
              View gallery
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="availability-pulse h-2.5 w-2.5 rounded-full bg-[#2f8b69]" />
            <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-muted-strong">
              {siteContent.profile.status}
            </span>
          </div>
        </div>

        <div className="fade-up-delay relative lg:self-stretch">
          <div className="relative mx-auto h-[560px] max-w-[760px] sm:h-[700px] lg:h-full lg:min-h-[760px]">
            <div className="absolute inset-x-[7%] bottom-0 top-[3%] rounded-t-[12rem] bg-[#e7ddd0] sm:inset-x-[10%]" />
            <div className="photo-frame absolute inset-0 overflow-hidden rounded-t-[10rem] bg-surface sm:rounded-t-[14rem] lg:left-[4%]">
              <Image
                src={siteContent.images.hero.src}
                alt={siteContent.images.hero.alt}
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d1915]/25 via-transparent to-white/5" />
            </div>

            <div className="soft-card absolute bottom-5 left-3 rounded-2xl px-4 py-3 sm:bottom-8 sm:left-8">
              <p className="text-[8px] font-semibold uppercase tracking-[.2em] text-muted">Meet</p>
              <p className="mt-1 font-display text-2xl font-light text-deep">{siteContent.profile.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto grid max-w-[1500px] grid-cols-2 border-y border-line bg-[#fffdf9]/80 sm:grid-cols-4">
        {[
          ["27", "Age"],
          ["5′2″", "Height"],
          ["English", "Fluent"],
          [siteContent.profile.city, "Based in"],
        ].map(([value, label]) => (
          <div key={label} className="border-r border-line px-5 py-5 last:border-r-0 sm:px-7 sm:py-6">
            <p className="font-display text-2xl font-light text-deep sm:text-3xl">{value}</p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[.18em] text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
