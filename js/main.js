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
/*
 * Feature: System Status Typewriter Effect
 */
function typeWriter(element, text, i, callback) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        setTimeout(() => {
            typeWriter(element, text, i + 1, callback);
        }, 50); // Typing speed
    } else if (callback) {
        callback();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const alert1 = document.getElementById('alert1');
    const alert2 = document.getElementById('alert2');
    const alert3 = document.getElementById('alert3');

    if (alert1 && alert2 && alert3) {
        const text1 = 'Debut Album "Resonance: Veloce Rebellion" - Transmission Complete.';
        const text2 = 'Wallpaper Pack Vol.1 added to Digital Artifacts.';
        const text3 = 'SYSTEM KERNEL: Duality protocols initiated.';
        
        // Chain the animations
        setTimeout(() => {
             typeWriter(alert1, text1, 0, () => {
                alert1.style.animation = 'none'; // Stop blinking
                typeWriter(alert2, text2, 0, () => {
                   alert2.style.animation = 'none';
                   typeWriter(alert3, text3, 0, () => {
                      alert3.style.animation = 'none';
                   });
                });
             });
        }, 1000); // Start after 1 second
    }
    
    // Duality Meter Text Change
    const personaToggle = document.getElementById('persona-shift-toggle');
    const dualityStatus = document.getElementById('duality-status-text');
    
    if(personaToggle && dualityStatus) {
        personaToggle.addEventListener('click', () => {
            if (document.body.classList.contains('lyra-mode')) {
                 dualityStatus.textContent = 'SERAPH OS: ENHANCED';
            } else {
                 dualityStatus.textContent = 'ABYSS KERNEL: ACTIVE';
            }
        });
    }
});