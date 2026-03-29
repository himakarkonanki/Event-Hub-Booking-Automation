import { Locator, Page } from "@playwright/test";

export class HomePageLocators {
    page: Page
    HOME: Locator
    EVENTS: Locator
    MY_BOOKINGS_NAVBAR: Locator
    ADMIN: Locator
    MANAGE_EVENTS: Locator
    MANAGE_BOOKINGS: Locator
    LOGOUT_BUTTON: Locator
    BROWSE_EVENTS: Locator
    MY_BOOKINGS: Locator

    constructor(page: Page) {
        this.page = page
        this.HOME = this.page.getByRole('link', { name: 'Home' })
        this.EVENTS = this.page.getByTestId('nav-events')
        this.MY_BOOKINGS_NAVBAR = this.page.getByRole('link', { name: 'My Bookings' })
        this.ADMIN = this.page.getByRole('button', { name: "Admin" })
        this.MANAGE_EVENTS = this.page.getByRole('link',{name:"Manage Events"}).nth(0)
        this.MANAGE_BOOKINGS = this.page.getByRole('link',{name:"Manage Bookings"})
        this.LOGOUT_BUTTON = this.page.locator('#logout-btn')
        this.BROWSE_EVENTS = this.page.getByRole('link', { name: "Browse Events" })
        this.MY_BOOKINGS = this.page.getByRole('link').filter({has:this.page.locator('button',{hasText:'My Bookings'})})
    }


}