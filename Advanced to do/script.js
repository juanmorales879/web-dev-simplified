const template = document.querySelector("#list-item-template");
const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
let tasks = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item"))
  : [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  addLi(inputValue);
  console.log(tasks);
  list.addEventListener("click", (e) => {
    if (e.target.matches("[data-button-delete]")) {
      const elDelete = e.target.closest(".list-item");
      elDelete.remove();
    }
  });
});

function save() {
  tasks.foreach(addLi);
}

function addLi(input) {
  const clone = template.content.cloneNode(true);
  clone.querySelector("[data-list-item-text]").textContent = input;
  list.append(clone);
  localStorage.setItem("item", JSON.stringify(tasks));
}
