function printHello(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function printHello(name, printHello) {
    console.log("Hello, " + name);
    printHello();
}