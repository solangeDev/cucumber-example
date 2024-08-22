// world.js
const { setWorldConstructor } = require('@cucumber/cucumber');
const createTestCafe = require('testcafe');

let testcafe = null;
let runner = null;

function CustomWorld() {
    this.init = async function () {
        if (!testcafe) {
            testcafe = await createTestCafe();
        }
        if (!runner) {
            runner = testcafe.createRunner();
        }
        // Navigate to the URL using TestCafe
        // Set up any required state or configuration here
    };

    this.close = async function () {
        if (testcafe) {
            await testcafe.close();
            testcafe = null;
            runner = null;
        }
    };
}

setWorldConstructor(CustomWorld);