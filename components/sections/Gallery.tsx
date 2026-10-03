"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { siteContent } from "@/content/site-content";

const galleryImages = siteContent.images.gallery;
const aspects = ["aspect-[3/4]","aspect-[4/5]","aspect-[3/4]","aspect-[4/5]","aspect-[3/4]","aspect-[4/5]"];
const offsets = ["lg:translate-y-0","lg:translate-y-10","lg:-translate-y-5","lg:translate-y-4","lg:-translate-y-8","lg:translate-y-8"];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => current === null ? null : (current + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setActiveIndex(null);
  };

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <>
      <section id="gallery" className="relative overflow-hidden bg-[#070607] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[9px] uppercase tracking-[.28em] text-zinc-600">Gallery</p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-5xl font-light leading-[.94] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Curated <span className="italic text-[#d5bcaf]">frames.</span>
            </h2>
            <p className="text-sm text-zinc-500">Tap any frame to open full screen.</p>
          </div>

          <div className="mt-10 columns-2 gap-3 sm:mt-12 sm:gap-4 lg:columns-3 lg:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={"depth-card group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[1.4rem] border border-white/[.08] bg-[#151115] text-left shadow-[0_20px_50px_rgba(0,0,0,.38)] sm:mb-4 lg:mb-6 " + offsets[index]}
                aria-label={"Open gallery image " + (index + 1)}
              >
                <div className={"relative w-full " + aspects[index]}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={94}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/[.06] opacity-45 transition duration-500 group-hover:opacity-72" />
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 sm:inset-x-4 sm:bottom-4">
                    <span className="text-[8px] uppercase tracking-[.17em] text-white/60">0{index + 1}</span>
                    <span className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1.5 text-[8px] uppercase tracking-[.17em] text-white/85 backdrop-blur-xl sm:px-3 sm:py-2">
                      + Expand
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl animate-[fade-up_.25s_ease-out_both] sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          data-testid="gallery-lightbox"
          onClick={closeFromBackdrop}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white backdrop-blur-xl sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >✕</button>

          <button
            type="button"
            onClick={() => setActiveIndex((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2.5 text-white backdrop-blur-xl sm:left-5 sm:px-4 sm:py-3"
            aria-label="Previous image"
          >←</button>

          <div key={activeImage.src} className="relative h-[84vh] w-[90vw] max-w-6xl animate-[fade-up_.3s_ease-out_both]">
            <Image src={activeImage.src} alt={activeImage.alt} fill priority quality={95} sizes="92vw" className="object-contain" />
          </div>

          <button
            type="button"
            onClick={() => setActiveIndex((current) => current === null ? null : (current + 1) % galleryImages.length)}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2.5 text-white backdrop-blur-xl sm:right-5 sm:px-4 sm:py-3"
            aria-label="Next image"
          >→</button>
        </div>
      ) : null}
    </>
  );
}
