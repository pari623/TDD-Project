import {Page, Locator} from '@playwright/test';

export class ProductPage{

private readonly page:Page;
private readonly qtyField:Locator;
private readonly addToCartTab:Locator;
private readonly confimMsg:Locator;
private readonly itemsTab:Locator;
private readonly viewCartTab:Locator;


constructor(page:Page)
{
  this.page = page;  
  this.qtyField = page.locator("input[name='quantity']");
  this.addToCartTab = page.getByRole('button',{name:'Add to Cart'});
  this.confimMsg = page.locator(".alert.alert-success");
  this.itemsTab = page.locator(".btn.btn-inverse.btn-block");
  this.viewCartTab = page.getByText("View Cart"); //.fa.fa-shopping-cart.nth(2)
}

async setQuantity(quantity:string)
{
  await this.qtyField.fill(quantity);
}

async addToCart()
{
  await this.addToCartTab.click();
}

async isConfirmMsgVisible()
{
  if(this.confimMsg)
    return true;
  else
    return false;
}

async clickItemsToNavigateToCart()
{
  await this.viewCartTab.click();
}

async clickViewCart()
{
  await this.viewCartTab.click();
  
}

}
