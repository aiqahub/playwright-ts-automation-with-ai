/**
 * CHAPTER 13: CLOSURES DEMONSTRATION
 * 
 * Run this file using Node.js:
 * node chapter_13_closure/02_closure_demo.js
 */

console.log("=========================================");
console.log("   🚀 JAVASCRIPT CLOSURE DEMONSTRATION   ");
console.log("=========================================\n");

// --- 1. LEXICAL SCOPE FOUNDATION ---
console.log("--- 1. Lexical Scope Foundation ---");
function outerScopeDemo() {
    const outerVariable = "I am defined in the outer scope!";

    function innerScopeDemo() {
        // Inner function has access to the outer function's variable
        console.log("Inner function reading outerVariable: " + outerVariable);
    }
    
    innerScopeDemo();
}
outerScopeDemo();
console.log("");


// --- 2. BASIC CLOSURE (State retention) ---
console.log("--- 2. Basic Closure (State Retention) ---");
function createCounter() {
    let count = 0; // Private state variable

    return function increment() {
        count++; // Increments the private variable
        return count;
    };
}

// counterA is a closure that retains access to its own 'count' variable
const counterA = createCounter();
console.log("counterA call 1:", counterA()); // Output: 1
console.log("counterA call 2:", counterA()); // Output: 2

// counterB gets a completely separate lexical environment
const counterB = createCounter();
console.log("counterB call 1:", counterB()); // Output: 1 (independent from counterA)
console.log("counterA call 3:", counterA()); // Output: 3 (counterA continues its state)
console.log("");


// --- 3. PRACTICAL AUTOMATION USE CASE: Email Generator ---
console.log("--- 3. Automation Use Case: Unique Email Generator ---");
function createEmailGenerator(domain) {
    let sequentialId = 0;
    
    return function generate(userName) {
        sequentialId++;
        const timestamp = Date.now();
        return `${userName.toLowerCase()}_${timestamp}_${sequentialId}@${domain}`;
    };
}

const generateQAEmail = createEmailGenerator("qa-automation.io");

console.log("Email 1:", generateQAEmail("User"));
console.log("Email 2:", generateQAEmail("Admin"));
console.log("");


// --- 4. PRACTICAL AUTOMATION USE CASE: Custom Logger ---
console.log("--- 4. Automation Use Case: Logger with Prefixes ---");
function createLogger(moduleName) {
    return function log(message) {
        const time = new Date().toLocaleTimeString();
        console.log(`[${time}] [${moduleName.toUpperCase()}]: ${message}`);
    };
}

const loginPageLogger = createLogger("LoginPage");
const paymentPageLogger = createLogger("PaymentPage");

loginPageLogger("User navigated to the login screen.");
paymentPageLogger("Payment transaction initiated.");
console.log("");


// --- 5. THE LOOP GOTCHA: var vs let ---
console.log("--- 5. The Loop Gotcha (var vs let) ---");

// A. The Problem with 'var'
console.log("Using 'var' in loop (all call-backs see the final value of the shared variable):");
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        // Since 'i' is function-scoped, they all share a single variable that eventually becomes 4.
        console.log("  var callback value of i:", i); 
    }, 100);
}

// Let's wait a little bit and run 'let' so they don't overlap in console logs
setTimeout(function() {
    console.log("\nUsing 'let' in loop (each iteration has its own scope and separate closure):");
    for (let j = 1; j <= 3; j++) {
        setTimeout(function() {
            // Since 'j' is block-scoped, a new 'j' is bound for each iteration.
            console.log("  let callback value of j:", j);
        }, 100);
    }
}, 300);
