// API Response Status Code Validator
// As an SDET, you receive an API response status code and need to classify it.
// Write a JavaScript program using a switch statement that takes an HTTP status
// code stored in a variable and prints the category and a QA-friendly message.

// - 200 → "PASS - OK: Request successful"
// - 201 → "PASS - Created: Resource created successfully"
// - 301 → "WARNING - Moved Permanently: URL has changed"
// - 400 → "FAIL - Bad Request: Check request payload"
// - 401 → "FAIL - Unauthorized: Check auth token"
// - 403 → "FAIL - Forbidden: Insufficient permissions"
// - 404 → "FAIL - Not Found: Check endpoint URL"
// - 500 → "FAIL - Internal Server Error: Backend issue"
// - Any other → "UNKNOWN - Unhandled status code"

// Input Format: A variable containing an HTTP status code (number)
// Output Format: Status code and result classification printed to console

// javascript function to classify API response status code

function classifyStatusCode(statusCode) {
    switch (statusCode) {
        case 200: return `Status Code: ${statusCode} → PASS - OK: Request successful`;
        case 201: return `Status Code: ${statusCode} → PASS - Created: Resource created successfully`;
        case 301: return `Status Code: ${statusCode} → WARNING - Moved Permanently: URL has changed`;
        case 400: return `Status Code: ${statusCode} → FAIL - Bad Request: Check request payload`;
        case 401: return `Status Code: ${statusCode} → FAIL - Unauthorized: Check auth token`;
        case 403: return `Status Code: ${statusCode} → FAIL - Forbidden: Insufficient permissions`;
        case 404: return `Status Code: ${statusCode} → FAIL - Not Found: Check endpoint URL`;
        case 500: return `Status Code: ${statusCode} → FAIL - Internal Server Error: Backend issue`;
        default:  return `Status Code: ${statusCode} → UNKNOWN - Unhandled status code`;
    }
}

// Example usage:
console.log(classifyStatusCode(200));
console.log(classifyStatusCode(404));
console.log(classifyStatusCode(500));
console.log(classifyStatusCode(418));