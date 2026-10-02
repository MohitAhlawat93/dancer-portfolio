import { siteContent } from "@/content/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground px-5 pb-28 pt-10 text-background sm:px-8 sm:pb-16 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {siteContent.profile.name}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
              {siteContent.profile.location}
            </p>
          </div>
          <div className="text-xs leading-6 text-white/50 md:text-right">
            <p>© {year} {siteContent.profile.name}</p>
            <p>WhatsApp · Telegram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
