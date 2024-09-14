import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
	const { storageState } = config.projects[0].use;
	const browser = await chromium.launch();
	const page = await browser.newPage();

	await page.context().storageState({ path: storageState as string });
	await browser.close();
}

export default globalSetup;
