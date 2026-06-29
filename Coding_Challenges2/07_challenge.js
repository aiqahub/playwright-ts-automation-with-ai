// Summarize Js Basics Results

// Build a compact summary object from test result labels.

// Rules:
// - Count total items.
// - Count items containing pass, fail, and skip.
// - Return an object with total, passed, failed, skipped.

// Examples
// Input
// summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])
// Output
// {"total":3,"passed":1,"failed":1,"skipped":1}
// Explanation:Summarizes mixed results
// Input
// summarizeJsBasicsResults([])
// Output
// {"total":0,"passed":0,"failed":0,"skipped":0}
// Explanation:Summarizes empty list
// Visible Test Cases
// Case 1
// Input: summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])
//
// Expected: {"total":3,"passed":1,"failed":1,"skipped":1}

// Case 2
// Input: summarizeJsBasicsResults([])
//
// Expected: {"total":0,"passed":0,"failed":0,"skipped":0}

// Case 3
// Input: summarizeJsBasicsResults(["a-pass","b-pass"])
//
// Expected: {"total":2,"passed":2,"failed":0,"skipped":0}

function summarizeJsBasicsResults(results) {
  const summary = { total: 0, passed: 0, failed: 0, skipped: 0 };

  for (let i = 0; i < results.length; i++) {
    const item = results[i].toLowerCase();
    summary.total++;

    if (item.includes("pass"))  summary.passed++;
    if (item.includes("fail"))  summary.failed++;
    if (item.includes("skip"))  summary.skipped++;
  }

  return summary;
}

console.log(summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"])); // {total:3,passed:1,failed:1,skipped:1}
console.log(summarizeJsBasicsResults([]));                                          // {total:0,passed:0,failed:0,skipped:0}
console.log(summarizeJsBasicsResults(["a-pass", "b-pass"]));                       // {total:2,passed:2,failed:0,skipped:0}