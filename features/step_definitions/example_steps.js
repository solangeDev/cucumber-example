const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require('assert');
const { Builder } = require('selenium-webdriver');
setDefaultTimeout(60 * 1000);
let driver;

Given('I open Google', async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
});

Then('the title should be {string}', async function(title) {
    const pageTitle = await driver.getTitle();
    assert.strictEqual(pageTitle, title);
    await driver.quit();
});