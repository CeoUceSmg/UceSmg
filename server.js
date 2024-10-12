// server.js

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');  // For password encryption
const db = require('./database.js');  // Importing the database.js

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle user sign-up
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    // Check if username already exists
    const userExists = db.users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).send('Username already taken');
    }

    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user and store in database
    const newUser = {
        username: username,
        password: hashedPassword,
        pin: null,  // Pin is set later
        balance: 0.00,  // Starting balance
        transactionHistory: [],
        taskHistory: []
    };

    db.users.push(newUser);
    res.status(201).send('User registered successfully');
});

// Route for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = db.users.find(user => user.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send('Invalid username or password');
    }

    res.send('Login successful');
});

// Route for admin login
app.post('/admin-login', (req, res) => {
    const { username, password } = req.body;

    // Check admin credentials
    if (
        username === db.adminCredentials.username &&
        password === db.adminCredentials.password
    ) {
        res.send('Admin login successful');
    } else {
        res.status(401).send('Invalid admin credentials');
    }
});

// Route to save pin code
app.post('/save-pin', (req, res) => {
    const { username, pin, pinRecoveryQuestion, pinRecoveryAnswer } = req.body;

    const user = db.users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send('User not found');
    }

    // Save the pin, recovery question, and answer
    user.pin = pin;
    user.pinRecoveryQuestion = pinRecoveryQuestion;
    user.pinRecoveryAnswer = pinRecoveryAnswer;

    res.send('Pin saved successfully');
});

// Route to handle transactions (deposit or withdrawal)
app.post('/transaction', (req, res) => {
    const { username, type, amount } = req.body;

    const user = db.users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send('User not found');
    }

    // Process transaction
    if (type === "Deposit") {
        user.balance += amount;
    } else if (type === "Withdrawal") {
        if (user.balance >= amount) {
            user.balance -= amount;
        } else {
            return res.status(400).send('Insufficient balance');
        }
    } else {
        return res.status(400).send('Invalid transaction type');
    }

    // Add to transaction history
    user.transactionHistory.push({ type, amount });

    res.send('Transaction successful');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
