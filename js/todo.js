document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the value of the input field
    let taskInput = this.querySelector('input[type="text"]');
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create a new list item
      let li = document.createElement("li");
      li.innerHTML = `<div class="todo-item">
                            <span>${taskText}</span>
                            <button class="remove" type="button">Remove</button>
                        </div>`;

      // Append li to the todo list
      document.getElementById("todo-list").appendChild(li);

      // Clear the input field
      taskInput.value = "";
      taskInput.focus();
    }
  });

document
  .getElementById("todo-list")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
      // Remove the parent <li> element
      let li = event.target.closest("li");
      li.remove();
    }
  });
