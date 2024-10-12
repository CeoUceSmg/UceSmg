// database.js

// Admin credentials
const adminCredentials = {
    username: "TANAJOHN",
    password: "UCEAD8dLpM4$eJ#9dGK3qS*aR1bN^6cF2H"  // Admin login password
};

// Sample data structure for users
let users = [
    {
        username: "User123",
        password: "EncryptedPassword123",  // User's login password
        pin: "1234",  // User-created pin code for transactions
        pinRecoveryQuestion: "What is your pet's name?",  // Pin recovery question
        pinRecoveryAnswer: "Fluffy",  // Answer for the recovery question
        balance: 100.00,  // User's balance
        transactionHistory: [
            { type: "Deposit", amount: 100 },
            { type: "Withdrawal", amount: 50 }
        ],
        taskHistory: [
            { task: "Task 1", status: "Completed" },
            { task: "Task 2", status: "Pending" }
        ]
    }
];

// OTP and upgrade codes for users
let otpCodes = [
    "817364529", "354192867", "982176543", "467583210", "135798264",
"UCE-12345678",
"UCE-23456789",
"UCE-34567890*",
"UCE-45678901*",
"UCE-56789012*",
"UCE-67890123*",
"UCE-78901234",
"UCE-89012345*",
"UCE-90123456*",
"UCE-01234567*",
"UCE-12345678*",
"UCE-23456789*",
"UCE-34567890",
"UCE-45678901*",
"UCE-56789012*",
"UCE-67890123*",
"UCE-78901234",
"UCE-89012345*",
"UCE-90123456*",
"UCE-01234567*",
"UCE-12345678*",
"UCE-23456789*",
"UCE-34567859h"
];

let upgradeCodes = [
    "UCE8G4JL9WP7M", "UCE4S5E4R3L2I", "UCEG7H6J5K4M3", "UCE9C8X7A6S5E",
"UCE-UG4A8dL9p$eK*",
"UCE-UG9B2cM5nR^t#",
"UCE-UG5D1fJ8qU&x",
"UCE-UG7E4gK9rT$y",
"UCE-UG3F2dN6hR!z",
"UCE-UG2A5bL7p_eK",
"UCE-UG8C9dM4nR^t",
"UCE-UG4E1fH3gS~l",
"UCE-UG6G2cJ5qU&x",
"UCE-UG9H8eK9rT$y",
"UCE-UG1I4gN6hR!z",
"UCE-UG3J2dM5p_eK",
"UCE-UG5K9cL7nR^t",
"UCE-UG7L1fH4gS~l",
"UCE-UG2M8dJ5qU&x",
"UCE-UG9N4gK6rT$y",
"UCE-UG1O3eL9p!z",
"UCE-UG4P2cM5nR^t",
"UCE-UG6Q9fH7gS~l",
"UCE-UG8R1dJ6qU&x",
"UCE-UG3S5gK9rT$y",
"UCE-UG2T4eL1p_eK",
"UCE-UG1U7cM4nR^t",
"UCE-UG5V3fH6gS~l",
"UCE-UG9W2dJ8qU&x",
"UCE-UG4X1gK7rT$y",
"UCE-UG7Y9eL5p!z",
"UCE-UG3Z4cM6nR^t",
"UCE-UG2a8fH9gS~l",
"UCE-UG1b7dJ5qU&x",
"UCE-UG5c9gK4rT$y",
"UCE-UG9d3eL2p_eK",
"UCE-UG4e1cM7nR^t",
"UCE-UG7f5fH3gS~l",
"UCE-UG2g9dJ6qU&x",
"UCE-UG1h4gK8rT$y",
"UCE-UG3i7eL9p!z",
"UCE-UG5j2cM5nR^t",
"UCE-UG9k1fH4gS~l",
"UCE-UG4l8dJ7qU&x",
"UCE-UG7m3gK6rT$y",
"UCE-UG2n9eL5p*eK",
"UCE-UG1o4cM7nR^t",
"UCE-UG5p3fH6gS~l",
"UCE-UG9q2dJ8qU&x",
"UCE-UG4r1gK9rT$y",
"UCE-UG7s5eL1p!z",
"UCE-UG3t4cM6nR^t",
"UCE-UG2u7fH9gS~l",
"UCE-UG1v3dJ5qU&x"
];

// Array to hold used upgrade codes (replace this with database logic later)
let usedUpgradeCodes = [];

// Function to save upgrade code
async function saveUpgradeCode(code) {
    if (usedUpgradeCodes.includes(code)) {
        throw new Error('This upgrade code has already been used.');
    }
    usedUpgradeCodes.push(code);
    // Here you would also save the code to your database if applicable
}

// Function to check if an upgrade code has been used
function isUpgradeCodeUsed(code) {
    return usedUpgradeCodes.includes(code);
}

// Export functions
module.exports = {
    // Other exports...
    saveUpgradeCode,
    isUpgradeCodeUsed
};

// Export all the data so that it can be accessed in server.js
module.exports = {
    adminCredentials,
    users,
    otpCodes,
    upgradeCodes
};
