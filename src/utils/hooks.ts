import { setDefaultTimeout, After, AfterAll, Before, BeforeAll, BeforeStep, AfterStep } from '@cucumber/cucumber';
import { chromium, Page, Browser } from 'playwright';

export let page: Page
export let browser: Browser

setDefaultTimeout(10_000); // 10 seconds

BeforeAll(async function () {
  // Code to run once before all Scenarios
});

Before(async function () {
  // Launch a Chromium browser
  browser = await chromium.launch({ headless: true }); // Set to true when running in a docker container

  // Create a new page in the browser
  this.page = await browser.newPage();
});

BeforeStep(async function () {
  // Code to run before each Step in a Scenario
});

AfterStep(async function () {
  // Code to run after each Step in a Scenario
});

After(async function () {
  await this.page?.close()
  await browser.close()
});

AfterAll(async function () {
  // Code to run once after all Scenarios
});
