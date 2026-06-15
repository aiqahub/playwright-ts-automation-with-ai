function openBrowser() {
    console.log("Opening browser...");
    let isBrowserOpened = true;
    return new Promise(function (resolve, reject) {
        if (isBrowserOpened) {
            resolve("Browser opened!");
        } else {
            reject("Failed to open browser.");
        }
    });
}

function goToLogin() {
    console.log("Navigating to login page...");
    let isLoginPageLoaded = true;
    return new Promise(function (resolve, reject) {
        if (isLoginPageLoaded) {
            resolve("Login page loaded");
        } else {
            reject("Failed to load login page.");
        }
    });
}

function enterCredentials() {
    console.log("Entering credentials...");
    let areCredentialsValid = false;
    return new Promise(function (resolve, reject) {
        if (areCredentialsValid) {
            resolve("Credentials entered");
        } else {
            reject("Invalid credentials.");
        }
    });
}

function clickLogin() {
    console.log("Clicking login button...");
    return new Promise(function (resolve, reject) {
        let isLoginSuccessful = true;
        if (isLoginSuccessful) {
            resolve("Logged in successfully");
        } else {
            reject("Failed to log in.");
        }
    });
}

openBrowser()
    .then(function (msg) {
        console.log(msg);
        return goToLogin();
    }).then(function (msg) {
        console.log(msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log(msg);
        return clickLogin();
    }).then(function (msg) {
        console.log(msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });


// individual function call example

console.log("*********************Individual function calls:*****************");
openBrowser()
    .then(function (msg) {
        console.log(msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });

goToLogin().then(function (msg) {
    console.log(msg);
}).catch(function (error) {
    console.log("Error:", error);
}).finally(function () {
    console.log("Done execution!");
});

enterCredentials().then(function (msg) {
    console.log(msg);
}).catch(function (error) {
    console.log("Error:", error);
}).finally(function () {
    console.log("Done execution!");
});

clickLogin().then(function (msg) {
    console.log(msg);
}).catch(function (error) {
    console.log("Error:", error);
}).finally(function () {
    console.log("Done execution!");
});