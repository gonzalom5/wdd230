const password1 = document.querySelector("#pwd");
const password2 = document.querySelector("#pwd2");
const message = document.querySelector("#feedback");

password2.addEventListener("focusout", checkSame);

function checkSame() {
	if (password1.value !== password2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visi
		password1.value = "";
		password2.value = "";
		password1.focus();
	} else {
		message.textContent = "";
	}
}

const rateDisplay = document.querySelector('#rating');
const rateSlider = document.querySelector('input[type=range]');
function displayRating() {
  rateDisplay.innerHTML = rateSlider.value;
}
rateSlider.addEventListener('change', displayRating)
