//Displays Last Modification Time
document.querySelector('#lastModified').textContent = "Last Modification: " + document.lastModified;

//Displays Actual Year
const currentYear = new Date();
document.querySelector('#year').textContent = currentYear.getFullYear();

const menuButton = document.querySelector('#Hamburger');
const menuItems = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    menuItems.classList.toggle('open');
})