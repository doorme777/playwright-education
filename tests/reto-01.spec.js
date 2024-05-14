import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page.locator(".choose > .nav > li > a").first().click();
  await page
    .frameLocator('iframe[name="aswift_6"]')
    .getByLabel("Close")
    .click();

  await page.getByRole("button", { name: " Add to cart" }).click();
  //   <h4 class="modal-title w-100">Added!</h4>
  expect(await page.locator("h4.modal-title.w-100").innerText()).toBe("Added!");
});
