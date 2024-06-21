let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.getElementById("box").appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = " rgb(229, 239, 255)";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
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
