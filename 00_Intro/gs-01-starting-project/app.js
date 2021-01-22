const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
    // get the text entered in the input element
    const enteredValue = inputEl.value;
    // Create a list item for each
    const listItemEl = document.createElement("li");
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    // reset input field
    inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);