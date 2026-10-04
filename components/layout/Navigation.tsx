const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#rates", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#1f2926]/10 bg-[#f6f1e8]/95 backdrop-blur-xl"
      style={{ color: "#1b211f" }}
    >
      <nav
        className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-5 sm:px-7 lg:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-display text-[1.7rem] font-medium tracking-[0.12em] text-[#1a2522]"
          aria-label="Anora home"
        >
          Anora
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#59615e] transition hover:text-[#123338]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          aria-label="Primary contact"
          className="inline-flex min-h-10 items-center justify-center rounded-[6px] bg-[#123338] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#fffdf9] transition hover:bg-[#0c292e]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
