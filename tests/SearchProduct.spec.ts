/* Test Case: product Search
 Steps: 
 1.Navigate to the application URL
 2.Enter the Product Name to the search field
 3.Click the search Button
 4.Verify if the product is displayed in the search result
 */
import {test, expect} from '@playwright/test';
import {TestConfig} from '../test.config';
import {HomePage} from '../pages/HomePage';
import { SearchResultPage } from '../pages/SearchResultPage';

let config:TestConfig;
let homePage:HomePage;
let searchResultpage:SearchResultPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig;
    homePage = new HomePage(page);
    searchResultpage = new SearchResultPage(page);
    await page.goto(config.appUrl);
});

test("Search Product Test", async()=>
{
    await homePage.insertProductName(config.productName);
    await homePage.clickSearch();
   const productExist =  await searchResultpage.isProductExist(config.productName);
   expect(productExist).toBeTruthy();
})

