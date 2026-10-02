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
      await new Promise((resolve) => window.setTimeout(resolve, 90));
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

async function expectNoInternalCopy(page: import("@playwright/test").Page) {
  const body = await page.locator("body").innerText();
  const banned = [
    "Preview photography",
    "placeholder",
    "Private Profile",
    "based on the profile details",
    "non-explicit",
    "No video",
    "This site focuses",
    "Simple details before you get in touch",
  ];

  for (const phrase of banned) {
    expect(body).not.toContain(phrase);
  }
}

async function expectLocalProfileImages(page: import("@playwright/test").Page) {
  const sources = await page.locator("img").evaluateAll((images) =>
    images.map((image) => (image as HTMLImageElement).currentSrc),
  );

  expect(sources.length).toBeGreaterThanOrEqual(8);
  expect(sources.some((source) => source.includes("unsplash.com"))).toBe(false);
}

test("desktop premium profile is polished and functional", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: "Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Primary contact" })).toBeVisible();

  const heroCta = page.getByRole("link", { name: "Message Anora" });
  await expect(heroCta).toBeVisible();
  await expect(heroCta).toContainText("Message Anora");

  const colors = await heroCta.evaluate((element) => {
    const style = getComputedStyle(element);
    return { color: style.color, background: style.backgroundColor };
  });
  expect(colors.color).not.toBe(colors.background);
  expect(colors.background).not.toBe("rgba(0, 0, 0, 0)");

  await expect(page.getByRole("heading", { level: 2, name: /A little about me/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /A few details/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /A closer look/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Say hello/i })).toBeVisible();

  await expectNoInternalCopy(page);
  await expectNoHorizontalOverflow(page);

  await page.getByRole("button", { name: "Open gallery image 1" }).click();
  await expect(page.getByTestId("gallery-lightbox")).toBeVisible();
  await page.getByRole("button", { name: "Next image" }).click();
  await page.getByRole("button", { name: "Close gallery" }).click();

  await loadAllImages(page);
  await expectLocalProfileImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({
    path: "test-results/desktop-full.png",
    fullPage: true,
  });
});

test("mobile premium profile keeps CTA and layout usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: "Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Primary contact" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Message Anora" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Contact Anora on WhatsApp/i })).toBeVisible();

  await expectNoInternalCopy(page);
  await expectNoHorizontalOverflow(page);

  await page.locator("#profile").scrollIntoViewIfNeeded();
  await expect(page.getByText("English · Fluent")).toBeVisible();

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { level: 2, name: /Say hello/i })).toBeVisible();

  await loadAllImages(page);
  await expectLocalProfileImages(page);
  await expectNoHorizontalOverflow(page);

  await page.screenshot({
    path: "test-results/mobile-full.png",
    fullPage: true,
  });
});
