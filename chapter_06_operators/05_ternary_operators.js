/**
 * Conditional (Ternary) Operator
 * Shorthand for if-else.
 * Syntax: condition ? expression_if_true : expression_if_false
 */

console.log("--- Ternary Operator ---");

let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Age:", age);
console.log("Status:", status);

let score = 45;
let result = (score >= 50) ? "Pass" : "Fail";
console.log("Score:", score, "Result:", result);


let env = "staging";
let server = (env == "staging")
    ? "The URL of the Server is -  https://staging.com"
    : "The URL of the Server is -  https://production.com";
console.log("Server:", server);

let headless = true;
let executionMode = headless ? "In Headless Mode (No UI)" : "In Headed Mode (UI)"
console.log("Execution Mode : " + executionMode);


let browser = "firefox";
let isFirefoxBrowser = (browser == "firefox") ? true : false;
console.log("Is Firefox Browser : " + isFirefoxBrowser); 