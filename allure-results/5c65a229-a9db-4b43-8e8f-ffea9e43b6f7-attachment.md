# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test
- Location: tests/AccountRegistration.spec.ts:17:5

# Error details

```
Error: locator.textContent: Unexpected token "Your" while parsing css selector "'h1:has-text('Your Account Has Been Created!')". Did you mean to CSS.escape it?
Call log:
  - waiting for 'h1:has-text('Your Account Has Been Created!')

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - button "$ Currency " [ref=f2e7] [cursor=pointer]:
        - strong [ref=f2e8]: $
        - text: Currency
        - generic [ref=f2e9]: 
      - list [ref=f2e11]:
        - listitem [ref=f2e12]:
          - link "" [ref=f2e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f2e15]:
          - link " My Account" [ref=f2e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=f2e17]: 
            - text: My Account
        - listitem [ref=f2e19]:
          - link " Wish List (0)" [ref=f2e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=f2e21]: 
            - text: Wish List (0)
        - listitem [ref=f2e22]:
          - link " Shopping Cart" [ref=f2e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=f2e24]: 
            - text: Shopping Cart
        - listitem [ref=f2e25]:
          - link " Checkout" [ref=f2e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=f2e27]: 
            - text: Checkout
  - banner [ref=f2e28]:
    - generic [ref=f2e30]:
      - heading [level=1] [ref=f2e33]:
        - link "Qafox.com" [ref=f2e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=f2e36]:
        - textbox "Search" [ref=f2e37]
        - button "" [ref=f2e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f2e43] [cursor=pointer]:
        - generic [ref=f2e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f2e46]:
    - generic: 
    - list [ref=f2e48]:
      - listitem [ref=f2e49]:
        - link "Desktops" [ref=f2e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=f2e51]:
        - link "Laptops & Notebooks" [ref=f2e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=f2e53]:
        - link "Components" [ref=f2e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=f2e55]:
        - link "Tablets" [ref=f2e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=f2e57]:
        - link "Software" [ref=f2e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=f2e59]:
        - link "Phones & PDAs" [ref=f2e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=f2e61]:
        - link "Cameras" [ref=f2e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=f2e63]:
        - link "MP3 Players" [ref=f2e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=f2e65]:
    - list [ref=f2e66]:
      - listitem [ref=f2e67]:
        - link "" [ref=f2e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - listitem [ref=f2e70]:
        - link "Account" [ref=f2e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=f2e72]:
        - link "Success" [ref=f2e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/success
    - generic [ref=f2e74]:
      - generic [ref=f2e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=f2e76]
        - paragraph [ref=f2e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=f2e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=f2e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=f2e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=f2e81] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=f2e83] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - complementary [ref=f2e84]:
        - generic [ref=f2e85]:
          - link "My Account" [ref=f2e86] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Edit Account" [ref=f2e87] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - link "Password" [ref=f2e88] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - link "Address Book" [ref=f2e89] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=f2e90] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=f2e91] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=f2e92] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=f2e93] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=f2e94] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=f2e95] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=f2e96] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=f2e97] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
          - link "Logout" [ref=f2e98] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
  - contentinfo [ref=f2e99]:
    - generic [ref=f2e100]:
      - generic [ref=f2e101]:
        - generic [ref=f2e102]:
          - heading "Information" [level=5] [ref=f2e103]
          - list [ref=f2e104]:
            - listitem [ref=f2e105]:
              - link "About Us" [ref=f2e106] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=f2e107]:
              - link "Delivery Information" [ref=f2e108] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=f2e109]:
              - link "Privacy Policy" [ref=f2e110] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=f2e111]:
              - link "Terms & Conditions" [ref=f2e112] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=f2e113]:
          - heading "Customer Service" [level=5] [ref=f2e114]
          - list [ref=f2e115]:
            - listitem [ref=f2e116]:
              - link "Contact Us" [ref=f2e117] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=f2e118]:
              - link "Returns" [ref=f2e119] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=f2e120]:
              - link "Site Map" [ref=f2e121] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=f2e122]:
          - heading "Extras" [level=5] [ref=f2e123]
          - list [ref=f2e124]:
            - listitem [ref=f2e125]:
              - link "Brands" [ref=f2e126] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=f2e127]:
              - link "Gift Certificates" [ref=f2e128] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=f2e129]:
              - link "Affiliate" [ref=f2e130] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=f2e131]:
              - link "Specials" [ref=f2e132] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=f2e133]:
          - heading "My Account" [level=5] [ref=f2e134]
          - list [ref=f2e135]:
            - listitem [ref=f2e136]:
              - link "My Account" [ref=f2e137] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=f2e138]:
              - link "Order History" [ref=f2e139] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=f2e140]:
              - link "Wish List" [ref=f2e141] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=f2e142]:
              - link "Newsletter" [ref=f2e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=f2e144]
      - paragraph [ref=f2e145]:
        - text: Powered By
        - link "OpenCart" [ref=f2e146] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class RegistrationPage{
  4  | 
  5  |     private readonly page:Page;
  6  |     private readonly firstNameField:Locator;
  7  |     private readonly lastNameField:Locator;
  8  |     private readonly emailField:Locator;
  9  |     private readonly phoneNumberField:Locator;
  10 |     private readonly passwordField:Locator;
  11 |     private readonly passwordConfirmField:Locator;
  12 |     private readonly subscribeCheckBox:Locator;
  13 |     private readonly privacypolicyCheckbox:Locator;
  14 |     private readonly continueTab:Locator;
  15 |     private readonly confirmMsg:Locator;
  16 | 
  17 |     constructor(page:Page)
  18 |     {
  19 |         this.page = page;
  20 |         this.firstNameField = page.locator("#input-firstname");
  21 |         this.lastNameField = page.locator("#input-lastname");
  22 |         this.emailField = page.locator("#input-email");
  23 |         this.phoneNumberField = page.locator("#input-telephone");
  24 |         this.passwordField = page.locator("#input-password");
  25 |         this.passwordConfirmField = page.locator("#input-confirm");
  26 |         this.subscribeCheckBox = page.locator(".radio-inline").nth(0);
  27 |         this.privacypolicyCheckbox = page.locator("input[name='agree']");
  28 |         this.continueTab = page.locator("input[value='Continue']");
  29 |         this.confirmMsg = page.locator("'h1:has-text('Your Account Has Been Created!')")
  30 |     }
  31 | 
  32 |     async setFirstName(fname:string)
  33 |     {
  34 |         await this.firstNameField.fill(fname);
  35 |     }
  36 | 
  37 |     async setLastName(lastName:string)
  38 |     {
  39 |         await this.lastNameField.fill(lastName);
  40 |     }
  41 | 
  42 |     async setEmail(email:string)
  43 |     {
  44 |         await this.emailField.fill(email);
  45 |     }
  46 | 
  47 |     async setPhoneNumber(phoneNumber:string)
  48 |     {
  49 |         await this.phoneNumberField.fill(phoneNumber);
  50 |     }
  51 | 
  52 |     async setPassword(password:string)
  53 |     {
  54 |         await this.passwordField.fill(password);
  55 |     }
  56 | 
  57 |     async confirmPassword(password:string)
  58 |     {
  59 |         await this.passwordConfirmField.fill(password);
  60 |     }
  61 | 
  62 |     async checkSubscriptionBtn()
  63 |     {
  64 |         await this.subscribeCheckBox.click();
  65 |     }
  66 | 
  67 |     async checkPrivacyPolicyBox()
  68 |     {
  69 |         await this.privacypolicyCheckbox.click();
  70 |     }
  71 | 
  72 |     async clickContinueTab()
  73 |     {
  74 |         await this.continueTab.click();
  75 |     }
  76 | 
  77 |     async getConfirmMsg()
  78 |     {
> 79 |        return await this.confirmMsg.textContent();
     |                                     ^ Error: locator.textContent: Unexpected token "Your" while parsing css selector "'h1:has-text('Your Account Has Been Created!')". Did you mean to CSS.escape it?
  80 |     }
  81 | 
  82 |     
  83 | 
  84 | 
  85 | 
  86 | 
  87 | 
  88 | 
  89 | }
```