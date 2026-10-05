const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#rates", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[#f5f0e8]/68 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-display text-[1.7rem] font-medium tracking-[0.08em] text-deep"
          aria-label="Anora home"
        >
          Anora
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-strong transition hover:text-deep"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex min-h-9 items-center justify-center rounded-full border border-deep/15 bg-[#fffdf9]/72 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-deep backdrop-blur-xl transition hover:bg-[#fffdf9]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
