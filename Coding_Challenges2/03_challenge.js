// Classify Js Basics Readiness Score

// Create a QA-friendly score classifier for practice readiness.

// Rules:
// - 90 and above => EXCELLENT.
// - 75 to 89 => GOOD.
// - 50 to 74 => NEEDS_PRACTICE.
// - Below 50 => REVISIT.

// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input : classifyJsBasicsScore(95)
// Output : "EXCELLENT"
// Explanation:High score is excellent
// Input : classifyJsBasicsScore(75)
// Output : "GOOD"
// Explanation:Boundary 75 is good
// Visible Test Cases

// Case 1
// Input: classifyJsBasicsScore(95)
// Expected: "EXCELLENT"

// Case 2
// Input: classifyJsBasicsScore(75)
// Expected: "GOOD"

// Case 3
// Input: classifyJsBasicsScore(50)
// Expected: "NEEDS_PRACTICE"

// Case 4
// Input: classifyJsBasicsScore(32)
// Expected: "REVISIT"

function classifyJsBasicsScore(score) {
  if (score >= 90) return "EXCELLENT";
  if (score >= 75) return "GOOD";
  if (score >= 50) return "NEEDS_PRACTICE";
  return "REVISIT";
}

console.log(classifyJsBasicsScore(95)); // "EXCELLENT"
console.log(classifyJsBasicsScore(75)); // "GOOD"
console.log(classifyJsBasicsScore(50)); // "NEEDS_PRACTICE"
console.log(classifyJsBasicsScore(32)); // "REVISIT"