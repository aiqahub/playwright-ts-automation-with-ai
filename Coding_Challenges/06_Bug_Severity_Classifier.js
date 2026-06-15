// Bug Severity Classifier

// As a QA engineer, classify bugs based on two factors:
// frequency("always", "often", "rarely") and impact("blocker", "major", "minor").
// Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

// Input Format
// Two string variables: frequency ("always"/"often"/"rarely") and
//                          impact ("blocker"/"major"/"minor")

// Output Format
// Bug severity report with title, frequency, impact, and priority level

// Examples
// Input
// frequency = "always", impact = "blocker"
// Output
// Bug Title: Checkout page crashes on applying coupon
// Frequency: always
// Impact: blocker
// Severity: P0 -
// Critical: Stop release immediately

function classifyBugSeverity(frequency, impact) {
    if (frequency === "always") {
        if (impact === "blocker") return { severity: "P0", criticality: "Critical: Stop release immediately" };
        if (impact === "major")   return { severity: "P1", criticality: "High: Fix before next release" };
        if (impact === "minor")   return { severity: "P2", criticality: "Medium: Schedule fix in backlog" };
    } else if (frequency === "often") {
        if (impact === "blocker") return { severity: "P1", criticality: "High: Fix before next release" };
        if (impact === "major")   return { severity: "P2", criticality: "Medium: Schedule fix in backlog" };
        if (impact === "minor")   return { severity: "P3", criticality: "Low: Fix in future release" };
    } else if (frequency === "rarely") {
        if (impact === "blocker") return { severity: "P2", criticality: "Medium: Schedule fix in backlog" };
        if (impact === "major")   return { severity: "P3", criticality: "Low: Fix in future release" };
        if (impact === "minor")   return { severity: "P4", criticality: "Very Low: Consider for future release" };
    }
    return null;
}

function printBugReport(bugTitle, frequency, impact) {
    const result = classifyBugSeverity(frequency, impact);
    if (result === null) {
        console.error(`Unknown combination: ${frequency}/${impact}`);
        return;
    }
    console.log("Bug Title: " + bugTitle);
    console.log("Frequency: " + frequency);
    console.log("Impact: " + impact);
    console.log("Severity: " + result.severity + " - ");
    console.log(result.criticality);
}

// Example usage:
printBugReport("Checkout page crashes on applying coupon", "always", "blocker");
printBugReport("Checkout page crashes on applying coupon", "often", "major");
printBugReport("Checkout page crashes on applying coupon", "rarely", "minor");