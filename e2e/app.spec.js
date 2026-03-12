import { expect, test } from "@playwright/test";

test.describe("Clock Web App", () => {
  test("displays a date in the center of the page", async ({ page }) => {
    // Navigate to the app
    await page.goto("/");

    // Wait for the app to load
    await page.waitForLoadState("networkidle");

    // Find the date element - it should have the gradient text classes
    const dateElement = page.locator(".text-5xl, .md\\:text-6xl").first();

    // Verify the element exists
    await expect(dateElement).toBeVisible();

    // Get the text content
    const dateText = await dateElement.textContent();

    // Verify it contains a date pattern (various formats possible)
    // The date should contain at least one number and shouldn't be empty
    expect(dateText).toBeTruthy();
    expect(dateText.trim().length).toBeGreaterThan(0);

    // Most date formats contain numbers, so check for digits
    expect(dateText).toMatch(/\d/);

    // Verify the element is centered using Tailwind classes
    const containerDiv = page.locator(
      ".min-h-screen.flex.items-center.justify-center"
    );
    await expect(containerDiv).toBeVisible();

    // Verify that Tailwind styles are actually applied by checking display flex
    const displayStyle = await containerDiv.evaluate((el) => {
      return window.getComputedStyle(el).display;
    });
    expect(displayStyle).toBe("flex");

    // Verify the date element has the correct font size
    const fontSize = await dateElement.evaluate((el) => {
      const size = window.getComputedStyle(el).fontSize;
      // Should be 3rem (48px) for text-5xl
      return parseFloat(size);
    });
    expect(fontSize).toBeGreaterThanOrEqual(40); // At least 40px for large text
  });

  test("app has correct title and favicon", async ({ page }) => {
    await page.goto("/");

    // Check the page title (default from index.html)
    await expect(page).toHaveTitle(/Clock/);

    // Check favicon exists
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute("href", "/favicon.svg");
  });
});
