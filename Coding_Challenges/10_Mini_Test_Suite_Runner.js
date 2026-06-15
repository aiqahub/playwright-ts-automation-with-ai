// Mini Test Suite Runner

// Build a mini test suite runner that executes test cases and generates a summary report.
// This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop,
// do...while, operators(===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison
// type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests,
// track pass/fail/error counts, find consecutive passes from start (while loop),
// find first failure (do...while), and print a comprehensive report.

// Input Format
// An array of test case objects with name, actual, expected, and type properties

// Output Format
// Individual test results, then a comprehensive summary report with metrics

// Examples
// Input
// { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
// Output
// ✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED

const testCases = [
    { name: "Status code is 200",         actual: 200,    expected: 200,      type: "strictEqual" },
    { name: "Response time < 500ms",       actual: 450,    expected: 500,      type: "lessThan"    },
    { name: "Status text loose match",     actual: "200",  expected: 200,      type: "looseEqual"  },
    { name: "User ID type is number",      actual: 42,     expected: "number", type: "typeCheck"   },
    { name: "Response body is truthy",     actual: null,   expected: true,     type: "truthy"      },
];

// Returns true/false for a test case, throws on unknown type
function runTest(testCase) {
    switch (testCase.type) {
        case "strictEqual": return testCase.actual === testCase.expected;
        case "looseEqual":  return testCase.actual == testCase.expected;
        case "typeCheck":   return typeof testCase.actual === testCase.expected;
        case "truthy":      return !!testCase.actual;
        case "lessThan":    return testCase.actual < testCase.expected;
        default:            throw new Error(`Unknown test type: ${testCase.type}`);
    }
}

// Returns a human-readable comparison detail string
function getDetail(testCase, passed) {
    switch (testCase.type) {
        case "strictEqual": return `${testCase.actual} === ${testCase.expected}`;
        case "looseEqual":  return `"${testCase.actual}" == ${testCase.expected}`;
        case "typeCheck":   return `typeof ${testCase.actual} === "${testCase.expected}"`;
        case "truthy":      return passed ? `${testCase.actual} is truthy` : `${testCase.actual} is not truthy`;
        case "lessThan":    return `${testCase.actual} < ${testCase.expected}`;
        default:            return "";
    }
}

let passCount  = 0;
let failCount  = 0;
let errorCount = 0;
const results  = [];

// for loop — run each test and log individual result
for (let i = 0; i < testCases.length; i++) {
    const tc     = testCases[i];
    const tcId   = `TC-${String(i + 1).padStart(2, "0")}`;
    let passed;

    try {
        passed = runTest(tc);
    } catch (err) {
        errorCount++;
        failCount++;
        results.push(false);
        console.log(`⚠️  ${tcId}: ${tc.name} → ERROR (${err.message})`);
        continue;
    }

    results.push(passed);
    const detail = getDetail(tc, passed);

    if (passed) {
        passCount++;
        console.log(`✅ ${tcId}: ${tc.name} → PASS (${detail})`);
    } else {
        failCount++;
        console.log(`❌ ${tcId}: ${tc.name} → FAIL (${detail})`);
    }
}

// while loop — count consecutive passes from the start
let consecutivePasses = 0;
let wi = 0;
while (wi < results.length && results[wi] === true) {
    consecutivePasses++;
    wi++;
}

// do...while — find first failure index
let firstFailIndex = -1;
let di = 0;
do {
    if (results[di] === false) {
        firstFailIndex = di;
    }
    di++;
} while (di < results.length && firstFailIndex === -1);

const totalTests   = testCases.length;
const passRate     = totalTests > 0 ? ((passCount / totalTests) * 100).toFixed(2) : "0.00";
const overallStatus = failCount > 0 || errorCount > 0 ? "❌ FAILED" : "✅ PASSED";
const firstFailMsg  = firstFailIndex !== -1
    ? `TC-${String(firstFailIndex + 1).padStart(2, "0")} (${testCases[firstFailIndex].name})`
    : "None";

console.log("─".repeat(60));
console.log(`Total Tests:         ${totalTests}`);
console.log(`Passed:              ${passCount}`);
console.log(`Failed:              ${failCount}`);
console.log(`Errors:              ${errorCount}`);
console.log(`Pass Rate:           ${passRate}%`);
console.log(`Consecutive Passes:  ${consecutivePasses} (from start)`);
console.log(`First Failure:       ${firstFailMsg}`);
console.log(`Overall:             ${overallStatus}`);