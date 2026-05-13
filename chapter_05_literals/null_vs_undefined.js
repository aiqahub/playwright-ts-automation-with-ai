// 1. Automatic vs. Manual
let a; // Declared but not initialized
console.log("Value of a:", a); // undefined

let b = null; // Manually assigned to represent "empty"
console.log("Value of b:", b); // null

// 2. Type Comparison
console.log("\n--- Types ---");
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null);           // "object" (This is a 25+ year old bug!)

// 3. Equality Comparison
console.log("\n--- Equality ---");
console.log("null == undefined:", null == undefined);   // true (Checks value only)
console.log("null === undefined:", null === undefined); // false (Checks value AND type)

// 5. Nullish Coalescing (??) vs. OR (||)
console.log("\n--- ?? vs || ---");

let userScore = 0;

// OR (||) treats 0 as falsy and falls back
let resultWithOR = userScore || 50; 
console.log("Using || with 0:", resultWithOR); // 50 (Likely a bug!)

// Nullish Coalescing (??) only falls back for null/undefined
let resultWithNullish = userScore ?? 50;
console.log("Using ?? with 0:", resultWithNullish); // 0 (Correct!)

let userName = null;
console.log("Using ?? with null:", userName ?? "Guest"); // "Guest"
