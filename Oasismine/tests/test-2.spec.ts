import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("textbox", { name: "Google 검색" }).click();
  await page.getByRole("textbox", { name: "Google 검색" }).fill("ticketmaster");
  await page.getByPlaceholder("Search by Artist, Event or").click();
  await page
    .getByPlaceholder("Search by Artist, Event or")
    .fill("Scottish Gas Murrayfield");
  await page.getByRole("button", { name: "Search" }).click();
});
