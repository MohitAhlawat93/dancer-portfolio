const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#rates", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 sm:top-5 sm:w-[92%]">
      <nav
        className="flex items-center justify-between rounded-full border border-white/10 bg-[#0c0a0c]/72 px-3 py-2.5 shadow-[0_20px_70px_rgba(0,0,0,.55)] backdrop-blur-2xl sm:px-5"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="rounded-full px-3 py-1 font-display text-lg font-medium tracking-[0.12em] text-white sm:text-xl"
          aria-label="Anora home"
        >
          ANORA
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400 transition duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          aria-label="Primary contact"
          className="luxury-light-button rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] sm:px-5"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
