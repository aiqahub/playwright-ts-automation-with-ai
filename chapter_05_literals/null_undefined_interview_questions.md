# Interview Questions: Null vs. Undefined

Commonly asked technical questions regarding the behavior of `null` and `undefined` in JavaScript.

---

## 1. Conceptual & Type Questions

### What is the difference between `null` and `undefined`?
**Answer:**
- **`undefined`**: Means a variable has been declared but has not yet been assigned a value. It is the default state.
- **`null`**: Is an assignment value. It is used by programmers to indicate that a variable is intentionally empty.

### Why does `typeof null` return `"object"`?
**Answer:** This is a legacy bug from the original implementation of JavaScript. Values were stored in 32-bit units with a type tag. The object tag was `000`, and since `null` was represented as all zeros, it was misidentified as an object. It remains this way to maintain backward compatibility.

---

## 2. Arithmetic & Comparison

### What happens in numeric conversions (Math)?
**Answer:**
- `null` converts to **0**.
- `undefined` converts to **NaN**.

```javascript
console.log(10 + null);      // 10
console.log(10 + undefined); // NaN
```

### How do they behave with equality operators?
**Answer:**
- `null == undefined` is **true** (Loose equality treats them as "null-ish").
- `null === undefined` is **false** (Strict equality sees different types).

---

## 3. Advanced Behavior

### How are they handled in JSON (`JSON.stringify`)?
**Answer:**
- `null` is kept as `null`.
- `undefined` is **omitted** from objects or converted to `null` in arrays.

```javascript
const obj = { a: null, b: undefined };
console.log(JSON.stringify(obj)); // {"a":null}
```

### What is the "Nullish Coalescing Operator" (`??`)?
**Answer:** It is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`.

```javascript
let name = null;
let displayName = name ?? "Guest"; // "Guest"
```

---

## 4. Function Behavior

### What does a function return if there is no return statement?
**Answer:** It returns `undefined`.

### What happens if you skip an argument in a function call?
**Answer:** The missing parameter is assigned the value `undefined`.

---

## Quick Comparison Table

| Feature | `undefined` | `null` |
| :--- | :--- | :--- |
| **Numeric Value** | `NaN` | `0` |
| **Type** | `"undefined"` | `"object"` |
| **JSON** | Removed from objects | Preserved |
| **Meaning** | Uninitialized | Empty/None |
