const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#rates", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2">
      <nav
        className="flex items-center justify-between rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2.5 shadow-2xl backdrop-blur-md sm:px-6"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-display text-sm uppercase tracking-widest text-white transition-colors hover:text-neutral-300"
          aria-label="Anora home"
        >
          Anora
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          aria-label="Primary contact"
          className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-neutral-200"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
