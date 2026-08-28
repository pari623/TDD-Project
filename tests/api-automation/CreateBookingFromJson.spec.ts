/*  
Test:Create Booking
Request type: Post
Request body: Static
*/

import {test,expect} from '@playwright/test';
import fs from 'fs';

const BASE_URL = "https://restful-booker.herokuapp.com";

test("Create booking with Json data",async({request})=>
{
// Read data from JSON  
   const jsonPath = "testdata/post_request_body.json";
   const requestBody =  JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

// Send the post request
   const response = await request.post(`${BASE_URL}/booking`,{data:requestBody});
   const responseBody = await response.json();

// Print the response
  console.log(responseBody);   
  
// Validate status code/responce 
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

// Validate booking field
  const booking = await responseBody.booking;
  
  expect(booking).toMatchObject({
    firstname:requestBody.firstname,
    lastname:requestBody.lastname,
    totalprice:requestBody.totalprice,
    depositpaid:requestBody.depositpaid,
    additionalneeds:requestBody.additionalneeds
  });

// Validate bookingdates  
  expect(booking.bookingdates).toMatchObject({
    checkin:requestBody.bookingdates.checkin,
    checkout:requestBody.bookingdates.checkout
  });






})