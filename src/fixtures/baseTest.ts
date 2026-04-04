import { Page, test as base } from "@playwright/test";
import { Homepage } from "../pages/HomePage/Homepage";
import { ManageEventsPage } from "../pages/ManageEvents/ManageEventsPage";
import { EventPage } from "../pages/Event/EventPage";
import { BookingFormPage } from "../pages/BookingForm/BookingFormPage";
import { MyBookingsPage } from "../pages/MyBookings/MyBookingsPage";


type BaseTestFixtures = {
    mainPage: Page
    homePage: Homepage
    manageEvents: ManageEventsPage
    eventPage: EventPage
    bookingForm: BookingFormPage
    myBookingPage:MyBookingsPage
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
    },

    eventPage: async ({ page }, use) => {
        await use(new EventPage(page))
    },

    bookingForm: async ({ page }, use) => {
        await use(new BookingFormPage(page))
    },

    myBookingPage: async({page}, use)=>{
        await use(new MyBookingsPage(page))
    }
})

export const expect = test.expect

