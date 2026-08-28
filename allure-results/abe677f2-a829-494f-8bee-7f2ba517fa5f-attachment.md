# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-automation/GetBookingDetail.spec.ts >> Get booking details by ID - Query param
- Location: tests/api-automation/GetBookingDetail.spec.ts:24:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Matcher error: received value must be a number or bigint

Received has value: undefined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | const BASE_URL = "https://restful-booker.herokuapp.com";
  4  | 
  5  | test("Get booking detail by ID - Path Param",async({request})=>
  6  | {
  7  |     const bookingId = 2;
  8  |     const response = await request.get(`${BASE_URL}/booking/${bookingId}`);
  9  |     const responseBody = await response.json();
  10 | 
  11 |     //print the response
  12 |     console.log(responseBody);
  13 | 
  14 |     //Validate statuscode/response
  15 |     expect(response.status()).toBe(200);
  16 |     expect(response.statusText()).toBe("OK");
  17 | 
  18 |     //Optional validate expected fields if known
  19 |     expect(responseBody).toHaveProperty("firstname");
  20 |     expect(responseBody).toHaveProperty("lastname");
  21 | 
  22 | });
  23 | 
  24 | test("Get booking details by ID - Query param",async({request})=>
  25 | {
  26 |   //https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown
  27 | 
  28 |   const firstname = "Jim";
  29 |   const lastname = "Brown";
  30 |   
  31 |   const response = await request.get(`${BASE_URL}/booking`,
  32 |     {
  33 |         params:{
  34 |             firstname,
  35 |             lastname
  36 |                }
  37 |     });
  38 | 
  39 |     const responseBody = await response.json();
  40 |     console.log(responseBody);
  41 | 
  42 |   //Validate statuscode/response
  43 |     expect(response.status()).toBe(200);
  44 |     expect(response.statusText()).toBe("OK");
  45 | 
  46 |   //Verify booking id should be a number and should be greater than 0; 
  47 |   for(const item of responseBody)
  48 |   {
  49 |     expect(item).toHaveProperty("bookingid");
  50 |     expect(typeof item.bookingid).toBe("number");
> 51 |     expect(item.responseBody).toBeGreaterThan(0);
     |                               ^ Error: expect(received).toBeGreaterThan(expected)
  52 |   }
  53 | 
  54 | 
  55 | });
```