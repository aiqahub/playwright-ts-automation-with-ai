// Polymorphism — Method Overriding
// Same method name `run()`, different behaviour per test type.

class BaseTest {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`Running base test: ${this.name}`);
    }
}

class UITest extends BaseTest {
    run() {
        console.log(`[UI]  Launching browser and running: ${this.name}`);
    }
}

class APITest extends BaseTest {
    run() {
        console.log(`[API] Sending HTTP request for: ${this.name}`);
    }
}

class DBTest extends BaseTest {
    run() {
        console.log(`[DB]  Querying database for: ${this.name}`);
    }
}

// --- polymorphism in action ---
// The loop does not care what type each test is.
// It just calls .run() and JS dispatches to the right version at runtime.

const testSuite = [
    new UITest("Login Page Test"),
    new APITest("Create User API Test"),
    new DBTest("Verify User Record Test"),
    new UITest("Dashboard Load Test"),
];

testSuite.forEach(test => test.run());

// Output:
// [UI]  Launching browser and running: Login Page Test
// [API] Sending HTTP request for: Create User API Test
// [DB]  Querying database for: Verify User Record Test
// [UI]  Launching browser and running: Dashboard Load Test
