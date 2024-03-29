// Reference used for this assignment:
// https://codepen.io/blazzard-jason/pen/porGpMN

const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const formMessage = document.querySelector('#formMessage');

repeatPassword.addEventListener("focusout", checkIfSame);

function checkIfSame() {
    if (password.value !== repeatPassword.value) {
        formMessage.textContent = "Passwords do not match! Please try again. Note: The password needs to be at least 8 characters long and alpha-numeric only.";
        formMessage.style.display = "block";
        repeatPassword.style.backgroundColor = "#fff0f3";
        repeatPassword.value = "";
        password.value = "";
        password.focus();
    }
    else {
        formMessage.style.display = "none";
        repeatPassword.style.backgroundColor = "#bed";
    }
}

const pageRatingValue = document.querySelector('#pageRatingValue');
const pageRating = document.querySelector('#pageRating');

pageRating.addEventListener('change', displayPageRatingValue);
pageRating.addEventListener('input', displayPageRatingValue);


function displayPageRatingValue() {
    pageRatingValue.innerHTML = pageRating.value;
    pageRatingValue.style.backgroundColor = "var(--light-green)";
}