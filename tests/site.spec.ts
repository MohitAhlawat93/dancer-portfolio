import { expect, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
}

async function loadAllImages(page: import("@playwright/test").Page) {
  const images = page.locator("img");
  const count = await images.count();

  for (let index = 0; index < count; index += 1) {
    await images.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);
  }

  await expect
    .poll(
      async () =>
        images.evaluateAll((items) =>
          items.every((image) => {
            const img = image as HTMLImageElement;
            return img.complete && img.naturalWidth > 0;
          }),
        ),
      { timeout: 20000 },
    )
    .toBe(true);

  await page.evaluate(() => window.scrollTo(0, 0));
}

async function checkLayout(page: import("@playwright/test").Page) {
  await expect(page.getByRole("heading", { level: 1, name: "Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Message Anora" })).toBeVisible();
  await expect(page.getByText("Active in Bangalore")).toBeVisible();
  await expect(page.locator("#rates article")).toHaveCount(3);
  await expect(page.locator("#gallery button[aria-label^='Open gallery image']")).toHaveCount(6);
  await expectNoHorizontalOverflow(page);
}

test("premium desktop visual system is complete", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });

  await checkLayout(page);

  const messageButton = page.getByRole("link", { name: "Message Anora" });
  const style = await messageButton.evaluate((element) => {
    const computed = getComputedStyle(element);
    return { color: computed.color, background: computed.backgroundColor };
  });
  expect(style.color).toBe("rgb(9, 8, 9)");

  await page.getByRole("button", { name: "Open gallery image 1" }).click();
  await expect(page.getByTestId("gallery-lightbox")).toBeVisible();
  await page.getByRole("button", { name: "Next image" }).click();
  await page.getByRole("button", { name: "Close gallery" }).click();

  await loadAllImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/desktop-full.png", fullPage: true });
});

test("premium mobile visual system is compact and usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await checkLayout(page);

  const galleryButtons = page.locator("#gallery button[aria-label^='Open gallery image']");
  const first = await galleryButtons.nth(0).boundingBox();
  const second = await galleryButtons.nth(1).boundingBox();
  expect(first).not.toBeNull();
  expect(second).not.toBeNull();
  expect(Math.abs((first?.y ?? 0) - (second?.y ?? 0))).toBeLessThan(80);

  await loadAllImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/mobile-full.png", fullPage: true });
});
