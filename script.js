// Updated script.js for improved selectors and hamburger menu functionality

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Function to toggle the navigation menu
const toggleMenu = () => {
    navMenu.classList.toggle('active');
};

// Event listener for menu toggle click
menuToggle.addEventListener('click', toggleMenu);

// Keyboard support for closing the menu with the Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
