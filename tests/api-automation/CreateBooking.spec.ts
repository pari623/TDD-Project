/*  
Test:Create Booking
Request type: Post
Request body: Static
*/

import {test,expect} from '@playwright/test';

const BASE_URL = "https://restful-booker.herokuapp.com";

test("Create booking with static data",async({request})=>
{
 //static payload
 const requestBody = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

//send the post request
 const response = await request.post(`${BASE_URL}/booking`,{data:requestBody});
 const respondBody = await response.json();

//print response 
 console.log(respondBody);

//Validate statuscode/response 
 expect(response.status()).toBe(200);  
 expect(response.statusText()).toBe("OK");

//Validate response body 
expect(respondBody).toHaveProperty("bookingid");
expect(respondBody.bookingid).toEqual(expect.any(Number));
    
});