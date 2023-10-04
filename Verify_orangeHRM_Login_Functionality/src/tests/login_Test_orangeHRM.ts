

import { NightwatchBrowser } from 'nightwatch';
import {LoginPage} from './Verify_orangeHRM_Login_Functionality/src/main/Pages/LoginPage.ts';
export default {
  '@tags': ['login'],
  'Login Test': (browser: NightwatchBrowser) => {
    const loginPage = new LoginPage(browser);

    loginPage.navigateToLoginPage();

    browser.perform((done) => {
      require('csv-parser')
        .fromFile('./Data/loginData.csv')
        .on('data', (data: { username: any; password: any; }) => {
          const { username, password } = data;
          loginPage.login(username, password);

          browser.expect.element('Dashboard').to.be.present; 

        

          browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Go back to the login page
        })
        .on('end', () => {
          done();
        });
    });

    browser.end();
  },
};
