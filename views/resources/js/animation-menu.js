const triggerMenu = document.getElementById('triggerMenu');
const mainNav = document.getElementById('mainNav');

triggerMenu.addEventListener('click', function () {

    triggerMenu.classList.toggle('toggled');
    mainNav.classList.toggle('active');
})