/* Test Case: Account Registration
Steps:
1.Navigate to application URL;
2.Go to 'My Account' and click 'Register';
3.Fill in registration detail with random data;
4.Agree to Privacy policy and submit the form;
5.Validate the confirmation message
 */


import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import {TestConfig} from '../test.config';
import { RandomDataUtil } from '../utils/randomDatagenerator';

let config:TestConfig;
let homePage:HomePage;
let registrationPage:RegistrationPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig();
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page); 
    await page.goto(config.appUrl);

})

test("User registration test", async({})=>
{
    await homePage.clickMyAccountLink();
    await homePage.clickRegisterLink();

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastname());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setPhoneNumber(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.confirmPassword(password);
    await registrationPage.checkSubscriptionBtn();
    await registrationPage.checkPrivacyPolicyBox();
    await registrationPage.clickContinueTab();

    const confirmMsg = await registrationPage.getConfirmMsg();
    expect(confirmMsg).toContain("Your Account Has Been Created!"); 
   

})




