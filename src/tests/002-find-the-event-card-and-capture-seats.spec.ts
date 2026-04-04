import { test, expect } from "../fixtures/baseTest"
import eventData from "../../testdata/eventData.json"
import { bookingDetails } from "../../testdata/bookingDetails.json"
import { testConfiguration } from "../../test.config"


test("Find the event card and capture seats", async ({ homePage, eventPage, bookingForm, myBookingPage }) => {

    const event = eventData.event
    let seatsAvailableBeforeBooking: number
    let bookingReference: string
    let bookingReferenceNumber: string

    await test.step("Find the event card and capture seats", async () => {
        await homePage.homePageLocator.EVENTS.click()
        const listOfEvents = eventPage.getAllEvents()
        await expect(listOfEvents.nth(0), 'Verify whether first card is visible').toBeVisible()
        const card = eventPage.eventPageLocators.EVENT_CARD_BY_TITLE(event.title)
        await expect(card).toBeVisible({ timeout: 5000 })
        const seatsText = await eventPage.eventPageLocators.SEATS_AVAILABLE.nth(3).innerText()
        seatsAvailableBeforeBooking = parseInt(seatsText.split(" ")[0])
    })

    await test.step("Book the event", async () => {
        await eventPage.eventPageLocators.BOOK_EVENT_BY_TITLE(event.title).click()
    })

    await test.step("Assert: element with id #ticket-count has text 1 (default quantity)", async () => {
        await expect(bookingForm.bookingFormLocators.TICKET_COUNT, 'verify the ticket count to be 1').toHaveCount(1)
    })

    await test.step("Enter the details", async () => {
        await bookingForm.enterName(bookingDetails.name)
        await bookingForm.enterEmail(bookingDetails.email)
        await bookingForm.enterPhoneNumber(bookingDetails.phone)
    })

    await test.step('Confirm the booking', async () => {
        await bookingForm.bookingFormLocators.CONFIRM_BUTTON.click()
        await expect(bookingForm.bookingFormLocators.BOOKING_REFERENCE, 'Verify booking refernce number is visible').toBeVisible()
        bookingReference = await bookingForm.bookingFormLocators.BOOKING_REFERENCE.innerText()
        bookingReferenceNumber = bookingReference.trim()
    })

    await test.step("View my Bookings",async()=>{
        await bookingForm.bookingFormLocators.VIEW_MY_BOOKINGS.click()
        await expect(myBookingPage.page).toHaveURL(`${testConfiguration.baseURL}/bookings`)
        const cards = await myBookingPage.getBookingCards()
        await expect(myBookingPage.myBookingPageLocators.BOOKING_CARD_BY_REF_ID(bookingReferenceNumber),'Verify booking card with the Ref id is visible').toBeVisible()
        await expect(myBookingPage.myBookingPageLocators.BOOKING_CARD_BY_REF_ID_AND_NAME(bookingReferenceNumber)).toHaveText(`Sunburn - Asia's largest music festival`)
    })
})