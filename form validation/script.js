const errorBox = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");
const form = document.querySelector("#form");
const formGroups = document.querySelectorAll(".form-group");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const requiredUsernameLength = 6;
const requiredPasswordLength = 10;

form.addEventListener("submit", (e) => {
  const errorMessages = [];

  clearErrors();

  if (username.value.length < requiredUsernameLength) {
    errorMessages.push("Username must be at least 6 characters long");
  }

  if (password.value.length < requiredPasswordLength) {
    errorMessages.push("Password must be at least 10 characters long");
  }

  if (password.value !== passwordConfirmation.value) {
    errorMessages.push("Passwords must match");
  }

  if (!terms.checked) {
    errorMessages.push("Agree to terms and conditions");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

function clearErrors() {
  while (errorList.firstChild) {
    errorList.removeChild(errorList.firstChild);
  }
  errorBox.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((error) => {
    const newLi = document.createElement("li");
    newLi.textContent = error;
    errorList.appendChild(newLi);
  });
  errorBox.classList.add("show");
}
