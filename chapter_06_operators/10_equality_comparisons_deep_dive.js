/**
 * Deep Dive: Equality Comparisons (== vs ===)
 * This file explains the "weird" parts of JavaScript equality that often come up in interviews.
 */

console.log("--- 1. Loose (==) vs Strict (===) ---");
/**
 * Interview Question: What is the difference between == and ===?
 * Answer: 
 * - == (Loose Equality): Compares values after performing type coercion if types are different.
 * - === (Strict Equality): Compares both value AND type. No coercion happens.
 */

console.log('5 == "5"   :', 5 == "5");   // true (String converted to Number)
console.log('5 === "5"  :', 5 === "5");  // false (Different types)

console.log("\n--- 2. The Falsy Matrix (The Most Confusing Part) ---");
/**
 * Interview Question: Why does [] == false return true?
 * Answer: When comparing an object (array) to a primitive (boolean), the array is converted to a primitive.
 * [].toString() is "", and "" == false is true because both convert to number 0.
 */

console.log('false == 0   :', false == 0);   // true
console.log('false == ""  :', false == "");  // true
console.log('0 == ""      :', 0 == "");      // true
console.log('[] == 0      :', [] == 0);      // true
console.log('[] == ""     :', [] == "");     // true
console.log('[] == false  :', [] == false);  // true

console.log("\n--- 3. Null and Undefined ---");
/**
 * Interview Question: What is null == undefined?
 * Answer: true. They are loosely equal to each other but not to anything else (except themselves).
 */
console.log('null == undefined    :', null == undefined); // true
console.log('null === undefined   :', null === undefined); // false
console.log('null == 0           :', null == 0);         // false (Unique quirk)
console.log('undefined == 0      :', undefined == 0);    // false

console.log("\n--- 4. The NaN Paradox ---");
/**
 * Interview Question: How do you check if a value is NaN?
 * Answer: Use Number.isNaN() or isNaN(). You cannot use === because NaN is not equal to itself.
 */
console.log('NaN == NaN  :', NaN == NaN);   // false
console.log('NaN === NaN :', NaN === NaN);  // false

console.log("\n--- 5. Objects and Arrays (Reference Comparison) ---");
/**
 * Interview Question: Why is [] == [] false?
 * Answer: In JavaScript, objects (including arrays) are compared by reference, not by value. 
 * Even if they look the same, they occupy different memory locations.
 */
console.log('[] == []   :', [] == []);     // false
console.log('{} == {}   :', {} == {});     // false

let arr1 = [1, 2];
let arr2 = arr1; // Pointing to the same reference
console.log('arr1 === arr2 :', arr1 === arr2); // true

console.log("\n--- 6. String vs String comparison ---");
// This was your previous question!
console.log('"" == "0"  :', "" == "0"); // false (Same type, compared by value)

/**
 * FINAL INTERVIEW TIPS:
 * 1. Always use === unless you have a specific reason to use == (like checking for both null/undefined).
 * 2. Remember: "Same types? No coercion. Different types? Coercion happens (usually to Number)."
 * 3. NaN is the ONLY value in JS that is not equal to itself.
 */
