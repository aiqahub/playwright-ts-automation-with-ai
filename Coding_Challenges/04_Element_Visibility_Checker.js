// In UI automation (Cypress/Playwright), you often need to validate element
// states before interacting with them. Write a JavaScript program that checks
// an element's properties (isPresent, isDisplayed, isEnabled) and prints the
// appropriate action a QA engineer should take. Use strict equality (===),
// logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true),
//         DISABLED (present+displayed but not enabled),
//         HIDDEN (present but not displayed),
//         NOT FOUND (not present).
// Severity: CRITICAL (not present),
//           WARNING (not displayed or not enabled),
//           OK (all good).

// Input Format
// Three boolean variables: isPresent, isDisplayed, isEnabled

// Output Format
// Element status, severity level, and recommended action

// Examples
// Input
// isPresent = true, isDisplayed = true, isEnabled = false
// Output
// Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.

function checkElementVisibility(isPresent, isDisplayed, isEnabled) {
    if (isPresent === true && isDisplayed === true && isEnabled === true) {
        return {
            status: "READY",
            severity: "OK",
            action: "Element is ready for interaction."
        };
    } else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        return {
            status: "DISABLED",
            severity: "WARNING",
            action: "Element is visible but disabled. Wait for enable state or check preconditions."
        };
    } else if (isPresent === true && isDisplayed === false) {
        return {
            status: "HIDDEN",
            severity: "WARNING",
            action: "Element is present but hidden. Check visibility conditions or wait for it to become visible."
        };
    } else {
        return {
            status: "NOT FOUND",
            severity: "CRITICAL",
            action: "Element is not present. Check locator strategy or ensure element is rendered."
        };
    }
}

function logElementStatus(isPresent, isDisplayed, isEnabled) {
    const result = checkElementVisibility(isPresent, isDisplayed, isEnabled);
    const severity = result.status === "READY" ? "OK" : (result.status === "NOT FOUND" ? "CRITICAL" : "WARNING");
    console.log(`Status: ${result.status} Severity: ${severity} Action: ${result.action}`);
}

// Example usage:
logElementStatus(true, true, false);   // DISABLED
logElementStatus(true, false, true);   // HIDDEN
logElementStatus(false, false, false); // NOT FOUND
logElementStatus(true, true, true);    // READY