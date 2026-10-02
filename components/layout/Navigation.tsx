import { siteContent } from "@/content/site-content";

export function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-7"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl"
          aria-label={siteContent.dancer.name + " home"}
        >
          {siteContent.dancer.name}
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:inline">
            {siteContent.dancer.location}
          </span>
          <a
            href={siteContent.contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/35 bg-black/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black sm:px-5"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
