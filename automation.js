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


    // Function to open the sidenav
    function openNav() {
        document.querySelector('.sidenav').style.left = '0'; // Show the sidenav
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the main page
    }

    // Function to close the sidenav
    function closeNav() {
        document.querySelector('.sidenav').style.left = '-500px'; // Hide the sidenav
        document.body.style.overflow = 'auto'; // Enable scrolling on the main page
    }

    // Add event listeners for the open and close buttons
    document.getElementById('close-btn').onclick = closeNav;

    // Add event listener to open the nav
    document.getElementById('open-btn').onclick = openNav;

    // Close the sidenav when clicking outside of it
    document.addEventListener('click', function(event) {
        const sidenav = document.querySelector('.sidenav');
        const openButton = document.getElementById('open-btn');

        // Check if the click is outside the sidenav and the open button
        if (!sidenav.contains(event.target) && !openButton.contains(event.target)) {
            closeNav(); // Close the sidenav
        }
    });


