/**
 * Nested Ternary Operators
 * 
 * You can chain ternary operators together to check multiple conditions,
 * similar to an if-else if-else statement.
 * 
 * Syntax:
 * condition1 ? value_if_true1 : condition2 ? value_if_true2 : value_if_false2
 */

console.log("--- Nested Ternary Operators ---");

// Example 1: Grade Calculation
let score = 85;

// Using if-else if-else (for comparison)
/*
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
*/

// Using nested ternary operator
let grade = (score >= 90) ? "A" :
    (score >= 80) ? "B" :
        (score >= 70) ? "C" : "F";

console.log(`Score: ${score}, Grade: ${grade}`);


// Example 2: Checking multiple environment conditions
let env = "staging";
let browser = "firefox";

// Determine testing strategy based on environment
let strategy = (env === "production") ? "Smoke Tests Only" :
    (env === "staging" && browser === "chrome") ? "Full Regression (Chrome)" :
        (env === "staging" && browser === "firefox") ? "Full Regression (Firefox)" :
            "Basic Sanity Tests";

console.log(`Environment: ${env}, Browser: ${browser}`);
console.log(`Testing Strategy: ${strategy}`);


// Example 3: Number sign check
let number = -5;

let sign = (number > 0) ? "Positive" :
    (number < 0) ? "Negative" : "Zero";

console.log(`Number: ${number} is ${sign}`);

/**
 * Best Practice Tip:
 * While nested ternary operators can make code shorter, they can also make it 
 * harder to read if nested too deeply. If you have more than 2-3 conditions,
 * it is often better to use an 'if-else if' or a 'switch' statement for readability.
 */
