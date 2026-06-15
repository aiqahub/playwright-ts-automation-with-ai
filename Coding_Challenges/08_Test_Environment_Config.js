// Test Environment Config

// In CI/CD pipelines, tests run against different environments.
// Write a JavaScript program using a switch statement that takes an
// environment name stored in a variable and prints the base URL,
// API key pattern, and timeout. Use const for fixed values and
// let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different
// base URL, API key prefix, timeout, and description.

// Input Format
// A string variable containing the environment name (dev/staging/qa/prod)

// Output Format
// Environment configuration details: URL, API key, timeout, description

// Examples
// Input
// envName = "staging"
// Output
// Environment: STAGING Base URL: https://staging-api.xpressfunda.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror


function getEnvConfig(envName) {
    switch (envName) {
        case "dev":
            return {
                env: envName.toUpperCase(),
                baseUrl: "https://dev-api.xpressfunda.com",
                apiKey: "dev_key_xxxx-xxxx",
                timeout: 5000,
                description: "Development - Local development environment"
            };
        case "staging":
            return {
                env: envName.toUpperCase(),
                baseUrl: "https://staging-api.xpressfunda.com",
                apiKey: "stg_key_xxxx-xxxx",
                timeout: 8000,
                description: "Staging - Pre-production mirror"
            };
        case "qa":
            return {
                env: envName.toUpperCase(),
                baseUrl: "https://qa-api.xpressfunda.com",
                apiKey: "qa_key_xxxx-xxxx",
                timeout: 10000,
                description: "QA - Testing environment"
            };
        case "prod":
        case "production":
            return {
                env: "PROD",
                baseUrl: "https://api.xpressfunda.com",
                apiKey: "prod_key_xxxx-xxxx",
                timeout: 12000,
                description: "Production - Live environment"
            };
        default:
            return null;
    }
}

function logEnvConfig(envName) {
    const config = getEnvConfig(envName);

    if (config === null) {
        console.error("Unknown environment: " + envName);
        return;
    }

    console.log("Environment: " + config.env);
    console.log("Base URL: " + config.baseUrl);
    console.log("API Key: " + config.apiKey);
    console.log("Timeout: " + config.timeout + "ms");
    console.log("Description: " + config.description);
}

// Example usage:
logEnvConfig("staging");