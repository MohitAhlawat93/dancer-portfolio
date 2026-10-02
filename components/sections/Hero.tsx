import Image from "next/image";
import { siteContent } from "@/content/site-content";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
        className="object-cover object-[55%_center] sm:object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.10)_34%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,transparent_0%,rgba(0,0,0,0.08)_35%,rgba(0,0,0,0.42)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <div className="grid w-full gap-10 border-t border-white/25 pt-6 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:mb-5">
              {siteContent.dancer.role}
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl font-display text-[clamp(4.4rem,14vw,10.5rem)] font-medium leading-[0.72] tracking-[-0.055em]"
            >
              <span className="block">{siteContent.dancer.name.split(" ")[0]}</span>
              <span className="ml-[12vw] block sm:ml-[18vw] lg:ml-[13vw]">
                {siteContent.dancer.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="font-display text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
              {siteContent.dancer.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70 sm:text-[15px]">
              Based in {siteContent.dancer.location}. Available for selected performance and creative enquiries.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={siteContent.contact.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
              >
                Enquire
                <ArrowUpRight />
              </a>
              <a
                href={siteContent.contact.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/35 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white"
              >
                Instagram
                <ArrowUpRight />
              </a>
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-white/45">
              Temporary image · will be replaced before launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
