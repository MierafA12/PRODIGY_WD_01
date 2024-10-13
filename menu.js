// Select the close icon (X) and the navigation menu container
const menuIcon = document.querySelector('.fa-remove');
const navMenu = document.querySelector('.nav');

// Toggle the menu visibility when the close icon is clicked
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Handle scroll effect for changing the menu background color
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navandremove');
    // If the scroll position is greater than 50px, darken the background
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = '#3d3a4c'; // Darker background when scrolling
    } else {
        header.style.backgroundColor = '#514E60'; // Original background color
    }
});
