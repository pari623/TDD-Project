/* 
Test Case: Add Product to Cart
Test Steps:
1.Navigate to application URL
2.Enter a product name to search field
3.Click the search button
4.Verify the product appears in the search result
5.Select the product
6.Select the quantity
7.Add the product to the cart
8.Verify the success message
 */

import {test,expect} from '@playwright/test';
import { TestConfig } from '../../test.config';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { SearchResultPage } from '../../pages/SearchResultPage';

let config:TestConfig;
let homePage:HomePage;
let productPage:ProductPage;
let searchResultPage:SearchResultPage;

test.beforeEach(async({page})=>
{
    config = new TestConfig;
    homePage = new HomePage(page);
    searchResultPage = new SearchResultPage(page);
    productPage = new ProductPage(page);
    await page.goto(config.appUrl);
});

test("Add Product to Cart Test", async()=>
{
   await homePage.insertProductName(config.productName);
   await homePage.clickSearch();
   const isProductFound = await searchResultPage.isProductExist(config.productName); 
   expect(isProductFound).toBeTruthy();
   await searchResultPage.selectProduct(config.productName);
   await productPage.setQuantity(config.productQuantity);
   await productPage.addToCart();
   expect( await productPage.isConfirmMsgVisible()).toBeTruthy();

})