/**
 * String Operators
 * The + operator can be used to concatenate strings.
 */

console.log("--- String Operators ---");

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // "John Doe"

// Assignment Concatenation
let greeting = "Hello, ";
greeting += firstName; // greeting = greeting + firstName
console.log("Greeting:", greeting); // "Hello, John"

// Adding numbers and strings
console.log("10" + 5);  // "105" (String wins)
console.log(10 + "5");  // "105" (String wins)
console.log(10 + 5 + "5"); // "155" (Addition first, then string concat)
