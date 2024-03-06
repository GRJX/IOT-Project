import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { OneEMS } from '../utils/globalVariables';
import { HomeScreen, LoginScreen } from '../utils/pageObjects';
import { takeScreenshot } from '../utils/helpers';
import '../utils/hooks'; // Enable Cucumber hooks

let username: string;
let password: string;

Given('the user navigates to the web application', async function () {
  // Navigate to the login page
  await this.page.goto(OneEMS.BASE_URL);
  this.attach(`Navigate to ${OneEMS.BASE_URL}`);
  
  await takeScreenshot(this)
});

Given('valid username and password', async function () {
    // Declare username and password
    username = OneEMS.VALID_USERNAME;
    password = OneEMS.VALID_PASSWORD;
    this.attach(`Username is set to ${username}\nPassword is set to ${password}`);
});

Given('invalid username and password', async function () {
    // Declare username and password
    username = OneEMS.INVALID_USERNAME;
    password = OneEMS.INVALID_PASSWORD;
    this.attach(`Username is set to ${username}\nPassword is set to ${password}`);
});

Given('invalid invalid username or password', async function () {
    // Declare username and password
    username = OneEMS.VALID_USERNAME;
    password = OneEMS.INVALID_PASSWORD;
    this.attach(`Username is set to ${username}\nPassword is set to ${password}`);
});

When('the user enters the credentials', async function () {
    // Find the username and password fields and fill them in
    await this.page.fill(LoginScreen.USERNAME_INPUT, username);
    this.attach(`Object ${LoginScreen.USERNAME_INPUT} is set to ${username}`);
    await this.page.fill(LoginScreen.PASSWORD_INPUT, password);
    this.attach(`Object ${LoginScreen.PASSWORD_INPUT} is set to ${password}`);
});

When('user does not enter credentials', async function () {
    // Find the username and password fields and fill them in
    await this.page.fill(LoginScreen.USERNAME_INPUT, '');
    this.attach(`Object ${LoginScreen.USERNAME_INPUT} is set to ${username}`);
    await this.page.fill(LoginScreen.PASSWORD_INPUT, '');
    this.attach(`Object ${LoginScreen.PASSWORD_INPUT} is set to ${password}`);
});

When('tries to login', async function () {
    // Find the login button and click
    await this.page.click(LoginScreen.LOGIN_BUTTON);
    this.attach(`Perform click on ${LoginScreen.LOGIN_BUTTON}`);
});

When('the user enters the credentials for 3 consecutive times', async function () {
    for (let i = 0; i < 3; i++) {
        await this.page.fill(LoginScreen.USERNAME_INPUT, username);
        await this.page.fill(LoginScreen.PASSWORD_INPUT, password);
        await this.page.click(LoginScreen.LOGIN_BUTTON);
      }
})

Then('the user logs into the customer portal successfully', async function () {
    // Check for correct page
    const login = this.page.locator(LoginScreen.PAGE)
    expect(await login.waitFor({ state: 'visible'}))
    this.attach(`Wait for ${LoginScreen.PAGE} to be visible`);
    
    // Find the login button and click
    await this.page.click(LoginScreen.LOGIN_BUTTON);
    this.attach(`Perform click on ${LoginScreen.LOGIN_BUTTON}`);
    
    // Validate if the login page is closed and home page is opened
    expect(await login.waitFor({ state: 'hidden'}))
    this.attach(`Wait for ${LoginScreen.PAGE} to be hidden`);

    expect(await this.page.waitForURL(OneEMS.HOME_URL))
    this.attach(`Wait for ${OneEMS.HOME_URL}`);
    
    const home = this.page.locator(HomeScreen.PAGE)
    expect(await home.waitFor({ state: 'visible'}))
    this.attach(`Wait for ${HomeScreen.PAGE} to be visible`);
    
    await takeScreenshot(this)
});

Then('the user cannot login', async function () {
    // Find the login button and click
    await this.page.click(LoginScreen.LOGIN_BUTTON);
    await this.page.waitForSelector('#customer-portal');
});

Then('error message is displayed', async function () {
    await this.page.waitForSelector('#error-message');
});

Then('the login button is disabled', async function () {
    const loginButton = await this.page.waitForSelector(LoginScreen.LOGIN_BUTTON);
    const isActive = await loginButton.isEnabled();
    if (isActive) {
        throw new Error('Login button is enabled');
    }
});

Then('the user account is blocked', async function () {
    const message = await this.page.waitForSelector('#account-blocked-message');
    const text = await message.textContent();
    if (text !== 'Your account is blocked') {
      throw new Error('Incorrect account blocked message');
    }
});

// Interpret prameterised step definition
// Then('the user account is {string}', async function (type) {
//     // Do sometthing
// });