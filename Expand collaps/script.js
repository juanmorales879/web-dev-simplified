const cardBody = document.querySelectorAll(".card-body");
const buttons = document.querySelectorAll(".expand-button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    cardSelected = e.target.closest(".card").querySelector(".card-body");
    cardSelected.classList.toggle("show");
    const buttonState = button.innerText;

    if (buttonState === "Collapse") {
      button.innerText = "Expand";
    } else {
      button.innerText = "Collapse";
    }
  });
});
