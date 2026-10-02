import { expect, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
}

async function loadAllImages(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    const step = Math.max(500, Math.floor(window.innerHeight * 0.75));
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });

  await expect
    .poll(
      async () =>
        page.locator("img").evaluateAll((images) =>
          images.every((image) => {
            const img = image as HTMLImageElement;
            return img.complete && img.naturalWidth > 0;
          }),
        ),
      { timeout: 15000 },
    )
    .toBe(true);
}

test("desktop luxury editorial profile works", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: "Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Primary contact" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Message Anora" })).toBeVisible();

  await expect(page.getByRole("heading", { level: 2, name: /Talent comp card/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Simple booking options/i })).toBeVisible();
  await expect(page.getByText("₹17,000")).toBeVisible();
  await expect(page.getByText("₹20,000")).toBeVisible();
  await expect(page.getByText("₹50,000")).toBeVisible();

  await expectNoHorizontalOverflow(page);

  await page.getByRole("button", { name: "Open gallery image 1" }).click();
  await expect(page.getByTestId("gallery-lightbox")).toBeVisible();
  await page.getByRole("button", { name: "Next image" }).click();
  await page.getByRole("button", { name: "Close gallery" }).click();

  await loadAllImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/desktop-full.png", fullPage: true });
});

test("mobile luxury editorial profile works", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: "Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Primary contact" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Message Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Contact Anora on WhatsApp/i })).toBeVisible();

  await page.locator("#rates").scrollIntoViewIfNeeded();
  await expect(page.getByText("₹50,000")).toBeVisible();
  await expectNoHorizontalOverflow(page);

  await page.locator("#gallery").scrollIntoViewIfNeeded();
  await expect(page.getByRole("button", { name: "Open gallery image 1" })).toBeVisible();

  await loadAllImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/mobile-full.png", fullPage: true });
});
