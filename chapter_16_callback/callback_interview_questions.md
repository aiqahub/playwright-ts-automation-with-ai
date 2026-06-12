# Callback Functions — Interview Questions & Answers

---

## Basic Level

---

**Q1. What is a callback function?**

A function passed as an argument to another function and executed by it at a later point.

```js
function runTest(testName, callback) {
  console.log("Running: " + testName);
  callback(); // executes the passed function
}

runTest("Login Test", function() {
  console.log("Test complete");
});
```

---

**Q2. Why do we use callback functions?**

To handle operations that take time (async) or to let the caller customize behavior (sync). Without callbacks, async code would block the entire program.

```js
// Without callback — blocks until browser opens
openBrowser(); // waits here...
login();       // only runs after

// With callback — non-blocking
openBrowser(function() {
  login(); // runs when browser is actually ready
});
```

---

**Q3. What is the difference between a regular function call and a callback?**

A regular call executes immediately by you. A callback is passed to another function which decides when to call it.

```js
verifyTitle();            // you call it — runs right now

setTimeout(verifyTitle, 1000); // setTimeout calls it — runs after 1 second
//                   ^ no () here — passing reference, not calling it
```

---

**Q4. What happens if you add `()` when passing a callback?**

The function executes immediately and its return value (usually `undefined`) is passed instead of the function itself — the callback never runs correctly.

```js
function runTest(callback) {
  callback();
}

function loginTest() {
  console.log("Login test running");
}

runTest(loginTest);   // correct — passes the function
runTest(loginTest()); // wrong — calls loginTest() immediately, passes undefined
```

---

**Q5. What is an anonymous callback?**

A callback defined inline without a name.

```js
// named callback
runTest("Login", loginTest);

// anonymous callback
runTest("Login", function() {
  console.log("Login test running");
});

// anonymous arrow callback
runTest("Login", () => {
  console.log("Login test running");
});
```

---

**Q6. What is the difference between synchronous and asynchronous callbacks?**

A synchronous callback runs immediately in the current flow. An asynchronous callback runs later, after the current code finishes.

```js
// Synchronous — forEach runs callback right now for each item
["Login", "Signup", "Checkout"].forEach(test => {
  console.log("Running: " + test);
});
console.log("Done"); // prints AFTER all tests

// Asynchronous — setTimeout runs callback later
setTimeout(() => {
  console.log("Running delayed test");
}, 1000);
console.log("Done"); // prints BEFORE the callback
```

---

**Q7. Give examples of built-in functions that use synchronous callbacks.**

`forEach`, `map`, `filter`, `find`, `reduce`, `sort`, `every`, `some`.

```js
const results = ["Passed", "Failed", "Passed", "Skipped", "Failed"];

const failures = results.filter(r => r === "Failed");
// ["Failed", "Failed"]

const passed = results.every(r => r === "Passed");
// false — not all passed

const anyFailed = results.some(r => r === "Failed");
// true
```

---

**Q8. Give examples of built-in functions that use asynchronous callbacks.**

`setTimeout`, `setInterval`, `fs.readFile`, `http.get`, event listeners.

```js
const fs = require("fs");

// async — callback runs when file is read
fs.readFile("./testConfig.json", "utf8", function(err, data) {
  console.log("Config loaded:", data);
});

console.log("This prints first"); // runs before file is read
```

---

## Intermediate Level

---

**Q9. What is the error-first callback pattern?**

A Node.js convention where the first argument of every callback is an error object (`null` if no error), and the second is the result. Always check the error before using the data.

```js
const fs = require("fs");

fs.readFile("./testData.json", "utf8", function(err, data) {
  if (err) {
    console.log("Failed to load test data:", err.message);
    return; // stop execution
  }
  console.log("Test data:", data);
});
```

---

**Q10. What is callback hell? How do you identify it?**

Deeply nested callbacks that form a "pyramid of doom", making code hard to read, debug, and maintain. You identify it by seeing multiple levels of indentation with functions nested inside each other.

```js
// Callback hell — automation test flow
openBrowser(function() {
  login(function() {
    navigateToCheckout(function() {
      fillForm(function() {
        submitOrder(function() {
          verifyConfirmation(function() {
            closeBrowser();
          });
        });
      });
    });
  });
});
```

---

**Q11. How do you fix callback hell?**

Three approaches:

1. **Named functions** — extract each callback into a named function
2. **Promises** — chain `.then()` instead of nesting
3. **async/await** — write async code that reads like sync code

```js
// Fix 1: Named functions — flatten the nesting
function onBrowserOpen() { login(onLogin); }
function onLogin()       { navigateToCheckout(onNavigate); }
function onNavigate()    { fillForm(onFormFilled); }
function onFormFilled()  { submitOrder(onOrderSubmit); }
function onOrderSubmit() { verifyConfirmation(onVerified); }
function onVerified()    { closeBrowser(); }

openBrowser(onBrowserOpen); // flat, readable

// Fix 2: async/await (best for Playwright)
async function runCheckoutTest() {
  await openBrowser();
  await login();
  await navigateToCheckout();
  await fillForm();
  await submitOrder();
  await verifyConfirmation();
  await closeBrowser();
}
```

