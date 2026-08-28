import {test,expect} from '@playwright/test';

const BASE_URL = "https://restful-booker.herokuapp.com";

test("Get booking detail by ID - Path Param",async({request})=>
{
    const bookingId = 2;
    const response = await request.get(`${BASE_URL}/booking/${bookingId}`);
    const responseBody = await response.json();

    //print the response
    console.log(responseBody);

    //Validate statuscode/response
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

    //Optional validate expected fields if known
    expect(responseBody).toHaveProperty("firstname");
    expect(responseBody).toHaveProperty("lastname");

});

test("Get booking details by ID - Query param",async({request})=>
{
  //https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown

  const firstname = "Jim";
  const lastname = "Brown";
  
  const response = await request.get(`${BASE_URL}/booking`,
    {
        params:{
            firstname,
            lastname
               }
    });

    const responseBody = await response.json();
    console.log(responseBody);

  //Validate statuscode/response
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

  //Verify booking id should be a number and should be greater than 0; 
  for(const item of responseBody)
  {
    expect(item).toHaveProperty("bookingid");
    expect(typeof item.bookingid).toBe("number");
    expect(item.bookingid).toBeGreaterThan(0);
  }


});