const darkMode = document.querySelector('#darkMode');
const main = document.querySelector('main');


darkMode.addEventListener('click', () => {
	main.classList.toggle('dark');
});