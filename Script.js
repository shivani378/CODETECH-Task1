
const navToggle = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav ul li');

navToggle.addEventListener('click', () => {
    navLinks.forEach(link => {
        link.classList.toggle('show');
    });
});
