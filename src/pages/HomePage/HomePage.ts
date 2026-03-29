import { Page } from "@playwright/test";
import { HomePageLocators } from "./HomePageLocators"

export class Homepage {
    page: Page
    homePageLocator: HomePageLocators
    constructor(page: Page) {
        this.page = page
        this.homePageLocator = new HomePageLocators(page)
    }

    async manageEvents() {
        await this.homePageLocator.ADMIN.click()
        await this.homePageLocator.MANAGE_EVENTS.click()
    }

    async manageBookings() {
        await this.homePageLocator.ADMIN.click()
        await this.homePageLocator.MANAGE_BOOKINGS.click()
    }
}