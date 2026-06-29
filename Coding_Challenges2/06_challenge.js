// Count Passing Js Basics Checks

// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

// Count how many check result strings represent a pass.

// Rules:
// - Treat matching as case-insensitive.
// - A passing item contains the word "pass".
// - Return only the count.

// Examples
// Input : countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])
// Output : 2
// Explanation:Counts mixed pass/fail data

// Input : countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])
// Output : 2
// Explanation:Handles uppercase PASS

// Visible Test Cases
// Case 1
// Input: countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])
// Expected: 2

// Case 2
// Input: countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])
// Expected: 2

// Case 3
// Input: countPassingJsBasicsChecks(["one-fail","two-skip"])
// Expected: 0

function countPassingJsBasicsChecks(checks) {

    // return checks.filter(item => item.toLowerCase().includes("pass")).length;
    let count = 0;

    for (let i = 0; i < checks.length; i++) {
        const item = checks[i];
        const lowerItem = item.toLowerCase();
        const isPass = lowerItem.includes("pass");

        if (isPass) {
            count++;
        }
    }

    return count;
}

console.log(countPassingJsBasicsChecks(["js-basics-pass", "engine-setup-fail", "comments-pass"]));           // 2
console.log(countPassingJsBasicsChecks(["IDENTIFIERS PASS", "LITERALS PASS"]));                              // 2
console.log(countPassingJsBasicsChecks(["null-check-fail", "undefined-check-skip", "equality-check-fail"])); // 0