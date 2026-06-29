// Map Js Basics Keyword Meaning

// Build a lookup function for important keywords or terms from this chapter group.

// Rules:
// - Normalize input by trimming and lowercasing.
// - Return the mapped meaning when the term exists.
// - Return "unknown" for unmapped terms.

// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input : getJsBasicsKeywordMeaning("NODE")
// Output : "runtime"
// Explanation:Maps node correctly
// Input : getJsBasicsKeywordMeaning(" v8 ")
// Output : "engine"
// Explanation:Maps v8 correctly

// Visible Test Cases
// Case 1
// Input: getJsBasicsKeywordMeaning("NODE")
// Expected: "runtime"

// Case 2
// Input: getJsBasicsKeywordMeaning(" v8 ")       
// Expected: "engine"

// Case 3
// Input: getJsBasicsKeywordMeaning("npm")
// Expected: "package-manager"

// Case 4
// Input: getJsBasicsKeywordMeaning("not-a-topic")
// Expected: "unknown"

function getJsBasicsKeywordMeaning(term) {
    const keywords = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager",
        let: "block-scoped variable",
        const: "immutable binding",
        var: "function-scoped variable",
        promise: "async operation",
        callback: "function passed as argument",
        closure: "function with captured scope",
        hoisting: "declaration moved to top",
    };

    const normalized = (term || "").trim().toLowerCase();
    return keywords[normalized] ?? "unknown";
}

console.log(getJsBasicsKeywordMeaning("NODE"));        // "runtime"
console.log(getJsBasicsKeywordMeaning(" v8 "));        // "engine"
console.log(getJsBasicsKeywordMeaning("npm"));         // "package-manager"
console.log(getJsBasicsKeywordMeaning("not-a-topic")); // "unknown"