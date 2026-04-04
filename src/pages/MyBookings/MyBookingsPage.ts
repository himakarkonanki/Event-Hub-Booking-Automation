import { Page } from "@playwright/test";
import { MyBookingsPageLocators } from "./MyBookingPageLocators";

export class MyBookingsPage{

    page:Page
    myBookingPageLocators : MyBookingsPageLocators

    constructor(page:Page){
        this.page = page
        this.myBookingPageLocators = new MyBookingsPageLocators(page)
    }

    async getBookingCards(){
       return await this.myBookingPageLocators.BOOKING_CARDS.all()
    }
}