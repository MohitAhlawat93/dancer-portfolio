# Anney Zangma — Premium Dancer Portfolio

A premium, mobile-first performer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## V1 includes

- editorial hero and navigation
- introduction and About
- experience/highlight placeholders
- asymmetric photography gallery with lightbox
- services and demo starting prices
- direct WhatsApp, Telegram, and Instagram actions
- floating WhatsApp CTA
- responsive footer
- metadata, Open Graph, sitemap, robots.txt, semantic structure, and optimized images
- automated desktop and mobile browser tests

## Intentionally excluded from V1

- all video
- dance-style taxonomy
- login/signup
- booking or calendar
- payments
- AI/chatbot/RAG
- database
- admin dashboard

## Development

Run:

    npm install
    npm run dev

Quality checks:

    npm run lint
    npm run typecheck
    npm run build
    npx playwright install chromium
    npm run test:e2e

## Placeholder content

Biography, highlights, services, prices, photography, and contact/social URLs are demo placeholders. Replace them in `content/site-content.ts` before public launch.

Set `NEXT_PUBLIC_SITE_URL` to the final production domain when one is available. Vercel deployment environment URLs are used automatically when possible.
