import { Locator, Page } from "@playwright/test";

export class BookingFormPageLocators {
    page: Page
    TICKET_COUNT: Locator
    CUSTOMER_NAME: Locator
    CUSTOMER_EMAIL: Locator
    CUSTOMER_PHONE: Locator
    CONFIRM_BUTTON: Locator
    BOOKING_REFERENCE: Locator
    VIEW_MY_BOOKINGS: Locator

    constructor(page: Page) {
        this.page = page
        this.TICKET_COUNT = this.page.locator('#ticket-count')
        this.CUSTOMER_NAME = this.page.locator('#customerName')
        this.CUSTOMER_EMAIL = this.page.locator('#customer-email')
        this.CUSTOMER_PHONE = this.page.getByPlaceholder('+91 98765 43210')
        this.CONFIRM_BUTTON = this.page.getByRole('button', { name: 'Confirm Booking' })
        this.BOOKING_REFERENCE = this.page.locator('span.booking-ref')
        this.VIEW_MY_BOOKINGS = this.page.getByRole('button',{name:'View My Bookings'})
    }
}