// 1. String Literals
let str1 = 'Single Quote String';
let str2 = "Double Quote String";
let str3 = `Template Literal (Backtick)`;

console.log("--- String Literals ---");
console.log(str1, str2, str3);

// 2. Numeric Literals
let integer = 100;
let float = 99.99;
let hex = 0xFF;      // 255
let binary = 0b1010; // 10
let octal = 0o744;   // 484
let expo = 2e3;      // 2000

console.log("\n--- Numeric Literals ---");
console.log(`Int: ${integer}, Float: ${float}, Hex: ${hex}, Binary: ${binary}, Octal: ${octal}, Expo: ${expo}`);

// 3. Boolean Literals
let isTrue = true;
let isFalse = false;

console.log("\n--- Boolean Literals ---");
console.log(isTrue, isFalse);

// 4. Object Literals
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

console.log("\n--- Object Literals ---");
console.log(person);

// 5. Array Literals
let fruits = ["Apple", "Banana", "Cherry"];

console.log("\n--- Array Literals ---");
console.log(fruits);

// 6. Template Literals (with Interpolation)
let tool = "Playwright";
let message = `I am learning automation with ${tool}`;

console.log("\n--- Template Literals ---");
console.log(message);

// 7. BigInt Literals
let largeNumber = 9007199254740991n;

console.log("\n--- BigInt Literals ---");
console.log(largeNumber);

// 8. RegExp Literals
let pattern = /playwright/i;

console.log("\n--- RegExp Literals ---");
console.log("Is 'Playwright' matching?", pattern.test("Playwright"));

// 9. Null Literal
let emptyValue = null;

console.log("\n--- Null Literal ---");
console.log(emptyValue);
