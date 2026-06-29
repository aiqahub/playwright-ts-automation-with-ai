// Build Js Basics Run Label

// Create a standard label for a test run dashboard.

// Rules:
// - Trim the suite name.
// - Lowercase the environment.
// - Append build number as build-N.
// - Join the three parts with " | ".
// Examples
// Input
// buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
// Output
// "Smoke Suite | staging | build-42"
// Explanation:Builds staging smoke label
// Input
// buildJsBasicsRunLabel("Regression", "PROD", 7)
// Output
// "Regression | prod | build-7"
// Explanation:Builds prod regression label
// Visible Test Cases
// Case 1
// Input: buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
//
// Expected: "Smoke Suite | staging | build-42"

// Case 2
// Input: buildJsBasicsRunLabel("Regression", "PROD", 7)
//
// Expected: "Regression | prod | build-7"

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    const suitePart = suiteName.trim();
    const envPart = environment.trim().toLowerCase();
    const buildPart = `build-${buildNumber}`;

    return `${suitePart} | ${envPart} | ${buildPart}`;
}

console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)); // "Smoke Suite | staging | build-42"
console.log(buildJsBasicsRunLabel("Regression", "PROD", 7));          // "Regression | prod | build-7"