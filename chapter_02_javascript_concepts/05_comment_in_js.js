// ==========================================
// COMMENTS IN JAVASCRIPT
// ==========================================
// Comments are used to explain JavaScript code, make it more readable, 
// and to prevent execution of code when testing or debugging.

// ------------------------------------------
// 1. Single-Line Comments
// ------------------------------------------
// Single-line comments start with two forward slashes (//).
// Any text between // and the end of the line will be ignored by the JS engine.

let greeting = "Hello World"; // This is an inline single-line comment

// You can also use single-line comments to temporarily disable code:
// let testVariable = "This won't be executed";


// ------------------------------------------
// 2. Multi-Line Comments
// ------------------------------------------
/* 
   Multi-line comments start with a forward slash and asterisk
   and end with an asterisk and forward slash.
   Any text between these markers will be completely ignored by JavaScript.
   It is often used for longer explanations, file headers, 
   or temporarily disabling large blocks of code.
*/

let currentYear = 2026;

/* 
console.log("This code block is disabled for now");
currentYear = 2027;
*/


// ------------------------------------------
// 3. JSDoc Comments (Documentation Comments)
// ------------------------------------------
/**
 * JSDoc comments are a standardized, special type of multi-line comment.
 * They start with /** and usually have an asterisk (*) at the start of each new line.
 * They are heavily used to document functions, parameters, and return types.
 * 
 * Code editors (like VS Code) parse JSDoc comments to provide helpful 
 * hover hints, tooltips, and autocompletion (Intellisense).
 * 
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The mathematical sum of a and b.
 */
function calculateSum(a, b) {
    return a + b;
}

console.log("Sum:", calculateSum(5, 10)); 
// Try hovering your mouse over `calculateSum` here to see the JSDoc tooltip!
