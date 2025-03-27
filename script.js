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

pass.addEventListener("input", () => {
    displayPasswordError();
    displayConfirmPasswordError();
})

confirmPass.addEventListener("input", () => {
    displayConfirmPasswordError();
})

country.addEventListener("input", () => {
    displayCountryError();
})

postCode.addEventListener("input", () => {
    displayPostCodeError();
})

function checkFormErrors() {
    displayEmailError();
    displayPasswordError();
    displayConfirmPasswordError();
    displayCountryError();
    displayPostCodeError();
}

function displayEmailError() {
    const errorMessage = document.querySelector(".error#error-email");

    if (!email.validity.valid) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
    } else {
        makeValid(errorMessage);
    }

    if (email.validity.valueMissing) {
        errorMessage.textContent = "^ Empty Value";
    } else if (email.validity.typeMismatch) {
        errorMessage.textContent = "^ Needs to be an email address";
    }
}

function displayPasswordError() {
    const errorMessage = document.querySelector(".error#error-pass");

    if (!pass.validity.valid) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
    } else {
        makeValid(errorMessage);
    }

    if (pass.validity.valueMissing) {
        errorMessage.textContent = "^ Empty Value";
    } else if (pass.validity.tooShort) {
        errorMessage.textContent = "^ Must be over 8 characters";
    }
}

function displayConfirmPasswordError() {
    const errorMessage = document.querySelector(".error#error-confirm-pass");
    if (confirmPass.validity.valueMissing) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
        errorMessage.textContent = "^ Empty value"; 
    } else if (confirmPass.value != pass.value) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
        errorMessage.textContent = "^ Must be the same as password"; 
    } else {
        makeValid(errorMessage);
    }
}

function displayCountryError() {
    const errorMessage = document.querySelector(".error#error-country");

    if (!country.validity.valid) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
    } else {
        makeValid(errorMessage);
    }

    if (country.validity.valueMissing) {
        errorMessage.textContent = "^ Empty Value";
    } else if (country.validity.typeMismatch) {
        errorMessage.textContent = "^ Must be characters";
    }
}

function displayPostCodeError() {
    const errorMessage = document.querySelector(".error#error-postcode");

    if (!postCode.validity.valid) {
        errorMessage.parentElement.classList = "error"; 
        errorMessage.classList = "error active";
    } else {
        makeValid(errorMessage);
    }

    if (postCode.validity.valueMissing) {
        errorMessage.textContent = "^ Empty Value";
    } else if (postCode.validity.typeMismatch) {
        errorMessage.textContent = "^ Must be characters";
    }
}

function makeValid(errorMessage) {
    errorMessage.parentElement.classList = "passed"; 
    errorMessage.classList = "error";
    errorMessage.textContent = "";
}