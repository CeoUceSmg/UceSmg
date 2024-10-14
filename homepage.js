// Function to close the welcome popup
function closePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}

// Function to navigate to another page
function navigate(page) {
    window.location.href = page;
}

// Function to toggle the submenu
function toggleSubmenu() {
    const submenu = document.getElementById('submenu-content');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Function to show the home page popup
function showHomePopup() {
    const homePopup = document.getElementById('home-popup');
    homePopup.style.display = 'block';
    setTimeout(() => {
        homePopup.style.display = 'none';
    }, 5000);
}

// Display the welcome popup when the page loads
window.onload = () => {
    document.getElementById('welcome-popup').style.display = 'block';
};
