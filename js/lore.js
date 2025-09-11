/*
 * Seraph Veloce Official Website JavaScript
 * Feature: Narrative Parallax Scrolling 
 */

document.addEventListener('DOMContentLoaded', () => {
    const lucifer = document.querySelector('.parallax-lucifer');
    const lilith = document.querySelector('.parallax-lilith');
    const title = document.querySelector('.lore-title-section');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        // Apply different scroll speeds to create depth
        // A lower number means it moves slower (appears further away)
        lucifer.style.transform = `translateY(${scrollY * 0.3}px)`;
        lilith.style.transform = `translateY(${scrollY * 0.5}px)`;
        
        // The title can also move, but slower, to feel part of the scene
        title.style.transform = `translateY(${scrollY * 0.4}px)`;

        // Fade out the title as the user scrolls down
        let titleOpacity = 1 - (scrollY / 400); // Fades out over 400px
        title.style.opacity = titleOpacity < 0 ? 0 : titleOpacity;
    });
});