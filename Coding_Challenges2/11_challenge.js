// Summarize Js Basics Matrix

// Summarize a two-dimensional matrix of suite results.

// Rules:
// - The input is an array of arrays.
// - Each cell is a result string.
// - Count total, passed, failed, and collect failedCases.

// Examples
// Input
// summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])
// Output
// {"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}
// Explanation:Summarizes mixed matrix
// Input
// summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])
// Output
// {"total":3,"passed":3,"failed":0,"failedCases":[]}
// Explanation:Summarizes all pass matrix
// Visible Test Cases
// Case 1
// Input: summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])

// Expected: {"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}

// Case 2
// Input: summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])

// Expected: {"total":3,"passed":3,"failed":0,"failedCases":[]}

function summarizeJsBasicsMatrix(matrix) {
  const summary = { total: 0, passed: 0, failed: 0, failedCases: [] };

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      const item = row[j].toLowerCase();
      summary.total++;

      if (item.includes("pass")) {
        summary.passed++;
      } else if (item.includes("fail")) {
        summary.failed++;
        summary.failedCases.push(row[j]);
      }
    }
  }

  return summary;
}

console.log(summarizeJsBasicsMatrix([["login-pass"], ["checkout-fail"]]));     // {total:2,passed:1,failed:1,failedCases:["checkout-fail"]}
console.log(summarizeJsBasicsMatrix([["a-pass", "b-pass"], ["c-pass"]]));      // {total:3,passed:3,failed:0,failedCases:[]}