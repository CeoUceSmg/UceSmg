// Simulated user database
const users = [
    { id: 1, name: "John Doe", profileImg: "john.jpg", live: true },
    { id: 2, name: "Jane Smith", profileImg: "jane.jpg", live: false },
    { id: 3, name: "Alice Brown", profileImg: "alice.jpg", live: true },
];

// Update the dashboard stats
function updateDashboard() {
    document.getElementById("account-count").textContent = users.length;
    document.getElementById("live-count").textContent = users.filter(user => user.live).length;
}

// Populate the active users modal
function populateLiveUsers() {
    const liveUsersList = document.getElementById("live-users-list");
    liveUsersList.innerHTML = "";

    users.filter(user => user.live).forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.addEventListener("click", () => openUserProfile(user.id));
        liveUsersList.appendChild(li);
    });
}

// Open user profile (simulation)
function openUserProfile(userId) {
    alert(`Opening profile for User ID: ${userId}`);
}

// Modal functionality
document.getElementById("view-live-users").addEventListener("click", () => {
    document.getElementById("live-users-modal").classList.remove("hidden");
    populateLiveUsers();
});

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("live-users-modal").classList.add("hidden");
});

// Initial setup
document.addEventListener("DOMContentLoaded", updateDashboard);
