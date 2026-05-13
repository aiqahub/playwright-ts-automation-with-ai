# JavaScript String Delimiters: ' ' vs " " vs ` `

JavaScript provides three ways to define strings. While single and double quotes are almost identical, backticks (Template Literals) offer significantly more power.

---

## 1. Single Quotes (`' '`) and Double Quotes (`" "`)
These are the traditional ways to create strings. In JavaScript, there is **no functional difference** between them.

### Best Practice: Escaping
The main reason to choose one over the other is to avoid "escaping" characters.
- Use double quotes if your string contains a single quote: `"It's a beautiful day"`
- Use single quotes if your string contains double quotes: `'He said, "Hello!"'`

If you use the same quote inside the string, you must use a backslash (`\`):
```javascript
let text = 'It\'s a sunny day'; // Escaping required
```

---

## 2. Backticks (`` ` ` ``) - Template Literals
Introduced in ES6, backticks are much more versatile.

### A. String Interpolation
You can embed variables or expressions directly inside the string using `${expression}`.
```javascript
let name = "Admin";
console.log(`Welcome, ${name}`); // No need for '+' concatenation
```

### B. Multi-line Strings
With `' '` or `" "`, you need to use `\n` to create a new line. With backticks, you can just press Enter.
```javascript
// This works with backticks:
let list = `
  1. Item one
  2. Item two
`;
```

### C. Expression Evaluation
You can perform math or logic inside the `${}`.
```javascript
console.log(`Total: ${10 + 20}`); // Result: Total: 30
```

---

## Summary Comparison

| Feature | Single `' '` | Double `" "` | Backticks `` ` ` `` |
| :--- | :---: | :---: | :---: |
| **Interpolation (`${}`)** | No | No | **Yes** |
| **Multi-line** | No | No | **Yes** |
| **Escaping Quotes** | Needed for `'` | Needed for `"` | Not needed for `'` or `"` |
| **Performance** | Slightly faster | Slightly faster | Same/Negligible |
