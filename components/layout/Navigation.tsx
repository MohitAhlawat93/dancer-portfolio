import { siteContent } from "@/content/site-content";

const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#gallery", label: "Gallery" },
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
          className="font-display text-2xl font-semibold tracking-[-0.03em] text-white drop-shadow-sm sm:text-3xl"
          aria-label={siteContent.profile.name + " home"}
        >
          {siteContent.profile.name}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 drop-shadow-sm transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          aria-label="Primary contact"
          className="rounded-full bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white transition duration-300 hover:-translate-y-0.5 hover:bg-background sm:px-6"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
