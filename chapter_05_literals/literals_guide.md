# JavaScript Literals Guide

Literals represent fixed values in JavaScript source code. Unlike variables, literals are the raw values themselves.

---

## 1. String Literals
Used to represent text data.
- **Single Quotes:** `'Hello'`
- **Double Quotes:** `"World"`
- **Template Literals (Backticks):** `` `Hello World` `` (Supports multi-line and interpolation)

## 2. Numeric Literals
Used for mathematical values.
- **Integer:** `42`
- **Floating-point:** `3.14`
- **Hexadecimal:** `0xFF` (Base 16)
- **Binary:** `0b1010` (Base 2)
- **Octal:** `0o744` (Base 8)
- **Exponential:** `1e5` (100,000)

## 3. Boolean Literals
Represent logical values.
- `true`
- `false`

## 4. Object Literals
A collection of key-value pairs.
- `{ name: "John", age: 30 }`

## 5. Array Literals
A list of values.
- `["Apple", "Banana", "Cherry"]`

## 6. Template Literals
Advanced strings that allow expressions.
- `` `Result: ${2 + 2}` ``

## 7. BigInt Literals
For numbers beyond the safe integer limit.
- `9007199254740991n`

## 8. RegExp Literals
Pattern matching.
- `/pattern/flags` (e.g., `/abc/i`)

## 9. Null & Undefined
While both represent "no value," they are distinct in JavaScript.

- **`null`**: An **intentional** absence of any object value. It must be assigned manually.
- **`undefined`**: A variable that has been declared but has **not yet been assigned** a value.

---

## Null vs. Undefined: Key Differences

| Feature | `undefined` | `null` |
| :--- | :--- | :--- |
| **Meaning** | Value is not yet assigned (Default state). | Intentional absence of any value. |
| **Type** | `typeof undefined` is `"undefined"` | `typeof null` is `"object"` (Historical bug) |
| **Assignment** | Set by JS engine automatically. | Set by the programmer manually. |
| **Loose Equality** | `null == undefined` is **true** | `null == undefined` is **true** |
| **Strict Equality** | `null === undefined` is **false** | `null === undefined` is **false** |

### Code Comparison
```javascript
let x;          // undefined (engine set)
let y = null;   // null (user set)

console.log(typeof x); // "undefined"
console.log(typeof y); // "object"

console.log(x == y);   // true
console.log(x === y);  // false
```
