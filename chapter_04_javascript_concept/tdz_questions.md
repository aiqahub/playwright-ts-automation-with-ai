# Interview Questions: Temporal Dead Zone (TDZ)

## 1. What exactly is the Temporal Dead Zone?
The TDZ is the period between the entering of a scope and the actual declaration of a variable (`let` or `const`). During this period, the variable is "hoisted" but cannot be accessed. Any attempt to access it results in a `ReferenceError`.

## 2. Does hoisting occur for `let` and `const`?
**Yes.** JavaScript engines do hoist `let` and `const` declarations. However, unlike `var` (which is initialized as `undefined`), `let` and `const` remain uninitialized. This is what creates the TDZ.

## 3. What is the difference between `var` hoisting and `let`/`const` hoisting?
- **`var`**: Hoisted and initialized with `undefined`. Accessing it before declaration returns `undefined`.
- **`let`/`const`**: Hoisted but **uninitialized**. Accessing it before declaration throws a `ReferenceError`.

## 4. Does the `typeof` operator work on a variable in the TDZ?
**No.** This is a special case. Normally, `typeof` is considered safe for non-existent variables (returning `"undefined"`), but for a variable in the TDZ, it will throw a `ReferenceError`.

```javascript
console.log(typeof nonExistent); // "undefined"
console.log(typeof x);           // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

## 5. Can you explain TDZ with an example of shadowing?
If a variable exists in a parent scope but is re-declared in a child scope using `let`, the child scope variable "shadows" the parent one. If you try to access it before the child declaration, you hit the TDZ of the child variable, even if the parent variable is available.

```javascript
let x = "global";
{
  // TDZ for local x starts here
  console.log(x); // ReferenceError (it won't use the global "x")
  let x = "local";
}
```

## 6. Why was TDZ introduced?
1. **Catching Bugs**: It helps developers find errors where they try to use a variable before it has been properly initialized.
2. **Consistency**: It ensures that `const` variables are never accessed before they have their assigned value (since `const` cannot be unassigned).

---

## References
- [MDN Web Docs: let - Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)
- [W3Schools: JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
