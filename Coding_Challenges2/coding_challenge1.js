function normalizeJsBasicsLabel(label) {
    if (!label || !label.trim()) return "js-basic";

    const slug = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return `js-basic-${slug}`;
}

console.log(normalizeJsBasicsLabel(" Login Button "));       // "js-basic-login-button"
console.log(normalizeJsBasicsLabel("User Profile: Edit!"));  // "js-basic-user-profile-edit"
console.log(normalizeJsBasicsLabel(""));                     // ""
console.log(normalizeJsBasicsLabel("   "));                  // ""
console.log(normalizeJsBasicsLabel(null));                   // ""
console.log(normalizeJsBasicsLabel(undefined));              // ""
console.log(normalizeJsBasicsLabel(" ")); // "js-basic-special-characters"
