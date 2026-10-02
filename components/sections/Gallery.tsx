"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const layouts = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (activeIndex === null) {
      setVisible(false);
      document.body.style.overflow = "";
      return;
    }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
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
      <section id="gallery" className="bg-[#0b0b0b] px-6 py-28 text-white lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Gallery"
            title="Editorial frames."
            description="Tap any image to view it full screen."
          />

          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {siteContent.images.gallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#141414] text-left"
                aria-label={"Open gallery image " + (index + 1)}
              >
                <div className={"relative w-full " + layouts[index]}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 translate-y-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
          className={
            "fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl transition duration-300 " +
            (visible ? "opacity-100" : "opacity-0")
          }
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          data-testid="gallery-lightbox"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md sm:right-7 sm:top-7"
            aria-label="Close gallery"
          >
            ESC · ✕
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
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:left-6"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="relative h-[82vh] w-[88vw] max-w-6xl animate-[fade-up_.35s_ease-out_both]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              quality={94}
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
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:right-6"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}
