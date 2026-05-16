/**
 * Comparison Operators
 * Used to compare values and return true/false.
 */

let a = 10;
let b = "10";
let c = 5;

console.log("--- Comparison Operators ---");
// >, <, >=, <=, ==, ===, !=, !==


// Equality
console.log("a == b (Equal value only):", a == b);   // true
console.log("a === b (Strictly equal - value & type):", a === b); // false

console.log("\n--- Null and Undefined ---");
console.log(0 == null)    // false
console.log(0 == undefined) // false
console.log(null == undefined) // true





// Inequality
console.log("a != c:", a != c);   // true
console.log("a !== b:", a !== b); // true (different types)

// Relational
console.log("a > c:", a > c);   // true
console.log("a < c:", a < c);   // false
console.log("a >= 10:", a >= 10); // true
console.log("a <= 5:", a <= 5);  // false
