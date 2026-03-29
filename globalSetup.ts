import { chromium } from "@playwright/test";
import { testConfiguration } from "./test.config";
import { expect } from "./src/fixtures/baseTest";
import dotenv from "dotenv"

async function globalSetup() {
    dotenv.config()
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(testConfiguration.baseURL)
    await expect(page.locator('h1')).toHaveText('Sign in to EventHub')
    await page.locator('#email').pressSequentially(process.env.EMAIL!)
    await page.locator('#password').pressSequentially(process.env.PASSWORD!)
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'storageState.json' });
    await browser.close()
}

export default globalSetup;