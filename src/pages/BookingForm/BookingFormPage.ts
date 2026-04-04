import { Page } from "@playwright/test";
import { BookingFormPageLocators } from "./BookingFormPageLocators";

export class BookingFormPage {
    page: Page
    bookingFormLocators: BookingFormPageLocators

    constructor(page: Page) {
        this.page = page
        this.bookingFormLocators = new BookingFormPageLocators(page)
    }

    async clickOnConfirmButton() {
        await this.bookingFormLocators.CONFIRM_BUTTON.click()
    }

    async enterName(name: string, ) {
        await this.bookingFormLocators.CUSTOMER_NAME.click()
        await this.bookingFormLocators.CUSTOMER_NAME.fill(name)
    }

    async enterEmail(email: string){
        await this.bookingFormLocators.CUSTOMER_EMAIL.click()
        await this.bookingFormLocators.CUSTOMER_EMAIL.fill(email)
    }

    async enterPhoneNumber(phoneNumber: string){
        await this.bookingFormLocators.CUSTOMER_EMAIL.click()
        await this.bookingFormLocators.CUSTOMER_PHONE.fill(phoneNumber)
    }
}