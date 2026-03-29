import {expect, test} from "../fixtures/baseTest"
import eventData from "../../testdata/eventData.json"
import { futureDateValue } from "../utils/dateUtils"

test("Create a new event", async({homePage,manageEvents,eventPage})=>{

    const event = eventData.event

    await test.step("Naviagte to manage events",async()=>{
        await homePage.manageEvents()
        await expect(manageEvents.manageEventsPageLocator.YELLOW_INSTRUCTION, 'Verify the yellow instruction').toHaveText('You can add up to 6 events. Once the limit is reached, your oldest event is automatically replaced when you add a new one.')
    })

    await test.step("Create a event",async()=>{
        await manageEvents.enterTitle(event.title)
        await manageEvents.enterDescription(event.description)
        await manageEvents.selectCategory('Concert')
        await manageEvents.selectDateAndTime(futureDateValue(2))
        await manageEvents.enterCity(event.city)
        await manageEvents.enterVenue(event.venue)
        await manageEvents.price(event.price)
        await manageEvents.totalSeats(event.totalSeats)
    })

    await test.step("Add the event and verify the toast message",async()=>{
        await manageEvents.clickOnAddEvent()
        await expect(manageEvents.manageEventsPageLocator.EVENT_STATUS_BANNER).toHaveText('Event created!')
    })

})