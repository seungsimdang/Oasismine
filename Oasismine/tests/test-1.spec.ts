import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByLabel("검색", { exact: true }).click();
  await page.getByLabel("검색", { exact: true }).fill("ticketmaster");
  await page.getByLabel("검색", { exact: true }).press("Enter");
  await page.getByRole("link", { name: "Ticketmaster: Buy Verified" }).click();
  await page.getByPlaceholder("Search by Artist, Event or").click();
  await page
    .getByPlaceholder("Search by Artist, Event or")
    .fill("Scottish Gas Murrayfield");
  await page.getByPlaceholder("Search by Artist, Event or").press("Enter");
  await page
    .getByRole("link", {
      name: "Find Tickets Oasis Edinburgh, GB Scottish Gas Murrayfield 8/8/25, 5:00 PM",
    })
    .click();
});
