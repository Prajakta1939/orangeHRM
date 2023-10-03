// src/main/Tests/login_HRM.ts

import { NightwatchBrowser } from 'nightwatch';
import LoginPage from '../main/Pages/LoginPage.ts';
export default {
  '@tags': ['login'],
  'Login Test': (browser: NightwatchBrowser) => {
    const loginPage = new LoginPage(browser);

    loginPage.navigateToLoginPage();

    browser.perform((done) => {
      require('csv-parser')
        .fromFile('./data/loginData.csv')
        .on('data', (data) => {
          const { username, password } = data;
          loginPage.login(username, password);

          browser.expect.element('selector-for-logout-button').to.be.present; // Replace with actual selector

          // You can add more assertions here if needed

          browser.url('https://opensource-demo.orangehrmlive.com/'); // Go back to the login page
        })
        .on('end', () => {
          done();
        });
    });

    browser.end();
  },
};
