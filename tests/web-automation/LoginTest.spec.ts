 /* 
* Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials and login
 * 4) Verify 'My Account' page
 */ 
import {test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { MyAccountPage } from '../../pages/MyAccountPage';
import {TestConfig} from '../../test.config';

let config:TestConfig;
let homePage:HomePage;
let myAccountPage:MyAccountPage;
let loginPage:LoginPage;



test.beforeEach(async({page})=>
{
    config = new TestConfig();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    await page.goto(config.appUrl);
  
});

test('Login Test', async()=>
{
    await homePage.clickMyAccountLink();
    await homePage.clickLoginLink();
    await loginPage.login(config.email,config.password);
    const isLoggedin = await myAccountPage.isMyAccountPageExist();
    expect(isLoggedin).toBeTruthy();

})

