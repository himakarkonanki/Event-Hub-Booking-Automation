import { Page } from "@playwright/test"
import { ManageEventsPageLocators } from "./ManageEventsPageLocators"

export class ManageEventsPage {
    page: Page
    manageEventsPageLocator: ManageEventsPageLocators

    constructor(page: Page) {
        this.page = page
        this.manageEventsPageLocator = new ManageEventsPageLocators(page)
    }

    async enterTitle(title: string) {
        await this.manageEventsPageLocator.EVENT_TITLE.fill(title)
    }

    async enterDescription(description: string) {
        await this.manageEventsPageLocator.EVENT_DESCRIPTION.fill(description)
    }

    async selectCategory(category: string) {
        await this.manageEventsPageLocator.CATEGORY_DROPDOWN.click()
        await this.manageEventsPageLocator.CATEGORY_DROPDOWN_OPTIONS(category).click()
    }

    async enterCity(city: string) {
        await this.manageEventsPageLocator.CITY.fill(city)
    }

    async enterVenue(venue: string) {
        await this.manageEventsPageLocator.EVENT_VENUE.fill(venue)
    }

    async selectDateAndTime(eventTime: string) {
        await this.manageEventsPageLocator.DATE_FIELD.fill(eventTime)
    }

    async price(price: string) {
        await this.manageEventsPageLocator.PRICE.fill(price)
    }

    async totalSeats(seats: string) {
        await this.manageEventsPageLocator.TOTAL_SEATS.fill(seats)
    }

    async clickOnAddEvent(){
        await this.manageEventsPageLocator.ADD_EVENT_BUTTON.click()
    }
}
