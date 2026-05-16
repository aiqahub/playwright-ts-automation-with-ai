/**
 * Arithmetic Operators
 * Used to perform mathematical operations.
 */

let a = 10;
let b = 3;

console.log("--- Arithmetic Operators ---");
console.log("Addition (a + b):", a + b);         // 13
console.log("Subtraction (a - b):", a - b);      // 7
console.log("Multiplication (a * b):", a * b);   // 30
console.log("Division (a / b):", a / b);         // 3.3333...
console.log("Modulus (a % b):", a % b);          // 1 (remainder)
console.log("Exponentiation (a ** b):", a ** b); // 1000 (10^3)

// Increment
let c = 5;
console.log("Initial c:", c);
console.log("Post-increment (c++):", c++); // Prints 5, then increments to 6
console.log("After post-increment:", c);   // 6
console.log("Pre-increment (++c):", ++c);  // Increments to 7, then prints 7

// Decrement
let d = 5;
console.log("Initial d:", d);
console.log("Post-decrement (d--):", d--); // Prints 5, then decrements to 4
console.log("After post-decrement:", d);   // 4
console.log("Pre-decrement (--d):", --d);  // Decrements to 3, then prints 3
