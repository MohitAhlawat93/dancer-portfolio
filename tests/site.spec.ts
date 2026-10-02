import { expect, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
}

async function loadLazyImages(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    const step = Math.max(500, Math.floor(window.innerHeight * 0.75));

    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 90));
    }

    window.scrollTo(0, 0);
  });

  await expect
    .poll(
      async () =>
        page.locator("img").evaluateAll((images) =>
          images.every((image) => image.complete && image.naturalWidth > 0),
        ),
      { timeout: 15000 },
    )
    .toBe(true);
}

test("desktop portfolio renders, navigates, and opens the gallery", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: /Anney Zangma/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /performer-led portfolio/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /editorial spread/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Clear starting points/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Have something/i })).toBeVisible();

  await expect(page.locator("video")).toHaveCount(0);
  await expectNoHorizontalOverflow(page);

  await page.getByRole("button", { name: "Open gallery image 1" }).click();
  await expect(page.getByTestId("gallery-lightbox")).toBeVisible();
  await page.getByRole("button", { name: "Next image" }).click();
  await page.getByRole("button", { name: "Close gallery" }).click();
  await expect(page.getByTestId("gallery-lightbox")).toHaveCount(0);

  await loadLazyImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({
    path: "test-results/desktop-full.png",
    fullPage: true,
  });
});

test("mobile layout has no overflow and keeps contact actions usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: /Anney Zangma/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Contact Anney on WhatsApp/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Direct contact WhatsApp/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Direct contact Telegram/i })).toBeVisible();
  await expect(page.locator("video")).toHaveCount(0);

  await expectNoHorizontalOverflow(page);

  await page.locator("#services").scrollIntoViewIfNeeded();
  await expectNoHorizontalOverflow(page);

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { level: 2, name: /Have something/i })).toBeVisible();

  await loadLazyImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({
    path: "test-results/mobile-full.png",
    fullPage: true,
  });
});
