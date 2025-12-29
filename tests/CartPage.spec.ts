import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('User can add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await cartPage.addProductToCart();
  await cartPage.openCart();

  await expect(page.locator('.cart_item')).toBeVisible();
});
