// Select the close icon and the navigation menu container
const menuIcon = document.querySelector('.fa-remove');
const navMenu = document.querySelector('.nav');

// Toggle the menu visibility when the close icon is clicked
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Handle scroll effect for changing the menu background color
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navandremove');
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = '#3d3a4c'; // Darker background when scrolling
    } else {
        header.style.backgroundColor = '#514E60'; // Original background color
    }
});

// Hover effect on different menu items
const homeLink = document.querySelector('a[href="Home.html"]');
const aboutLink = document.querySelector('a[href="About.html"]');
const portfolioLink = document.querySelector('a[href="Portfolio.html"]');
const contactLink = document.querySelector('a[href="Contact.html"]');
const nav = document.querySelector('.nav');
const first = document.querySelector('.fa-remove');

homeLink.addEventListener('mouseenter', function() {
    nav.style.backgroundColor = 'lightblue';
    first.style.backgroundColor = 'lightblue';
});
homeLink.addEventListener('mouseleave', function() {
    nav.style.backgroundColor = '#514E60';
    first.style.backgroundColor = '#514E60';
});

aboutLink.addEventListener('mouseenter', function() {
    nav.style.backgroundColor = 'Aqua';
    first.style.backgroundColor = 'Aqua';
});
aboutLink.addEventListener('mouseleave', function() {
    nav.style.backgroundColor = '#514E60';
    first.style.backgroundColor = '#514E60';
});

portfolioLink.addEventListener('mouseenter', function() {
    nav.style.backgroundColor = 'lightgreen';
    first.style.backgroundColor = 'lightgreen';
});
portfolioLink.addEventListener('mouseleave', function() {
    nav.style.backgroundColor = '#514E60';
    first.style.backgroundColor = '#514E60';
});

contactLink.addEventListener('mouseenter', function() {
    nav.style.backgroundColor = 'lightcoral';
    first.style.backgroundColor = 'lightcoral';
});
contactLink.addEventListener('mouseleave', function() {
    nav.style.backgroundColor = '#514E60';
    first.style.backgroundColor = '#514E60';
});
