const showPopup = document.querySelector('.login-btn');
const hidebtn = document.querySelector('.form-popup .close');
const formpopUp = document.querySelector('.form-popup');
const loginSignupLinkd = document.querySelectorAll('.form-box .bottom-link a');
const navmenu = document.querySelector('.hamburger-btn');
const navLinksBox = document.querySelector('.navbar .links');
const navClose = document.querySelector('.hum-close');
const navLinks = document.querySelectorAll('.navbar .links a');

// Navbar toggle
navmenu.addEventListener('click', () => {
    navLinksBox.classList.toggle('show-menu');
});

// Navbar close button
navClose.addEventListener('click', () => navmenu.click());

// Close menu on clicking any link
navLinks.forEach(links => {
    links.addEventListener('click', () => {
        navLinksBox.classList.remove('show-menu');
    });
});

// Show login popup
showPopup.addEventListener('click', () => {
    document.body.classList.toggle('active');
});

// Hide popup
hidebtn.addEventListener('click', () => showPopup.click());

// Login / Signup toggle
loginSignupLinkd.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        formpopUp.classList[link.id === "signup-link" ? "add" : 'remove']('show-signup');
    });
});


