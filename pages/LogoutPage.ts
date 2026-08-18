import {Locator,Page} from '@playwright/test';
import {HomePage} from '../pages/HomePage';

export class LogoutPage{
  
    private readonly page:Page;
    private readonly continueBtn:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.continueBtn = page.getByRole('link',{name:'Continue'});
    }

    async clickContinue()
    {
        await this.continueBtn.click();
        return new HomePage(this.page);
    }

    async continueBtnIsVisible()
    {
        return await this.continueBtn.isVisible();
    }


}