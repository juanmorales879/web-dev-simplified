const errorBox = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");
const form = document.querySelector("#form");
const formGroups = document.querySelectorAll(".form-group");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
let errorMessages = [];
const requiredUsernameLength = 6;
const requiredPasswordLength = 10;

form.addEventListener("submit", (e) => {
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
    showErrors();
  }
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors() {
  errorMessages.forEach((error) => {
    const newLi = document.createElement("li");
    newLi.textContent = error;
    errorList.appendChild(newLi);
  });
  errorBox.classList.add("show");
}
