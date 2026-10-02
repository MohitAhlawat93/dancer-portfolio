import { siteContent } from "@/content/site-content";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12 lg:py-7"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl"
          aria-label={siteContent.dancer.name + " home"}
        >
          {siteContent.dancer.name}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/35 bg-black/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black sm:px-5"
        >
          Enquire
        </a>
      </nav>
    </header>
  );
}
