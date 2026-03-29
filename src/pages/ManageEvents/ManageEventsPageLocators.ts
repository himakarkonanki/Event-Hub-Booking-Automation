import { Locator, Page } from "@playwright/test";


export class ManageEventsPageLocators {

    page: Page
    YELLOW_INSTRUCTION: Locator
    EVENT_TITLE: Locator
    EVENT_DESCRIPTION: Locator
    CATEGORY_DROPDOWN: Locator
    CITY: Locator
    EVENT_VENUE: Locator
    DATE_FIELD: Locator
    PRICE: Locator
    TOTAL_SEATS: Locator
    ADD_EVENT_BUTTON: Locator
    EVENT_STATUS_BANNER: Locator

    constructor(page: Page) {
        this.page = page
        this.YELLOW_INSTRUCTION = this.page.locator('h2',{hasText:'New Event'}).locator('+div')
        this.EVENT_TITLE = this.page.locator('input#event-title-input')
        this.EVENT_DESCRIPTION = this.page.locator('textarea')
        this.CATEGORY_DROPDOWN = this.page.locator('select#category')
        this.CITY = this.page.locator('input#city')
        this.EVENT_VENUE = this.page.locator('input#venue')
        this.DATE_FIELD = this.page.locator('#event-date-\\&-time')
        this.PRICE = this.page.locator('input[id="price-($)"]')
        this.TOTAL_SEATS = this.page.locator('input#total-seats')
        this.ADD_EVENT_BUTTON = this.page.getByTestId('add-event-btn')
        this.EVENT_STATUS_BANNER = this.page.locator('.pointer-events-auto p')
    }

    CATEGORY_DROPDOWN_OPTIONS = (options: string) => this.CATEGORY_DROPDOWN.filter({has:this.page.getByRole('option', { name: options })})
}