// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing.
// Write a JavaScript program that generates test user data using a for loop.
// Each user should have a unique ID (USR-0001 format), name, email, and
// role (cycling through: admin, editor, viewer, tester, manager).
// Every 3rd user should be inactive (edge case testing).
// Demonstrate proper use of var (global counter), let (loop variables),
// and const (fixed values).

// Input Format
// Generate 8 test users with roles cycling from a predefined array

// Output Format
// Table of users with ID, name, email, role, and status

// Examples
// Input
// Generate 8 users
// Output
// USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE
// USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE
// USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE

const roles = ["admin", "editor", "viewer", "tester", "manager"];
var userCount = 0; // Global counter for user IDs 
const totalUsers = 8; // Total number of users to generate

function generateTestUsers() {
    const users = [];
    for (let i = 0; i < totalUsers; i++) {
        userCount++;
        const id = `USR-${userCount.toString().padStart(4, '0')}`;
        const name = `TestUser_${userCount}`;
        const email = `testuser${userCount}@testingacademy.com`;
        const role = roles[i % roles.length];
        const isActive = (i + 1) % 3 !== 0; // Every 3rd user is inactive

        users.push({
            id,
            name,
            email,
            role,
            status: isActive ? "ACTIVE" : "INACTIVE"
        });
    }
    return users;
}

function printUsers(users) {
    console.log("ID       | Name        | Email                       | Role   | Status");
    console.log("---------|-------------|-----------------------_-----|--------|--------");
    users.forEach(user => {
        console.log(`${user.id} | ${user.name} | ${user.email} | ${user.role} | ${user.status}`);
    });
}

// Generate and print test users
const testUsers = generateTestUsers();
printUsers(testUsers);