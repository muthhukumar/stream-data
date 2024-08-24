import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("localhost:8090");

  await expect(page).toHaveTitle(/Muthukumar/);
});
