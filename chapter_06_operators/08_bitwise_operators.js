/**
 * Bitwise Operators
 * Operate on 32-bit binary representations of numbers.
 */

console.log("--- Bitwise Operators ---");

let a = 5; // Binary: 00000000000000000000000000000101
let b = 1; // Binary: 00000000000000000000000000000001

// AND (&)
console.log("5 & 1:", a & b); // 1

// OR (|)
console.log("5 | 1:", a | b); // 5

// XOR (^)
console.log("5 ^ 1:", a ^ b); // 4

// NOT (~)
console.log("~5:", ~a); // -6

// Left Shift (<<)
console.log("5 << 1:", a << 1); // 10 (00001010)

// Right Shift (>>)
console.log("5 >> 1:", a >> 1); // 2 (00000010)
