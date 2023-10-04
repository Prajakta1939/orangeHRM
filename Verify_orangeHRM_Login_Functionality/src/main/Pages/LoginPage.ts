// src/main/Pages/loginPage_orangeHRM.ts

import { NightwatchBrowser } from 'nightwatch';

export default class LoginPage {
  constructor(private browser: NightwatchBrowser) {}

  public navigateToLoginPage() {
    return this.browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  public login(username: string, password: string) {
    this.browser.setValue('input[name="username"]', username);
    this.browser.setValue('input[name="password"]', password);
    this.browser.useXpath().click("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']");
  }
}
