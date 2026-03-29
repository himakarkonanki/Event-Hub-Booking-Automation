import {expect, test} from "../fixtures/baseTest"
import eventData from "../../testdata/eventData.json"
import { futureDateValue } from "../utils/dateUtils"

test("Create a new event",async({homePage,manageEvents})=>{

    const event = eventData.event

    await test.step("Naviagte to admin-> manage events",async()=>{
        await homePage.manageEvents()
    })

    await test.step("Fill Title field",async()=>{
        await expect(manageEvents.manageEventsPageLocator.YELLOW_INSTRUCTION, 'Verify the yellow instruction').toHaveText('You can add up to 6 events. Once the limit is reached, your oldest event is automatically replaced when you add a new one.')
        await manageEvents.enterTitle(event.title)
    })

    await test.step("Fill Description textarea",async()=>{
        await manageEvents.enterDescription(event.description)
    })

    await test.step("Select the event category",async()=>{
        await manageEvents.selectCategory('Concert')
    })

    await test.step("Fill event date",async()=>{
        await manageEvents.selectDateAndTime(futureDateValue(2))
    })

    await test.step("Fill the city Field",async()=>{
        await manageEvents.enterCity(event.city)
    })

    await test.step("Fill the venue",async()=>{
        await manageEvents.enterVenue(event.venue)
    })

    await test.step("Fill the Price",async()=>{
        await manageEvents.price(event.price)
    })

    await test.step("Fill the total seats and click on add event",async()=>{
        await manageEvents.totalSeats(event.totalSeats)
        await manageEvents.clickOnAddEvent()
        await expect(manageEvents.manageEventsPageLocator.EVENT_STATUS_BANNER).toHaveText('Event created!')
    })
})