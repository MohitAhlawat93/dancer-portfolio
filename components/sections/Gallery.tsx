"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { siteContent } from "@/content/site-content";

const galleryImages = siteContent.images.gallery;

const aspectClasses = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
];

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

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setActiveIndex(null);
    }
  };

  const activeImage =
    activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <>
      <section
        id="gallery"
        className="bg-[#0b0b0b] px-6 py-28 text-white lg:px-16"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[0.25fr_1fr] md:gap-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              Gallery
            </p>
            <div>
              <h2 className="font-display text-5xl font-light leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Editorial <span className="italic text-zinc-400">frames.</span>
              </h2>
              <p className="mt-6 text-sm text-zinc-400">
                Tap any image to expand it.
              </p>
            </div>
          </div>

          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#141414] text-left"
                aria-label={"Open gallery image " + (index + 1)}
              >
                <div className={"relative w-full " + aspectClasses[index]}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={92}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 translate-y-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    + Expand
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-[fade-up_.25s_ease-out_both]"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          data-testid="gallery-lightbox"
          onClick={closeFromBackdrop}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/15 sm:right-7 sm:top-7"
            aria-label="Close gallery"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? null
                  : (current - 1 + galleryImages.length) % galleryImages.length,
              )
            }
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition hover:bg-white/15 sm:left-6"
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            key={activeImage.src}
            className="relative h-[82vh] w-[88vw] max-w-6xl animate-[fade-up_.3s_ease-out_both]"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              quality={95}
              sizes="90vw"
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
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition hover:bg-white/15 sm:right-6"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}
