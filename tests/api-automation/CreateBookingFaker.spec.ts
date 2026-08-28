import {test,expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime} from 'luxon';


 const BASE_URL = "https://restful-booker.herokuapp.com"

test("Create booking with faker data", async({request})=>
{
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalprice = faker.number.int({min:100,max:500});
    const depositpaid = faker.datatype.boolean();
    const checkinDate = DateTime.now().toFormat("yyyy-MM-dd");
    const checkoutDate = DateTime.now().plus({day:5}).toFormat("yyyy-MM-dd");
    const additionalneeds = "Breakfast";

    const requestBody = {
    "firstname" : firstname,
    "lastname" : lastname,
    "totalprice" :totalprice,
    "depositpaid" : depositpaid,
    "bookingdates" : {
        "checkin" : checkinDate,
        "checkout" : checkoutDate
    },
    "additionalneeds" : additionalneeds
}

const response = await request.post(`${BASE_URL}/booking`,{data:requestBody});
const responseBody = await response.json();

//print response
console.log(responseBody);

//Validate statuscode/response
expect(response.status()).toBe(200);
expect(response.statusText()).toBe("OK");

//Validate response body
expect(responseBody).toHaveProperty("bookingid");
expect(responseBody.bookingid).toEqual(expect.any(Number));

//Validate booking field
const booking = await responseBody.booking

expect(booking).toMatchObject({
    firstname:requestBody.firstname,
    lastname:requestBody.lastname,
    totalprice:requestBody.totalprice,
    depositpaid:requestBody.depositpaid,
    additionalneeds:requestBody.additionalneeds
});

//Validate booking dates
expect(booking.bookingdates).toMatchObject({
    checkin:requestBody.bookingdates.checkin,
    checkout:booking.bookingdates.checkout
});











})

