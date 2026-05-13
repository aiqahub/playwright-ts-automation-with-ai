const env = "Prod";
const userName = "Admin";
const url = `https://${env.toLowerCase()}.google.com`;
console.log(url);

const message = `Welcome, ${userName}! You are currently in the ${env.toUpperCase()} environment.`;
console.log(message);       