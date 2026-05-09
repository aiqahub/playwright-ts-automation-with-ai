/*
  RULES FOR CREATING AN IDENTIFIER IN JAVASCRIPT:

  1. An identifier must start with a letter (A-Z or a-z), a dollar sign ($), or an underscore (_).
  2. Subsequent characters may be letters, digits (0-9), dollar signs, or underscores.
  3. Identifiers cannot contain spaces or special characters (like @, #, -, %, etc.).
  4. Identifiers are case-sensitive (e.g., 'myVar' and 'myvar' are different).
  5. Identifiers cannot be JavaScript reserved keywords (like 'let', 'const', 'function', 'class', etc.).
*/

// ============================================
// VALID IDENTIFIERS EXAMPLES
// ============================================

let userName = "Alice";        // Starts with a letter, uses camelCase
let _privateCount = 42;        // Starts with an underscore
let $submitButton = null;      // Starts with a dollar sign
let user123 = "Bob";           // Contains digits after the first character
let USER_ROLE = "ADMIN";       // All caps with underscores (often used for constants)
let CamelCaseIdentifier = 1;   // PascalCase is perfectly valid

console.log("Valid Identifiers:");
console.log(userName, _privateCount, $submitButton, user123, USER_ROLE, CamelCaseIdentifier);

// ============================================
// INVALID IDENTIFIERS EXAMPLES
// ============================================

/*
  Uncommenting the lines below will cause SyntaxErrors:
*/

// let 123user = "Alice";      // INVALID: Cannot start with a digit
// let my-var = 10;            // INVALID: Cannot contain a hyphen (interpreted as subtraction)
// let user name = "Bob";      // INVALID: Cannot contain spaces
// let function = 5;           // INVALID: Cannot use a reserved keyword ('function')
// let myVar@name = "Test";    // INVALID: Cannot contain special characters like '@'
