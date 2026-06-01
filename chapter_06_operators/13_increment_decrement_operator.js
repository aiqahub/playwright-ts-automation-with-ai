/**
 * Increment (++) and Decrement (--) Operators
 * 
 * These are unary operators that add or subtract 1 from their operand.
 * They can be placed BEFORE (Prefix) or AFTER (Postfix) the operand.
 */

console.log("--- 1. Basic Postfix (Post-Increment / Post-Decrement) ---");
/**
 * POSTFIX: operator comes AFTER the variable (e.g., x++, x--).
 * Rule: RETURN the current value FIRST, then increment/decrement.
 */
let a = 10;
console.log("Initial a:", a); // 10

// Post-increment
let resultA = a++; 
console.log("resultA (returned original value):", resultA); // 10
console.log("a after post-increment:", a); // 11

// Post-decrement
let b = 5;
let resultB = b--;
console.log("resultB (returned original value):", resultB); // 5
console.log("b after post-decrement:", b); // 4


console.log("\n--- 2. Basic Prefix (Pre-Increment / Pre-Decrement) ---");
/**
 * PREFIX: operator comes BEFORE the variable (e.g., ++x, --x).
 * Rule: Increment/decrement FIRST, then RETURN the new value.
 */
let c = 10;
console.log("Initial c:", c); // 10

// Pre-increment
let resultC = ++c;
console.log("resultC (returned NEW value):", resultC); // 11
console.log("c after pre-increment:", c); // 11

// Pre-decrement
let d = 5;
let resultD = --d;
console.log("resultD (returned NEW value):", resultD); // 4
console.log("d after pre-decrement:", d); // 4


console.log("\n--- 3. Tricky Interview Questions (Combinations) ---");

let x = 5;
// Breakdown:
// 1. x++ : returns 5, then x becomes 6
// 2. ++x : x becomes 7, then returns 7
// 3. 5 + 7 = 12
let y = x++ + ++x; 
console.log("x++ + ++x when x is 5:");
console.log("y is:", y); // 12
console.log("x is now:", x); // 7

let m = 2;
// Breakdown:
// 1. ++m : m becomes 3, returns 3
// 2. m++ : returns 3, then m becomes 4
// 3. --m : m becomes 3, returns 3
// 4. 3 * 3 - 3 = 9 - 3 = 6
let result = ++m * m++ - --m;
console.log("++m * m++ - --m when m is 2:");
console.log("result is:", result); // 6
console.log("m is now:", m); // 3


console.log("\n--- 4. Type Coercion (Implicit Conversion) ---");
/**
 * Increment and decrement operators implicitly convert strings (that contain numbers)
 * into actual Numbers before incrementing/decrementing.
 */
let strNum = "10";
console.log("Type of strNum initially:", typeof strNum); // string

strNum++; 
console.log("Value after ++:", strNum); // 11
console.log("Type after ++:", typeof strNum); // number

// It will result in NaN if the string cannot be converted to a number
let strText = "Hello";
strText++;
console.log("Incrementing 'Hello':", strText); // NaN


console.log("\n--- 5. Const and Increment (Error) ---");
/**
 * You CANNOT use ++ or -- on a const variable because it involves reassignment.
 */
const constantNum = 10;
try {
    // constantNum++; // This would throw TypeError: Assignment to constant variable.
    console.log("Cannot do constantNum++");
} catch (e) {
    console.log(e.message);
}
