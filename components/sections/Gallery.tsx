"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site-content";

const galleryImages = siteContent.images.gallery;

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % galleryImages.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const move = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-gallery-card]");
    const distance = card ? card.offsetWidth + 20 : rail.clientWidth * 0.82;
    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setActiveIndex(null);
  };

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <>
      <section id="gallery" className="section-paper relative overflow-hidden py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="px-5 sm:px-6 lg:px-16">
            <p className="text-[9px] font-semibold uppercase tracking-[.28em] text-accent">Gallery</p>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-5xl font-light leading-[.94] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
                  A quiet visual <span className="italic text-accent">story.</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                  Swipe or use the arrows to move through the collection.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="secondary-button inline-flex h-11 w-11 items-center justify-center rounded-full text-lg"
                  aria-label="Scroll gallery left"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="primary-button inline-flex h-11 w-11 items-center justify-center rounded-full text-lg"
                  aria-label="Scroll gallery right"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div
            ref={railRef}
            data-testid="gallery-rail"
            className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-10 sm:mt-12 sm:gap-5 sm:px-6 lg:gap-6 lg:px-16"
          >
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                data-gallery-card
                onClick={() => setActiveIndex(index)}
                className="depth-card group relative min-w-[82vw] snap-center overflow-hidden rounded-[2rem] border border-line bg-surface text-left shadow-[0_22px_55px_rgba(65,50,33,.11)] sm:min-w-[54vw] lg:min-w-[31vw]"
                aria-label={"Open gallery image " + (index + 1)}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={94}
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 54vw, 31vw"
                    className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[.2em] text-white/65">Frame</p>
                      <p className="mt-1 font-display text-3xl font-light text-white">0{index + 1}</p>
                    </div>
                    <span className="rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[8px] font-semibold uppercase tracking-[.17em] text-white backdrop-blur-xl">
                      + Expand
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="px-5 sm:px-6 lg:px-16">
            <div className="flex items-center gap-2">
              {galleryImages.map((image, index) => (
                <span
                  key={image.src}
                  className={index === 0 ? "h-px w-12 bg-accent" : "h-px w-6 bg-line"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#101315]/95 p-3 backdrop-blur-xl animate-[fade-up_.25s_ease-out_both] sm:p-5"
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
          >
            ✕
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
              )
            }
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-3 py-2.5 text-white backdrop-blur-xl sm:left-5 sm:px-4 sm:py-3"
            aria-label="Previous image"
          >
            ←
          </button>

          <div key={activeImage.src} className="relative h-[84vh] w-[90vw] max-w-6xl animate-[fade-up_.3s_ease-out_both]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              quality={95}
              sizes="92vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null ? null : (current + 1) % galleryImages.length,
              )
            }
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-3 py-2.5 text-white backdrop-blur-xl sm:right-5 sm:px-4 sm:py-3"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}
