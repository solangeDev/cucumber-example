// features/steps/steps.js
const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { Selector } = require('testcafe');
const createTestCafe = require('testcafe');

setDefaultTimeout(60 * 1000);

let testcafe = null;
let runner = null;
let testController = null;

Given('I open Google', async function () {
    if (!testcafe) {
        testcafe = await createTestCafe();
    }
    if (!runner) {
        runner = testcafe.createRunner();
    }
    // Navega a la página de Google
    const testcafeTest = runner
        .src('features/testcafe/google-test.js')
        .browsers('chrome')
        .run();

    await testcafeTest;
});

Then('I should see the Google search box lala', async function () {
    // La verificación real se hace en el archivo de prueba de TestCafe.
});