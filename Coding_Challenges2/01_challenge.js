// Normalize Js Basics Label

// Create a reusable label normalizer for JavaScript QA utilities.

// Rules:
// - Trim leading and trailing spaces.
// - Convert text to lowercase.
// - Replace non-alphanumeric groups with a single hyphen.
// - Prefix the result with "js-basic-".

// Examples
// Input
// normalizeJsBasicsLabel(" Login Button ")
// Output
// "js-basic-login-button"
// Explanation:Trims and slugifies a normal label
// Input
// normalizeJsBasicsLabel("User Profile: Edit!")
// Output
// "js-basic-user-profile-edit"
// Explanation:Collapses punctuation into one hyphen
// Visible Test Cases
// Case 1
// Input: normalizeJsBasicsLabel(" Login Button ")

// Expected: "js-basic-login-button"

// Case 2
// Input: normalizeJsBasicsLabel("User Profile: Edit!")

// Expected: "js-basic-user-profile-edit"

// Case 3
// Input: normalizeJsBasicsLabel("---Search@@Box---")

// Expected: "js-basic-search-box"

// Case 4
// Input: normalizeJsBasicsLabel(" ")

// Expected: "js-basic"


function normalizeJsBasicsLabel(label) {
    if (!label || !label.trim()) return "js-basic";

    const slug = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return `js-basic-${slug}`;
}

console.log(normalizeJsBasicsLabel(" Login Button "));        // "js-basic-login-button"
console.log(normalizeJsBasicsLabel("User Profile: Edit!"));   // "js-basic-user-profile-edit"
console.log(normalizeJsBasicsLabel("---Search@@Box---"));     // "js-basic-search-box"
console.log(normalizeJsBasicsLabel(" "));                     // "js-basic"
console.log(normalizeJsBasicsLabel(""));                      // "js-basic"
console.log(normalizeJsBasicsLabel(null));                    // "js-basic"
console.log(normalizeJsBasicsLabel(undefined));               // "js-basic"
