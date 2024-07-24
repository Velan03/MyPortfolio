// main.js

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on click
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = contactLink.getAttribute('aria-expanded') === 'true';
        contactLink.setAttribute('aria-expanded', !isExpanded);
        dropdownContent.style.display = isExpanded ? 'none' : 'block';
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!contactLink.contains(e.target) && !dropdownContent.contains(e.target)) {
            contactLink.setAttribute('aria-expanded', 'false');
            dropdownContent.style.display = 'none';
        }
    });
});
