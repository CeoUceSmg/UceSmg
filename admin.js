// Simulated database of users
const users = [
    { id: 1, name: "John Doe", profileImg: "john.jpg", live: true },
    { id: 2, name: "Jane Smith", profileImg: "jane.jpg", live: false },
    { id: 3, name: "Alice Brown", profileImg: "alice.jpg", live: true },
];

// Update account and live user counts
function updateDashboard() {
    const accountCount = users.length;
    const liveCount = users.filter(user => user.live).length;

    document.getElementById("account-count").textContent = accountCount;
    document.getElementById("live-count").textContent = liveCount;
}

// Populate the live user list
function populateLiveUsers() {
    const liveUsersList = document.getElementById("live-users-list");
    liveUsersList.innerHTML = ""; // Clear existing list

    users
        .filter(user => user.live)
        .forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            li.style.backgroundImage = `url(${user.profileImg})`;
            li.style.backgroundSize = "cover";
            li.addEventListener("click", () => openUserProfile(user.id));
            liveUsersList.appendChild(li);
        });
}

// Open user profile (simulated functionality)
function openUserProfile(userId) {
    alert(`Open user profile for User ID: ${userId}`);
}

// Simulate new user notification
function showNewUserNotification(user) {
    const notificationText = document.getElementById("notification-text");
    notificationText.textContent = `${user.name} just created an account!`;
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
    updateDashboard();
    populateLiveUsers();
});￼Enter
