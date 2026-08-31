# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-automation/EndToEndTest.spec.ts >> Update Booking - Create,Get, Partial update, Update and Delete a Booking Record
- Location: tests/api-automation/EndToEndTest.spec.ts:12:5

# Error details

```
Error: ENOENT: no such file or directory, open '/Users/gulpari/Desktop/TDD-Project/tests/api-automation/testdata/post_request_body.json'
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import fs from 'fs';
  3  | import path from 'path';
  4  | 
  5  | function readJson(filePath: string) {
  6  |     const fullPath = path.resolve(process.cwd(), 'tests', 'api-automation', filePath);
> 7  |     return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
     |                          ^ Error: ENOENT: no such file or directory, open '/Users/gulpari/Desktop/TDD-Project/tests/api-automation/testdata/post_request_body.json'
  8  | }
  9  | 
  10 | const BASE_URL = "https://restful-booker.herokuapp.com";
  11 | 
  12 | test("Update Booking - Create,Get, Partial update, Update and Delete a Booking Record",async({request})=>
  13 | {
  14 | 
  15 | // Step 1: Create a new booking using POST request
  16 |   const requestBody = readJson("testdata/post_request_body.json");
  17 |   const response = await request.post(`${BASE_URL}/booking`,{data:requestBody});
  18 |   const responseBody = await response.json();
  19 |   const bookingId =  responseBody.bookingid; // get booking id from json response body
  20 | 
  21 | // Step 2: (optional): Get the created booking using GET request
  22 |   const getResponse =  await request.get(`${BASE_URL}/booking/${bookingId}`);
  23 |   const bookingDetails = await getResponse.json();
  24 |   console.log("Booking details before update: ", bookingDetails);
  25 | 
  26 | // Create Token - this is require for PUT/PATCH/DELETE request
  27 |   const tokenData = readJson("testdata/token_request_body.json");
  28 |   const tokenResponse = await request.post(`${BASE_URL}/auth`,{data:tokenData});
  29 |   const tokenJson = await tokenResponse.json();
  30 |   const token = tokenJson.token;
  31 |   console.log("Token generated: ", token);
  32 | 
  33 | // Step 3: Partial update the booking using PATH request with token in headers
  34 |   const partial_updateData = readJson("testdata/patch_request_body.json");
  35 |   const partial_updateResponse = await request.patch(`${BASE_URL}/booking/${bookingId}`,{
  36 |     headers:{
  37 |          "Content-Type":"application/json",
  38 |         "Cookie":`token=${token}`,
  39 |     },
  40 |     data:partial_updateData,
  41 |   }) ;
  42 |   const partial_UpdatedBooking = await partial_updateResponse.json(); 
  43 | 
  44 | //Validate statuscode/status
  45 |   expect(partial_updateResponse.status()).toBe(200);
  46 |   expect(partial_updateResponse.statusText()).toBe("OK");
  47 | 
  48 | console.log("Partial update booking successfully: ", partial_UpdatedBooking);  
  49 | 
  50 | // Step 4: Full Update the booking using PUT request with token in headers
  51 | 
  52 |  const updateData = readJson("testdata/put_request_body.json");
  53 |   const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`,{
  54 |     headers:{
  55 |         "Content-Type":"application/json",
  56 |         "Cookie":`token=${token}`,
  57 |     },
  58 |     data: updateData,
  59 |   }) ;
  60 |   const UpdatedBooking = await updateResponse.json(); 
  61 | 
  62 | 
  63 |   expect(updateResponse.status()).toBe(200);
  64 |   expect(updateResponse.statusText()).toBe("OK");
  65 | 
  66 | console.log(" Update booking successfully: ", UpdatedBooking);  
  67 | 
  68 | // Step 5: Delete Booking
  69 | 
  70 | const deleteREsponse = await request.delete(`${BASE_URL}/booking/${bookingId}`,{
  71 |     headers:{
  72 |         "Content-Type" : "application/json",
  73 |         "Cookie" : `token=${token}`
  74 |     }
  75 | });
  76 | 
  77 | expect(deleteREsponse.status()).toBe(201);
  78 | expect(deleteREsponse.statusText()).toBe("Created");
  79 | console.log("Booking details are deleted");
  80 | 
  81 | 
  82 | })
```