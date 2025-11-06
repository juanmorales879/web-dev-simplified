/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = document.querySelectorAll(".question-item");
const hiddenAlert = document.querySelectorAll("#alert");
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkedInputs = answers.filter((answer) => answer.checked);

  checkedInputs.forEach((input) => {
    const questionItem = input.closest(".question-item");
    const isCorrect = input.value === "true";

    if (isCorrect) {
      questionItem.classList.remove("incorrect");
      questionItem.classList.add("correct");
      count++;
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });
});

//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
