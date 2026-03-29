import {test ,expect} from "../fixtures/baseTest"
import eventData from "../../testdata/eventData.json"

test("Find the event card and capture seats",async({homePage,eventPage})=>{

    const event = eventData.event
    let seatsAvailableBeforeBooking: number

     await test.step("Find the event card and capture seats",async()=>{
        await homePage.homePageLocator.EVENTS.click()
        const listOfEvents = eventPage.getAllEvents()
        await expect(listOfEvents.nth(0),'Verify whether first card is visible').toBeVisible()
        const card = eventPage.eventPageLocators.EVENT_CARD_BY_TITLE(event.title)
        await expect(card).toBeVisible({timeout:5000})
        const seatsText = await eventPage.eventPageLocators.SEATS_AVAILABLE.nth(3).innerText()
        seatsAvailableBeforeBooking = parseInt(seatsText.split(" ")[0])
    })

    await test.step("Book the event", async()=>{
        await eventPage.eventPageLocators.BOOK_EVENT_BY_TITLE(event.title).click()
    })
})