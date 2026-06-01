// Confusing comparisons
console.log("" == 0);             // true   — "" → 0
console.log("0" == 0);            // true   — "0" → 0
console.log("" == "0");           // false  — both strings, no coercion
console.log(null == undefined);   // true   — special rule
console.log(null == null);       // true  — both sides null
console.log(null == 0);           // false  — null only == undefined
console.log(null >= 0);           // true   — relational coerces null → 0
console.log(NaN === NaN);         // false  — NaN never equals anything
console.log(Number.isNaN(NaN));   // true   — correct check
console.log([] == false);         // true   — [] → "" → 0; false → 0
console.log([] == ![]);           // true   — !![] flips, both sides → 0
console.log(typeof null);         // "object" — 26-year legacy bug

console.log(0 == false);          // true   — 0 → false
console.log(0 === false);         // false  — different types, no coercion
console.log("" == false);        // true   — "" → false
console.log("" === false);       // false  — different types, no coercion

console.log("0" == false);       // true   — "0" → 0 → false
console.log("0" === false);      // false  — different types, no coercion

console.log("----------------NaN Comparison-------------------------");

console.log(NaN == NaN);         // false  — NaN never equals anything
console.log(NaN === NaN);        // false  — NaN never equals anything
console.log(Number.isNaN(NaN));  // true   — correct check
console.log(isNaN(NaN));        // true   — also true, but can be misleading
console.log(isNaN("hello"));     // true   — "hello" → NaN, so isNaN returns true, which can be confusing
console.log(Number.isNaN("hello")); // false  — "hello" is not NaN, so Number.isNaN returns false
console.log(isNaN("123"));       // false  — "123" → 123, which is a number, so isNaN returns false
console.log(Number.isNaN("123")); // false  — "123" is not NaN, so Number.isNaN returns false   
console.log(isNaN(true));        // false  — true → 1, which is a number, so isNaN returns false
console.log(Number.isNaN(true));  // false  — true is not NaN, so Number.isNaN returns false    
console.log(isNaN(false));       // false  — false → 0, which is a number, so isNaN returns false
console.log(Number.isNaN(false)); // false  — false is not NaN, so Number.isNaN returns false
console.log(isNaN(undefined));   // true   — undefined → NaN, so isNaN returns true
console.log(Number.isNaN(undefined)); // false  — undefined is not NaN, so Number.isNaN returns false
console.log(isNaN(null));      // false  — null → 0, which is a number, so isNaN returns false
console.log(Number.isNaN(null));  // false  — null is not NaN, so Number.isNaN returns false
console.log(isNaN({}));        // true   — {} → NaN, so isNaN returns true
console.log(Number.isNaN({}));  // false  — {} is not NaN, so Number.isNaN returns false
console.log(isNaN([]));        // false  — [] → 0, which is a number, so isNaN returns false
console.log(Number.isNaN([]));  // false  — [] is not NaN, so Number.isNaN returns false
console.log(isNaN([1, 2, 3])); // true   — [1, 2, 3] → NaN, so isNaN returns true
console.log(Number.isNaN([1, 2, 3])); // false  — [1, 2, 3] is not NaN, so Number.isNaN returns false
console.log(isNaN(""));         // false  — "" → 0, which is a number, so isNaN returns false
console.log(Number.isNaN(""));   // false  — "" is not NaN, so Number.isNaN returns false