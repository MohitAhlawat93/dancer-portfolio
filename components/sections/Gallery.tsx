"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const layouts = [
  "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-5 aspect-[5/4]",
  "md:col-span-4 aspect-[4/5]",
  "md:col-span-8 aspect-[16/9]",
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
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % siteContent.images.gallery.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + siteContent.images.gallery.length) %
              siteContent.images.gallery.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const activeImage =
    activeIndex === null ? null : siteContent.images.gallery[activeIndex];

  return (
    <>
      <section id="gallery" className="bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Selected images"
            title="A gallery designed like an editorial spread, not a thumbnail wall."
            description="All photographs in this preview are temporary placeholders and will be replaced with Anney's approved images."
          />

          <div className="mt-14 grid auto-rows-[minmax(220px,1fr)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {siteContent.images.gallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={"group relative min-h-[280px] overflow-hidden bg-neutral-200 text-left " + layouts[index]}
                aria-label={"Open gallery image " + (index + 1)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 45vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-16 text-white opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.16em]">
                    Placeholder · {image.credit}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em]">View</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          data-testid="gallery-lightbox"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur sm:right-7 sm:top-7"
            aria-label="Close gallery"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? null
                  : (current - 1 + siteContent.images.gallery.length) %
                    siteContent.images.gallery.length,
              )
            }
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-sm text-white backdrop-blur sm:left-6"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="relative h-[78vh] w-[88vw] max-w-6xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? null
                  : (current + 1) % siteContent.images.gallery.length,
              )
            }
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-sm text-white backdrop-blur sm:right-6"
            aria-label="Next image"
          >
            →
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.16em] text-white/50 sm:bottom-7">
            Temporary image · {activeImage.credit}
          </p>
        </div>
      ) : null}
    </>
  );
}
