import { chromium } from "@playwright/test";
import { testConfiguration } from "./test.config";
import { expect } from "./src/fixtures/baseTest";

async function globalSetup() {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(testConfiguration.baseURL)
    await expect(page.locator('h1')).toHaveText('Sign in to EventHub')
    await page.locator('#email').pressSequentially('test0609@gmail.com')
    await page.locator('#password').pressSequentially('Aeiouvowels@6')
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'storageState.json' });
    await browser.close()
}

export default globalSetup;