import { TrackedLink } from "@/components/growth/TrackedLink";

const links = [
  { href: "#about", label: "About" },
  { href: "#profile", label: "Profile" },
  { href: "#rates", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 sm:top-5 sm:w-[94%]">
      <nav className="flex items-center justify-between rounded-full border border-line bg-[#fffdf9]/92 px-3 py-2.5 shadow-[0_12px_40px_rgba(42,34,25,.08)] backdrop-blur-2xl sm:px-5" aria-label="Primary navigation">
        <a href="#top" className="rounded-full px-3 py-1 font-display text-lg font-medium tracking-[0.14em] text-deep sm:text-xl" aria-label="Anora home">
          ANORA
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-strong transition hover:bg-surface-soft hover:text-deep">
              {item.label}
            </a>
          ))}
        </div>
        <TrackedLink
          href="#contact"
          eventName="contact_cta_click"
          eventParams={{ placement: "navigation" }}
          aria-label="Primary contact"
          className="primary-button rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] sm:px-5"
        >
          Contact
        </TrackedLink>
      </nav>
    </header>
  );
}
