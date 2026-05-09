/*
  IDENTIFIER CASING CONVENTIONS IN JAVASCRIPT

  While JavaScript allows many valid combinations of letters, numbers, and symbols 
  for identifiers, developers follow strict naming conventions to keep code 
  readable, maintainable, and predictable.

  Here are the 4 main casing conventions used in JavaScript:
*/

// ============================================
// 1. camelCase
// ============================================
/* 
   Rule: The first word is completely lowercase. Every subsequent word starts 
         with an uppercase letter.
   Usage: This is the standard convention in JavaScript for naming standard 
          variables, functions, and object properties.
*/
let firstName = "John";
let userAuthenticationToken = "abc123xyz";

function calculateTotalPrice(price, tax) {
    return price + tax;
}

console.log("camelCase Example:", firstName);


// ============================================
// 2. PascalCase
// ============================================
/* 
   Rule: Every single word starts with an uppercase letter, including the first word.
   Usage: Used exclusively for Classes, Constructor Functions, and Interface/Type names 
          (if using TypeScript). It signals to other developers that this is a blueprint.
*/
class UserAccount {
    constructor(username) {
        this.username = username;
    }
}

// Constructor function example
function ShoppingCart() {
    this.items = [];
}

const myUser = new UserAccount("Alice");
console.log("PascalCase Example (Class instantiation):", myUser.username);


// ============================================
// 3. SCREAMING_SNAKE_CASE (or MACRO_CASE)
// ============================================
/* 
   Rule: Every letter is uppercase, and words are separated by underscores (_).
   Usage: Used for "hard" constants—values that are known before execution and 
          will NEVER change throughout the lifetime of the application 
          (e.g., configuration values, math constants, action types).
*/
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com/v1";
const PI_VALUE = 3.14159;

console.log("SCREAMING_SNAKE_CASE Example:", MAX_LOGIN_ATTEMPTS);


// ============================================
// 4. snake_case
// ============================================
/* 
   Rule: All letters are lowercase, and words are separated by underscores (_).
   Usage: While very common in Python or Ruby, standard snake_case is RARELY 
          used for standard variables in modern JavaScript. It is sometimes seen 
          when interacting with database columns or external APIs that use this casing.
*/
let first_name_from_db = "Bob";
let total_user_count = 100;

console.log("snake_case Example:", first_name_from_db);


// ============================================
// Note on kebab-case
// ============================================
/*
   Rule: All letters lowercase, words separated by hyphens (-).
   Usage: Commonly used for HTML IDs/classes, CSS properties, and file names.
   CRITICAL: kebab-case is INVALID for JavaScript variable names because the 
             hyphen is interpreted as the subtraction operator!

   // let first-name = "Alice"; // SyntaxError!
*/
