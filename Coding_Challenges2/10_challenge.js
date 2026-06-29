// Find First Critical Js Basics Bug

// Find the first critical bug title from a bug list.

// Rules:
// - Each bug has title and severity.
// - Return the title of the first bug with severity "critical".
// - Return "No critical bug" when none exists.

// Examples
// Input
// findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])
// Output
// "Login crash"
// Explanation:Finds first critical item
// Input
// findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])
// Output
// "No critical bug"
// Explanation:Returns fallback when no critical bug exists
// Visible Test Cases
// Case 1
// Input: findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])

// Expected: "Login crash"

// Case 2
// Input: findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])

// Expected: "No critical bug"

function findFirstCriticalJsBasicsBug(bugs) {
  for (let i = 0; i < bugs.length; i++) {
    if (bugs[i].severity === "critical") {
      return bugs[i].title;
    }
  }
  return "No critical bug";
}

console.log(findFirstCriticalJsBasicsBug([{ title: "Typo", severity: "low" }, { title: "Login crash", severity: "critical" }])); // "Login crash"
console.log(findFirstCriticalJsBasicsBug([{ title: "Spacing issue", severity: "low" }]));                                        // "No critical bug"