document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = form.querySelector('input[type="text"]');
  const todoList = document.getElementById("todo-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTaskText = input.value.trim();
    if (newTaskText === "") return;

    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <div class="todo-item">
        <span>${newTaskText}</span>
        <button class="remove" type="button">Remove</button>
      </div>
    `;
    todoList.appendChild(newTask);

    input.value = "";
  });

  todoList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove")) {
      const taskItem = e.target.closest("li");
      taskItem.remove();
    }
  });
});
