import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page
    .locator("div")
    .filter({
      hasText:
        "Google 앱에서 더 많은 검색 방법을 사용해 보세요음성, 카메라 등을 사용해 검색하세요.앱 열기Safari로 보기",
    })
    .nth(3)
    .click();
  await page
    .getByText(
      "Google 앱에서 더 많은 검색 방법을 사용해 보세요음성, 카메라 등을 사용해 검색하세요.앱 열기Safari로 보기"
    )
    .click();
  await page.getByRole("button", { name: "Safari로 보기" }).click();
  await page.getByRole("textbox", { name: "Google 검색" }).click();
  await page.getByRole("textbox", { name: "Google 검색" }).fill("ticketmaster");
  await page
    .getByRole("link", { name: "Ticketmaster https://www." })
    .getByRole("link")
    .click();
  await page.getByPlaceholder("Search by Artist, Event or").click();
  await page
    .getByPlaceholder("Search by Artist, Event or")
    .fill("Scottish Gas Murrayfield");
  await page.getByRole("button", { name: "Search" }).click();
});
