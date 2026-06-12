// Real QA scenario for callback hell: A test suite with multiple asynchronous operations that
// depend on each other, such as setting up test data, running tests, and cleaning up after tests.

// Example of callback hell in a test suite:
// Openbrowser -> Login -> Create Test Data -> Run Test -> Logout -> Close Browser

function openBrowser(callback) {
    console.log("Browser opened");
    setTimeout(callback, 1000); // Simulate async operation
}

function login(callback) {
    console.log("Logged in");
    setTimeout(callback, 1000);
}

function createTestData(callback) {
    console.log("Test data created");
    setTimeout(callback, 1000);
}

function runTest(callback) {
    console.log("Test run");
    setTimeout(callback, 1000);
}

function logout(callback) {
    console.log("Logged out");
    setTimeout(callback, 1000);
}

function closeBrowser() {
    console.log("Browser closed");
}

// Callback hell: nested callbacks for sequential operations
openBrowser(function () {
    login(function () {
        createTestData(function () {
            runTest(function () {
                logout(function () {
                    closeBrowser();
                });
            });
        });
    });
});
