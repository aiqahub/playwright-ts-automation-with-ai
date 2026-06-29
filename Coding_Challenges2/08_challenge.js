// Merge Js Basics Config

// Merge default and override configuration values for a test helper.

// Rules:
// - Override values must win.
// - If retries is missing from both objects, default it to 0.
// - Do not mutate the input objects.

// Examples
// Input
// mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
// Output
// {"retries":3,"env":"dev"}
// Explanation:Override retries wins
// Input
// mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})
// Output
// {"env":"qa","timeout":5000,"retries":0}
// Explanation:Adds missing retries default
// Visible Test Cases
// Case 1
// Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
//
// Expected: {"retries":3,"env":"dev"}

// Case 2
// Input: mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})
//
// Expected: {"env":"qa","timeout":5000,"retries":0}

// Case 3
// Input: mergeJsBasicsConfig({"env":"dev","retries":2}, {"env":"stage"})
//
// Expected: {"env":"stage","retries":2}

function mergeJsBasicsConfig(defaults, overrides) {
  const merged = { ...defaults, ...overrides };

  if (merged.retries === undefined) {
    merged.retries = 0;
  }

  return merged;
}

console.log(mergeJsBasicsConfig({ retries: 1, env: "dev" }, { retries: 3 }));      // {retries:3, env:"dev"}
console.log(mergeJsBasicsConfig({ env: "qa" }, { timeout: 5000 }));                // {env:"qa", timeout:5000, retries:0}
console.log(mergeJsBasicsConfig({ env: "dev", retries: 2 }, { env: "stage" }));    // {env:"stage", retries:2}