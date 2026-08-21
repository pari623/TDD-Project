import {Page,Locator} from '@playwright/test';
import {ProductPage} from '../pages/ProductPage';

export class SearchResultPage{

private readonly page:Page;
private readonly searchPageHeader:Locator;
private readonly searchProduct:Locator;


constructor(page:Page)
{
   this.page = page; 
   this.searchPageHeader = this.page.locator('#content h1');
   this.searchProduct = this.page.locator("h4>a")
}

async isSearchResultPageExist()
{
   try {
      const headerText = await this.searchPageHeader.textContent();
      return headerText?.includes('Search - ') ?? false;
   } catch (error) {
      console.log(`There is an error: ${error}`);
      return false;
      
   }
}

async isProductExist(productName:string)
{
   try {
      const count = await this.searchProduct.count();
      for(let i=0; i<count; i++)
      {
         const product = this.searchProduct.nth(i);
         const title = await product.textContent();
         if(title === productName)
         {
            return true;
         }
      }
   } catch (error) {
       console.log(`Here is an error: ${error}`);
   }
      return false;
}

async selectProduct(productName:string)
{
   try {
      const count = await this.searchProduct.count();
      for(let i=0; i<count; i++)
      {
         const product = this.searchProduct.nth(i);
         const title = await product.textContent();
         if(title === productName)
         {
            await product.click();
            return new ProductPage(this.page);
         }
      }
      console.log(`Product not found: ${productName}`);
   } catch (error) {
      console.log(`There is an Error: ${error}`);
   }
   return null;
}

async getProductCount()
{
   return await this.searchProduct.count();
}






}