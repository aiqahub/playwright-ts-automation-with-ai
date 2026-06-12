/**
 * A callback function is a function passed as an argument to another function, 
 * which then calls it at some point during execution.
 */


function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // the passed function gets called here
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Alice", sayBye); // sayBye is the callback
// Why they exist: JavaScript is single-threaded, so callbacks let you say "do this work, 
// and when it's done, run this function" — without blocking.

// Two main uses:

// Synchronous — called immediately, used to customize behavior (like Array.forEach, Array.map)


[1, 2, 3].forEach(function (num) {
    console.log(num); // this anonymous function is the callback
});
// Asynchronous — called later, after some work finishes (timers, file reads, network requests)


setTimeout(function () {
    console.log("runs after 2 seconds");
}, 2000);

// The pattern you'll see in Playwright: test runner callbacks follow this same shape — you pass
// a function describing what to do, and the runner calls it when ready.

// The file you have open (01_callback_basics.js) likely has hands-on examples of this — want
// to walk through it?