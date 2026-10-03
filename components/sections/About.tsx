import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#100e10] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-24 h-96 w-96 rounded-full bg-[#e7cbbb]/[0.045] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[.86fr_1fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-[610px] pb-8 pl-2 pr-5 pt-2 sm:pl-8">
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[72%] w-[64%] rotate-[4deg] rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-[#291821] to-[#0f0d0f]"
            />
            <div className="luxury-frame group relative z-10 aspect-[9/14] overflow-hidden rounded-[2rem] border border-white/15 bg-[#171317]">
              <Image
                src={siteContent.images.about.src}
                alt={siteContent.images.about.alt}
                fill
                quality={94}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
              />
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/15" />
              <div className="absolute bottom-5 left-5 z-20 rounded-full border border-white/15 bg-black/45 px-3.5 py-2 text-[9px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-xl">
                Bangalore · Portrait 02
              </div>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-zinc-600">
              About
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl font-light leading-[.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              A closer <span className="italic text-[#cdb6aa]">portrait.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-display text-3xl font-light italic leading-[1.15] text-zinc-200 sm:text-4xl">
              “Good energy, good manners, and mutual respect.”
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="glass-3d rounded-2xl border border-white/10 p-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">Location</p>
                <p className="mt-2 font-display text-2xl font-light">Bangalore</p>
              </div>
              <div className="glass-3d rounded-2xl border border-white/10 p-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">Verification</p>
                <p className="mt-2 font-display text-2xl font-light">WhatsApp / Telegram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
