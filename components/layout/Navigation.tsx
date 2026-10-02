import { siteContent } from "@/content/site-content";

const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#rates", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 sm:top-6 sm:w-auto">
      <nav
        className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-2xl backdrop-blur-xl sm:gap-8 sm:px-6"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl"
          aria-label={siteContent.profile.name + " home"}
        >
          {siteContent.profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-xs font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          aria-label="Primary contact"
          className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-200 sm:px-5"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
