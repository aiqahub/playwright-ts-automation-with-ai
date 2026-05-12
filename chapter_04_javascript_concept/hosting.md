# JavaScript Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).

## 1. Variable Hoisting (`var`)
Variables declared with `var` are hoisted to the top and initialized with `undefined`.

```javascript
console.log(a); // Output: undefined
var a = 10;
```
*Behind the scenes:*
```javascript
var a;
console.log(a);
a = 10;
```

## 2. Temporal Dead Zone (`let` and `const`)
Variables declared with `let` and `const` are hoisted but **not initialized**. They remain in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is reached.

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

## 3. Function Hoisting
Function declarations are fully hoisted, meaning you can call a function before it's defined in the code.

```javascript
greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}
```

## 4. Function Expressions & Arrow Functions
Functions stored in variables follow the hoisting rules of the variable keyword (`var`, `let`, or `const`).

```javascript
sayHi(); // TypeError: sayHi is not a function (if using var)
var sayHi = () => console.log("Hi");
```

---

> [!IMPORTANT]
> To avoid bugs, always declare variables at the top of their scope and prefer `let` or `const` over `var`.
