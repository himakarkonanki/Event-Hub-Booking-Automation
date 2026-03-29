import { Locator, Page } from "@playwright/test";
import { title } from "node:process";

export class EventPageLocators {
    page: Page
    EVENT_CARDS: Locator
    EVENT_PRICE: Locator
    SEATS_AVAILABLE: Locator


    constructor(page: Page) {
        this.page = page
        this.EVENT_CARDS = this.page.locator('#event-card')
        this.EVENT_PRICE = this.EVENT_CARDS.locator('p')
        this.SEATS_AVAILABLE = this.EVENT_PRICE.locator('+span')
    }

    EVENT_CARD_BY_TITLE = (title:string) => this.EVENT_CARDS.filter({has:this.page.locator('h3',{hasText:title})})
    BOOK_EVENT_BY_TITLE = (title:string) => this.EVENT_CARD_BY_TITLE(title).getByTestId('book-now-btn')
}