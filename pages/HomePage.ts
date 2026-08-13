import {Locator, Page} from '@playwright/test'

export class HomePage{

    private readonly page:Page;
    private readonly myAccountLink:Locator;
    private registerLink:Locator;
    private loginLink:Locator;
    private readonly searchBox:Locator;
    private readonly searchTab:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.myAccountLink = page.locator("span:has-text('My Account')");
        this.registerLink = page.locator('a:has-text("Register")');
        this.loginLink = page.getByRole('link',{name:'Login'});
        this.searchBox = page.getByPlaceholder("Search");
        this.searchTab = page.locator(".fa.fa-search");
    }

    async clickMyAccountLink()
    {
       await this.myAccountLink.click();
    }

    async clickLoginLink()
    {
        await this.loginLink.click();
    }

    async clickRegisterLink()
    {
        await this.registerLink.click();
    }

    async isHomePageExist()
    {
        const title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    async insertProductName(productName:string)
    {
        try {
            await this.searchBox.fill(productName);
        } catch (error) {
            console.log(`exception occured while insert product name : ${error}`);
            throw error;
            
        }
    }

    async clickSearch()
    {
        try {
            await this.searchTab.click();
        } catch (error) {
            console.log(`exception occured while clicking 'Search':${error}`);
            throw error;
        }
    }
    
    
}