---

**Q12. What is a higher-order function?**

Any function that accepts another function as an argument or returns a function. All functions that take callbacks are higher-order functions.

```js
// runWithLogging is a higher-order function — mirrors test() in Playwright/Jest
function runWithLogging(testFn, testName) {
  console.log(`[START] ${testName}`);
  testFn();
  console.log(`[END]   ${testName}`);
}

runWithLogging(() => {
  console.log("  Asserting page title...");
}, "Title Verification Test");
```

---

**Q13. What is the difference between `callback()` and `return callback()`?**

`callback()` calls the function and discards the return value. `return callback()` calls it and passes its return value back to the outer caller. Also, `return callback()` stops any code after it from running.

```js
function processResult(value, callback) {
  if (value < 0) return callback("Invalid value"); // stops here
  callback(null, value * 2); // only runs if value >= 0
}
```

---

**Q14. How does `this` behave inside a callback?**

In a regular function callback, `this` is determined by how the function is called — often `undefined` (strict mode) or global object. Arrow function callbacks inherit `this` from the enclosing scope.

```js
const testSuite = {
  name: "Cart Suite",
  runAll: function() {
    // regular function — 'this' is lost
    setTimeout(function() {
      console.log(this.name); // undefined
    }, 500);

    // arrow function — 'this' is inherited from runAll
    setTimeout(() => {
      console.log(this.name); // "Cart Suite"
    }, 500);
  }
};

testSuite.runAll();
```

---

**Q15. Can a callback be called multiple times?**

Yes. Nothing prevents a callback from being called more than once. This is intentional in `forEach`, `setInterval`, and event listeners, but accidental double-calling is a common bug.

```js
// Intentional — setInterval calls the callback repeatedly
setInterval(() => {
  console.log("Checking test health...");
}, 5000); // every 5 seconds

// Bug — callback called twice accidentally
function runTest(callback) {
  callback(); // first call
  if (true) {
    callback(); // second call — unintended
  }
}
```

---

## Advanced Level

---

**Q16. What is the difference between a callback and a Promise?**

| | Callback | Promise |
|---|---|---|
| Error handling | At every nesting level | One `.catch()` at the end |
| Chaining | Nested | Flat `.then()` |
| Multiple async | Pyramid of doom | Clean chain |
| Composability | Hard | Easy |

```js
// Callback
login(function(err, session) {
  if (err) return handleError(err);
  getProfile(session, function(err, profile) {
    if (err) return handleError(err);
    console.log(profile);
  });
});

// Promise
login()
  .then(session => getProfile(session))
  .then(profile => console.log(profile))
  .catch(err => handleError(err));
```

---

**Q17. Are Promises and async/await built on callbacks?**

Yes. Under the hood, Promises use callbacks. `async/await` is syntactic sugar over Promises, which are built on callbacks. Callbacks are the foundation of all async JavaScript.

---

**Q18. What is `callbackify` in Node.js?**

A utility (`util.callbackify`) that converts a Promise-returning function into a callback-style function (error-first). Used to bridge modern Promise-based code with older callback-based APIs.

```js
const util = require("util");

async function runTest() {
  return "Passed";
}

const callbackVersion = util.callbackify(runTest);

callbackVersion(function(err, result) {
  if (err) throw err;
  console.log("Result:", result); // "Passed"
});
```

---

**Q19. How would you handle errors across multiple async callbacks without repeating error handling?**

Extract a reusable error handler and pass it to each callback, or switch to Promises/async-await with a single `.catch()`.

```js
function handleError(err) {
  console.error("Test failed:", err.message);
  closeBrowser();
}

openBrowser(function(err) {
  if (err) return handleError(err);
  login(function(err) {
    if (err) return handleError(err);
    runTest(function(err) {
      if (err) return handleError(err);
      console.log("All steps passed");
    });
  });
});
```

---

**Q20. In Playwright, where do callbacks appear?**

Playwright uses `async/await` (built on Promises), but callbacks still appear in:

- `page.on("request", callback)` — event listeners
- `page.waitForFunction(callback)` — custom polling logic
- `test.beforeEach(callback)` / `test.afterEach(callback)` — test lifecycle hooks
- `page.evaluate(callback)` — running code in the browser context

```js
// Event listener callback — fires on every network request
page.on("request", (request) => {
  console.log("Request URL:", request.url());
});

// Lifecycle hook callback — runs before every test
test.beforeEach(async ({ page }) => {
  await page.goto("https://example.com");
});
```

---

## Quick Reference

| Question Theme | Key Point |
|---|---|
| Definition | Function passed as argument, called by receiver |
| `()` mistake | Passing `fn()` calls it immediately — pass `fn` instead |
| Sync vs Async | Sync runs now; async runs after current code |
| Error-first | `(err, data)` — check err before using data |
| Callback hell | Deep nesting; fix with named functions or Promises |
| `this` loss | Use arrow functions inside callbacks |
| HOF | Any function that takes or returns a function |
| Promises | Built on callbacks; solve callback hell |
| Playwright | Callbacks appear in event listeners and lifecycle hooks |
