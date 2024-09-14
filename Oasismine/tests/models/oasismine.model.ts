import { Locator, Page } from "@playwright/test";

export class Oasismine {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
