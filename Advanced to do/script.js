const template = document.querySelector("#list-item-template");
const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
let tasks = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item"))
  : [];

tasks.forEach(addLi);
saveTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  const newTask = { id: Math.random(), task: inputValue };
  tasks.push(newTask);
  addLi(newTask);
  saveTasks();
});

function saveTasks() {
  localStorage.setItem("item", JSON.stringify(tasks));
}

function addLi(input) {
  const clone = template.content.cloneNode(true);
  const li = clone.querySelector("[data-list-item-text]");
  li.textContent = input.task;
  li.dataset.id = input.id;
  list.append(clone);
}

list.addEventListener("click", (e) => {
  if (e.target.matches("[data-button-delete]")) {
    const elDelete = e.target.closest(".list-item");
    const span = elDelete.querySelector("[data-list-item-text]");
    const id = Number(span.getAttribute("data-id"));
    console.log(id);
    elDelete.remove();
    const deleteObject = tasks.filter((number) => number.id !== id);
    console.log(deleteObject);
    localStorage.setItem("item", JSON.stringify(deleteObject));
  }
});
