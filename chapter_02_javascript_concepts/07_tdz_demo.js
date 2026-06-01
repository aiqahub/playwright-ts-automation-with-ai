/**
 * Temporal Dead Zone (TDZ) Demonstration
 * 
 * This file shows how TDZ works in practice and the difference between var and let.
 */

console.log("--- 1. The 'var' Behavior (No TDZ) ---");
console.log("Value of a before declaration:", a); // undefined
var a = 10;
console.log("Value of a after declaration:", a);  // 10

console.log("\n--- 2. The 'let' Behavior (TDZ) ---");
try {
    console.log("Trying to access 'b' before declaration...");
    console.log(b); 
} catch (error) {
    console.log("Caught Error:", error.message); // Cannot access 'b' before initialization
}

let b = 20; // TDZ for 'b' ends here
console.log("Value of b after declaration:", b); // 20

console.log("\n--- 3. The Shadowing TDZ Trap ---");
let x = "I am Global";

function testShadowing() {
    // Even though there is a global 'x', the local 'let x' hoists 
    // and creates a TDZ within this function scope.
    try {
        console.log("Accessing x inside function before local declaration...");
        console.log(x); 
    } catch (error) {
        console.log("Caught Error:", error.message);
    }
    
    let x = "I am Local";
    console.log("Value of x after local declaration:", x);
}

testShadowing();

console.log("\n--- 4. TDZ in Function Parameters ---");
try {
    // 'y' is accessed to initialize 'x' while 'y' is still in TDZ
    function multiply(x = y, y = 2) {
        return x * y;
    }
    multiply();
} catch (error) {
    console.log("Caught Error in parameters:", error.message);
}

/**
 * Key Takeaway:
 * TDZ makes the "Hoisting" of let/const visible by throwing an error 
 * instead of returning 'undefined'. This helps prevent bugs where you 
 * accidentally use a variable before it's ready.
 */
