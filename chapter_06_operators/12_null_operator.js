/**
 * Nullish Coalescing Operator (??)
 * 
 * The ?? operator is a logical operator that returns its right-hand side operand 
 * when its left-hand side operand is `null` or `undefined`.
 * 
 * Otherwise, it returns its left-hand side operand.
 */

console.log("--- Nullish Coalescing (??) ---");

let name = null;
let defaultName = "Guest User";

// Since name is null, it returns defaultName
let displayName = name ?? defaultName; 
console.log("Display Name:", displayName); // "Guest User"

let browser = "Chrome";
// Since browser is NOT null or undefined, it returns "Chrome"
let selectedBrowser = browser ?? "Firefox";
console.log("Selected Browser:", selectedBrowser); // "Chrome"


console.log("\n--- ?? vs || (Crucial Interview Question) ---");
/**
 * Interview Question: What is the difference between ?? and || ?
 * 
 * Answer:
 * - || (Logical OR) checks for ANY falsy value. Falsy values include: 
 *   false, 0, "", null, undefined, NaN.
 * 
 * - ?? (Nullish Coalescing) checks strictly for "nullish" values. 
 *   Nullish values are ONLY: null, undefined.
 * 
 * Why does this matter?
 * If 0, "", or false are valid values in your application, using || might 
 * accidentally overwrite them with a default value. ?? prevents this bug.
 */

// Example where 0 is a valid value (e.g., a timeout of 0ms or a score of 0)
let timeout = 0; 

// Using || (Bug!)
// JavaScript sees 0 as falsy, so it uses the default 3000 instead.
let configuredTimeout1 = timeout || 3000; 
console.log("Timeout using || :", configuredTimeout1); // 3000 (Incorrectly overrode the 0)

// Using ?? (Correct!)
// JavaScript sees 0 is NOT null/undefined, so it keeps the 0.
let configuredTimeout2 = timeout ?? 3000;
console.log("Timeout using ?? :", configuredTimeout2); // 0 (Correctly kept the 0)

// Example with empty string
let emptyText = "";
console.log("Empty string with || :", emptyText || "Default Text"); // "Default Text"
console.log("Empty string with ?? :", emptyText ?? "Default Text"); // "" (Keeps the empty string)
