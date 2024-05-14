import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

// beforeEach(async ({ page }) => {
//   await page.goto("/");
// });

test("Busqueda sin resultados", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator("button.DocSearch-Button").click();
  await page.locator("input.DocSearch-Input").fill("kendrick");
  expect(await page.locator("div.DocSearch-NoResults").isHidden()).toBe(true);
});

test("Borrar el contenido del input", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator("button.DocSearch").click();
  await page.locator("input.DocSearch-Input").fill("kendrick");
  expect(await page.locator("input.DocSearch-Input").inputValue()).toBe(
    "kendrick"
  );
  await page.locator("button.DocSearch-Reset").click();
  expect(await page.locator("input.DocSearch-Input").inputValue()).toBe("");
});

test("Busqueda con resultados", async ({ page }) => {
  // DocSearch-Dropdown-Container
  await page.goto("https://playwright.dev/");
  await page.locator("button.DocSearch").click();
  await page.locator("input.DocSearch-Input").fill("hola");
  expect(
    await page.locator("div.DocSearch-Dropdown-Container").isHidden()
  ).toBe(true);
});
