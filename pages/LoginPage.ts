import {Locator, Page} from '@playwright/test';
import { MyAccountPage } from './MyAccountPage';

export class LoginPage{

    private readonly page:Page;
    private readonly emailAddressField:Locator;
    private readonly passwordField:Locator;
    private readonly loginBtn:Locator;
    private readonly txtErrorMsg:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.emailAddressField = page.locator("#input-email");
        this.passwordField = page.locator("#input-password");
        this.loginBtn = page.locator("input[value='Login']");
        this.txtErrorMsg = page.locator(".alert.alert-danger");
    }

    async insertEmail(email:string)
    {
        await this.emailAddressField.fill(email);
    }

    async insertPassword(password:string)
    {
        await this.passwordField.fill(password);
    }

    async clickLoginBtn()
    {
        await this.loginBtn.click();
    }

    async login(userEmail:string,password:string)
    {
        await this.insertEmail(userEmail);
        await this.insertPassword(password);
        await this.clickLoginBtn();
        return new MyAccountPage(this.page);
    }

    async getLoginErrorMsg()
    {
        return this.txtErrorMsg.textContent();
    }


}