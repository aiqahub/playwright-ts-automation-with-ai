// 1. var Hoisting
console.log("Value of a:", a); // Output: undefined
var a = 10;

// 2. let/const Hoisting (Temporal Dead Zone)
try {
    console.log("Value of b:", b);
} catch (error) {
    console.log("Error with b (let):", error.message); // ReferenceError
}
let b = 20;

// 3. Function Hoisting
sayHello();

function sayHello() {
    console.log(`Value of a inside the function before declaration: ${a}`)
    console.log("Hello from a hoisted function!");
    var a = 20;
    console.log(`Value of a inside the function after declaration: ${a}`)
}

function hosting() {
    console.log("Hello");
}

hosting()  