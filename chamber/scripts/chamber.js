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

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit! Welcome 😄`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);