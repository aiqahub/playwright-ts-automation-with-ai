let matrix_2D = [
    [1, 2, 3, 4],
];

let matrix_2D_2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(matrix_2D);
console.log(matrix_2D_2);

console.log(matrix_2D.length);  // 1
console.log(matrix_2D_2.length);  // 3

console.log(matrix_2D[0].length);  // 4
console.log(matrix_2D_2[0].length);  // 4

// R  - 1
// C - 4
// 1x4

// It is called these same rows and same column. - Grid

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(grid[0][0])
console.log(grid[0][2])

console.log(grid.length);   // 3 — number of rows
console.log(grid[0].length);  // 3 — number of cols in row 0
