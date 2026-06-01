/**
 * Control Flow: if, else if, else
 * Real-time Automation Examples
 */

console.log("--- 1. Simple 'if' (Handling Popups) ---");
let isPopupVisible = true;

console.log("Navigating to homepage...");
if (isPopupVisible) {
    // In real automation: await page.locator('#close-popup').click();
    console.log("[Action] Promotional popup detected. Clicking 'Close' button.");
}
console.log("Proceeding to interact with the main page...");


console.log("\n--- 2. 'if...else' (Environment Selection) ---");
let environment = "QA"; // Can be "QA" or "PROD"
let targetUrl = "";

if (environment === "PROD") {
    targetUrl = "https://ecommerce-site.com";
    console.log(`[Config] Running tests against PRODUCTION. URL: ${targetUrl}`);
} else {
    targetUrl = "https://qa.ecommerce-site.com";
    console.log(`[Config] Running tests against QA. URL: ${targetUrl}`);
}


console.log("\n--- 3. 'if...else if...else' (Browser Specific Logic) ---");
let testBrowser = "firefox";

console.log(`Starting test suite on: ${testBrowser.toUpperCase()}`);

if (testBrowser === "chromium") {
    console.log("[Setup] Emulating Google Chrome specific viewport and user agent.");
} else if (testBrowser === "webkit") {
    console.log("[Setup] Emulating Safari specific behavior (e.g., handling iOS specific dates).");
} else if (testBrowser === "firefox") {
    console.log("[Setup] Applying specific preferences for Mozilla Firefox to bypass security warnings.");
} else {
    console.log(`[Error] Unknown browser: ${testBrowser}. Falling back to default settings.`);
}


console.log("\n--- 4. Nested 'if' statements (Complex Element Interaction) ---");
// Scenario: We want to purchase an item, but we need to check stock and login status first.
let isUserLoggedIn = true;
let isItemInStock = false;

console.log("Attempting to click 'Add to Cart'...");

if (isUserLoggedIn) {
    console.log("[Check] User is logged in. Proceeding to check stock.");
    
    if (isItemInStock) {
        console.log("[Action] Item is in stock. Successfully added to cart!");
        // await page.locator('#add-to-cart').click();
    } else {
        console.log("[Action] Item is OUT OF STOCK. Cannot add to cart. Asserting 'Out of Stock' label.");
        // expect(await page.locator('.stock-status').innerText()).toBe('Out of Stock');
    }

} else {
    console.log("[Action] User is NOT logged in. Redirecting to login page.");
    // await page.goto('/login');
}


console.log("\n--- 5. Logical Operators with 'if' (Flattening Nested Ifs) ---");
// The nested 'if' above can be combined using the Logical AND (&&) operator for cleaner code
// if we only care about the success path.

let loggedIn = true;
let inStock = true;

if (loggedIn && inStock) {
    console.log("[Action - Cleaner] User logged in AND item in stock. Added to cart.");
} else {
    console.log("[Action - Cleaner] Either user not logged in OR item out of stock. Handling exception.");
}
