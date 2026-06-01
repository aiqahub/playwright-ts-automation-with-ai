# Control Flow: `if...else` in JavaScript (Automation Context)

The `if...else` statement is the most fundamental control flow mechanism in JavaScript. It allows your code to make decisions and execute different blocks of code based on certain conditions (boolean expressions).

In the context of test automation (like Playwright), `if...else` is crucial for handling dynamic scenarios, cross-browser execution, and environment-specific setups.

---

## 1. The basic `if` statement

The `if` statement executes a block of code ONLY if the specified condition evaluates to `true`.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if condition is true
}
```

**Automation Example:**
Imagine you only want to take a screenshot if you are running tests in headless mode to save execution time in headed mode.

```javascript
let isHeadless = true;

if (isHeadless) {
    console.log("Running in Headless mode. Taking screenshot...");
    // page.screenshot({ path: 'screenshot.png' });
}
```

---

## 2. The `if...else` statement

Use `if...else` to specify a block of code to execute if the condition is `true`, and a DIFFERENT block of code to execute if the condition is `false`.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

**Automation Example:**
Determining the Base URL depending on whether you are testing the Production or Staging environment.

```javascript
let isProduction = false;
let baseUrl = "";

if (isProduction) {
    baseUrl = "https://www.myapp.com";
    console.log("Targeting Production Environment");
} else {
    baseUrl = "https://staging.myapp.com";
    console.log("Targeting Staging Environment");
}
```

---

## 3. The `if...else if...else` statement

When you have multiple, mutually exclusive conditions to check, you can chain them using `else if`. The final `else` acts as a fallback if NONE of the preceding conditions are met.

**Syntax:**
```javascript
if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition1 is false AND condition2 is true
} else {
    // Executes if BOTH condition1 and condition2 are false
}
```

**Automation Example:**
Setting up specific browser options based on the chosen browser type.

```javascript
let browserName = "webkit"; // chromium, firefox, webkit

if (browserName === "chromium") {
    console.log("Launching Chromium with specific Chrome args...");
    // chromium.launch({ args: ['--start-maximized'] });
} else if (browserName === "firefox") {
    console.log("Launching Firefox with custom profile...");
    // firefox.launch({ firefoxUserPrefs: { ... } });
} else if (browserName === "webkit") {
    console.log("Launching WebKit for Safari testing...");
    // webkit.launch();
} else {
    console.log(`Error: Unsupported browser type '${browserName}'. Defaulting to Chromium.`);
    // chromium.launch();
}
```

---

## 4. Nested `if` statements

You can place an `if` statement inside another `if` statement. This is useful when a secondary condition should only be checked if a primary condition is met.

**Automation Example:**
Clicking a "Submit" button only if it is visible AND enabled.

```javascript
let isButtonVisible = true;
let isButtonEnabled = false;

if (isButtonVisible) {
    console.log("Button is visible. Now checking if it's enabled...");
    
    if (isButtonEnabled) {
        console.log("Action: Clicking the Submit button.");
    } else {
        console.log("Action: Cannot click. The button is visible but disabled (e.g., waiting for required fields).");
    }
    
} else {
    console.log("Action: Scrolling to find the button or throwing an error because it's not visible.");
}
```

> [!TIP]
> **Best Practice:** Avoid deeply nested `if` statements (more than 2-3 levels deep) as it makes code hard to read (often called "Callback Hell" or the "Arrow Anti-Pattern"). Use logical operators (`&&`, `||`) or `return` early to keep code flat.
