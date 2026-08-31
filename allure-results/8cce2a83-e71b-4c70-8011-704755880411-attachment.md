# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-automation/EndToEndTest.spec.ts >> Update Booking - Create,Get, Partial update, Update and Delete a Booking Record
- Location: tests/api-automation/EndToEndTest.spec.ts:13:5

# Error details

```
Error: ENOENT: no such file or directory, open 'testdata/token_request_body.json'
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import fs from 'fs';
  3  | 
  4  | function readJson(filePath:string)
  5  | {
> 6  |     return JSON.parse(fs.readFileSync(filePath,'utf-8'));
     |                          ^ Error: ENOENT: no such file or directory, open 'testdata/token_request_body.json'
  7  | };
  8  | 
  9  | //https://restful-booker.herokuapp.com/booking
  10 | //https://restful-booker.herokuapp.com/auth
  11 | const BASE_URL = "https://restful-booker.herokuapp.com";
  12 | 
  13 | test("Update Booking - Create,Get, Partial update, Update and Delete a Booking Record",async({request})=>
  14 | {
  15 | 
  16 | // Step 1: Create a new booking using POST request
  17 |   const requestBody = readJson("testdata/post_request_body.json");
  18 |   const response = await request.post(`${BASE_URL}/booking`,{data:requestBody});
  19 |   const responseBody = await response.json();
  20 |   const bookingId =  responseBody.bookingid; // get booking id from json response body
  21 | 
  22 | // Step 2: (optional): Get the created booking using GET request
  23 |   const getResponse =  await request.get(`${BASE_URL}/booking/${bookingId}`);
  24 |   const bookingDetails = await getResponse.json();
  25 |   console.log("Booking details before update: ", bookingDetails);
  26 | 
  27 | // Create Token - this is require for PUT/PATCH/DELETE request
  28 |   const tokenData = readJson("testdata/token_request_body.json");
  29 |   const tokenResponse = await request.post(`${BASE_URL}/auth`,{data:tokenData});
  30 |   const tokenJson = await tokenResponse.json();
  31 |   const token = tokenJson.token;
  32 |   console.log("Token generated: ", token);
  33 | 
  34 | // Step 3: Partial update the booking using PATH request with token in headers
  35 |   const partial_updateData = readJson("testdata/patch_request_body.json");
  36 |   const partial_updateResponse = await request.patch(`${BASE_URL}/booking/${bookingId}`,{
  37 |     headers:{
  38 |          "Content-Type":"application/json",
  39 |         "Cookie":`token=${token}`,
  40 |     },
  41 |     data:partial_updateData,
  42 |   }) ;
  43 |   const partial_UpdatedBooking = await partial_updateResponse.json(); 
  44 | 
  45 | //Validate statuscode/status
  46 |   expect(partial_updateResponse.status()).toBe(200);
  47 |   expect(partial_updateResponse.statusText()).toBe("OK");
  48 | 
  49 | console.log("Partial update booking successfully: ", partial_UpdatedBooking);  
  50 | 
  51 | // Step 4: Full Update the booking using PUT request with token in headers
  52 | 
  53 |  const updateData = readJson("testdata/put_request_body.json");
  54 |   const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`,{
  55 |     headers:{
  56 |         "Content-Type":"application/json",
  57 |         "Cookie":`token=${token}`,
  58 |     },
  59 |     data: updateData,
  60 |   }) ;
  61 |   const UpdatedBooking = await updateResponse.json(); 
  62 | 
  63 | 
  64 |   expect(partial_updateResponse.status()).toBe(200);
  65 |   expect(partial_updateResponse.statusText()).toBe("OK");
  66 | 
  67 | console.log(" Update booking successfully: ", UpdatedBooking);  
  68 | 
  69 | // Step 5: Delete Booking
  70 | 
  71 | const deleteREsponse = await request.delete(`${BASE_URL}/booking/${bookingId}`,{
  72 |     headers:{
  73 |         "Content-Type" : "application/json",
  74 |         "Cookie" : `token=${token}`
  75 |     }
  76 | });
  77 | 
  78 | expect(deleteREsponse.status()).toBe(201);
  79 | expect(deleteREsponse.statusText()).toBe("Created");
  80 | console.log("Booking details are deleted");
  81 | 
  82 | 
  83 | })
```