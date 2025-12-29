import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private username = '#user-name';
  private password = '#password';
  private loginButton = '#login-button';

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }
}
