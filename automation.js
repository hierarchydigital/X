// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamIcon = document.querySelector('.logo');
    const sidenav = document.getElementById('sidenav');
    const closeBtn = document.getElementById('close-btn');

    hamIcon.addEventListener('click', () => {
        sidenav.classList.toggle('active'); // Toggle the menu
        hamIcon.classList.toggle('rotate'); // Rotate the hamburger icon
    });

    closeBtn.addEventListener('click', () => {
        sidenav.classList.remove('active'); // Hide the menu
        hamIcon.classList.remove('rotate'); // Reset rotation
    });
});
