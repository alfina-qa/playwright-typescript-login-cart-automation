import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  private addToCartBtn =
    'button[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartIcon = '.shopping_cart_link';

  async addProductToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}
