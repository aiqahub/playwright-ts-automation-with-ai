# Variable and Data Declarations in JavaScript

JavaScript provides different ways to declare variables, each with specific behaviors regarding scoping, hoisting, and mutability.

## 1. `var`
`var` is the oldest way to declare a variable in JavaScript. 
- **Scope**: Function-scoped or globally-scoped. It ignores block scopes (like `if` statements or `for` loops).
- **Hoisting**: It is hoisted to the top of its scope and initialized with `undefined`.
- **Re-declaration**: You can re-declare and update `var` variables without any errors.

### Example:
```javascript
var name = "Alice";
var name = "Bob"; // Re-declaration is allowed
name = "Charlie"; // Updating is allowed

console.log(name); // Output: "Charlie"

function testScope() {
    var x = 10;
    if (true) {
        var x = 20; // This modifies the outer 'x' because var ignores block scope
        console.log("Inside block:", x); // 20
    }
    console.log("Outside block:", x); // 20
}
testScope();
```

---

## 2. `let`
`let` was introduced in ES6 (2015) to solve the scoping issues with `var`.
- **Scope**: Block-scoped. It only exists within the nearest set of curly braces `{}`.
- **Hoisting**: It is hoisted to the top but is **not** initialized. Accessing it before declaration results in a `ReferenceError` (Temporal Dead Zone).
- **Re-declaration**: You can update the value, but you **cannot** re-declare it within the same scope.

### Example:
```javascript
let age = 25;
// let age = 30; // SyntaxError: Identifier 'age' has already been declared
age = 26; // Updating is allowed

console.log(age); // Output: 26

function testScope() {
    let y = 10;
    if (true) {
        let y = 20; // This creates a completely new 'y' local to this block
        console.log("Inside block:", y); // 20
    }
    console.log("Outside block:", y); // 10
}
testScope();
```

---

## 3. `const`
`const` was also introduced in ES6 and is used for variables that shouldn't be reassigned.
- **Scope**: Block-scoped (just like `let`).
- **Hoisting**: Hoisted but not initialized (Temporal Dead Zone).
- **Re-declaration**: You **cannot** update or re-declare a `const` variable. It must be initialized at the time of declaration.
- **Note**: `const` does not make objects or arrays immutable. It only prevents reassignment of the variable identifier itself. You can still modify the *contents* of a `const` object or array.

### Example:
```javascript
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable.

const user = { name: "Alice" };
user.name = "Bob"; // This is perfectly fine (mutating the object)
// user = { name: "Charlie" }; // TypeError (reassigning the constant)
console.log(user.name); // Output: "Bob"
```

---

## 4. `enum`
Unlike TypeScript, Java, or C#, **JavaScript does not have a native `enum` type**. However, `enum` is a reserved keyword in JavaScript for potential future use. 

To create "enum-like" behavior in vanilla JavaScript, developers typically use a constant object combined with `Object.freeze()` to prevent modification.

### Example:
```javascript
// Simulating an Enum in JavaScript
const Status = Object.freeze({
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed'
});

let currentTaskStatus = Status.IN_PROGRESS;

if (currentTaskStatus === Status.IN_PROGRESS) {
    console.log("Task is currently being worked on.");
}

// Since we used Object.freeze, we cannot modify the Status 'enum'
Status.PENDING = 'started'; // This does nothing (or throws an error in strict mode)
console.log(Status.PENDING); // Still 'pending'
```

---

## 5. Identifiers, Literals, and Operators

Understanding the basic building blocks of JavaScript syntax is crucial. 

### Identifiers
An **Identifier** is simply a name. In JavaScript, identifiers are used to name variables, functions, properties, classes, and other entities.

#### Rules for Identifiers:
1. **Valid Characters**: An identifier must start with a letter (`a-z` or `A-Z`), an underscore (`_`), or a dollar sign (`$`). Subsequent characters can also include digits (`0-9`).
2. **Case Sensitivity**: JavaScript is case-sensitive. `myVariable` and `myvariable` are two different identifiers.
3. **No Reserved Words**: You cannot use JavaScript reserved keywords (like `let`, `if`, `class`, `function`, etc.) as identifiers.
4. **No Spaces or Hyphens**: Identifiers cannot contain spaces or hyphens (use camelCase or snake_case instead).

**Examples of Valid Identifiers:**
```javascript
let userName = "Alice";
let _privateVar = 10;
let $element = document.getElementById('my-id');
let user123 = true;
```

**Examples of Invalid Identifiers:**
```javascript
// let 123user = "Alice"; // Starts with a number
// let my-var = 10;       // Contains a hyphen
// let let = 5;           // Uses a reserved keyword
```

### Literals
A **Literal** is a fixed value provided directly in the source code. Unlike variables (which are named containers that can change), literals represent exactly what they are.

**Examples of Literals:**
```javascript
let numberLiteral = 42;             // 42 is a Number Literal
let stringLiteral = "Hello World";  // "Hello World" is a String Literal
let booleanLiteral = true;          // true is a Boolean Literal
let arrayLiteral = [1, 2, 3];       // [1, 2, 3] is an Array Literal
let objectLiteral = { name: "Bob" };// { name: "Bob" } is an Object Literal
let nullLiteral = null;             // null is a Null Literal
```

### Operators
An **Operator** is a special symbol (or keyword) that performs an operation on one or more operands (values or variables) to produce a result.

**Examples of Operators:**
```javascript
// Arithmetic Operators (+, -, *, /, %, ++)
let sum = 10 + 5; // '+' adds two numbers

// Assignment Operators (=, +=, -=)
let x = 10; // '=' assigns the value 10 to 'x'
x += 5;     // Same as x = x + 5

// Comparison Operators (==, ===, !=, !==, >, <)
let isEqual = (5 === "5"); // '===' checks for strict equality (false)

// Logical Operators (&&, ||, !)
let isAdult = true;
let hasTicket = false;
let canEnter = isAdult && hasTicket; // '&&' (Logical AND) results in false
```
