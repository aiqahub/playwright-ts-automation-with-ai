let url = "https://demo.automationexercise.com/"
console.log("1. includes: " + url.includes("automation"));
console.log("2. startsWith: " + url.startsWith("https"));
console.log("3. endsWith: " + url.endsWith(".com"));
console.log("4. startsWith (start index): " + url.startsWith("automation", 8));
console.log("5. indexOf: " + url.indexOf("automation"));
console.log("6. lastIndexOf: " + url.lastIndexOf("automation"));

console.log("7. search: " + url.search("automate"));
console.log("8. search with regex: " + url.search(/automate/i));

// Using test() for true/false check
const regex = /automate/i;
console.log("9. Regex test: " + regex.test(url));

console.log("10.  " + url.search(/demo/i));