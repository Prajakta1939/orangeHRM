module.exports = {
  'Login to orangeHRM': function (browser) {
    browser
      .url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Open the Facebook login page
      .waitForElementVisible('input[name="username"]', 5000) // Wait for the email input field to be visible
      .setValue('input[name="username"]', 'Admin') // Enter your email
      .setValue('input[name="password"]', 'admin123') // Enter your password
      .click('button[name="login"]') // Click the login button
      .waitForElementVisible("//span[text()='Dashboard']", 10000) // Wait for the home page to load after login
      .assert.title('OrangeHRM') // Assert that the page title is 'Facebook'
      .end(); // Close the browser and end the test
  },
};
