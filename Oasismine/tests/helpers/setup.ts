import { test as base, Page } from "@playwright/test";

export const test = base.extend<{ page: Page }>({
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },
});

export { expect } from "@playwright/test";
