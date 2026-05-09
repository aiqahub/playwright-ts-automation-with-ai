/**
 * DIFFERENCES BETWEEN var, let, const, and enum in JavaScript
 * 
 * 1. var
 * - Scope: Function-scoped or globally scoped. It is NOT block-scoped.
 * - Hoisting: Hoisted to the top of its scope and initialized with 'undefined'.
 * - Re-declaration: Can be re-declared and updated within its scope without errors.
 */

console.log("--- var example ---");
var myName = "Alice";
var myName = "Bob"; // No error, re-declaration is allowed
console.log(myName); // Output: Bob

if (true) {
    var blockVar = "I am not block scoped";
}
console.log(blockVar); // Output: I am not block scoped (accessible outside the if-block)


/**
 * 2. let
 * - Scope: Block-scoped (variables declared inside {} cannot be accessed from outside the block).
 * - Hoisting: Hoisted to the top but NOT initialized (lives in the "Temporal Dead Zone" until execution reaches it).
 * - Re-declaration: Cannot be re-declared within the same scope, but its value CAN be updated.
 */

console.log("\n--- let example ---");
let age = 25;
age = 26; // Allowed (update)
// let age = 30; // SyntaxError: Identifier 'age' has already been declared

if (true) {
    let blockLet = "I am block scoped";
    console.log(blockLet); // Works here
}
// console.log(blockLet); // ReferenceError: blockLet is not defined (cannot access outside block)


/**
 * 3. const
 * - Scope: Block-scoped (like let).
 * - Hoisting: Hoisted to the top but NOT initialized (Temporal Dead Zone).
 * - Re-declaration & Update: Cannot be re-declared AND cannot be re-assigned a new value.
 * - Note: For objects and arrays, the variable reference cannot change, but the internal properties/elements CAN be modified.
 */

console.log("\n--- const example ---");
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable.

const user = { name: "John" };
user.name = "Doe"; // Allowed! We are modifying a property, not re-assigning the whole object reference
console.log(user.name); // Output: Doe


/**
 * 4. enum (Enumeration)
 * - JavaScript does NOT have a native 'enum' data type (unlike TypeScript or Java).
 * - However, we can simulate enums using Objects and Object.freeze() to prevent any modification to the object.
 * - An enum is used to define a collection of related, constant values to avoid using "magic strings" in code.
 */

console.log("\n--- enum example (simulated) ---");
const StatusEnum = Object.freeze({
    PENDING: "PENDING",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED"
});

let currentTaskStatus = StatusEnum.IN_PROGRESS;

// StatusEnum.NEW_STATUS = "NEW"; // Will fail because the object is frozen
// StatusEnum.PENDING = "DONE"; // Will fail, cannot modify existing property

if (currentTaskStatus === StatusEnum.COMPLETED) {
    console.log("Task is done!");
} else {
    console.log("Current Status: " + currentTaskStatus);
}
