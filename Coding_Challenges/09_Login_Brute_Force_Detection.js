// Login Brute-Force Detection

// Write a JavaScript program that simulates a login system with
// brute-force detection. The system should lock the account after 3
// consecutive failed attempts. Use a do...while loop to process
// login attempts from an array. Demonstrate var (global counter),
// let (loop variables), and const (credentials and threshold).
// Validate using strict equality (===) and logical operators (&&).

// Input Format
// An array of login attempt objects with username and password, plus valid credentials

// Output Format
// Each attempt result logged, plus summary with lock status and login result

// Examples
// Input
// Valid: admin@xpressfunda.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
// Output
// Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected

const VALID_USERNAME = "admin@xpressfunda.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

const loginAttempts = [
    { username: "admin@xpressfunda.com", password: "WrongPassword1" },
    { username: "admin@xpressfunda.com", password: "WrongPassword2" },
    { username: "admin@xpressfunda.com", password: "WrongPassword3" },
    { username: "admin@xpressfunda.com", password: "Test@1234" }
];

function runLoginAttempts(attempts, validUsername, validPassword, maxAttempts) {
    var failedAttempts = 0;
    let attemptIndex = 0;
    let loggedIn = false;

    do {
        const attempt = attempts[attemptIndex];
        if (attempt.username === validUsername && attempt.password === validPassword) {
            console.log(`Attempt ${attemptIndex + 1}: ✅ SUCCESS - Logged in`);
            loggedIn = true;
            attemptIndex++;
            break;
        } else {
            failedAttempts++;
            console.log(`Attempt ${attemptIndex + 1}: ❌ FAILED - Strike ${failedAttempts}/${maxAttempts}`);
        }
        attemptIndex++;
    } while (attemptIndex < attempts.length && failedAttempts < maxAttempts);

    const locked = failedAttempts >= maxAttempts;

    if (locked) {
        console.log("🚨 ACCOUNT LOCKED");
        if (attemptIndex < attempts.length) {
            console.log(`Attempt ${attemptIndex + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
        }
    }

    return { locked, loggedIn, totalAttempts: attemptIndex };
}

function printLoginSummary(result) {
    console.log("─".repeat(40));
    console.log(`Login Result:   ${result.loggedIn ? "✅ SUCCESS" : "❌ FAILED"}`);
    console.log(`Account Status: ${result.locked ? "🔒 LOCKED" : "🔓 ACTIVE"}`);
    console.log(`Total Attempts: ${result.totalAttempts}`);
}

// Example usage:
const result = runLoginAttempts(loginAttempts, VALID_USERNAME, VALID_PASSWORD, MAX_ATTEMPTS);
printLoginSummary(result);