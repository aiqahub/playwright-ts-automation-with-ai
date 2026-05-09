// ==========================================
// COMMON JAVASCRIPT & NODE.JS COMMANDS
// ==========================================

// ------------------------------------------
// 1. Console Output Commands
// ------------------------------------------
console.log("1. console.log(): Standard way to print output to the console.");

console.warn("2. console.warn(): Used to print warning messages (often yellow in browser consoles).");

console.error("3. console.error(): Used to print error messages (often red in browser consoles).");

console.log("\n4. console.table(): Prints arrays or objects as a beautifully formatted table:");
console.table([
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
]);

console.log("\n5. console.time() & console.timeEnd(): Measures execution time.");
console.time("LoopTimer");
for (let i = 0; i < 1000000; i++) { /* simulating some work */ }
console.timeEnd("LoopTimer");


// ------------------------------------------
// 2. Node.js 'process' Object Commands
// ------------------------------------------
// The 'process' object provides information about, and control over, the current Node.js process.

console.log("\n--- Node.js Process Information ---");

// process.version: Returns the Node.js version you are currently running.
console.log("Node Version:", process.version);

// process.platform: Returns the operating system platform (e.g., 'win32', 'darwin', 'linux').
console.log("OS Platform:", process.platform);

// process.cwd(): Returns the current working directory from where you ran Node.
console.log("Current Directory:", process.cwd());

console.log("CPU Architecture:", process.arch);

// process.exit(): Immediately terminates the Node.js process.
// Example: process.exit(0); // 0 means success, 1 means failure. (Commented out to prevent early exit)


// ------------------------------------------
// 3. Timer Commands (Available in both Browser & Node.js)
// ------------------------------------------

console.log("\n--- Timers ---");

// setTimeout(): Executes a function exactly once after a specified delay (in milliseconds).
setTimeout(() => {
    console.log("-> This message appears after a 1.5-second delay (setTimeout).");
}, 1500);

// setInterval(): Repeatedly executes a function with a fixed time delay between calls.
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`-> Interval message #${count} (setInterval)`);
    if (count >= 3) {
        clearInterval(intervalId); // Stops the interval from running forever
        console.log("-> Interval stopped using clearInterval.");
    }
}, 500);


// ------------------------------------------
// 4. Common Terminal/CLI Commands 
// ------------------------------------------
/*
   These commands are NOT run inside the JavaScript file.
   You run them in your Terminal / Command Prompt:

   1. `node filename.js`      : Executes a JavaScript file using Node.js.
   2. `npm init -y`           : Initializes a new Node.js project (creates package.json).
   3. `npm install <package>` : Installs a 3rd party library/package from npm.
   4. `npm run <script_name>` : Runs a custom script defined in your package.json file.
*/