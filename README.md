# Anora — Private Profile

A premium, mobile-first personal profile built with Next.js, TypeScript, and Tailwind CSS.

## Current V1

- high-contrast hero and navigation
- Anora branding and Bangalore availability
- About section
- non-intimate profile details
- premium asymmetric photo gallery with lightbox
- direct WhatsApp, Telegram, and Instagram actions
- floating WhatsApp CTA
- responsive mobile/desktop layout
- metadata, Open Graph, sitemap, robots.txt, semantic structure, and optimized images
- automated desktop/mobile browser tests

The public site intentionally does not publish sexual-service advertising, explicit rate cards, or intimate profile details.

## Add real photos

Use this GitHub folder:

    public/images/profile/

Recommended filenames:

    hero.jpg
    about.jpg
    gallery-01.jpg
    gallery-02.jpg
    gallery-03.jpg
    gallery-04.jpg
    gallery-05.jpg

After upload, replace the temporary Unsplash URLs in:

    content/site-content.ts

with:

    /images/profile/hero.jpg
    /images/profile/about.jpg
    /images/profile/gallery-01.jpg
    /images/profile/gallery-02.jpg
    /images/profile/gallery-03.jpg
    /images/profile/gallery-04.jpg
    /images/profile/gallery-05.jpg

Anything inside Next.js public/ is available from the website root, so public/images/profile/hero.jpg becomes /images/profile/hero.jpg on the live site.

## Quality checks

    npm install
    npm run lint
    npm run typecheck
    npm run build
    npx playwright install chromium
    npm run test:e2e
