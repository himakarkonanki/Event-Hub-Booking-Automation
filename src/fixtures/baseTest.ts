import { Page, test as base } from "@playwright/test";
import { Homepage } from "../pages/HomePage/Homepage";
import { ManageEventsPage } from "../pages/ManageEvents/ManageEventsPage";


type BaseTestFixtures = {
    mainPage: Page
    homePage: Homepage
    manageEvents: ManageEventsPage
}

export const test = base.extend<BaseTestFixtures>({
    mainPage: async ({ browser }, use) => {
        const browserContext = await browser.newContext({ storageState: 'storageState.json' })
        const newPage = await browserContext.newPage()
        await newPage.goto('/', { timeout: 120000, waitUntil: "networkidle" })
        await use(newPage)
        await browserContext.close();
    },

    page: async ({ mainPage }, use) => {
        await use(mainPage)
    },

    homePage: async ({ page }, use) => {
        await use(new Homepage(page))
    },

    manageEvents: async ({ page }, use) => {
        await use(new ManageEventsPage(page))
    }
})

export const expect = test.expect

