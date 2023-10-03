module.exports = {
  'Login to Facebook': function (browser) {
    browser
      .url('https://www.facebook.com/') // Open the Facebook login page
      .waitForElementVisible('input[name="email"]', 5000) // Wait for the email input field to be visible
      .setValue('input[name="email"]', 'your_email@example.com') // Enter your email
      .setValue('input[name="pass"]', 'your_password') // Enter your password
      .click('button[name="login"]') // Click the login button
      .waitForElementVisible('div[aria-label="Home"]', 10000) // Wait for the home page to load after login
      .assert.title('Facebook') // Assert that the page title is 'Facebook'
      .end(); // Close the browser and end the test
  },
};
