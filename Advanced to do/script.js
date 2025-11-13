const template = document.querySelector("#list-item-template");
const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  const clone = template.content.cloneNode(true);
  clone.querySelector("[data-list-item-text]").textContent = inputValue;
  list.append(clone);

  list.addEventListener("click", (e) => {
    if (e.target.matches("[data-button-delete]")) {
      const elDelete = e.target.closest(".list-item");
      elDelete.remove();
    }
  });
});
