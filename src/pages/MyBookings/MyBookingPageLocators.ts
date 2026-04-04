import { Locator, Page } from "@playwright/test";


export class MyBookingsPageLocators{
    page:Page
    BOOKING_CARDS:Locator

    constructor(page:Page){
        this.page = page
        this.BOOKING_CARDS= this.page.locator('#booking-card')
    }

    BOOKING_CARD_BY_REF_ID = (id:string) => this.BOOKING_CARDS.filter({has:this.page.locator('.booking-ref'),hasText:id})
    BOOKING_CARD_BY_REF_ID_AND_NAME = (id:string) => this.BOOKING_CARD_BY_REF_ID(id).locator('h3')
}