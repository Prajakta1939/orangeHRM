module.exports = {
  'Login to Facebook': function (browser) {
    browser
      .url('https://www.facebook.com/')   
       .waitForElementVisible('input[name="email"]', 5000) 
      .setValue('input[name="email"]', 'your_email@example.com') 
      .setValue('input[name="pass"]', 'your_password') 
      .click('button[name="login"]') 
      .waitForElementVisible('div[aria-label="Home"]', 10000) 
      .assert.title('Facebook') 
      .end();
  },
};
