import { expect, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
}

async function loadAllImages(page: import("@playwright/test").Page) {
  const count = await page.locator("img").count();

  for (let index = 0; index < count; index += 1) {
    await page.evaluate((imageIndex) => {
      const image = document.querySelectorAll("img")[imageIndex];
      image?.scrollIntoView({ block: "center", behavior: "auto" });
    }, index);
    await page.waitForTimeout(100);
  }

  await expect
    .poll(
      async () =>
        page.locator("img").evaluateAll((items) =>
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
  await expect(page.getByText("Active in Bangalore", { exact: true }).first()).toBeVisible();
  await expect(page.locator("#rates article")).toHaveCount(3);
  await expect(page.locator("#gallery button[aria-label^='Open gallery image']")).toHaveCount(6);
  await expectNoHorizontalOverflow(page);
}

test("3D premium desktop renders correctly", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });

  await checkLayout(page);

  const messageButton = page.getByRole("link", { name: "Message Anora" });
  const style = await messageButton.evaluate((element) => {
    const computed = getComputedStyle(element);
    return { color: computed.color };
  });
  expect(style.color).toBe("rgb(7, 6, 7)");

  await page.locator("#profile").scrollIntoViewIfNeeded();
  await expect(page.locator("#profile .depth-card")).toHaveCount(4);

  await page.locator("#rates").scrollIntoViewIfNeeded();
  await expect(page.locator("#rates .depth-card")).toHaveCount(3);

  await page.getByRole("button", { name: "Open gallery image 1" }).click();
  await expect(page.getByTestId("gallery-lightbox")).toBeVisible();
  await page.getByRole("button", { name: "Close gallery" }).click();

  await loadAllImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/desktop-full.png", fullPage: true });
});

test("3D premium mobile is compact and balanced", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await checkLayout(page);

  const heroHeight = await page.locator("#top").evaluate((element) => element.getBoundingClientRect().height);
  expect(heroHeight).toBeLessThan(1450);

  await page.locator("#gallery").scrollIntoViewIfNeeded();
  const metrics = await page
    .locator("#gallery button[aria-label^='Open gallery image']")
    .evaluateAll((buttons) =>
      buttons.slice(0, 4).map((button) => {
        const rect = button.getBoundingClientRect();
        return { x: Math.round(rect.x), width: Math.round(rect.width) };
      }),
    );

  expect(Math.max(...metrics.map((item) => item.width))).toBeLessThan(190);
  expect(new Set(metrics.map((item) => item.x)).size).toBeGreaterThanOrEqual(2);

  await loadAllImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({ path: "test-results/mobile-full.png", fullPage: true });
});
