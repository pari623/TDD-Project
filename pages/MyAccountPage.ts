import {Page, Locator} from '@playwright/test';
import {LogoutPage} from '../pages/LogoutPage';

export class MyAccountPage{

 private readonly page:Page;
 private readonly MsgHeading : Locator;
 private readonly logOutLink : Locator;

 constructor(page:Page)
 {
    this.page = page;
    this.MsgHeading = page.locator("h2:has-text('My Account')");
    this.logOutLink = page.getByRole('link',{name:'Logout'});
 }

 async isMyAccountPageExist()
 {
   try {
      const isVisible = await this.MsgHeading.isVisible();
      return isVisible;
   } catch (error) {
      console.log(`Error Checking : ${error}`);
      return false;
   }
 }

 async clickLogoutPage()
 {
   await this.logOutLink.click();
   return new LogoutPage(this.page);
 }

 async getPageTitle()
 {
   return await this.page.title();
 }



}