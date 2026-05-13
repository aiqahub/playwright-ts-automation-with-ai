// 1. Single vs Double Quotes (Escaping)
let single = 'This is a "quoted" word in single quotes';
let double = "It's a beautiful day in double quotes";
let escaped = 'It\'s a day for escaping';

console.log("--- Quotes & Escaping ---");
console.log(single);
console.log(double);
console.log(escaped);

// 2. The Power of Backticks (Template Literals)
const tool = "Playwright";
const year = 2024;

// Interpolation
let interpolation = `I am using ${tool} in ${year}`;

// Expressions inside backticks
let math = `The result of 5 + 5 is ${5 + 5}`;

// Multi-line Support
let multiline = `
This is a 
multi-line 
string using backticks.
`;

console.log("\n--- Template Literals ---");
console.log(interpolation);
console.log(math);
console.log(multiline);

// 3. Comparison with Concatenation
let oldWay = "Tool: " + tool + ", Year: " + year; // Harder to read
let newWay = `Tool: ${tool}, Year: ${year}`;    // Much cleaner

console.log("\n--- Comparison ---");
console.log("Old Way:", oldWay);
console.log("New Way:", newWay);
