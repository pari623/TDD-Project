import {test, expect} from '@playwright/test';
import {HomePage} from '../../pages/HomePage';
import {LoginPage} from '../../pages/LoginPage';
import {TestConfig} from '../../test.config';
import {DataProvider} from '../../utils/dataProvider';
import { MyAccountPage } from '../../pages/MyAccountPage';

let homePage:HomePage;
let loginPage:LoginPage;
let config:TestConfig;
let myAccountPage:MyAccountPage; 

const jsonPath = 'testdata/logindata.json';
const jsonTestData = DataProvider.getTestDataFromJson(jsonPath);

const cvsPath = 'testdata/logindata.csv';
const cvsTestData = DataProvider.getTestDataFromCsv(cvsPath);

// Data Driven Test using JSON data
for(const data of cvsTestData)
{
  test(`Login Test with JSON Data:${data.testName} @datadriven`, async({page})=>
{
    config = new TestConfig();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);

    await page.goto(config.appUrl2);
    await homePage.clickMyAccountLink();
    await homePage.clickLoginLink();
    await loginPage.login(data.email,data.password);
    if(data.expected.toLowerCase()==='success')
    {
        const isLoggedIn = await myAccountPage.isMyAccountPageExist()
        expect(isLoggedIn).toBeTruthy();
    }
    else
    {
        const errorMsg = await loginPage.getLoginErrorMsg();
        expect(errorMsg).toContain("Warning: No match for E-Mail")
    }
});


// Data Driven Test using CSV data

test(`Login Test With CSV Data: ${data.testName}`, async({page})=>
{
    config = new TestConfig;
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    myAccountPage = new MyAccountPage(page);

    await page.goto(config.appUrl2);
    await homePage.clickMyAccountLink();
    await homePage.clickLoginLink();
    await loginPage.login(data.email,data.password);
    if(data.expected.toLowerCase()==='success')
    {
        const isLoggedIn = await myAccountPage.isMyAccountPageExist();
        expect(isLoggedIn).toBeTruthy();
    }
    else
    {
        const errorMsg = await loginPage.getLoginErrorMsg();
        expect(errorMsg).toContain("Warning: No match for E-Mail Address");
    }


});

}