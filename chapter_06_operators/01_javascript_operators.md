# JavaScript Operators

An **operator** is a special symbol used to perform operations on operands (variables and values). 

For example:
```javascript
let sum = 10 + 20;
```
In the above example, `+` is an operator and `10` and `20` are operands.

## Types of Operators in JavaScript

JavaScript supports several types of operators, categorized based on their functionality:

1. **Arithmetic Operators**: Used to perform mathematical calculations.
2. **Assignment Operators**: Used to assign values to variables.
3. **Comparison Operators**: Used to compare two values and return a boolean (`true` or `false`).
4. **Logical Operators**: Used to determine the logic between variables or values.
5. **Bitwise Operators**: Used to perform operations on binary representations of numbers.
6. **String Operators**: Used to concatenate strings.
7. **Conditional (Ternary) Operator**: A shorthand for `if-else` statements.
8. **Type Operators**: Used to check the data type or instance of an object.

---

### 1. Arithmetic Operators
Used for mathematical operations.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `+` | Addition | `x + y` |
| `-` | Subtraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `**` | Exponentiation (ES6) | `x ** y` |
| `/` | Division | `x / y` |
| `%` | Modulus (Remainder) | `x % y` |
| `++` | Increment | `x++` or `++x` |
| `--` | Decrement | `x--` or `--x` |

### 2. Assignment Operators
Used to assign values to JavaScript variables.

| Operator | Example | Equivalent To |
| :--- | :--- | :--- |
| `=` | `x = y` | `x = y` |
| `+=` | `x += y` | `x = x + y` |
| `-=` | `x -= y` | `x = x - y` |
| `*=` | `x *= y` | `x = x * y` |
| `/=` | `x /= y` | `x = x / y` |
| `%=` | `x %= y` | `x = x % y` |
| `**=` | `x **= y` | `x = x ** y` |

### 3. Comparison Operators
Comparison operators are used in logical expressions to determine equality or difference between variables or values.

| Operator | Description |
| :--- | :--- |
| `==` | Equal to (checks value only) |
| `===` | Strict equal to (checks value and type) |
| `!=` | Not equal to |
| `!==` | Strict not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

### 4. Logical Operators
Logical operators are used to determine the logic between variables or values.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `&&` | Logical AND | `(x < 10 && y > 1)` |
| `||` | Logical OR | `(x == 5 || y == 5)` |
| `!` | Logical NOT | `!(x == y)` |

### 5. Bitwise Operators
Bitwise operators work on 32-bit numbers. Any numeric operand in the operation is converted into a 32-bit number. The result is converted back to a JavaScript number.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `&` | AND | `5 & 1` |
| `\|` | OR | `5 \| 1` |
| `~` | NOT | `~5` |
| `^` | XOR | `5 ^ 1` |
| `<<` | Left shift | `5 << 1` |
| `>>` | Right shift | `5 >> 1` |
| `>>>` | Unsigned right shift | `5 >>> 1` |

### 6. String Operators
The `+` operator can also be used to concatenate (add) strings. The `+=` operator can also be used to concatenate strings.

```javascript
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; // "John Doe"
```

### 7. Conditional (Ternary) Operator
The ternary operator assigns a value to a variable based on a condition.
**Syntax:** `variable = (condition) ? value1 : value2;`

```javascript
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
```

### 8. Type Operators
| Operator | Description |
| :--- | :--- |
| `typeof` | Returns the type of a variable |
| `instanceof` | Returns true if an object is an instance of an object type |

---

> [!NOTE]
> Operators have a specific order of execution called **Operator Precedence**. For example, multiplication (`*`) has higher precedence than addition (`+`).
