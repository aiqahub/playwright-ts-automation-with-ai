enum Severity {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
    BLOCKING
}

console.log(Severity.HIGH);

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.HIGH;
}

console.log("Low urgent?", needsImmediateAttention(Severity.LOW));
console.log("Critical urgent?", needsImmediateAttention(Severity.CRITICAL));
console.log("Severity name:", Severity[2]);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

if (Environment.QA === "https://qa.api.com") {
    console.log("QA environment is set correctly.");
}

console.log(Environment.QA);

enum Severity1 {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High",
    CRITICAL = "Critical",
    BLOCKING = "Blocking"
}
if (Severity1.CRITICAL === "Critical") {
    console.log("Critical severity is set correctly.");
}
