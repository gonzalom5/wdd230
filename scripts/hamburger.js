const hamburgerButton = document.querySelector('#Hamburger');
const mainNav = document.querySelector('.navigation')

hamburgerButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
});