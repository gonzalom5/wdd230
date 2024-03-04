//Displays Last Modification Time
document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;

//Displays Actual Year
const currentYear = new Date();
document.querySelector('#year').textContent = currentYear.getFullYear();