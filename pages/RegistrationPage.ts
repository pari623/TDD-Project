import {Page, Locator} from '@playwright/test';

export class RegistrationPage{

    private readonly page:Page;
    private readonly firstNameField:Locator;
    private readonly lastNameField:Locator;
    private readonly emailField:Locator;
    private readonly phoneNumberField:Locator;
    private readonly passwordField:Locator;
    private readonly passwordConfirmField:Locator;
    private readonly subscribeCheckBox:Locator;
    private readonly privacypolicyCheckbox:Locator;
    private readonly continueTab:Locator;
    private readonly confirmMsg:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.firstNameField = page.locator("#input-firstname");
        this.lastNameField = page.locator("#input-lastname");
        this.emailField = page.locator("#input-email");
        this.phoneNumberField = page.locator("#input-telephone");
        this.passwordField = page.locator("#input-password");
        this.passwordConfirmField = page.locator("#input-confirm");
        this.subscribeCheckBox = page.locator(".radio-inline").nth(0);
        this.privacypolicyCheckbox = page.locator("input[name='agree']");
        this.continueTab = page.locator("input[value='Continue']");
        this.confirmMsg = page.getByText("Your Account Has Been Created!");
    }

    async setFirstName(fname:string)
    {
        await this.firstNameField.fill(fname);
    }

    async setLastName(lastName:string)
    {
        await this.lastNameField.fill(lastName);
    }

    async setEmail(email:string)
    {
        await this.emailField.fill(email);
    }

    async setPhoneNumber(phoneNumber:string)
    {
        await this.phoneNumberField.fill(phoneNumber);
    }

    async setPassword(password:string)
    {
        await this.passwordField.fill(password);
    }

    async confirmPassword(password:string)
    {
        await this.passwordConfirmField.fill(password);
    }

    async checkSubscriptionBtn()
    {
        await this.subscribeCheckBox.click();
    }

    async checkPrivacyPolicyBox()
    {
        await this.privacypolicyCheckbox.click();
    }

    async clickContinueTab()
    {
        await this.continueTab.click();
    }

    async getConfirmMsg()
    {
       return await this.confirmMsg.textContent();
    }

    






}