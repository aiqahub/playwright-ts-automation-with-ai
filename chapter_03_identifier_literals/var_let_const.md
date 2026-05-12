# JavaScript Variable Declarations: var, let, and const

## 1. `var` (ES5)
- **Scope**: Function-scoped. If declared outside a function, it is global.
- **Hoisting**: Hoisted and initialized with `undefined`.
- **Re-declaration**: Can be re-declared within the same scope.
- **Re-assignment**: Can be updated/re-assigned.

```javascript
var x = 10;
var x = 20; // Allowed
x = 30;     // Allowed
```

## 2. `let` (ES6)
- **Scope**: Block-scoped (within `{ }`).
- **Hoisting**: Hoisted but not initialized (Temporal Dead Zone).
- **Re-declaration**: Cannot be re-declared in the same scope.
- **Re-assignment**: Can be updated/re-assigned.

```javascript
let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared
y = 30;        // Allowed
```

## 3. `const` (ES6)
- **Scope**: Block-scoped.
- **Hoisting**: Hoisted but not initialized (Temporal Dead Zone).
- **Re-declaration**: Cannot be re-declared in the same scope.
- **Re-assignment**: Cannot be re-assigned. Must be initialized during declaration.

```javascript
const z = 10;
// z = 20; // Error: Assignment to constant variable.
```

> [!NOTE]
> While `const` prevents re-assignment of the variable itself, it does not make objects or arrays immutable. You can still modify the *properties* of a constant object or the *elements* of a constant array.

---

## Which one to use?
1. Use `const` by default.
2. Use `let` only if you know the value needs to change later.
3. Avoid `var` in modern JavaScript to prevent scope-related bugs.

---

## References
- [MDN Web Docs: var statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN Web Docs: let statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs: const statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Web Docs: Block scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
