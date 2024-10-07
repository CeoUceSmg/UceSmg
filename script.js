// Simulating a "database" for users, admin, UCE codes, etc.
// Ideally, this would be a backend database like MySQL or MongoDB
const database = {
    users: [
        {
            username: "user123",
            password: "userPassword456",
            pin: "1234",
            uceCode: "UCE2675Gft5678E"
        }
    ],
    admin: {
        username: "TANAJOHN",
        password: "UCEAD8dLpM4$eJ#9dGK3qS*aR1bN^6cF2H"
    },
    uceCodes: [
        "UCE2675Gft5678E", "UCE4S5E4R3L2I", "UCE9C8X7A6S5E", "UCE8G4JL9WP7M", 
        "UCE4M3W2V1U0Y", "UCE9C8X7A6S5E", "UCE3K2D1N0BQV", "UCE5T3K2D1N0B", 
        "UCEJ5K4M3W2V1", "UCE8X7A6S5E4R"
    ]
};

// Handle admin login
function verifyAdmin() {
    const usernameInput = document.querySelector("#adminUsernameInput").value;
    const passwordInput = document.querySelector("#adminPasswordInput").value;
    
    const { username, password } = database.admin;
    
    if (usernameInput === username && passwordInput === password) {
        window.location.href = "Administrative.html";  // Redirect to admin dashboard
    } else {
        alert("NO COMMAND. Please check your admin details.");
    }
}

// Handle user login
function verifyUser() {
    const usernameInput = document.querySelector("#userUsernameInput").value;
    const passwordInput = document.querySelector("#userPasswordInput").value;

    const user = database.users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        window.location.href = "homepage.html";  // Redirect to user's homepage
    } else {
        alert("NO COMMAND. Please check your login details.");
    }
}

// Handle user sign-up
function signUpUser() {
    const usernameInput = document.querySelector("#signUpUsernameInput").value;
    const passwordInput = document.querySelector("#signUpPasswordInput").value;
    const confirmPasswordInput = document.querySelector("#signUpConfirmPasswordInput").value;

    // Check if username is unique
    const userExists = database.users.some(user => user.username === usernameInput);

    if (userExists) {
        alert("NO COMMAND. Username already exists. Please choose another.");
        return;
    }

    // Check if passwords match
    if (passwordInput !== confirmPasswordInput) {
        alert("NO COMMAND. Passwords do not match. Please try again.");
        return;
    }

    // Add new user to the "database"
    database.users.push({
        username: usernameInput,
        password: passwordInput,
        pin: "",  // User can set their PIN later
        uceCode: ""  // User can upgrade later
    });

    alert("Sign-up successful! You can now log in.");
    window.location.href = "login.html";  // Redirect to login page
}

// Handle UCE code verification for account upgrade
function verifyUpgrade() {
    const usernameInput = document.querySelector("#upgradeUsernameInput").value;
    const passwordInput = document.querySelector("#upgradePasswordInput").value;
    const uceCodeInput = document.querySelector("#upgradeUCECodeInput").value;

    const user = database.users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        if (database.uceCodes.includes(uceCodeInput)) {
            user.uceCode = uceCodeInput;  // Update the user's UCE code in the "database"
            alert("Account upgraded successfully!");
        } else {
            alert("NO COMMAND. Invalid UCE code. Please try again.");
        }
    } else {
        alert("NO COMMAND. Invalid username or password.");
    }
}

// Handle PIN management (for transactions)
function setTransactionPIN() {
    const usernameInput = document.querySelector("#pinUsernameInput").value;
    const pinInput = document.querySelector("#pinInput").value;

    const user = database.users.find(user => user.username === usernameInput);

    if (user) {
        user.pin = pinInput;  // Set the user's PIN in the "database"
        alert("PIN set successfully!");
    } else {
        alert("NO COMMAND. User not found.");
    }
}

// Handle transaction authentication (PIN verification)
function verifyTransactionPIN() {
    const usernameInput = document.querySelector("#transactionUsernameInput").value;
    const pinInput = document.querySelector("#transactionPINInput").value;

    const user = database.users.find(user => user.username === usernameInput);

    if (user && user.pin === pinInput) {
        alert("Transaction approved!");
    } else {
        alert("NO COMMAND. Incorrect PIN.");
    }
}
