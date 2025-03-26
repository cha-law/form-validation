const form = document.querySelector("form");

const email = document.getElementById("email");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");
const country = document.getElementById("country");
const postCode = document.getElementById("postcode");

form.addEventListener("submit", (event) => {
    if ((!email.validity.valid) || (!pass.validity.valid) || (!confirmPass.validity.valid) || (!country.validity.valid) || (!postCode.validity.valid)) {
        checkFormErrors();
        event.preventDefault();
    }
})

email.addEventListener("input", () => {
    displayEmailError();
})

function checkFormErrors() {
    displayEmailError();
}

function displayEmailError() {
    const errorMessage = document.querySelector(".error#error-email");

    if (!email.validity.valid) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
    } else {
        errorMessage.parentElement.classList = "passed"; 
        errorMessage.classList = "error";
        errorMessage.textContent = "";
    }

    if (email.validity.valueMissing) {
        errorMessage.textContent = "! Empty Value";
    } else if (email.validity.typeMismatch) {
        errorMessage.textContent = "! Needs to be an email address";
    }
}

function displayPasswordError() {
    const errorMessage = document.querySelector(".error#error-pass");
}