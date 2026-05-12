// 1. var - Function Scoped
function varExample() {
    if (true) {
        var x = "I am var";
    }
    console.log(x); // Works! "I am var" (Function Scoped)
}
varExample();

// 2. let - Block Scoped
function letExample() {
    if (true) {
        let y = "I am let";
        console.log(y); // Works!
    }
    // console.log(y); // Error: y is not defined (Block Scoped)
}
letExample();

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
