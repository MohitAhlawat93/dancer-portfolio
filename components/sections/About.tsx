import Image from "next/image";
import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-[#101010] px-6 py-28 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading eyebrow="About" title="A closer portrait." />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.88fr_0.72fr] lg:items-center lg:gap-24">
          <div className="group relative mx-auto aspect-[9/14] w-full max-w-[620px] overflow-hidden rounded-3xl border border-white/15 bg-[#141414] shadow-2xl shadow-black/70">
            <Image
              src={siteContent.images.about.src}
              alt={siteContent.images.about.alt}
              fill
              quality={94}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/20"
            />
            <div className="absolute bottom-6 left-6 z-20 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[11px] uppercase tracking-widest text-white/90 backdrop-blur-md">
              Bangalore · Profile
            </div>
          </div>

          <div>
            <p className="font-display text-4xl font-light italic leading-[1.1] text-zinc-200 sm:text-5xl">
              “Good energy, good manners, and mutual respect.”
            </p>
            <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Location
                </p>
                <p className="mt-3 text-sm text-zinc-200">Bangalore, India</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Verification
                </p>
                <p className="mt-3 text-sm text-zinc-200">WhatsApp or Telegram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
