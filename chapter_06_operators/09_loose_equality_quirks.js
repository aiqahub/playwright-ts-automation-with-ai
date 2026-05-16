/**
 * Loose Equality (==) Quirks
 * Explaining why "" == "0" is false, but both are true when compared to 0.
 */

console.log("--- Loose Equality Quirks ---");

console.log('"" == 0   :', "" == 0);    // true (String converted to 0)
console.log('0 == "0"  :', 0 == "0");   // true (String converted to 0)
console.log('"" == "0" :', "" == "0"); // false (Both are strings, compared directly)

console.log("\n--- Why? ---");
console.log("Number('')  :", Number(""));  // 0
console.log("Number('0') :", Number("0")); // 0

console.log("\n--- Strict Equality (===) Fixes This ---");
console.log('"" === 0   :', "" === 0);    // false
console.log('0 === "0"  :', 0 === "0");   // false
console.log('"" === "0" :', "" === "0"); // false
