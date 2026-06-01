let x = 7;
if (x % 2 === 0) {
    console.log(`${x} is an even number.`);
} else {
    console.log(`${x} is an odd number.`);
}

let mark = 85;
if (mark >= 90) {
    console.log("Grade: A");
} else if (mark >= 80) {
    console.log("Grade: B");
} else if (mark >= 70) {
    console.log("Grade: C");
} else if (mark >= 60) {
    console.log("Grade: D");
} else {
    console.log("FAIL");
}

// Leap Year Check
let year = 2021;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}