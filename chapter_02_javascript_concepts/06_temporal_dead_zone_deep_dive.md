# Deep Dive: Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is one of the most important concepts in modern JavaScript (ES6+). It explains why `let` and `const` behave differently from `var` when it comes to hoisting.

---

## 1. What is the TDZ?

The TDZ is the area of a block where a variable is **in scope** but **cannot be accessed** because it has not yet been initialized.

It starts at the beginning of the variable's enclosing block and ends when the variable is initialized (the line where it is declared).

```javascript
{
    // --- TDZ Starts for 'myVar' ---
    console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
    
    let myVar = 10;     // --- TDZ Ends for 'myVar' ---
    console.log(myVar); // 10
}
```

---

## 2. The Variable Lifecycle

To understand TDZ, you must understand the three phases of a variable's life in JavaScript:

1.  **Declaration Phase**: The variable name is registered in the scope. (This is **Hoisting**).
2.  **Initialization Phase**: The variable is allocated memory and given an initial value (like `undefined`).
3.  **Assignment Phase**: A specific value is assigned to the variable.

### `var` vs `let/const` Lifecycle

| Phase | `var` | `let` / `const` |
| :--- | :--- | :--- |
| **Declaration** | Hoisted to top of scope | Hoisted to top of scope |
| **Initialization** | **Happens immediately** (set to `undefined`) | **Does NOT happen** until code execution reaches the declaration line |
| **TDZ?** | No | **Yes** (Period between Declaration and Initialization) |

---

## 3. Why does TDZ exist?

1.  **Catching Errors Early**: In older JavaScript (`var`), using a variable before defining it would silently return `undefined`. This often led to hard-to-find bugs. TDZ forces you to declare variables before using them, which is a better programming practice.
2.  **Consistency for `const`**: A `const` variable must be initialized when it is declared. If it were hoisted as `undefined` (like `var`), it would violate the "constant" rule (it would change from `undefined` to its real value).

---

## 4. Common "Gotcha" Examples

### A. The Shadowing Trap
Even if a global variable exists, a local `let` declaration will create a TDZ in its block, blocking access to the global one.

```javascript
let x = "global";

function test() {
    console.log(x); // ReferenceError!
    let x = "local";
}
```

### B. TDZ in Function Parameters
Parameters are initialized from left to right. A parameter on the right cannot access a parameter on the left if it's in the TDZ.

```javascript
function greet(a = b, b = 10) { 
    // ReferenceError: b is in TDZ when 'a' is being initialized
}
```

---

## 5. Summary
*   **Hoisting** moves the declaration to the top.
*   **TDZ** prevents access until the initialization is reached.
*   **`var`** is initialized with `undefined` during hoisting, so it has no TDZ.
*   **`let` & `const`** stay uninitialized during hoisting, creating the TDZ.
