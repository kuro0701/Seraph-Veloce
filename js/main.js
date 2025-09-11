/*
 * Seraph Veloce Official Website JavaScript
 * Feature: "Persona Shift" Mechanism [cite: 4]
 */

document.addEventListener('DOMContentLoaded', () => {
    const personaToggle = document.getElementById('persona-shift-toggle');
    const body = document.body;

    // Set initial mode
    // In a full application, this could be saved in localStorage
    body.classList.add('lyra-mode');

    personaToggle.addEventListener('click', () => {
        if (body.classList.contains('lyra-mode')) {
            // Switch to Malacoda Mode [cite: 7]
            body.classList.remove('lyra-mode');
            body.classList.add('malacoda-mode');
        } else {
            // Switch to Lyra Mode [cite: 6]
            body.classList.remove('malacoda-mode');
            body.classList.add('lyra-mode');
        }
    });

    // Active navigation link styling
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentLocation)) {
            // A simple check for the active page
            if (currentLocation === '' && link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            } else if (link.getAttribute('href').includes(currentLocation) && currentLocation !== '') {
                link.classList.add('active');
            }
        }
    });
});