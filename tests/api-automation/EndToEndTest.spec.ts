import{test,expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';

function readJson(filePath:string)
{
    return JSON.parse(fs.readFileSync(filePath,'utf-8'));
};
const BASE_URL = "https://restful-booker.herokuapp.com";

test("Update Booking - Create,Get, Partial update, Update and Delete a Booking Record",async({request})=>
{

// Step 1: Create a new booking using POST request
  const requestBody = readJson("testdata/post_request_body.json");
  const response = await request.post(`${BASE_URL}/booking`,{data:requestBody});
  const responseBody = await response.json();
  const bookingId =  responseBody.bookingid; // get booking id from json response body

 // Step 2: (optional): Get the created booking using GET request
  const getResponse =  await request.get(`${BASE_URL}/booking/${bookingId}`);
  const bookingDetails = await getResponse.json();
  console.log("Booking details before update: ", bookingDetails);

// Create Token - this is require for PUT/PATCH/DELETE request
  const tokenData = readJson("testdata/token_request_body.json");
  const tokenResponse = await request.post(`${BASE_URL}/auth`,{data:tokenData});
  const tokenJson = await tokenResponse.json();
  const token = tokenJson.token;
  console.log("Token generated: ", token);

// Step 3: Partial update the booking using PATH request with token in headers
  const partial_updateData = readJson("testdata/patch_request_body.json");
  const partial_updateResponse = await request.patch(`${BASE_URL}/booking/${bookingId}`,{
    headers:{
         "Content-Type":"application/json",
        "Cookie":`token=${token}`,
    },
    data:partial_updateData,
  }) ;
  const partial_UpdatedBooking = await partial_updateResponse.json(); 

//Validate statuscode/status
  expect(partial_updateResponse.status()).toBe(200);
  expect(partial_updateResponse.statusText()).toBe("OK");

console.log("Partial update booking successfully: ", partial_UpdatedBooking);  

// Step 4: Full Update the booking using PUT request with token in headers

 const updateData = readJson("testdata/put_request_body.json");
  const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`,{
    headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${token}`,
    },
    data: updateData,
  }) ;
  const UpdatedBooking = await updateResponse.json(); 


  expect(updateResponse.status()).toBe(200);
  expect(updateResponse.statusText()).toBe("OK");

console.log(" Update booking successfully: ", UpdatedBooking);  

// Step 5: Delete Booking

const deleteREsponse = await request.delete(`${BASE_URL}/booking/${bookingId}`,{
    headers:{
        "Content-Type" : "application/json",
        "Cookie" : `token=${token}`
    }
});

expect(deleteREsponse.status()).toBe(201);
expect(deleteREsponse.statusText()).toBe("Created");
console.log("Booking details are deleted");


})