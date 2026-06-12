//   *

//  ***

// *****

function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
}

printPyramid(5);

// use repeat method to create the pyramid

function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printPyramid(5);
