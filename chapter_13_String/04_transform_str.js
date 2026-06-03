let str = "xpressfunda.com";
console.log("1. toUpperCase: " + str.toUpperCase());
console.log("2. toLowerCase: " + str.toLowerCase());

cinsole.log("3. toLocaleUpperCase: " + str.toLocaleUpperCase());
console.log("4. toLocaleLowerCase: " + str.toLocaleLowerCase());

console.log("5. toLocaleUpperCase (Turkish): " + str.toLocaleUpperCase('tr-TR'));
console.log("6. toLocaleLowerCase (Turkish): " + str.toLocaleLowerCase('tr-TR'));

console.log("7. toLocaleUpperCase (German): " + str.toLocaleUpperCase('de-DE'));
console.log("8. toLocaleLowerCase (German): " + str.toLocaleLowerCase('de-DE'));

console.log("9. trimend: " + str.trimEnd());
console.log("10. trimstart: " + str.trimStart());
