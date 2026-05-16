/**
 * Logical Operators
 * Used to combine or negate boolean values.
 */

let isAdult = true;
let hasLicense = false;

console.log("--- Logical Operators ---");

// Logical AND (&&) - true if both are true
console.log("isAdult && hasLicense:", isAdult && hasLicense); // false

// Logical OR (||) - true if at least one is true
console.log("isAdult || hasLicense:", isAdult || hasLicense); // true

// Logical NOT (!) - reverses the boolean value
console.log("!isAdult:", !isAdult); // false
console.log("!hasLicense:", !hasLicense); // true

// Example with comparison
let age = 25;
let result = (age > 18 && age < 30);
console.log("Is age between 18 and 30?", result); // true
