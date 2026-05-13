# Interview Questions: Hoisting & Temporal Dead Zone (TDZ)

Understanding Hoisting and the Temporal Dead Zone (TDZ) is critical for JavaScript interviews, especially for roles involving framework automation like Playwright.

---

## 1. Conceptual Fundamentals

### What is Hoisting?
**Answer:** Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (global or function) during the compile phase, before code execution. Only the declarations are hoisted, not the initializations.

### What is the Temporal Dead Zone (TDZ)?
**Answer:** The TDZ is the period between the entering of a scope and the actual line where a variable is declared. If you try to access a `let` or `const` variable in this zone, JavaScript throws a `ReferenceError`.

### Why does TDZ exist?
**Answer:** 
1. **Catching Bugs:** Accessing variables before they are defined is usually a mistake.
2. **Predictability:** It makes code more predictable and easier to debug compared to the "silent" `undefined` behavior of `var`.

---

## 2. Comparative Questions

### How does hoisting differ between `var`, `let`, and `const`?
| Feature | `var` | `let` / `const` |
| :--- | :--- | :--- |
| **Hoisted?** | Yes | Yes |
| **Initial Value** | `undefined` | None (Unitialized) |
| **Error on early access?** | No (returns `undefined`) | Yes (`ReferenceError`) |

### Are function declarations hoisted? What about function expressions?
*   **Function Declarations:** Fully hoisted. You can call the function before its definition.
*   **Function Expressions (var):** The variable is hoisted as `undefined`. Calling it results in `TypeError: ... is not a function`.
*   **Function Expressions (let/const):** The variable is hoisted but in TDZ. Accessing it results in `ReferenceError`.

---

## 3. Tricky Output-Based Questions

### Q1: Variable Shadowing & TDZ
```javascript
let x = 10;
function test() {
    console.log(x); // What happens here?
    let x = 20;
}
test();
```
**Result:** `ReferenceError`. 
**Why?** Even though a global `x` exists, the local `x` is hoisted to the top of the `test()` function scope. This creates a TDZ for `x` within the function, making the global `x` inaccessible.

### Q2: Multiple Hoisting (Function vs Variable)
```javascript
console.log(typeof foo); // What is the output?

var foo = "I am a string";

function foo() {
    return "I am a function";
}
```
**Result:** `function`. 
**Why?** Function declarations are hoisted **above** variable declarations. However, if the variable is assigned a value later, that value will overwrite the function name during the execution phase.

### Q3: Hoisting in Loops
```javascript
// Example A (var)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Example B (let)
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}
```
**Result:** 
*   **Example A:** Prints `3, 3, 3` (because `var` is function-scoped/global and shared).
*   **Example B:** Prints `0, 1, 2` (because `let` creates a new block scope for every iteration).

---

## Quick Reference Summary Table

| Feature | Hoisted? | Initial Value | Access before declaration |
| :--- | :--- | :--- | :--- |
| **`var`** | Yes | `undefined` | Returns `undefined` |
| **`let` / `const`** | Yes | None | `ReferenceError` (TDZ) |
| **Function Decl.** | Yes | Actual Function | Works perfectly |
| **Arrow Functions** | No (as variables) | Depends on `var/let` | `TypeError` or `ReferenceError` |
