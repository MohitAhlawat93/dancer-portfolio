import type { Metadata } from "next";
import { growthConfig } from "@/content/growth-config";

export const metadata: Metadata = {
  title: "Growth foundation",
  robots: { index: false, follow: false },
};

function Status({
  ok,
  children,
}: {
  ok: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={
        ok
          ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800"
          : "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900"
      }
    >
      {children}
    </span>
  );
}

export default function GrowthAdminPage() {
  const searchConsoleCredentialsConfigured = Boolean(
    process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL?.trim() &&
      process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY?.trim(),
  );

  const checks = [
    {
      label: "Canonical",
      value: growthConfig.search.canonicalUrl,
      ok: true,
    },
    {
      label: "Sitemap",
      value: `${growthConfig.client.siteUrl}${growthConfig.search.sitemapPath}`,
      ok: true,
    },
    {
      label: "Robots",
      value: `${growthConfig.client.siteUrl}${growthConfig.search.robotsPath}`,
      ok: true,
    },
    {
      label: "Google site verification",
      value: growthConfig.search.googleVerificationConfigured
        ? "Configured"
        : "Needs GOOGLE_SITE_VERIFICATION",
      ok: growthConfig.search.googleVerificationConfigured,
    },
    {
      label: "Google Analytics 4",
      value: growthConfig.analytics.configured
        ? "Configured"
        : "Needs NEXT_PUBLIC_GA_MEASUREMENT_ID",
      ok: growthConfig.analytics.configured,
    },
    {
      label: "Search Console data connector",
      value: searchConsoleCredentialsConfigured
        ? "Credentials present; API activation is ready for GROWTH-02"
        : "Needs server-side Google credentials before live query data can be imported",
      ok: searchConsoleCredentialsConfigured,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f2ea] px-5 py-10 text-[#162f32] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#8b6b4a]">
          GROWTH-01
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-light sm:text-5xl">
          Search & analytics foundation
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5b6664]">
          Configuration and measurement readiness for {growthConfig.client.name}.
          This page intentionally shows status only; it never prints private keys,
          tokens, or secrets.
        </p>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {checks.map((check) => (
            <article
              key={check.label}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-sm font-semibold">{check.label}</h2>
                <Status ok={check.ok}>{check.ok ? "Ready" : "Action needed"}</Status>
              </div>
              <p className="mt-4 break-words text-sm leading-6 text-[#68716f]">
                {check.value}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold">Tracked conversion events</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {growthConfig.trackedEvents.map((eventName) => (
              <code
                key={eventName}
                className="rounded-full bg-[#f2ede5] px-3 py-1.5 text-xs text-[#61594f]"
              >
                {eventName}
              </code>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-[#17383a] p-5 text-white shadow-sm">
          <h2 className="text-sm font-semibold">What this dashboard becomes later</h2>
          <p className="mt-3 text-sm leading-7 text-white/70">
            GROWTH-02 can replace these readiness cards with live Search Console
            queries, GA4 traffic, landing-page performance, conversion totals,
            trend charts, alerts, and recommendations without changing the public
            website tracking contract created here.
          </p>
        </section>
      </div>
    </main>
  );
}
