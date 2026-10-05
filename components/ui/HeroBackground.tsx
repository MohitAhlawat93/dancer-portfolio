"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site-content";

const slides = siteContent.images.heroSlides;

export function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#ded5c8]" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className="hero-slide absolute inset-0"
          data-active={index === active}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            quality={94}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,249,.02),rgba(35,48,43,.08))]" />
    </div>
  );
}
