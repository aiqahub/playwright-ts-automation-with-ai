// Test Case Result Counter
// After a test suite runs, you receive an array of test
// results (strings: "pass", "fail", "skip").
// Write a JavaScript program using a for loop that counts
// how many tests passed, failed, and were skipped. Print a test
//  report with total tests, counts, pass rate percentage, and a verdict
// (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

// Input Format: An array of strings containing "pass", "fail", or "skip"

// Output Format: A test report with counts, pass rate, and verdict

// Example
// input:
// testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

// Output:
// Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.

function generateTestReport(testResults) {
    const totalTests = testResults.length;
    let passed = 0;
    let failed = 0;
    let skipped = 0;

    for (let i = 0; i < testResults.length; i++) {
        if (testResults[i] === "pass") {
            passed++;
        } else if (testResults[i] === "fail") {
            failed++;
        } else if (testResults[i] === "skip") {
            skipped++;
        }
    }

    const passRate = totalTests > 0 ? ((passed / totalTests) * 100).toFixed(2) : "0.00";
    const verdict = failed === 0
        ? "All tests passed. Ready for release."
        : failed <= 2
            ? "Minor failures. Review before release."
            : "Major failures. Block release.";

    return { totalTests, passed, failed, skipped, passRate, verdict };
}

function printTestReport(report) {
    console.log(`Total Tests : ${report.totalTests} Passed: ${report.passed} Failed: ${report.failed} Skipped: ${report.skipped} Pass Rate: ${report.passRate}% VERDICT: ${report.verdict}`);
}

// Example usage:
const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
const report = generateTestReport(testResults);
printTestReport(report);