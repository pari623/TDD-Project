/* 
* Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */
import {test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { TestConfig } from '../../test.config';
import { MyAccountPage } from '../../pages/MyAccountPage';
import { LogoutPage } from '../../pages/LogoutPage';

let config: TestConfig;
let homePage: HomePage;
let loginPage:LoginPage;
let myAccountPage:MyAccountPage;
let logoutPage:LogoutPage;

test.beforeEach(async({page})=>
{
   config = new TestConfig;  
   homePage = new HomePage(page);
   loginPage = new LoginPage(page);
   myAccountPage = new MyAccountPage(page);
   logoutPage = new LogoutPage(page);
   await page.goto(config.appUrl);
})

test('Logout Test', async()=>
{
    await homePage.clickMyAccountLink();
    await homePage.clickLoginLink();
    await loginPage.login(config.email,config.password);
    const isLoggedIn = await myAccountPage.isMyAccountPageExist();
    expect(isLoggedIn).toBeTruthy();
    await myAccountPage.clickLogoutPage();
    await logoutPage.clickContinue();
    const isHOmePageExist = await homePage.isHomePageExist();
    expect(isHOmePageExist).toBeTruthy();

})