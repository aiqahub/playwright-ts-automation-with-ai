let str = "iNeuron Intelligence Pvt.Ltd";
console.log("1. slice: " + str.slice(0, 5));
console.log("2. slice (negative index): " + str.slice(-5));
console.log("3. slice (start index only): " + str.slice(6));

console.log("4. substring: " + str.substring(0, 5));
console.log("5. substring (start index only): " + str.substring(6));
console.log("6. substring (start > end): " + str.substring(10, 5));

console.log("7. substr: " + str.substr(0, 5));
console.log("8. substr (start index only): " + str.substr(6));
console.log("9. substr (start > end): " + str.substr(10, 5));