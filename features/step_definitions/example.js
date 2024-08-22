// features/steps/steps.js
const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { Selector } = require('testcafe');
const createTestCafe = require('testcafe');

setDefaultTimeout(60 * 1000);

let testcafe = null;
let runner = null;
let testController = null;

Given('I open Appian', async function () {
    if (!testcafe) {
        testcafe = await createTestCafe();
    }
    if (!runner) {
        runner = testcafe.createRunner();
    }
    // Navega a la página de Google
    const testcafeTest = runner
        .src('features/testcafe/appian-test.js')
        .browsers('chrome')
        .run();

    await testcafeTest;
});

Then('I Click the option En otro lugar', async function () {
    // La verificación real se hace en el archivo de prueba de TestCafe.
});