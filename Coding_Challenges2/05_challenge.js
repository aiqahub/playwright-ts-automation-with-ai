// Filter Supported Js Basics Topics

// Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

// Rules:
// - Trim and lowercase each item.
// - Allow known aliases from the chapter group.
// - Return canonical topic keys in first-seen order.
// - Skip unsupported values.

// Examples
// Input : filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])
// Output : ["node","v8"]
// Explanation:Normalizes known terms
//
// Input : filterSupportedJsBasicsTopics(["node","runtime","node"])
// Output : ["node"]
// Explanation:Removes duplicates

// Visible Test Cases
// Case 1
// Input: filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])
// Expected: ["node","v8"]

// Case 2
// Input: filterSupportedJsBasicsTopics(["node","runtime","node"])
// Expected: ["node"]

// Case 3
// Input: filterSupportedJsBasicsTopics(["npm","node","v8"])
// Expected: ["npm","node","v8"]

// canonical key → its alias (meaning), plus alias → canonical key
const ALIAS_MAP = {
  node: "node",        runtime: "node",
  v8: "v8",           engine: "v8",
  npm: "npm",         "package-manager": "npm",
  let: "let",         "block-scoped variable": "let",
  const: "const",     "immutable binding": "const",
  var: "var",         "function-scoped variable": "var",
  promise: "promise", "async operation": "promise",
  callback: "callback", "function passed as argument": "callback",
  closure: "closure", "function with captured scope": "closure",
  hoisting: "hoisting", "declaration moved to top": "hoisting",
};

function filterSupportedJsBasicsTopics(topics) {
  const seen = new Set();
  const result = [];

  for (const topic of topics) {
    const normalized = topic.trim().toLowerCase();
    const canonical = ALIAS_MAP[normalized];

    if (canonical && !seen.has(canonical)) {
      seen.add(canonical);
      result.push(canonical);
    }
  }

  return result;
}

console.log(filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"])); // ["node","v8"]
console.log(filterSupportedJsBasicsTopics(["node", "runtime", "node"])); // ["node"]
console.log(filterSupportedJsBasicsTopics(["npm", "node", "v8"]));       // ["npm","node","v8"]