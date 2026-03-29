import { Locator, Page } from "@playwright/test";
import { EventPageLocators } from "./EventPageLocators";

export class EventPage {

    page: Page
    eventPageLocators: EventPageLocators

    constructor(page: Page) {
        this.page = page
        this.eventPageLocators = new EventPageLocators(page)
    }

    getAllEvents(): Locator {
        return this.eventPageLocators.EVENT_CARDS;
    }

}