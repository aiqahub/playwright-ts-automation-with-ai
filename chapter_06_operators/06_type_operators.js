/**
 * Type Operators
 * Used to check the type of data or object.
 */

console.log("--- Type Operators ---");

let name = "Alice";
let count = 100;
let isActive = true;
let user = { id: 1 };
let numbers = [1, 2, 3];

// typeof
console.log("typeof name:", typeof name);       // "string"
console.log("typeof count:", typeof count);     // "number"
console.log("typeof isActive:", typeof isActive); // "boolean"
console.log("typeof user:", typeof user);       // "object"
console.log("typeof numbers:", typeof numbers); // "object" (Arrays are objects)

// instanceof
console.log("numbers instanceof Array:", numbers instanceof Array);   // true
console.log("user instanceof Object:", user instanceof Object);       // true
console.log("name instanceof String:", name instanceof String);       // false (primitive string)
