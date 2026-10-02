import { siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col justify-between border border-line p-6 sm:min-h-[calc(100vh-4rem)] sm:p-10 lg:p-14">
        <header className="flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.2em]">
          <span>{siteContent.dancer.name}</span>
          <span className="text-muted">{siteContent.dancer.location}</span>
        </header>

        <section className="max-w-4xl py-20 sm:py-28 lg:py-36" aria-labelledby="foundation-heading">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Phase 1 foundation
          </p>
          <h1 id="foundation-heading" className="font-display text-6xl font-medium leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-9xl">
            {siteContent.dancer.name}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {siteContent.dancer.tagline}
          </p>
          <p className="mt-6 max-w-xl border-l border-line pl-5 text-sm leading-6 text-muted">
            Foundation verified. Premium navigation and hero photography will be built in the next implementation step.
          </p>
        </section>

        <footer className="flex flex-col gap-2 border-t border-line pt-5 text-xs uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Professional dancer & performer</span>
          <span>No video · V1 portfolio</span>
        </footer>
      </div>
    </main>
  );
}
