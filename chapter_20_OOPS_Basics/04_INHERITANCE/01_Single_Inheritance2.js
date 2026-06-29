class BaseTest {
    setup() {
        console.log("Base: Open browser");
    }

    tearDown() {
        console.log("Base: Close browser");
    }
}

class LoginTest extends BaseTest {
    setup() {
        super.setup();
        console.log("LoginTest: Navigate to login page");
    }

    tearDown() {
        console.log("LoginTest: Clear login credentials");
        super.tearDown();
    }
}

let loginTest = new LoginTest();
loginTest.setup();
console.log("Executing login test...");
loginTest.tearDown();