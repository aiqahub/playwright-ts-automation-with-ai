// 1. var - Function Scoped
function varExample() {
    if (true) {
        var x = "I am var";
    }
    console.log(x); // Works! "I am var" (Function Scoped)
}
varExample();

// example 2

var a = 10;// Global SCOPE
console.log("value of global a " + a);

function printHello() {
    console.log("example 2 of var!");
    var a = 20; // Local Scope
    console.log("value of a inside the function scope " + a);
    if (true) {
        var a = 30;
        console.log("value of a inside the if block " + a); // 30
    }
    console.log("value of a outside the if block " + a);

}
console.log("value of global a before the function call " + a);
printHello();
console.log("value of global a before the function call (reinitialized) " + a);
var a = 50;
console.log("value of global a after the function call (reinitialized) " + a);

// 2. let - Block Scoped
function letExample() {
    if (true) {
        let y = "I am let";
        console.log(y); // Works!
    }
    // console.log(y); // Error: y is not defined (Block Scoped)
}
letExample();

// example 2

let p = 10;// Global SCOPE
console.log(p);

function printHello1() {
    console.log("example 2 of let!");
    let p = 20; // Local Scope
    console.log("value of p inside the function scope - " + p);
    if (true) {
        let p = 30;
        console.log("value of p inside the if block - " + p); // 30
    }
    console.log("value of p outside the if block - " + p);

}
printHello1();


// 3. const - Block Scoped & Immutable Binding
function constExample() {
    const z = 100;
    // z = 200; // Error: Assignment to constant variable

    const arr = [1, 2, 3];
    console.log("Const Array before push:", arr);
    arr.push(4); // Works! (Reference is constant, but content can change)
    console.log("Const Array after push:", arr);
}
constExample();

// 4. Re-declaration differences
var a = 1;
var a = 2; // Allowed

let b = 1;
// let b = 2; // Error: Identifier 'b' has already been declared
