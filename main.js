// change menu styles on click

const menuToggle = document.getElementById('hamburger-container');
const hamburgerMenu = document.getElementById('hamburger');
const sideMenu = document.getElementById('sidebar');
const navbar = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('navbar__hamburger-menu--active');
    sideMenu.classList.toggle('hamburger-menu__sidebar--hidden');
    navbar.classList.toggle('overflow-toggle');
})
