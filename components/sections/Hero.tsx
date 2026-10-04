import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-[74px]"
      style={{ background: "#f6f1e8", color: "#1b211f" }}
    >
      <div className="mx-auto grid min-h-[calc(100svh-74px)] max-w-[1480px] lg:grid-cols-[44%_56%]">
        <div className="relative flex items-center px-6 py-16 sm:px-9 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="w-full max-w-[590px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#9a6a3a]">
              {siteContent.profile.name} · {siteContent.profile.profession}
            </p>

            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(4.4rem,8.1vw,8.2rem)] font-light leading-[0.78] tracking-[-0.055em] text-[#18201e]"
            >
              Elegance
              <span className="mt-2 block">in Motion</span>
            </h1>

            <p className="mt-8 max-w-[520px] text-[15px] font-medium leading-7 text-[#404a46] sm:text-base">
              Private studio, on-location and full-day dance bookings in {siteContent.profile.city}.
            </p>

            <p className="mt-3 max-w-[520px] text-sm leading-7 text-[#707773] sm:text-[15px]">
              {siteContent.profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#rates"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] bg-[#123338] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_12px_28px_rgba(18,51,56,.14)] transition hover:-translate-y-0.5 hover:bg-[#0d2a2f]"
              >
                View bookings
              </a>
              <a
                href="#gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-[#1b211f]/20 bg-transparent px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#26302d] transition hover:bg-[#fffdf9]"
              >
                View gallery
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2f8b69]" />
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#59615e]">
                {siteContent.profile.status}
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-[#eae2d6] lg:min-h-0">
          <Image
            src={siteContent.images.hero.src}
            alt={siteContent.images.hero.alt}
            fill
            priority
            quality={95}
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f6f1e8]/10 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 rounded-[8px] border border-white/45 bg-[#fffdf9]/88 px-4 py-3 shadow-[0_14px_35px_rgba(43,35,26,.12)] backdrop-blur-md sm:bottom-8 sm:left-8">
            <p className="text-[8px] font-bold uppercase tracking-[0.19em] text-[#7c746b]">
              Based in {siteContent.profile.city}
            </p>
            <p className="mt-1 font-display text-2xl font-light text-[#1a2522]">
              {siteContent.profile.name}
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-[#1f2926]/10 bg-[#fffdf9]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 sm:grid-cols-4">
          {[
            ["27", "Age"],
            ["5′2″", "Height"],
            ["English", "Fluent"],
            [siteContent.profile.city, "Based in"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-[#1f2926]/10 px-6 py-5 last:border-r-0 sm:px-8"
            >
              <p className="font-display text-2xl font-light text-[#123338] sm:text-[1.9rem]">
                {value}
              </p>
              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#777d79]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
