// JavaScript String Examples

// 1. Creating Strings
let str1 = 'Hello, World!'; // Single quotes
let str2 = "Hello, World!"; // Double quotes
let str3 = `Hello, World!`; // Template literals (backticks)

console.log('String Creation:');
console.log(str1);
console.log(str2);
console.log(str3);

// 2. String Concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log('\nConcatenation:');
console.log(fullName);

// 3. Template Literals (String Interpolation)
let age = 30;
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log('\nTemplate Literals:');
console.log(greeting);

// 4. Accessing Characters
console.log('\nAccessing Characters:');
console.log('First character of str1:', str1[0]); // 'H'
console.log('Using charAt:', str1.charAt(0)); // 'H'
console.log('Character at index 7:', str1.charAt(7)); // 'W'

// 5. String Length
console.log('\nString Length:');
console.log('Length of str1:', str1.length);

// 6. Common String Methods
console.log('\nCommon String Methods:');

// toUpperCase and toLowerCase
console.log('toUpperCase:', str1.toUpperCase());
console.log('toLowerCase:', str1.toLowerCase());

// trim
let messy = '   Hello, World!   ';
console.log('Original:', `'${messy}'`);
console.log('trimmed:', `'${messy.trim()}'`);

// split and join
let words = str1.split(' ');
console.log('Split by space:', words);
let joined = words.join('-');
console.log('Joined with hyphen:', joined);

// slice
console.log('slice(0, 5):', str1.slice(0, 5)); // 'Hello'
console.log('slice(7):', str1.slice(7)); // 'World!'
console.log('slice(-6):', str1.slice(-6)); // 'World!'

// substring
console.log('substring(0, 5):', str1.substring(0, 5)); // 'Hello'

// substr (note: substr is legacy, but still works)
console.log('substr(0, 5):', str1.substr(0, 5)); // 'Hello'

// replace
console.log('replace "World" with "Universe":', str1.replace('World', 'Universe'));

// indexOf and lastIndexOf
console.log('indexOf "o":', str1.indexOf('o'));
console.log('lastIndexOf "o":', str1.lastIndexOf('o'));

// includes, startsWith, endsWith
console.log('includes "World":', str1.includes('World'));
console.log('startsWith "Hello":', str1.startsWith('Hello'));
console.log('endsWith "!":', str1.endsWith('!'));

// charCodeAt and fromCharCode
console.log('charCodeAt(0):', str1.charCodeAt(0)); // 72 (H)
console.log('fromCharCode(72):', String.fromCharCode(72)); // H

// 7. Escape Sequences
console.log('\nEscape Sequences:');
console.log("Newline: 'Hello\\nWorld'");
console.log("Tab: 'Hello\\tWorld'");
console.log("Quote: 'He said, \"Hello!\"'");
console.log("Backslash: 'Path: C:\\\\Users\\\\Name'");

// 8. String Comparison
console.log('\nString Comparison:');
let strA = 'apple';
let strB = 'banana';
console.log(`"${strA}" < "${strB}":`, strA < strB); // true (lexicographical)
console.log(`"${strA}" === "${strA}":`, strA === strA); // true
console.log(`"${strA}" == "${strA}":`, strA == strA); // true

// 9. Iterating over Strings
console.log('\nIterating over Strings:');
for (let char of str1) {
  process.stdout.write(char); // Using process.stdout.write to avoid newline
}
console.log(); // Newline after the loop

// Using forEach with split (since strings are iterable in ES6, but we can also use for...of)
console.log('Using forEach on split array:');
str1.split('').forEach(char => {
  process.stdout.write(char + ' ');
});
console.log();

console.log('\nEnd of examples.');