# JavaScript Strings: Theory and Concepts

## Overview

In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript and are immutable, meaning once a string is created, its contents cannot be changed.

## String Creation

Strings can be created in three ways:

1. **Single quotes**: `'Hello, World!'`
2. **Double quotes**: `"Hello, World!"`
3. **Template literals (ES6)**: `` `Hello, World!` ``

Template literals allow for string interpolation (embedding expressions) and multi-line strings without escape sequences.

## String Immutability

Strings in JavaScript are immutable. When you perform operations that appear to modify a string, you're actually creating a new string:

```javascript
let str = "hello";
str = str.toUpperCase(); // Creates a new string "HELLO"
// The original "hello" string still exists in memory until garbage collected
```

## String Properties and Methods

### Length Property
- `str.length` returns the number of characters in a string
- Includes spaces, punctuation, and special characters

### Character Access
- `str[index]` - Access character at specific index (0-based)
- `charAt(index)` - Method form with same functionality
- Both return empty string for invalid indices

### Common String Methods

#### Case Conversion
- `toUpperCase()` - Converts all characters to uppercase
- `toLowerCase()` - Converts all characters to lowercase

#### Whitespace Handling
- `trim()` - Removes whitespace from both ends
- `trimStart()` / `trimLeft()` - Removes whitespace from beginning
- `trimEnd()` / `trimRight()` - Removes whitespace from end

#### String Manipulation
- `slice(start, end)` - Extracts section of string (negative indices count from end)
- `substring(start, end)` - Similar to slice but doesn't accept negative indices
- `substr(start, length)` - Legacy method (avoid in new code) - extracts length characters from start
- `concat(str2, str3, ...)` - Joins multiple strings
- `split(separator, limit)` - Splits string into array based on separator
- `join(separator)` - Array method that joins elements with separator

#### Searching and Replacement
- `indexOf(searchValue, fromIndex)` - Returns first occurrence index or -1
- `lastIndexOf(searchValue, fromIndex)` - Returns last occurrence index or -1
- `includes(searchValue, position)` - Returns boolean if string contains search value
- `startsWith(searchValue, position)` - Returns boolean if string starts with search value
- `endsWith(searchValue, length)` - Returns boolean if string ends with search value
- `replace(searchValue, newValue)` - Replaces first occurrence
- `replaceAll(searchValue, newValue)` - Replaces all occurrences (ES2021)

#### Character Code Methods
- `charCodeAt(index)` - Returns UTF-16 code unit value at index
- `fromCharCode(...codes)` - Static method that creates string from UTF-16 code units
- `codePointAt(index)` - Returns full Unicode code point value
- `fromCodePoint(...codePoints)` - Static method that creates string from Unicode code points

## Template Literals Features

### String Interpolation
```javascript
const name = "John";
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
```

### Multi-line Strings
```javascript
const poem = `
Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.
`;
```

### Tagged Templates
```javascript
function tags(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const name = "John";
const age = 30;
const tagged = tags`Hello, my name is ${name} and I am ${age} years old.`;
// Returns: "Hello, my name is John and I am 30 years old."
```

## Escape Sequences

JavaScript uses backslash (`\`) as escape character:

- `\'` - Single quote
- `\"` - Double quote
- `\\` - Backslash
- `\n` - New line
- `\t` - Tab
- `\r` - Carriage return
- `\b` - Backspace
- `\f` - Form feed
- `\v` - Vertical tab
- `\uxxxx` - Unicode character (4 hex digits)
- `\u{xxxxxx}` - Unicode code point (ES6+)

## String Comparison

Strings can be compared using comparison operators:
- Lexicographical (alphabetical) order based on UTF-16 code units
- `===` for strict equality (value and type)
- `==` for loose equality (type coercion may occur)

## Iteration

Strings are iterable objects (since ES6):
```javascript
for (const char of "hello") {
  console.log(char); // h, e, l, l, o
}

// Or using spread operator
const chars = [... "hello"]; // ['h', 'e', 'l', 'l', 'o']
```

## Unicode Considerations

JavaScript strings are UTF-16 encoded:
- Most common characters use 1 code unit (2 bytes)
- Emoji and some special characters use 2 code units (surrogate pairs)
- Methods like `length` and `charAt()` work with code units, not full characters
- For proper Unicode handling, use:
  - `Array.from(string)` or spread operator `[...string]` for character-aware iteration
  - `string.codePointAt()` and `String.fromCodePoint()` for Unicode code points

## Performance Considerations

- String concatenation in loops can be inefficient due to immutability
- Use array.join() for building strings from multiple parts:
  ```javascript
  // Less efficient
  let result = '';
  for (let i = 0; i < 1000; i++) {
    result += i;
  }
  
  // More efficient
  const parts = [];
  for (let i = 0; i < 1000; i++) {
    parts.push(i);
  }
  const result = parts.join('');
  ```

## References

1. MDN Web Docs - String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
2. ECMAScript 2022 Language Specification: https://tc39.es/ecma262/
3. JavaScript.info - Strings: https://javascript.info/string
4. Unicode in JavaScript: https://mathiasbynens.be/notes/javascript-unicode