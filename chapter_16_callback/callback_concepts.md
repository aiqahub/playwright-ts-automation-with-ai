# Callback Functions in JavaScript — Complete Guide
> All examples use automation testing scenarios to build mental models for Playwright.

---

## 1. What is a Callback Function?

A callback is a function passed as an argument to another function, which then calls it later.

```js
function launchBrowser(browserName, callback) {
  console.log("Launching: " + browserName);
  callback(); // executes the passed function
}

function onBrowserReady() {
  console.log("Browser is ready. Starting tests...");
}

launchBrowser("Chromium", onBrowserReady);
// Output:
// Launching: Chromium
// Browser is ready. Starting tests...
```

**Key idea:** `launchBrowser` controls WHEN `onBrowserReady` runs — not the caller.

---

## 2. Anonymous vs Named Callbacks

### Named Callback
```js
function verifyTitle() {
  console.log("Verifying page title...");
}

setTimeout(verifyTitle, 1000); // function reference, no ()
```

### Anonymous Callback
```js
setTimeout(function() {
  console.log("Verifying page title...");
}, 1000);
```

### Arrow Function Callback
```js
setTimeout(() => {
  console.log("Verifying page title...");
}, 1000);
```

All three do the same thing. Arrow functions are the most common in modern code.

---

## 3. Synchronous Callbacks

Called **immediately**, in the same flow, before moving to the next line.

```js
const testResults = ["Passed", "Failed", "Skipped", "Passed", "Failed"];

// forEach runs the callback once per item, right now
testResults.forEach(function(result) {
  console.log("Test result:", result);
});

console.log("All results printed"); // this runs AFTER forEach finishes
```

Other built-in synchronous callbacks:

```js
// filter — find only failed tests
const failures = testResults.filter(result => result === "Failed");
console.log(failures); // ["Failed", "Failed"]

// map — transform results into report lines
const report = testResults.map((result, index) => `Test ${index + 1}: ${result}`);
console.log(report);
// ["Test 1: Passed", "Test 2: Failed", ...]
```

---

## 4. Asynchronous Callbacks

Called **later**, after some async work is done (timers, file I/O, network).

```js
function openBrowser(callback) {
  console.log("Opening browser...");
  setTimeout(callback, 1000); // simulate async browser launch
}

console.log("Before openBrowser");

openBrowser(function() {
  console.log("Inside callback — browser is open");
});

console.log("After openBrowser call"); // prints BEFORE the callback!
```

**Output:**
```
Before openBrowser
Opening browser...
After openBrowser call        <-- runs before callback
Inside callback — browser is open
```

This is the event loop at work. Async callbacks go into the queue and run after the current script finishes.

---

## 5. Passing Data Through Callbacks

Callbacks can receive arguments from the function that calls them.

```js
function runTest(testName, callback) {
  console.log("Running: " + testName);
  const passed = true; // simulate test execution
  callback(passed, testName); // pass result data to callback
}

runTest("Login Test", function(result, name) {
  if (result) {
    console.log(name + " PASSED");
  } else {
    console.log(name + " FAILED");
  }
});
```

---

## 6. Error-First Callbacks (Node.js Convention)

The standard pattern in Node.js: **first argument is always the error**, second is the result.

```js
function readTestConfig(filePath, callback) {
  const fs = require("fs");
  fs.readFile(filePath, "utf8", function(err, data) {
    callback(err, data); // pass both to caller
  });
}

readTestConfig("./config.json", function(err, config) {
  if (err) {
    console.log("Failed to load config:", err.message);
    return; // always return after handling error
  }
  console.log("Config loaded:", config);
});
```

**Rule:** Always check `err` before using the data. Always `return` after handling the error.

---

## 7. Callback Hell

When async operations depend on each other, nesting callbacks gets out of control fast.

```js
// Full automation flow: Open → Login → Create Data → Run Test → Logout → Close
openBrowser(function() {
  login(function() {
    createTestData(function() {
      runTest(function() {
        logout(function() {
          closeBrowser();
          // deeply nested, hard to read, hard to debug
        });
      });
    });
  });
});
```

**Problems:**
- Hard to read (the "pyramid of doom")
- Error handling must be repeated at every level
- Hard to refactor or reorder steps

**Solution:** Promises and async/await (covered in `chapter_xx_promise`)

---

## 8. Higher-Order Functions and Callbacks

A **higher-order function** is any function that accepts a callback or returns a function.

```js
// runWithLogging is a higher-order function — mirrors a test runner pattern
function runWithLogging(testFn, testName) {
  console.log(`[START] ${testName}`);
  testFn(); // execute the test
  console.log(`[END]   ${testName}`);
}

function loginTest() {
  console.log("  Filling username and password...");
  console.log("  Clicking login button...");
  console.log("  Asserting dashboard visible...");
}

runWithLogging(loginTest, "Login Test");
```

**Output:**
```
[START] Login Test
  Filling username and password...
  Clicking login button...
  Asserting dashboard visible...
[END]   Login Test
```

This exact pattern is how `test()` and `it()` work in Playwright and Jest.

---

## 9. `this` Inside Callbacks

Regular function callbacks lose `this`. Arrow functions inherit it from the outer scope.

```js
const testSuite = {
  name: "Checkout Suite",
  run: function() {
    // Regular function — 'this' is lost inside setTimeout
    setTimeout(function() {
      console.log(this.name); // undefined
    }, 500);

    // Arrow function — 'this' is inherited from run()
    setTimeout(() => {
      console.log(this.name); // "Checkout Suite"
    }, 500);
  }
};

testSuite.run();
```

**Rule of thumb:** Use arrow functions as callbacks when you need access to `this`.

---

## 10. Callbacks vs Promises — Quick Comparison

| | Callback | Promise |
|---|---|---|
| Error handling | Repeated at every level | One `.catch()` |
| Chaining | Nested (pyramid of doom) | Flat `.then()` chain |
| Readability | Degrades with depth | Stays readable |
| Playwright uses | No | Yes — `async/await` |

Callbacks are the **foundation**. Promises and async/await are built on top of them.

---

## Summary

| Concept | Key Point |
|---|---|
| Callback | Function passed as argument, called by receiver |
| Synchronous callback | Runs immediately (forEach, map, filter) |
| Asynchronous callback | Runs later (setTimeout, fs.readFile) |
| Error-first | `(err, data)` — always check err first |
| Callback hell | Deep nesting from chained async callbacks |
| Higher-order function | Any function that takes or returns a function |
| `this` in callbacks | Use arrow functions to preserve `this` |
