// Validate Js Basics Identifier

// Write a validator for names used in helper functions, variables, or test data keys.

// Rules:
// - Value must be a non-empty string after trimming.
// - It must start with a letter, underscore, or dollar sign.
// - Remaining characters may include letters, digits, underscore, or dollar sign.
// - Reject reserved words used in this chapter: let, const, var, class, function, return.

// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input : isValidJsBasicsIdentifier("loginButton")
// Output : true
// Explanation: Allows camelCase identifier

// Input : isValidJsBasicsIdentifier("$submit")
// Output : true
// Explanation: Allows dollar-prefixed identifier

function isValidJsBasicsIdentifier(value) {
  const RESERVED_WORDS = new Set(["let", "const", "var", "class", "function", "return"]);

  if (!value || typeof value !== "string") return false;

  const trimmed = value.trim();

  if (!trimmed) return false;
  if (RESERVED_WORDS.has(trimmed)) return false;
  if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(trimmed)) return false;

  return true;
}

// Visible Test Cases
console.log(isValidJsBasicsIdentifier("loginButton")); // true
console.log(isValidJsBasicsIdentifier("$submit"));     // true
console.log(isValidJsBasicsIdentifier("1login"));      // false
console.log(isValidJsBasicsIdentifier("let"));         // false