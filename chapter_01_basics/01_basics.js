console.log("Hello World!");

let a = 10;
console.log(a);

// capture time in one varialbe and print it after the loop
let startTime = Date.now();
for (let a = 0; a < 100000; a++) {
    console.log(a);

}
let endTime = Date.now();
console.log("Time taken: " + (endTime - startTime) + "ms");

function print() {
    console.log("Hello");
}

print();

