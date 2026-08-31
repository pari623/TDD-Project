# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-automation/EndToEndTest.spec.ts >> Update Booking - Create,Get, Partial update, Update and Delete a Booking Record
- Location: tests/api-automation/EndToEndTest.spec.ts:11:5

# Error details

```
Error: ENOENT: no such file or directory, open 'testdata/token_request_body.json'
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import fs from 'fs';
  3  | import path from 'path';
  4  | 
  5  | function readJson(filePath:string)
  6  | {
> 7  |     return JSON.parse(fs.readFileSync(filePath,'utf-8'));
     |                          ^ Error: ENOENT: no such file or directory, open 'testdata/token_request_body.json'
  8  | };
  9  | const BASE_URL = "https://restful-booker.herokuapp.com";
  10 | 
  11 | test("Update Booking - Create,Get, Partial update, Update and Delete a Booking Record",async({request})=>
  12 | {
  13 | 
  14 | // Step 1: Create a new booking using POST request
  15 |   const requestBody = readJson("testdata/post_request_body.json");
  16 |   const response = await request.post(`${BASE_URL}/booking`,{
  17 |     headers: { "Content-Type": "application/json" },
  18 |     data: JSON.stringify(requestBody)
  19 |   });
  20 |   const responseBody = await response.json();
  21 |   const bookingId =  responseBody.bookingid; // get booking id from json response body
  22 | 
  23 |  // Step 2: (optional): Get the created booking using GET request
  24 |   const getResponse =  await request.get(`${BASE_URL}/booking/${bookingId}`);
  25 |   const bookingDetails = await getResponse.json();
  26 |   console.log("Booking details before update: ", bookingDetails);
  27 | 
  28 | // Create Token - this is require for PUT/PATCH/DELETE request
  29 |   const tokenData = readJson("testdata/token_request_body.json");
  30 |   const tokenResponse = await request.post(`${BASE_URL}/auth`,{data:tokenData});
  31 |   const tokenJson = await tokenResponse.json();
  32 |   const token = tokenJson.token;
  33 |   console.log("Token generated: ", token);
  34 | /*
  35 | // Step 3: Partial update the booking using PATH request with token in headers
  36 |   const partial_updateData = readJson("testdata/patch_request_body.json");
  37 |   const partial_updateResponse = await request.patch(`${BASE_URL}/booking/${bookingId}`,{
  38 |     headers:{
  39 |          "Content-Type":"application/json",
  40 |         "Cookie":`token=${token}`,
  41 |     },
  42 |     data:partial_updateData,
  43 |   }) ;
  44 |   const partial_UpdatedBooking = await partial_updateResponse.json(); 
  45 | 
  46 | //Validate statuscode/status
  47 |   expect(partial_updateResponse.status()).toBe(200);
  48 |   expect(partial_updateResponse.statusText()).toBe("OK");
  49 | 
  50 | console.log("Partial update booking successfully: ", partial_UpdatedBooking);  
  51 | 
  52 | // Step 4: Full Update the booking using PUT request with token in headers
  53 | 
  54 |  const updateData = readJson("testdata/put_request_body.json");
  55 |   const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`,{
  56 |     headers:{
  57 |         "Content-Type":"application/json",
  58 |         "Cookie":`token=${token}`,
  59 |     },
  60 |     data: updateData,
  61 |   }) ;
  62 |   const UpdatedBooking = await updateResponse.json(); 
  63 | 
  64 | 
  65 |   expect(updateResponse.status()).toBe(200);
  66 |   expect(updateResponse.statusText()).toBe("OK");
  67 | 
  68 | console.log(" Update booking successfully: ", UpdatedBooking);  
  69 | 
  70 | // Step 5: Delete Booking
  71 | 
  72 | const deleteREsponse = await request.delete(`${BASE_URL}/booking/${bookingId}`,{
  73 |     headers:{
  74 |         "Content-Type" : "application/json",
  75 |         "Cookie" : `token=${token}`
  76 |     }
  77 | });
  78 | 
  79 | expect(deleteREsponse.status()).toBe(201);
  80 | expect(deleteREsponse.statusText()).toBe("Created");
  81 | console.log("Booking details are deleted");
  82 | 
  83 |  */
  84 | })
```